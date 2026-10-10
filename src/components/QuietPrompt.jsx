import { Link } from 'react-router-dom'

// A slim, low-key line of serif text with one text link. Used where a full
// call-to-action band would be too loud.
export default function QuietPrompt({ lead, detail, to, cta }) {
  return (
    <section className="bg-cream border-y border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <p className="font-serif text-navy text-xl leading-snug max-w-3xl">
          <span className="text-gold" aria-hidden="true">&#9733; </span>
          {lead} {detail && <span className="text-gray-600">{detail}</span>}
        </p>
        <Link to={to} className="shrink-0 text-sm font-bold text-red hover:text-red-dark whitespace-nowrap">
          {cta} &rarr;
        </Link>
      </div>
    </section>
  )
}
