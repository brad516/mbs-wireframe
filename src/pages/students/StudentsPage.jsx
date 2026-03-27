import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import FAQAccordion from '../../components/FAQAccordion'

const subPages = [
  { to: '/students/what-is-boys-state', title: 'What Is Boys State?', desc: 'A deep dive into the program, how it works, and what makes it unlike anything else.', color: 'border-t-red' },
  { to: '/students/week-in-the-life', title: 'A Week in the Life', desc: 'Day-by-day breakdown of what you\u2019ll experience from Saturday arrival to Friday closing.', color: 'border-t-navy' },
  { to: '/students/boys-nation', title: 'Boys Nation', desc: 'The top two citizens represent Missouri in Washington, D.C. Learn how selection works.', color: 'border-t-gold' },
  { to: '/students/college-credit', title: 'College Credit & Scholarships', desc: 'Earn college credit through Lindenwood and access over $2M in scholarship opportunities.', color: 'border-t-[#2b82c9]' },
  { to: '/students/testimonials', title: 'Student Voices', desc: 'Hear from recent citizens about the week that changed everything.', color: 'border-t-[#1aaa7a]' },
  { to: '/students/orientation', title: 'Orientation & Preparation', desc: 'Pre-session meetings, what to expect, and how to prepare for your week.', color: 'border-t-red' },
]

const stats = [
  { number: '$0', label: 'Cost to You & Your Family' },
  { number: '850', label: 'Citizens Each Summer' },
  { number: '100+', label: 'Positions You Can Hold' },
  { number: '2', label: 'Boys Nation Senators Annually' },
]

const schoolHighlights = [
  { name: 'Law', desc: 'Pass the Bar Exam. Try cases. Become a judge.', icon: '\u2696\uFE0F' },
  { name: 'Journalism & Media', desc: 'Run the newspaper, radio, or TV news show.', icon: '\u{1F4F0}' },
  { name: 'Commerce', desc: 'Launch a business. Hire employees. Compete for Outstanding Business.', icon: '\u{1F4B0}' },
  { name: 'Law Enforcement', desc: 'Apply for the MBS Highway Patrol — the most elite unit at Boys State.', icon: '\u{1F6A8}' },
  { name: 'Legislative & Executive Policy', desc: 'Draft bills, debate legislation, and run the Governor\u2019s office.', icon: '\u{1F3DB}\uFE0F' },
  { name: 'Campaigning', desc: 'Run campaigns, build coalitions, and win elections.', icon: '\u{1F4E3}' },
]

const faqItems = [
  { question: 'What is Missouri Boys State?', answer: 'An 8-day immersive leadership and civic education program for rising high school seniors. You and ~850 other citizens build a functioning state government from scratch — complete with elections, legislature, courts, media, and businesses.' },
  { question: 'How much does it cost?', answer: 'Nothing. Every citizen is fully sponsored. There is no fee for you or your family. You may want to bring ~$45 for snacks, toiletries, and the official MBS t-shirt.' },
  { question: 'What should I expect?', answer: 'A fast-paced, action-packed week. You\u2019ll hit the ground running Saturday night with party organization and caucuses. Elections, legislation, court cases, and campaigns happen every day. You\u2019ll also attend a school of instruction, compete in athletics, and hear from keynote speakers every night.' },
  { question: 'What are the dates for 2026?', answer: 'The 2026 session runs June 13\u201319 at Lindenwood University in St. Charles, MO.' },
  { question: 'What should I bring?', answer: 'Comfortable clothes for the week, business casual attire if you plan to run for office, personal toiletries, any medications, and a positive attitude. A full packing list is provided after acceptance.' },
  { question: 'Can I bring a musical instrument?', answer: 'Yes! There are often informal jam sessions and talent show opportunities during the week.' },
]

export default function StudentsPage() {
  return (
    <>
      <PageHero
        tag="For Students"
        title="Your Boys State Journey Starts Here"
        description="Everything you need to know about Missouri Boys State — from what it is, to what you'll do, to how it'll change your life."
      />

      {/* Stats Bar with $0 */}
      <section className="bg-white border-y border-gray-200 py-9">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-8 sm:gap-12">
                <div className="text-center">
                  <span className={`block font-serif text-4xl font-bold leading-none ${i === 0 ? 'text-red' : 'text-navy'}`}>{s.number}</span>
                  <span className="block text-[13px] font-medium text-gray-400 mt-1.5">{s.label}</span>
                </div>
                {i < stats.length - 1 && <div className="hidden sm:block w-px h-10 bg-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Eligibility</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-3">Who Can Attend?</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: 'Junior Year Complete', desc: 'You must have completed your junior year at a Missouri high school with at least one semester remaining.' },
              { title: 'Age 15–19', desc: 'You must be between 15 and 19 years old by the first day of the program.' },
              { title: 'Nominated', desc: 'You need a nomination from your school counselor, local American Legion post, or a community leader.' },
            ].map((e, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-7 text-center">
                <div className="w-14 h-14 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-serif font-bold text-xl">{i + 1}</span>
                </div>
                <h3 className="font-serif font-bold text-navy text-base mb-2">{e.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-page Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Explore</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Dive Deeper</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subPages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className={`bg-cream border border-gray-200 ${p.color} border-t-4 rounded-xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all`}
              >
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                <span className="inline-block mt-4 text-sm font-bold text-navy">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schools of Instruction Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Tag>What Will You Study?</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-3">Pick Your School of Instruction</h2>
            <p className="text-gray-400">Every citizen attends one school for the week — taught by real attorneys, troopers, journalists, and business leaders. Your school determines which positions you can hold.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schoolHighlights.map((s) => (
              <div key={s.name} className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4 items-start">
                <span className="text-2xl shrink-0">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-navy text-sm mb-1">{s.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/about/program-structure" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              See All 9 Schools & 100+ Positions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Questions?</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Student FAQ</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Take the First Step</h2>
          <p className="text-white/70 mb-6">Applications for the 2026 session are open now. Don&rsquo;t miss your chance to be part of something unforgettable.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Apply Now
            </Link>
            <Link to="/students/checkin" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Check-In Instructions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
