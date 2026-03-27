import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const meetings = [
  { date: 'April 12, 2026', location: 'American Legion Post 138, Bolivar', time: '2:00 PM' },
  { date: 'April 19, 2026', location: 'American Legion Post 5, St. Louis', time: '10:00 AM' },
  { date: 'April 26, 2026', location: 'American Legion Post 21, Kansas City', time: '1:00 PM' },
  { date: 'May 3, 2026', location: 'American Legion Post 11, Springfield', time: '2:00 PM' },
  { date: 'May 10, 2026', location: 'American Legion Post 68, Columbia', time: '10:00 AM' },
]

const checklist = [
  'Complete your application and registration',
  'Attend an orientation meeting (strongly recommended)',
  'Review the packing list and check-in instructions',
  'Arrange transportation to Lindenwood University',
  'Submit any medical forms or dietary requirements',
  'Bring a positive attitude and an open mind',
]

export default function OrientationPage() {
  return (
    <>
      <PageHero
        tag="Preparation"
        title="Orientation & Preparation"
        description="Get ready for your Boys State experience. Attend an orientation meeting and prepare for the week ahead."
      />

      {/* Upcoming Meetings */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Tag>Orientation Meetings</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Upcoming Meetings</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-navy text-white text-sm font-bold px-6 py-3">
              <span>Date</span>
              <span>Location</span>
              <span>Time</span>
            </div>
            {meetings.map((m, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-200`}>
                <span className="font-bold text-navy">{m.date}</span>
                <span className="text-gray-500">{m.location}</span>
                <span className="text-gray-500">{m.time}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">Orientation is strongly recommended but not required for attendance.</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>What to Expect</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-6">What Orientation Covers</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {['Overview of the program schedule', 'What to bring and what to leave at home', 'How cities, parties, and elections work', 'Meet fellow citizens from your area', 'Q&A with staff and returning counselors', 'Parent information session'].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="mt-0.5 w-6 h-6 bg-navy/10 rounded-md flex items-center justify-center shrink-0">
                  <span className="text-navy text-xs font-bold">{i + 1}</span>
                </span>
                <span className="text-gray-500 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Session Checklist */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Get Ready</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Pre-Session Checklist</h2>
          <ul className="space-y-3">
            {checklist.map((item, i) => (
              <li key={i} className="flex gap-3 items-center bg-white border border-gray-200 rounded-lg px-5 py-3">
                <span className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center shrink-0" />
                <span className="text-gray-500 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Ready for check-in day?</h2>
          <p className="text-white/70 mb-6">Review the first-day instructions so you know exactly what to expect.</p>
          <Link to="/students/checkin" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Check-In Instructions
          </Link>
        </div>
      </section>
    </>
  )
}
