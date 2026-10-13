import { useState } from 'react'
import { Link } from 'react-router-dom'
import EmployerMatchSearch from './EmployerMatchSearch'
import { matchAmount } from '../data/matchEmployers'
import { trust, funds } from '../data/trust'

const amounts = [25, 50, 100, 250, 500]
const money = (n) => `$${n.toLocaleString('en-US')}`

// A working mock of the donation form with the employer match step built in.
// The donor first chooses between this year's citizens (Missouri Boys State)
// and the endowment (the Memorial Trust, a separate organization). Pass a fund
// slug as `defaultFund` to open on the Trust with that fund selected.
// Nothing is charged or sent.
export default function DonationFormDemo({ defaultFund }) {
  const preset = funds.find((f) => f.slug === defaultFund)
  const [toTrust, setToTrust] = useState(Boolean(preset))
  const [fund, setFund] = useState(preset?.slug ?? funds[0].slug)
  const [monthly, setMonthly] = useState(false)
  const [amount, setAmount] = useState(250)
  const [custom, setCustom] = useState('')
  const [employer, setEmployer] = useState(null)
  const [done, setDone] = useState(false)

  const gift = custom !== '' ? Math.max(0, Math.floor(Number(custom)) || 0) : amount
  const added = matchAmount(employer, gift)
  const recipient = toTrust ? trust.name : 'Missouri Boys State'
  const fundName = funds.find((f) => f.slug === fund).name
  const per = monthly ? ' a month' : ''

  if (done) {
    return (
      <div className="border border-gray-200 rounded-xl p-8 bg-cream" role="status">
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold">Demo confirmation</span>
        <h3 className="font-serif font-bold text-navy text-2xl mt-2 mb-3">Thank you. {money(gift)}{per} would be on its way.</h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          {toTrust ? <>It would go to the <strong className="text-navy">{fundName}</strong>, and your receipt would come from {recipient}.</> : <>It would sponsor citizens at the next session, and your receipt would come from {recipient}.</>}
        </p>
        {added > 0 ? (
          <p className="text-gray-600 leading-relaxed mb-6">
            One step left to turn it into <strong className="text-navy">{money(gift + added)}</strong>: submit the match with {employer.name}. In the live version we email you their form and remind you before the deadline.
          </p>
        ) : (
          <p className="text-gray-600 leading-relaxed mb-6">No payment was taken. This form is a prototype.</p>
        )}
        <div className="flex flex-wrap gap-3">
          {added > 0 && (
            <Link to="/give/matching" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-6 py-2.5 rounded-lg transition">
              See the match steps
            </Link>
          )}
          <button type="button" onClick={() => setDone(false)} className="border border-navy/25 hover:border-navy text-navy font-bold text-sm px-6 py-2.5 rounded-lg transition">
            Back to the form
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={(ev) => { ev.preventDefault(); if (gift > 0) setDone(true) }}
      className="border border-gray-200 rounded-xl p-7 sm:p-9 bg-white shadow-sm"
    >
      <fieldset className="mb-6">
        <legend className="block text-sm font-bold text-navy mb-2">Where should your gift go?</legend>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { trust: false, title: 'This year\u2019s citizens', note: 'Missouri Boys State. Spent on the next session.' },
            { trust: true, title: 'The endowment', note: 'The Memorial Trust. Invested for every session after.' },
          ].map((o) => {
            const on = toTrust === o.trust
            return (
              <label key={o.title} className={`block cursor-pointer rounded-lg border p-4 transition ${on ? 'border-navy bg-cream' : 'border-gray-300 hover:border-navy'}`}>
                <input type="radio" name="destination" className="sr-only" checked={on} onChange={() => setToTrust(o.trust)} />
                <span className="block text-sm font-bold text-navy">{o.title}</span>
                <span className="block text-xs text-gray-600 mt-1">{o.note}</span>
              </label>
            )
          })}
        </div>
        {toTrust && (
          <label className="block mt-3">
            <span className="block text-sm font-bold text-navy mb-1.5">Fund</span>
            <select value={fund} onChange={(ev) => setFund(ev.target.value)} className="w-full h-12 bg-white border border-gray-300 rounded-lg px-3 text-navy focus:border-navy focus:outline-none">
              {funds.map((f) => (
                <option key={f.slug} value={f.slug}>{f.name} ({f.short})</option>
              ))}
            </select>
          </label>
        )}
      </fieldset>

      <fieldset className="mb-6">
        <legend className="block text-sm font-bold text-navy mb-2">How often?</legend>
        <div className="grid grid-cols-2 gap-2">
          {[{ m: false, label: 'One time' }, { m: true, label: 'Monthly' }].map((o) => (
            <button
              key={o.label}
              type="button"
              aria-pressed={monthly === o.m}
              onClick={() => setMonthly(o.m)}
              className={`py-3 rounded-lg text-sm font-bold border transition ${monthly === o.m ? 'bg-navy border-navy text-white' : 'border-gray-300 text-navy hover:border-navy'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <legend className="block text-sm font-bold text-navy mb-2">Gift amount</legend>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {amounts.map((a) => {
            const on = custom === '' && amount === a
            return (
              <button
                key={a}
                type="button"
                aria-pressed={on}
                onClick={() => { setAmount(a); setCustom('') }}
                className={`py-3 rounded-lg text-sm font-bold border transition ${on ? 'bg-navy border-navy text-white' : 'border-gray-300 text-navy hover:border-navy'}`}
              >
                {money(a)}
              </button>
            )
          })}
          <input
            type="number"
            min="1"
            inputMode="numeric"
            aria-label="Other amount"
            placeholder="Other"
            value={custom}
            onChange={(ev) => setCustom(ev.target.value)}
            className={`py-3 px-3 rounded-lg text-sm font-bold border text-navy placeholder:text-gray-400 focus:outline-none focus:border-navy ${custom !== '' ? 'border-navy' : 'border-gray-300'}`}
          />
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <label className="block">
          <span className="block text-sm font-bold text-navy mb-1.5">Full name</span>
          <input type="text" autoComplete="name" className="w-full h-12 bg-white border border-gray-300 rounded-lg px-4 text-navy focus:border-navy focus:outline-none" />
        </label>
        <label className="block">
          <span className="block text-sm font-bold text-navy mb-1.5">Email</span>
          <input type="email" autoComplete="email" className="w-full h-12 bg-white border border-gray-300 rounded-lg px-4 text-navy focus:border-navy focus:outline-none" />
        </label>
      </div>

      <div className="mb-6 pt-6 border-t border-gray-200">
        <EmployerMatchSearch compact gift={gift} selected={employer} onSelect={setEmployer} />
        <p className="text-xs text-gray-500 mt-2">Optional. Takes ten seconds and can double your gift.</p>
      </div>

      <button type="submit" disabled={gift <= 0} className="w-full bg-gold hover:bg-gold-light text-white font-bold text-base py-4 rounded-lg transition disabled:opacity-40">
        Give {money(gift)}{per}{added > 0 ? ` · ${money(gift + added)} with match` : ''}
      </button>
      <p className="text-xs text-gray-500 mt-3 text-center">
        Your receipt will come from {recipient}{toTrust ? ', a separate 501(c)(3)' : ', a 501(c)(3)'}. All gifts are tax-deductible.
      </p>
    </form>
  )
}
