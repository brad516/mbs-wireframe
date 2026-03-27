import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const subPages = [
  { to: '/students/what-is-boys-state', title: 'What Is Boys State?', desc: 'A deep dive into the program, how it works, and what makes it unlike anything else.', color: 'border-t-red' },
  { to: '/students/week-in-the-life', title: 'A Week in the Life', desc: 'Day-by-day breakdown of what you\u2019ll experience from Sunday check-in to Saturday departure.', color: 'border-t-navy' },
  { to: '/students/boys-nation', title: 'Boys Nation', desc: 'The top two delegates represent Missouri in Washington, D.C. Learn how selection works.', color: 'border-t-gold' },
  { to: '/students/college-credit', title: 'College Credit & Scholarships', desc: 'Earn college credit and strengthen your application. See available scholarship opportunities.', color: 'border-t-[#2b82c9]' },
  { to: '/students/testimonials', title: 'Student Voices', desc: 'Hear from recent delegates about the week that changed everything.', color: 'border-t-[#1aaa7a]' },
  { to: '/students/orientation', title: 'Orientation & Preparation', desc: 'Pre-session meetings, what to expect, and how to prepare for your week.', color: 'border-t-red' },
]

const stats = [
  { number: '85+', label: 'Years of Leadership' },
  { number: '1,600', label: 'Delegates Each Summer' },
  { number: '50,000+', label: 'Alumni Nationwide' },
  { number: '2', label: 'Boys Nation Senators Annually' },
]

export default function StudentsPage() {
  return (
    <>
      <PageHero
        tag="For Students"
        title="Your Boys State Journey Starts Here"
        description="Everything you need to know about Missouri Boys State \u2014 from what it is, to what you\u2019ll do, to how it\u2019ll change your life."
      />

      {/* Sub-page Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subPages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className={`bg-white border border-gray-200 ${p.color} border-t-4 rounded-xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all`}
              >
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                <span className="inline-block mt-4 text-sm font-bold text-navy">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-gray-200 py-9">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-8 sm:gap-12">
                <div className="text-center">
                  <span className="block font-serif text-4xl font-bold text-navy leading-none">{s.number}</span>
                  <span className="block text-[13px] font-medium text-gray-400 mt-1.5">{s.label}</span>
                </div>
                {i < stats.length - 1 && <div className="hidden sm:block w-px h-10 bg-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Tag>Ready?</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-4">Take the First Step</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Applications for the 2026 session are open now. Don&rsquo;t miss your chance to be part of something unforgettable.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Apply Now
            </Link>
            <Link to="/students/checkin" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Check-In Instructions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
