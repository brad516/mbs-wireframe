import { Link } from 'react-router-dom'
import PageHero from '../../../components/PageHero'
import TrustSubNav from '../../../components/TrustSubNav'
import Tag from '../../../components/Tag'
import { funds, lehrSpeakers } from '../../../data/trust'

const lehr = funds.find((f) => f.slug === 'lehr')

// Group the list by decade, newest first.
const decades = lehrSpeakers.reduce((acc, s) => {
  const d = Math.floor(s.year / 10) * 10
  const group = acc.find((g) => g.decade === d)
  if (group) group.speakers.push(s)
  else acc.push({ decade: d, speakers: [s] })
  return acc
}, [])

export default function LehrSpeakersPage() {
  return (
    <>
      <PageHero
        photo="activity.speakers"
        tag="The Memorial Trust"
        title="The George W. Lehr Memorial Speakers Chair"
        description="One nationally known speaker at every session since 1989, paid for by the Trust."
      />
      <TrustSubNav />

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>The Chair</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-5">He sat in the audience first</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            George Lehr came to Missouri Boys State as a citizen in 1954. He went on to become Missouri State Auditor, and for years he came back to speak to the citizens who followed him.
          </p>
          <p className="text-gray-600 leading-relaxed">
            After his death in 1988, his family and friends endowed a speakers chair in his name, as part of the program&rsquo;s 50th anniversary. The fund&rsquo;s earnings pay the fee and expenses of one keynote speaker each year.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Tag>{lehrSpeakers.length} Speakers</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-10">Every Lehr speaker, 1989 to {lehrSpeakers[0].year}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {decades.map((g) => (
              <div key={g.decade}>
                <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold border-b border-gray-200 pb-2 mb-3">{g.decade}s</h3>
                <ul className="space-y-2">
                  {g.speakers.map((s) => (
                    <li key={s.year} className="flex gap-3 text-sm">
                      <span className="font-bold text-red tabular-nums">{s.year}</span>
                      <span className="text-navy">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-8">No session was held in 2020.</p>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Help bring the next one</h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">{lehr.hook}</p>
          <Link to="/give?fund=lehr#donate" className="inline-block bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Give to the Speakers Chair
          </Link>
        </div>
      </section>
    </>
  )
}
