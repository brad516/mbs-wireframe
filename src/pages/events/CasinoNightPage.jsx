import { useState } from 'react'
import { Link } from 'react-router-dom'
import Tag from '../../components/Tag'
import FAQAccordion from '../../components/FAQAccordion'
import { SampleBadge } from '../home/PrestigeSections'
import { casinoNight as event } from '../../data/casinoNight'

const sections = [
  { id: 'event', label: 'The Event' },
  { id: 'venue', label: 'Venue' },
  { id: 'cause', label: 'The Cause' },
  { id: 'gallery', label: 'Past Years' },
  { id: 'sponsor', label: 'Sponsor' },
  { id: 'faq', label: 'FAQ' },
]

function TicketPanel() {
  const [qty, setQty] = useState({ single: 2, pair: 0, chips: 0 })
  const [started, setStarted] = useState(false)
  const total = event.tickets.reduce((sum, t) => sum + t.price * qty[t.id], 0)
  const step = (id, delta) => setQty((q) => ({ ...q, [id]: Math.max(0, Math.min(20, q[id] + delta)) }))

  return (
    <div id="tickets" className="bg-white border border-gray-200 rounded-xl shadow-lg p-7 scroll-mt-36">
      <div className="flex items-center justify-between gap-3 mb-1">
        <h3 className="font-serif font-bold text-navy text-xl">Reserve your seat</h3>
        <SampleBadge />
      </div>
      <p className="text-sm text-gray-600 mb-5">{event.date} · {event.time}</p>
      <ul className="divide-y divide-gray-200 border-y border-gray-200">
        {event.tickets.map((t) => (
          <li key={t.id} className="flex items-center justify-between gap-4 py-4">
            <div>
              <span className="block font-bold text-navy text-sm">{t.name}</span>
              <span className="block text-xs text-gray-600">{t.note}</span>
              <span className="block font-serif font-bold text-navy mt-1">${t.price}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => step(t.id, -1)}
                aria-label={`Remove one ${t.name}`}
                className="w-8 h-8 rounded-full border border-gray-300 text-navy font-bold hover:border-navy transition disabled:opacity-30"
                disabled={qty[t.id] === 0}
              >
                −
              </button>
              <span className="w-6 text-center font-bold text-navy tabular-nums" aria-live="polite">{qty[t.id]}</span>
              <button
                type="button"
                onClick={() => step(t.id, 1)}
                aria-label={`Add one ${t.name}`}
                className="w-8 h-8 rounded-full border border-gray-300 text-navy font-bold hover:border-navy transition"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-baseline justify-between py-5">
        <span className="text-sm font-bold text-navy">Total</span>
        <span className="font-serif font-bold text-navy text-2xl tabular-nums">${total.toLocaleString('en-US')}</span>
      </div>
      <button
        type="button"
        onClick={() => setStarted(true)}
        disabled={total === 0}
        className="w-full bg-red hover:bg-red-dark text-white font-bold text-base py-3.5 rounded-lg transition disabled:opacity-40"
      >
        Continue to checkout
      </button>
      {started && (
        <p role="status" className="mt-4 text-sm text-navy bg-gold-bg rounded-lg px-4 py-3">
          Checkout would open here. This prototype stops before payment.
        </p>
      )}
      <p className="text-xs text-gray-500 mt-4">Proceeds benefit The American Legion Boys State of Missouri, a 501(c)(3).</p>
    </div>
  )
}

export default function CasinoNightPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-dark overflow-hidden">
        <img src={event.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover motion-safe:animate-hero-zoom" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl motion-safe:animate-rise">
            <Link to="/events" className="text-xs font-bold tracking-[0.15em] uppercase text-white/70 hover:text-white transition">
              &larr; All Events
            </Link>
            <p className="text-gold-light text-xs font-bold tracking-[0.2em] uppercase mt-8 mb-4">
              <span aria-hidden="true" className="mr-2">♠ <span className="text-red">♥ ♦</span> ♣</span>
              {event.edition}
            </p>
            <h1 className="font-serif font-bold text-white text-5xl lg:text-7xl leading-[1.05] mb-5">{event.title}</h1>
            <p className="text-white/90 text-xl leading-relaxed mb-8">{event.tagline}</p>
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-4 border-t border-white/20 pt-6 mb-9">
              <div>
                <dt className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60">When</dt>
                <dd className="text-white font-semibold">{event.date}<br />{event.time}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60">Where</dt>
                <dd className="text-white font-semibold">{event.venue}<br />{event.city}</dd>
              </div>
            </dl>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#tickets" className="bg-red hover:bg-red-dark text-white font-bold text-base px-9 py-4 rounded-lg transition text-center">
                Buy Tickets
              </a>
              <a href="#sponsor" className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-bold text-base px-9 py-4 rounded-lg transition text-center">
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* In-page navigation */}
      <nav aria-label="Casino Night sections" className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1 overflow-x-auto">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="shrink-0 text-xs font-bold text-gray-600 hover:text-navy px-3 py-4 transition">
                {s.label}
              </a>
            ))}
          </div>
          <a href="#tickets" className="shrink-0 bg-red hover:bg-red-dark text-white text-xs font-bold px-4 py-2 rounded-lg transition">
            Buy Tickets
          </a>
        </div>
      </nav>

      {/* The event + tickets */}
      <section id="event" className="py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <div>
            <Tag>Place Your Bets</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-8">What Your Ticket Gets You</h2>
            <ul className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-8">
              {event.includes.map((item) => (
                <li key={item.text} className="bg-white p-6 flex items-start gap-4">
                  <span aria-hidden="true" className={`font-serif text-3xl leading-none ${item.red ? 'text-red' : 'text-navy'}`}>{item.suit}</span>
                  <span className="text-navy font-semibold">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">{event.includesNote}</p>
          </div>
          <TicketPanel />
        </div>
      </section>

      {/* Venue */}
      <section id="venue" className="bg-white py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src={event.venueImage} alt="The Henry W. Bloch School of Management at UMKC" loading="lazy" className="rounded-xl shadow-sm ring-1 ring-navy/5 w-full aspect-[3/2] object-cover" />
          <div>
            <Tag>The Venue</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">The Tables Come to the Bloch Atrium</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{event.venueCopy}</p>
            <dl className="border-t border-gray-200 text-sm">
              {[
                ['Location', 'Bloch Executive Hall, the Atrium, UMKC'],
                ['Date & time', `${event.date} · ${event.time}`],
                ['Address', event.address],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-6 py-3.5 border-b border-gray-200">
                  <dt className="w-28 shrink-0 font-bold text-navy">{k}</dt>
                  <dd className="text-gray-600">{v}</dd>
                </div>
              ))}
            </dl>
            <a href={event.directions} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-sm font-bold text-red hover:text-red-dark">
              Get directions &rarr;
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="bg-cream border border-gray-200 rounded-xl p-8 lg:p-10 grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 items-center">
            <div className="flex gap-2" aria-hidden="true">
              <span className="w-10 h-10 rounded-full bg-red" />
              <span className="w-10 h-10 rounded-full bg-white border border-gray-300" />
              <span className="w-10 h-10 rounded-full bg-navy" />
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold">What to wear</span>
              <h3 className="font-serif font-bold text-navy text-xl mt-1 mb-2">{event.dressTitle}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{event.dressCopy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-navy py-24">
        <figure className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-white text-2xl lg:text-3xl leading-relaxed">&ldquo;{event.quote.text}&rdquo;</blockquote>
          <figcaption className="text-gold-light text-sm font-bold tracking-wide mt-8">{event.quote.source}</figcaption>
          <p className="text-white/80 mt-8 max-w-2xl mx-auto">{event.quote.after}</p>
        </figure>
      </section>

      {/* The cause */}
      <section id="cause" className="py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <div>
            <Tag>The Cause</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-5">Where the Money Goes</h2>
            {event.causeCopy.map((p) => (
              <p key={p} className="text-gray-600 leading-relaxed mb-4">{p}</p>
            ))}
            <Link to="/students/what-is-boys-state" className="inline-block mt-2 text-sm font-bold text-red hover:text-red-dark">
              More about Boys State &rarr;
            </Link>
          </div>
          <dl className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-200">
            {event.causeStats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-6 p-6">
                <dd className="font-serif font-bold text-navy text-3xl">{s.number}</dd>
                <dt className="text-sm text-gray-600 text-right">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-white py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>From Past Years</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-3">A Good Night for a Good Cause</h2>
            <p className="text-gray-600">A few shots from earlier casino nights and the crowd that turns out for them.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {event.gallery.map((src, i) => (
              <div key={src} className={`overflow-hidden rounded-xl bg-[#dde3ed] ${i === 0 || i === 5 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <img src={src} alt="Guests at a past MBS Casino Night" loading="lazy" className="w-full h-full aspect-[3/2] object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:hover:scale-[1.04]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor */}
      <section id="sponsor" className="py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <Tag>Sponsor the Night</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">Investing in Democracy, and Having Fun Doing It</h2>
            <p className="text-gray-600 leading-relaxed">{event.sponsorIntro}</p>
          </div>
          <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="bg-navy text-white text-left">
                  <th scope="col" className="font-bold px-5 py-4">Level</th>
                  <th scope="col" className="font-bold px-3 py-4">Donation</th>
                  <th scope="col" className="font-bold px-3 py-4">Tickets</th>
                  {event.sponsorBenefits.map((b) => (
                    <th key={b} scope="col" className="font-semibold text-xs px-3 py-4 text-center leading-tight w-[88px]">{b}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {event.sponsorLevels.map((level) => (
                  <tr key={level.name} className={level.top ? 'bg-gold-bg' : ''}>
                    <th scope="row" className="text-left px-5 py-4 font-serif font-bold text-navy text-base whitespace-nowrap">
                      {level.name}
                      {level.top && <span className="ml-2 align-middle text-[10px] font-sans font-bold tracking-wider uppercase bg-gold text-white px-2 py-0.5 rounded">Top tier</span>}
                    </th>
                    <td className="px-3 py-4 font-bold text-navy">{level.amount}</td>
                    <td className="px-3 py-4 text-gray-600 whitespace-nowrap">{level.tickets} {level.tickets === 1 ? 'ticket' : 'tickets'}</td>
                    {event.sponsorBenefits.map((b, i) => (
                      <td key={b} className="px-3 py-4 text-center">
                        {i < level.benefits ? (
                          <span className="text-red text-lg" role="img" aria-label="Included">♥</span>
                        ) : (
                          <span className="text-gray-300" aria-label="Not included">–</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link to="/give/corporate" className="bg-navy hover:bg-navy-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Become a Sponsor
            </Link>
            <Link to="/contact" className="text-sm font-bold text-red hover:text-red-dark">
              Ask about in-kind sponsorship &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24 scroll-mt-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <Tag>Good to Know</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={event.faqs} />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-red py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-3xl lg:text-4xl mb-3">Come Play a Hand</h2>
          <p className="text-white/90 mb-8">{event.date} · {event.time} · {event.venue}</p>
          <a href="#tickets" className="inline-block bg-white hover:bg-cream text-red font-bold text-base px-9 py-4 rounded-lg transition">
            Buy Tickets
          </a>
        </div>
      </section>
    </>
  )
}
