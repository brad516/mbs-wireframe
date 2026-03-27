import { useParams, Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const speakersByYear = {
  '2025': [
    { name: 'Speaker Name', title: 'Governor of Missouri', topic: 'Leadership in Public Service', img: 'Speaker 1' },
    { name: 'Speaker Name', title: 'U.S. Army General (Ret.)', topic: 'Duty, Honor, and Civic Responsibility', img: 'Speaker 2' },
    { name: 'Speaker Name', title: 'CEO, Missouri-Based Corporation', topic: 'From Boys State to the Boardroom', img: 'Speaker 3' },
    { name: 'Speaker Name', title: 'Missouri Supreme Court Justice', topic: 'The Rule of Law and the Courts', img: 'Speaker 4' },
  ],
  '2024': [
    { name: 'Speaker Name', title: 'U.S. Senator', topic: 'Your Voice in Democracy', img: 'Speaker 1' },
    { name: 'Speaker Name', title: 'Brigadier General, MO National Guard', topic: 'Service Above Self', img: 'Speaker 2' },
    { name: 'Speaker Name', title: 'Entrepreneur & MBS Alumnus', topic: 'Building Something That Matters', img: 'Speaker 3' },
  ],
}

const defaultSpeakers = [
  { name: 'Speaker Name', title: 'Distinguished Guest', topic: 'Topic Title', img: 'Speaker 1' },
  { name: 'Speaker Name', title: 'Distinguished Guest', topic: 'Topic Title', img: 'Speaker 2' },
  { name: 'Speaker Name', title: 'Distinguished Guest', topic: 'Topic Title', img: 'Speaker 3' },
]

export default function SessionSpeakersPage() {
  const { year } = useParams()
  const speakers = speakersByYear[year] || defaultSpeakers

  return (
    <>
      <PageHero
        tag={`Session ${year}`}
        title={`${year} Keynote Speakers`}
        description={`The leaders and voices who inspired delegates during the ${year} Missouri Boys State session.`}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {speakers.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden flex">
                <div className="w-40 shrink-0 bg-gray-100 flex items-center justify-center">
                  <span className="text-sm text-gray-300 font-bold">{s.img}</span>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-serif font-bold text-navy text-lg">{s.name}</h3>
                  <span className="text-xs text-red font-bold">{s.title}</span>
                  <p className="text-sm text-gray-400 mt-2">&ldquo;{s.topic}&rdquo;</p>
                </div>
              </div>
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
