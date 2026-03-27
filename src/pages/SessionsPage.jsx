import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Tag from '../components/Tag'
import MediaPlaceholder from '../components/MediaPlaceholder'

const sessions = [
  { year: '2025', governor: 'Governor Name', delegates: '1,584', highlight: false },
  { year: '2024', governor: 'Governor Name', delegates: '1,612', highlight: false },
  { year: '2023', governor: 'Governor Name', delegates: '1,575', highlight: false },
  { year: '2022', governor: 'Governor Name', delegates: '1,550', highlight: false },
  { year: '2021', governor: 'Governor Name', delegates: '1,200', highlight: false },
  { year: '2020', governor: 'Cancelled (COVID-19)', delegates: '\u2014', highlight: false },
  { year: '2019', governor: 'Governor Name', delegates: '1,610', highlight: false },
  { year: '2018', governor: 'Governor Name', delegates: '1,598', highlight: false },
]

export default function SessionsPage() {
  return (
    <>
      <PageHero
        tag="Archives"
        title="Session Archives"
        description="A look back at 85+ years of Missouri Boys State sessions, governors, and memories."
      />

      {/* Current / Upcoming Session */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-red text-white rounded-xl p-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-white/60 text-xs font-bold tracking-[0.15em] uppercase">Upcoming</span>
              <h2 className="font-serif font-bold text-3xl mt-2 mb-4">2026 Session</h2>
              <p className="text-white/80 leading-relaxed mb-2">June 13\u201319 at Lindenwood University, St. Charles</p>
              <p className="text-white/80 leading-relaxed mb-6">~1,600 delegates expected</p>
              <Link to="/apply" className="bg-white text-red font-bold text-sm px-7 py-3 rounded-lg hover:bg-cream transition">
                Apply Now
              </Link>
            </div>
            <MediaPlaceholder label="2026 Session Preview Photo" size="landscape" />
          </div>
        </div>
      </section>

      {/* Past Sessions */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Tag>Past Sessions</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Session History</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-navy text-white text-sm font-bold px-6 py-3">
              <span>Year</span>
              <span>Governor</span>
              <span>Delegates</span>
            </div>
            {sessions.map((s, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-200`}>
                <span className="font-bold text-navy">{s.year}</span>
                <span className="text-gray-500">{s.governor}</span>
                <span className="text-gray-500">{s.delegates}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Photos</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Photo Gallery</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <MediaPlaceholder key={n} label={`Gallery Photo ${n}`} size="landscape" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Were you there?</h2>
          <p className="text-white/70 mb-6">Reconnect with your Boys State experience and fellow alumni.</p>
          <Link to="/alumni/join" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Join the Alumni Association
          </Link>
        </div>
      </section>
    </>
  )
}
