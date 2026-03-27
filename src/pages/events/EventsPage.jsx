import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const upcoming = [
  { month: 'APR', day: '18', title: 'Spring Trivia Night', loc: 'The Coliseum, St. Louis', desc: 'Annual fundraiser trivia night. Teams of 8, prizes, and silent auction. All proceeds support MBS scholarships.', slug: 'trivia', cta: 'Get Tickets' },
  { month: 'MAY', day: '10', title: 'Annual Golf Tournament', loc: 'Old Warson Country Club', desc: 'Four-person scramble format. Includes lunch, prizes, and networking with MBS alumni and supporters.', slug: 'golf', cta: 'Register' },
  { month: 'JUN', day: '13', title: '2026 Boys State Session', loc: 'Lindenwood University, St. Charles', desc: 'The main event. 1,600 delegates convene for a week of leadership, government, and brotherhood.', slug: null, cta: 'Learn More' },
  { month: 'OCT', day: 'TBD', title: 'Alumni Homecoming Weekend', loc: 'Lindenwood University, St. Charles', desc: 'Alumni from all years gather for a weekend of reconnection, tours, and celebration.', slug: null, cta: 'Coming Soon' },
]

const past = [
  { title: 'Fall Golf Classic 2025', date: 'Nov 2025', desc: 'Raised $45,000 for the MBS Memorial Trust.' },
  { title: 'Alumni Homecoming 2025', date: 'Oct 2025', desc: 'Over 300 alumni attended from six decades of Boys State.' },
  { title: 'Spring Trivia Night 2025', date: 'Apr 2025', desc: 'Record attendance with 40 teams competing.' },
]

const keyDates = [
  { label: 'Nominations Open', value: 'January 15' },
  { label: 'Nominations Close', value: 'May 1' },
  { label: '2026 Session', value: 'June 13\u201319', highlight: true },
  { label: 'Boys Nation', value: 'July (TBD)' },
  { label: 'Alumni Homecoming', value: 'October (TBD)' },
]

export default function EventsPage() {
  return (
    <>
      <PageHero
        tag="Events"
        title="Events & Calendar"
        description="Fundraisers, gatherings, and key dates for the Missouri Boys State community."
      />

      {/* Upcoming Events */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Tag>Upcoming Events</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">What&rsquo;s Coming Up</h2>
          <div className="space-y-6">
            {upcoming.map((e, i) => (
              <div key={i} className="flex gap-5 items-start bg-white border border-gray-200 rounded-xl p-6">
                <div className="bg-red text-white rounded-lg px-4 py-3 text-center shrink-0 min-w-[64px]">
                  <span className="block text-[10px] font-bold tracking-wider uppercase opacity-80">{e.month}</span>
                  <span className="block font-serif text-2xl font-bold leading-none">{e.day}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-navy text-lg">{e.title}</h3>
                  <p className="text-sm text-gray-400 mb-1">{e.loc}</p>
                  <p className="text-sm text-gray-500">{e.desc}</p>
                </div>
                <div className="shrink-0 self-center">
                  {e.slug ? (
                    <Link to={`/events/${e.slug}`} className="bg-navy hover:bg-navy-light text-white font-bold text-sm px-5 py-2 rounded-lg transition">
                      {e.cta}
                    </Link>
                  ) : (
                    <span className="text-sm font-bold text-gray-300">{e.cta}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Dates + Past Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Key Dates */}
            <div>
              <Tag>Key Dates</Tag>
              <h2 className="font-serif font-bold text-navy text-2xl mb-6">2026 Calendar</h2>
              <div className="bg-cream border border-gray-200 rounded-xl p-6">
                {keyDates.map((d, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-2.5 text-sm ${
                      d.highlight ? 'bg-gold-bg -mx-3 px-3 py-2.5 rounded-md' : 'border-b border-gray-200 last:border-b-0'
                    }`}
                  >
                    <span className="text-gray-500 font-medium">{d.label}</span>
                    <span className={`font-bold ${d.highlight ? 'text-red' : 'text-navy'}`}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Events */}
            <div>
              <Tag>Past Events</Tag>
              <h2 className="font-serif font-bold text-navy text-2xl mb-6">Recent Events</h2>
              <div className="space-y-4">
                {past.map((p, i) => (
                  <div key={i} className="bg-cream border border-gray-200 rounded-xl p-5">
                    <span className="text-[11px] font-bold text-gold tracking-wide uppercase">{p.date}</span>
                    <h4 className="font-serif font-bold text-navy text-[15px] mt-1">{p.title}</h4>
                    <p className="text-sm text-gray-400">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
