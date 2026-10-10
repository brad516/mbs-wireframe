import { useId, useState } from 'react'
import { matchEmployers, matchAmount, ratioLabel } from '../data/matchEmployers'

const money = (n) => `$${n.toLocaleString('en-US')}`

// Type-ahead employer lookup for matching gifts. Demo only: it searches a
// small sample list and the "start request" action does nothing real.
export default function EmployerMatchSearch({ gift, selected, onSelect, compact = false }) {
  const inputId = useId()
  const listId = useId()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [requested, setRequested] = useState(false)
  const [internal, setInternal] = useState(null)

  const employer = selected !== undefined ? selected : internal
  const choose = (e) => {
    setInternal(e)
    onSelect?.(e)
    setQuery(e ? e.name : '')
    setOpen(false)
    setRequested(false)
  }

  const term = query.trim().toLowerCase()
  const results = term ? matchEmployers.filter((e) => e.name.toLowerCase().includes(term) || e.city.toLowerCase().includes(term)).slice(0, 6) : []
  const showList = open && term.length > 0 && !(employer && employer.name === query)
  const added = matchAmount(employer, gift)

  const onChange = (ev) => {
    if (employer) {
      setInternal(null)
      onSelect?.(null)
      setRequested(false)
    }
    setQuery(ev.target.value)
    setOpen(true)
    setActive(0)
  }

  const onKeyDown = (ev) => {
    if (!showList) return
    if (ev.key === 'ArrowDown') { ev.preventDefault(); setActive((i) => Math.min(i + 1, results.length - 1)) }
    else if (ev.key === 'ArrowUp') { ev.preventDefault(); setActive((i) => Math.max(i - 1, 0)) }
    else if (ev.key === 'Enter' && results[active]) { ev.preventDefault(); choose(results[active]) }
    else if (ev.key === 'Escape') setOpen(false)
  }

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-bold text-navy mb-1.5">
        {compact ? 'Does your employer match gifts?' : 'Search your employer'}
      </label>
      <div className="relative">
        <input
          id={inputId}
          type="text"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          autoComplete="off"
          placeholder="Start typing a company name, e.g. “Gateway”"
          value={query}
          onChange={onChange}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={onKeyDown}
          className="w-full h-12 bg-white border border-gray-300 rounded-lg px-4 text-navy placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-gold-light/50"
        />
        {showList && (
          <ul id={listId} role="listbox" className="absolute z-20 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
            {results.map((e, i) => (
              <li
                key={e.name}
                role="option"
                aria-selected={i === active}
                onMouseDown={(ev) => { ev.preventDefault(); choose(e) }}
                onMouseEnter={() => setActive(i)}
                className={`flex items-center justify-between gap-4 px-4 py-3 cursor-pointer ${i === active ? 'bg-cream' : ''}`}
              >
                <span>
                  <span className="block font-bold text-navy text-sm">{e.name}</span>
                  <span className="block text-xs text-gray-600">{e.city}, Missouri</span>
                </span>
                <span className="shrink-0 text-xs font-bold text-gold bg-gold-bg px-2 py-1 rounded">Matches {ratioLabel(e.ratio)}</span>
              </li>
            ))}
            {results.length === 0 && (
              <li className="px-4 py-3 text-sm text-gray-600">
                No match found for &ldquo;{query.trim()}&rdquo;. Many employers still match on request: ask your HR team, or <span className="font-bold text-navy">we can check for you</span>.
              </li>
            )}
          </ul>
        )}
      </div>

      {employer && (
        <div className="mt-4 border border-gray-200 rounded-xl overflow-hidden bg-white" aria-live="polite">
          <div className="bg-navy text-white px-5 py-4 flex items-center justify-between gap-4">
            <div>
              <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-gold-light">Match available</span>
              <span className="block font-serif font-bold text-lg leading-snug">{employer.name}</span>
            </div>
            <span className="shrink-0 font-serif font-bold text-2xl text-gold-light">{ratioLabel(employer.ratio)}</span>
          </div>
          {gift > 0 && (
            <div className="px-5 py-4 bg-gold-bg text-navy text-sm">
              {added > 0 ? (
                <>Your <strong>{money(gift)}</strong> gift becomes <strong className="font-serif text-lg">{money(gift + added)}</strong> with {employer.name}&rsquo;s match.</>
              ) : (
                <>{employer.name} matches gifts of {money(employer.min)} or more. Raise your gift to {money(employer.min)} to qualify.</>
              )}
            </div>
          )}
          {!compact && (
            <dl className="grid sm:grid-cols-2 gap-x-8 text-sm px-5 py-2">
              {[
                ['Match range', `${money(employer.min)} to ${money(employer.max)} per year`],
                ['Who is eligible', employer.eligible],
                ['Deadline', employer.deadline],
                ['How to submit', employer.method],
              ].map(([k, v]) => (
                <div key={k} className="py-3 border-b border-gray-200">
                  <dt className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-500">{k}</dt>
                  <dd className="text-navy mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>
          )}
          {!compact && (
            <div className="px-5 py-4 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => setRequested(true)} className="bg-red hover:bg-red-dark text-white font-bold text-sm px-6 py-2.5 rounded-lg transition">
                Start my match request
              </button>
              <button type="button" onClick={() => setRequested(true)} className="text-sm font-bold text-navy hover:text-red transition px-2 py-2">
                Email me the steps
              </button>
              {requested && (
                <p role="status" className="basis-full text-sm text-navy bg-gold-bg rounded-lg px-4 py-3">
                  In the live version this opens {employer.name}&rsquo;s matching gift form with Missouri Boys State already filled in. This demo stops here.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
