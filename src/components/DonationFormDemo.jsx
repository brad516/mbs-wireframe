import { useState } from 'react'
import { Link } from 'react-router-dom'
import EmployerMatchSearch from './EmployerMatchSearch'
import { matchAmount } from '../data/matchEmployers'

const amounts = [25, 50, 100, 250, 500]
const money = (n) => `$${n.toLocaleString('en-US')}`

// A working mock of the donation form with the employer match step built in.
// Nothing is charged or sent.
export default function DonationFormDemo() {
  const [amount, setAmount] = useState(250)
  const [custom, setCustom] = useState('')
  const [employer, setEmployer] = useState(null)
  const [done, setDone] = useState(false)

  const gift = custom !== '' ? Math.max(0, Math.floor(Number(custom)) || 0) : amount
  const added = matchAmount(employer, gift)

  if (done) {
    return (
      <div className="border border-gray-200 rounded-xl p-8 bg-cream" role="status">
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold">Demo confirmation</span>
        <h3 className="font-serif font-bold text-navy text-2xl mt-2 mb-3">Thank you. {money(gift)} would be on its way.</h3>
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
        Give {money(gift)}{added > 0 ? ` · ${money(gift + added)} with match` : ''}
      </button>
      <p className="text-xs text-gray-500 mt-3 text-center">Missouri Boys State is a 501(c)(3). All gifts are tax-deductible.</p>
    </form>
  )
}
