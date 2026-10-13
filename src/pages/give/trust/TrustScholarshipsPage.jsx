import { Link } from 'react-router-dom'
import PageHero from '../../../components/PageHero'
import TrustSubNav from '../../../components/TrustSubNav'
import Tag from '../../../components/Tag'
import { scholarships } from '../../../data/trust'

export default function TrustScholarshipsPage() {
  return (
    <>
      <PageHero
        tag="The Memorial Trust"
        title="Scholarships the Trust Pays For"
        description="College money for the Citizen of the Week and for the volunteers who run the session."
      />
      <TrustSubNav />

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {scholarships.map((s) => (
            <article key={s.title} className="bg-white border border-gray-200 rounded-xl p-8 lg:p-10 grid md:grid-cols-[1fr_auto] gap-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold">{s.who}</span>
                <h2 className="font-serif font-bold text-navy text-2xl mt-2 mb-3">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">{s.desc}</p>
                {s.namedFor && <p className="text-sm text-gray-500 leading-relaxed">Named for {s.namedFor}</p>}
              </div>
              <p className="font-serif font-bold text-red text-xl md:text-right">{s.amount}</p>
            </article>
          ))}
          <p className="text-sm text-gray-500">
            These are two of the scholarships a citizen can earn. The full list, including college credit, is on the <Link to="/students/college-credit" className="font-bold text-navy hover:text-red">College Credit &amp; Scholarships</Link> page.
          </p>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Help the next Citizen of the Week pay for college</h2>
          <p className="text-white/70 mb-6">Gifts to the Scholarship Fund are invested, and the earnings pay these awards.</p>
          <Link to="/give?fund=scholarships#donate" className="inline-block bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Give to the Scholarship Fund
          </Link>
        </div>
      </section>
    </>
  )
}
