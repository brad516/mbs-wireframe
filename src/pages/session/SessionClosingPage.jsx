import { useParams, Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import MediaPlaceholder from '../../components/MediaPlaceholder'
import Tag from '../../components/Tag'

export default function SessionClosingPage() {
  const { year } = useParams()

  return (
    <>
      <PageHero
        tag={`Session ${year}`}
        title={`${year} Closing Ceremony`}
        description={`Highlights from the closing ceremony of the ${year} Missouri Boys State session.`}
      />

      {/* Ceremony Recap */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>Ceremony</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">A Week Celebrated</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                The {year} closing ceremony brought together all delegates, staff, and families to celebrate a week of leadership, civic engagement, and brotherhood. Awards were presented, Boys Nation senators were announced, and the governor delivered his farewell address.
              </p>
              <p className="text-gray-500 leading-relaxed">
                The ceremony marks the end of one of the most transformative weeks in the lives of {year}&rsquo;s delegates &mdash; and the beginning of their journey as Missouri Boys State alumni.
              </p>
            </div>
            <MediaPlaceholder label={`${year} Closing Ceremony Photo`} size="tall" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Tag>Highlights</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Ceremony Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Boys Nation Selection', desc: 'Two outstanding delegates were selected to represent Missouri at Boys Nation in Washington, D.C.' },
              { title: 'Governor\u2019s Address', desc: 'The elected governor delivered a farewell address reflecting on the week\u2019s achievements and the bonds formed.' },
              { title: 'Awards & Recognition', desc: 'Outstanding delegates, cities, and programs were recognized for their exceptional contributions during the session.' },
            ].map((h, i) => (
              <div key={i} className="bg-cream border border-gray-200 rounded-xl p-7">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{h.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <Tag>Photos</Tag>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <MediaPlaceholder key={n} label={`Closing Ceremony Photo ${n}`} size="landscape" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream border-t border-gray-200 text-center">
        <Link to={`/session/${year}`} className="text-sm font-bold text-navy hover:text-red transition">&larr; Back to {year} Session</Link>
      </section>
    </>
  )
}
