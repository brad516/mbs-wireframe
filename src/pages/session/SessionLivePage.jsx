import { useEffect, useRef } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'
import { SampleBadge } from '../home/PrestigeSections'
import { getPhotos } from '../../lib/photos'
import { session2026 as session } from '../../data/session2026'

// The live session hub: one page per day of the week, written for families
// following from home. Add ?live=wednesday to the URL to preview how the page
// looks mid-week, with later days still locked.
export default function SessionLivePage() {
  const { day: dayParam } = useParams()
  const [searchParams] = useSearchParams()
  const { days } = session

  const liveKey = searchParams.get('live')
  const liveIndex = days.findIndex((d) => d.key === liveKey)
  const isLive = liveIndex >= 0
  const query = isLive ? `?live=${liveKey}` : ''

  const requested = days.findIndex((d) => d.key === dayParam)
  const fallback = isLive ? liveIndex : 0
  const index = requested >= 0 && (!isLive || requested <= liveIndex) ? requested : fallback
  const day = days[index]
  const photos = getPhotos(`live.${session.year}.${day.key}`)
  const dayLink = (d) => `/session/${session.year}/day/${d.key}${query}`
  const unlocked = (i) => !isLive || i <= liveIndex

  // Keep the selected day in view in the day rail on small screens.
  const activeRef = useRef(null)
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [day.key])

  const electionReady = (e) => unlocked(days.findIndex((d) => d.key === e.day))
  const prev = days[index - 1]
  const next = days[index + 1] && unlocked(index + 1) ? days[index + 1] : null

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-dark overflow-hidden min-h-[70vh] flex items-end">
        {photos[0] && (
          <img
            key={photos[0].src}
            src={photos[0].src}
            srcSet={photos[0].srcSet}
            sizes="100vw"
            alt={photos[0].alt}
            className="absolute inset-0 w-full h-full object-cover object-[center_25%] motion-safe:animate-hero-zoom"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/20" />
        <div key={day.key} className="relative max-w-7xl mx-auto px-6 pt-40 pb-14 w-full motion-safe:animate-rise">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {isLive ? (
              <span className="inline-flex items-center gap-2 bg-red text-white text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-white opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-white" />
                </span>
                {index === liveIndex ? 'Live now' : 'Earlier this week'}
              </span>
            ) : (
              <span className="inline-block border border-white/40 text-white/90 text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                Session adjourned
              </span>
            )}
            <span className="text-gold-light text-xs font-bold tracking-[0.2em] uppercase">
              {session.ordinal} Session &middot; Day {index + 1} of {days.length}
            </span>
          </div>
          <h1 className="font-serif font-bold text-white text-5xl lg:text-7xl leading-[1.05] mb-3">
            {day.weekday}, {day.date}
          </h1>
          <p className="font-serif italic text-gold-light text-2xl mb-5">{day.theme}</p>
          <p className="text-white/90 text-lg leading-relaxed max-w-3xl">{day.summary}</p>
        </div>
      </section>

      {/* Day rail */}
      <nav aria-label="Days of the session" className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <ol className="flex lg:grid lg:grid-cols-8 gap-1 overflow-x-auto py-3 -mx-1 px-1">
            {days.map((d, i) => {
              const active = i === index
              const thumb = getPhotos(`live.${session.year}.${d.key}`)[0]
              const inner = (
                <>
                  <span className={`relative shrink-0 w-11 h-11 rounded-lg overflow-hidden bg-[#dde3ed] ${active ? 'ring-2 ring-red ring-offset-2' : ''}`}>
                    {thumb && <img src={thumb.srcSet.split(' ')[0]} alt="" loading="lazy" className={`w-full h-full object-cover ${unlocked(i) ? '' : 'grayscale opacity-40'}`} />}
                  </span>
                  <span className="text-left leading-tight min-w-0">
                    <span className={`block text-[11px] font-bold tracking-[0.12em] uppercase ${active ? 'text-red' : 'text-gray-500'}`}>{d.short} &middot; {d.date.replace('June ', '')}</span>
                    <span className={`block text-sm font-bold whitespace-nowrap lg:whitespace-normal lg:text-xs lg:leading-tight lg:line-clamp-2 ${active ? 'text-navy' : 'text-gray-600'}`}>{unlocked(i) ? d.theme : 'Coming up'}</span>
                  </span>
                </>
              )
              return (
                <li key={d.key} className="shrink-0 lg:min-w-0">
                  {unlocked(i) ? (
                    <Link
                      to={dayLink(d)}
                      ref={active ? activeRef : null}
                      aria-current={active ? 'page' : undefined}
                      title={d.theme}
                      className={`flex items-center gap-3 pl-1.5 pr-4 lg:pr-2 py-1.5 rounded-xl transition ${active ? 'bg-cream' : 'hover:bg-cream'}`}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-3 pl-1.5 pr-4 lg:pr-2 py-1.5 rounded-xl opacity-60 cursor-not-allowed">{inner}</span>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>

      {/* Stories + sidebar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_22rem] gap-14 items-start">
          <div>
            <Tag>Today at Boys State</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-10">The Day&rsquo;s Stories</h2>
            <div className="space-y-14">
              {day.stories.map((story, i) => (
                <article key={story.title} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <MediaPlaceholder label={`${story.title} photo`} size="landscape" photo={photos[i + 1]} sizes="(min-width: 768px) 40vw, 100vw" />
                  <div>
                    <span className="inline-block bg-gold-bg text-gold text-[11px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded">{story.tag}</span>
                    <h3 className="font-serif font-bold text-navy text-2xl mt-3 mb-3">{story.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{story.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-40">
            {day.speaker && (
              <div className="bg-navy text-white rounded-xl p-7">
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold-light">Today&rsquo;s speaker</span>
                <h3 className="font-serif font-bold text-xl mt-2 leading-snug">{day.speaker.name}</h3>
                <p className="text-sm text-white/70 mt-1">{day.speaker.role}</p>
                <p className="text-sm text-white/90 leading-relaxed mt-4 pt-4 border-t border-white/15">{day.speaker.note}</p>
                <Link to={`/session/${session.year}/speakers`} className="inline-block mt-4 text-sm font-bold text-gold-light hover:text-white transition">
                  All {session.year} speakers &rarr;
                </Link>
              </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl p-7">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="font-serif font-bold text-navy text-lg">Day at a glance</h3>
                <SampleBadge />
              </div>
              <ol className="relative border-l border-gray-200 ml-1.5 space-y-4">
                {day.schedule.map(([time, label]) => (
                  <li key={label} className="pl-5 relative">
                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold" />
                    <span className="block text-[11px] font-bold tracking-wide text-gray-500 tabular-nums">{time}</span>
                    <span className="block text-sm font-semibold text-navy">{label}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-cream border border-gray-200 rounded-xl p-7">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="font-serif font-bold text-navy text-lg">For families</h3>
                <SampleBadge />
              </div>
              <dl className="space-y-4">
                {session.family.map((f) => (
                  <div key={f.title}>
                    <dt className="text-sm font-bold text-navy">{f.title}</dt>
                    <dd className="text-sm text-gray-600 leading-relaxed">{f.body}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/parents" className="inline-block mt-5 text-sm font-bold text-red hover:text-red-dark">
                Parent &amp; guardian guide &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Photos */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <Tag light>Photos</Tag>
              <h2 className="font-serif font-bold text-white text-3xl lg:text-4xl">{day.weekday} in Pictures</h2>
            </div>
            <a href={session.photosUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gold-light hover:text-white transition">
              Browse and download every photo &rarr;
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {photos.map((p, i) => (
              <div key={p.src} className={`overflow-hidden rounded-xl bg-navy-light ${i === 0 ? 'col-span-2 lg:row-span-2' : ''}`}>
                <img src={p.src} srcSet={p.srcSet} sizes="(min-width: 1024px) 33vw, 50vw" alt={p.alt} loading="lazy" className="w-full h-full aspect-[3/2] object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:hover:scale-[1.04]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elections */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <Tag>Election Tracker</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-3">A State Built in Three Elections</h2>
            <p className="text-gray-600 leading-relaxed">Results are posted here as each level of government is elected through the week.</p>
          </div>
          <ol className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-10">
            {session.elections.map((e) => {
              const ready = electionReady(e)
              return (
                <li key={e.key} className="bg-cream p-7">
                  <span className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase ${ready ? 'text-navy' : 'text-gray-500'}`}>
                    <span className={`w-2 h-2 rounded-full ${ready ? 'bg-red' : 'bg-gray-300'}`} />
                    {ready ? 'Results in' : `Results ${e.when}`}
                  </span>
                  <h3 className="font-serif font-bold text-navy text-xl mt-3 mb-2">{e.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{e.detail}</p>
                  {ready ? (
                    <Link to={`/session/${session.year}/election-results`} className="text-sm font-bold text-red hover:text-red-dark">
                      See results &rarr;
                    </Link>
                  ) : (
                    <span className="text-sm font-bold text-gray-500">Check back {e.when}</span>
                  )}
                </li>
              )
            })}
          </ol>
          {electionReady(session.elections[2]) && (
            <div>
              <h3 className="font-serif font-bold text-navy text-xl mb-4">State Officers of the {session.ordinal} Session</h3>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {session.stateOfficers.map((o, i) => (
                  <li key={o.office} className={`rounded-xl p-6 border ${i === 0 ? 'bg-navy border-navy text-white' : 'bg-white border-gray-200'}`}>
                    <span className={`text-[11px] font-bold tracking-[0.15em] uppercase ${i === 0 ? 'text-gold-light' : 'text-gold'}`}>{o.office}</span>
                    <span className={`block font-serif font-bold text-lg mt-1 ${i === 0 ? 'text-white' : 'text-navy'}`}>{o.name}</span>
                    <span className={`block text-sm ${i === 0 ? 'text-white/70' : 'text-gray-600'}`}>{o.city}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Media */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Tag>MBS Media</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">Reported by the Citizens Themselves</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              KMBS-TV, KMBS Radio and the MBS Record newspaper cover the model state every day, with planning meetings, interviews and even advertising.
            </p>
            <ul className="divide-y divide-gray-200 border-y border-gray-200">
              {[
                ['MBS Record', `${day.weekday} edition of the citizen newspaper`, 'Read'],
                ['KMBS-TV', 'The evening newscast', 'Watch'],
                ['KMBS Radio', 'Interviews and the daily podcast', 'Listen'],
              ].map(([name, desc, cta]) => (
                <li key={name} className="flex items-center justify-between gap-6 py-4">
                  <div>
                    <span className="block font-serif font-bold text-navy">{name}</span>
                    <span className="block text-sm text-gray-600">{desc}</span>
                  </div>
                  <span className="shrink-0 border border-navy/20 text-navy text-xs font-bold px-4 py-2 rounded-lg">{cta}</span>
                </li>
              ))}
            </ul>
          </div>
          <MediaPlaceholder label={`KMBS-TV · ${day.weekday} newscast`} size="tall" showPlay />
        </div>
      </section>

      {/* Previous / next */}
      <section className="bg-cream border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          {prev ? (
            <Link to={dayLink(prev)} className="group text-left">
              <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-gray-500">&larr; Previous day</span>
              <span className="block font-serif font-bold text-navy text-lg group-hover:text-red transition">{prev.weekday}: {prev.theme}</span>
            </Link>
          ) : <Link to="/sessions" className="text-sm font-bold text-navy hover:text-red transition">&larr; All sessions</Link>}
          {next ? (
            <Link to={dayLink(next)} className="group text-right">
              <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-gray-500">Next day &rarr;</span>
              <span className="block font-serif font-bold text-navy text-lg group-hover:text-red transition">{next.weekday}: {next.theme}</span>
            </Link>
          ) : (
            <span className="text-sm font-bold text-gray-500 text-right">{isLive ? 'More tomorrow' : 'End of the session'}</span>
          )}
        </div>
      </section>
    </>
  )
}
