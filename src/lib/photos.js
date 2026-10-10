import manifest from '../data/photos.json'

// Photos are assigned to slots in scripts/photos/slots.config.js and synced
// with `npm run photos:sync`. Unknown or empty slots return nothing, and
// MediaPlaceholder falls back to its labelled box.

export function getPhotos(slot) {
  return manifest[slot] ?? []
}

export function getPhoto(slot, index = 0) {
  return getPhotos(slot)[index] ?? null
}
