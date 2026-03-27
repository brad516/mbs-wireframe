import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const days = [
  { day: 'Sunday', title: 'Arrival & City Formation', desc: 'Check in at Lindenwood University, meet your city-mates, elect initial city officers, and attend the opening ceremony.' },
  { day: 'Monday', title: 'Party Conventions & Campaigns', desc: 'Join a political party, attend conventions, file for office, and begin building your campaign. First speeches and debates.' },
  { day: 'Tuesday', title: 'Primary Elections & Legislature', desc: 'Primary elections narrow the field. The legislature convenes for the first time. Bills are introduced and committee work begins.' },
  { day: 'Wednesday', title: 'General Elections & Court', desc: 'General elections determine all offices from city council to governor. The Supreme Court hears its first cases.' },
  { day: 'Thursday', title: 'Inauguration & Governance', desc: 'The governor is inaugurated. The legislature passes bills, the court issues rulings, and the executive signs or vetoes legislation.' },
  { day: 'Friday', title: 'Boys Nation Selection & Awards', desc: 'Two delegates are selected to represent Missouri at Boys Nation in Washington, D.C. Awards ceremony celebrates outstanding delegates.' },
  { day: 'Saturday', title: 'Departure', desc: 'Say goodbye to your city-mates and new friends. Head home changed \u2014 with memories, skills, and connections that last a lifetime.' },
]

const activities = [
  { title: 'Campaign & Elections', desc: 'Run for office, give speeches, debate opponents, and earn every vote.' },
  { title: 'Legislature & Law', desc: 'Draft bills, argue in committee, and pass legislation through both chambers.' },
  { title: 'Athletics & Competition', desc: 'City-vs-city competitions in basketball, football, softball, and more.' },
  { title: 'Talent Show', desc: 'Every city puts on a performance. The talent show is a highlight of the week.' },
  { title: 'Keynote Speakers', desc: 'Hear from governors, generals, CEOs, and civic leaders who challenge you to lead.' },
  { title: 'City Life & Brotherhood', desc: 'Build your city from scratch. Bond over shared challenges and late-night conversations.' },
]

export default function WeekInTheLifePage() {
  return (
    <>
      <PageHero
        tag="The Experience"
        title="A Week in the Life"
        description="Seven days. One state. A lifetime of impact. Here's what your week at Boys State looks like."
      />

      {/* Day-by-Day */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Day by Day</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Your Week at a Glance</h2>
          </div>
          <div className="space-y-6">
            {days.map((d, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="bg-navy text-white rounded-lg px-3 py-2 text-center shrink-0 min-w-[80px]">
                  <span className="block text-[10px] font-bold tracking-wider uppercase opacity-80">Day {i + 1}</span>
                  <span className="block font-serif text-sm font-bold leading-tight">{d.day}</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-serif font-bold text-navy text-base mb-1">{d.title}</h3>
                  <p className="text-sm text-gray-400">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Activities</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">What You&rsquo;ll Do</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <div key={i} className="bg-cream border border-gray-200 rounded-xl overflow-hidden">
                <MediaPlaceholder label={`${a.title} Photo`} size="landscape" />
                <div className="p-5">
                  <h3 className="font-serif font-bold text-navy text-base mb-1">{a.title}</h3>
                  <p className="text-sm text-gray-400">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Ready to experience it?</h2>
          <p className="text-white/70 mb-6">Applications for the 2026 session are open. Your week starts with one step.</p>
          <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}
