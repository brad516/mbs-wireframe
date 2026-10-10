// Pulls photos from photos.moboysstate.org into public/photos and writes
// src/data/photos.json, which maps each slot in slots.config.js to its images.
//
//   npm run photos:sync                      sync every slot
//   npm run photos:sync -- --slot week.      only slots whose key starts with "week."
//   npm run photos:sync -- --year 2025       only slots for one year
//   npm run photos:sync -- --dry-run         show what would be picked, download nothing
//   npm run photos:sync -- --list --year 2026 --day Thursday --tag Speakers
//                                            print photo names for a query (for pinning)
//   npm run photos:sync -- --prune           also delete files no slot uses any more

import { mkdir, readFile, writeFile, readdir, rm, access } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import config from './slots.config.js'

const API = 'https://photos.moboysstate.org/api/photo'
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const OUT_DIR = path.join(ROOT, 'public/photos')
const MANIFEST = path.join(ROOT, 'src/data/photos.json')
const WIDTHS = [640, 1280]
const PAGE_SIZE = 100
const MAX_SCAN = 6000
const DELAY_MS = 250

const args = parseArgs(process.argv.slice(2))
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function parseArgs(argv) {
  const out = { days: [], tags: [] }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--dry-run') out.dryRun = true
    else if (a === '--list') out.list = true
    else if (a === '--prune') out.prune = true
    else if (a === '--slot') out.slot = argv[++i]
    else if (a === '--year') out.year = Number(argv[++i])
    else if (a === '--day') out.days.push(argv[++i])
    else if (a === '--tag') out.tags.push(argv[++i])
    else if (a === '--limit') out.limit = Number(argv[++i])
    else throw new Error(`Unknown argument: ${a}`)
  }
  return out
}

async function queryPage({ year, days = [], tags = [], search = '' }, page, limit) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ year, page, limit, days, tags, search }),
        signal: AbortSignal.timeout(120_000),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      if (!Array.isArray(data)) throw new Error(`unexpected response: ${JSON.stringify(data).slice(0, 200)}`)
      await sleep(DELAY_MS)
      return data
    } catch (err) {
      if (attempt >= 3) throw new Error(`Photo query failed (${year}, page ${page}): ${err.message}`)
      await sleep(1000 * attempt)
    }
  }
}

// Fetches up to `max` photos matching the query, or until `done(photos)` is
// true. Pages are cached per query so slots that share one scan it only once.
const scans = new Map()
async function fetchPhotos(query, max, done) {
  const { year, days = [], tags = [], search = '' } = query
  const key = JSON.stringify([year, days, tags, search])
  if (!scans.has(key)) scans.set(key, { photos: [], page: 0, exhausted: false })
  const scan = scans.get(key)
  while (!scan.exhausted && scan.photos.length < max && !done?.(scan.photos)) {
    const batch = await queryPage(query, scan.page++, PAGE_SIZE)
    scan.photos.push(...batch)
    if (batch.length < PAGE_SIZE) scan.exhausted = true
  }
  return scan.photos.slice(0, max)
}

// The API returns bursts of near-identical frames in sequence, so take evenly
// spaced photos from a larger pool instead of the first N.
function spread(pool, count) {
  if (pool.length <= count) return pool
  const step = pool.length / count
  return Array.from({ length: count }, (_, i) => pool[Math.floor(i * step + step / 2)])
}

async function pickPhotos(slot) {
  if (slot.parts) {
    // A slot built from several queries, e.g. one photo per day for a gallery.
    const { parts, ...shared } = slot
    const seen = new Map()
    for (const part of parts) {
      for (const p of await pickPhotos({ ...shared, ...part })) seen.set(p.Name, p)
    }
    return [...seen.values()]
  }
  const query = { year: slot.year, days: slot.days, tags: slot.tags, search: slot.search }
  if (slot.names?.length) {
    const wanted = new Set(slot.names)
    const found = await fetchPhotos(query, Infinity, (all) =>
      slot.names.every((n) => all.some((p) => p.Name === n)),
    )
    const byName = new Map(found.filter((p) => wanted.has(p.Name)).map((p) => [p.Name, p]))
    const missing = slot.names.filter((n) => !byName.has(n))
    if (missing.length) console.warn(`  ! not found: ${missing.join(', ')}`)
    return slot.names.map((n) => byName.get(n)).filter(Boolean)
  }
  const count = slot.count ?? 1
  const poolSize = slot.pool ?? Math.max(count * 10, 40)
  if (slot.match) {
    // File names carry the event ("2026MBS_ThursdayInauguration-12.jpg"), which
    // is more precise than the day/tag filters, so filter on it here.
    const needle = slot.match.toLowerCase()
    const matches = (all) => all.filter((p) => p.Name.toLowerCase().includes(needle))
    const scanned = await fetchPhotos(query, MAX_SCAN, (all) => matches(all).length >= poolSize)
    return spread(matches(scanned).slice(0, poolSize), count)
  }
  return spread(await fetchPhotos(query, poolSize), count)
}

const slugify = (name) =>
  name
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()

const exists = (file) => access(file).then(() => true, () => false)

async function download(url) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(60_000) })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return Buffer.from(await res.arrayBuffer())
    } catch (err) {
      if (attempt >= 4) throw new Error(`Download failed: ${err.message}`)
      await sleep(1000 * attempt)
    }
  }
}

// Writes the resized copies of one photo (if not already on disk) and returns
// its manifest entry.
async function materialize(photo, { year, alt, widths = WIDTHS }) {
  const dir = path.join(OUT_DIR, String(year))
  const slug = slugify(photo.Name)
  const files = widths.map((w) => ({ w, file: path.join(dir, `${slug}-${w}.webp`), url: `/photos/${year}/${slug}-${w}.webp` }))
  const present = await Promise.all(files.map((f) => exists(f.file)))

  if (!present.every(Boolean)) {
    await mkdir(dir, { recursive: true })
    // MedUrl is only 600px wide, so resize from the original.
    const original = await download(photo.FullUrl)
    for (const f of files) {
      await sharp(original).rotate().resize({ width: f.w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(f.file)
    }
    await sleep(DELAY_MS)
    console.log(`  + ${photo.Name}`)
  }

  const largest = await sharp(files.at(-1).file).metadata()
  return {
    name: photo.Name,
    src: files.at(-1).url,
    srcSet: files.map((f) => `${f.url} ${f.w}w`).join(', '),
    width: largest.width,
    height: largest.height,
    alt,
  }
}

async function readManifest() {
  try {
    return JSON.parse(await readFile(MANIFEST, 'utf8'))
  } catch {
    return {}
  }
}

async function writeManifest(manifest) {
  const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]))
  await mkdir(path.dirname(MANIFEST), { recursive: true })
  await writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + '\n')
}

async function prune(manifest) {
  const used = new Set(
    Object.values(manifest).flatMap((photos) => photos.flatMap((p) => p.srcSet.split(', ').map((s) => s.split(' ')[0]))),
  )
  for (const year of await readdir(OUT_DIR).catch(() => [])) {
    const dir = path.join(OUT_DIR, year)
    for (const file of await readdir(dir).catch(() => [])) {
      if (!used.has(`/photos/${year}/${file}`)) {
        await rm(path.join(dir, file))
        console.log(`  - ${year}/${file}`)
      }
    }
  }
}

async function list() {
  if (!args.year) throw new Error('--list needs --year')
  const photos = await fetchPhotos({ year: args.year, days: args.days, tags: args.tags }, args.limit ?? 200)
  for (const p of photos) console.log(p.Name)
  console.error(`${photos.length} photos`)
}

async function sync() {
  const entries = Object.entries(config).filter(
    ([key, slot]) => (!args.slot || key.startsWith(args.slot)) && (!args.year || slot.year === args.year),
  )
  if (!entries.length) throw new Error('No slots match')

  // Start from the existing manifest so a partial sync leaves other slots alone.
  const manifest = await readManifest()
  for (const key of Object.keys(manifest)) if (!(key in config)) delete manifest[key]

  let failed = 0
  for (const [key, slot] of entries) {
    console.log(key)
    try {
      const picks = await pickPhotos(slot)
      if (!picks.length) console.warn('  ! no photos match this query')
      if (args.dryRun) {
        for (const p of picks) console.log(`  ${p.Name}`)
        continue
      }
      const photos = []
      for (const p of picks) photos.push(await materialize(p, slot))
      manifest[key] = photos
      // Save as we go so an interrupted run keeps its progress.
      await writeManifest(manifest)
    } catch (err) {
      failed++
      console.error(`  ! ${err.message}`)
    }
  }
  if (args.dryRun) return

  await writeManifest(manifest)
  if (args.prune) await prune(manifest)
  console.log(`Wrote ${path.relative(ROOT, MANIFEST)} (${Object.keys(manifest).length} slots)`)
  if (failed) process.exitCode = 1
}

await (args.list ? list() : sync())
