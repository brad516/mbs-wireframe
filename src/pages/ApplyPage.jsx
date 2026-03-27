import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Tag from '../components/Tag'
import FAQAccordion from '../components/FAQAccordion'

const requirements = [
  'Current high school junior (completing 11th grade)',
  'Resident of the state of Missouri',
  'Nominated by an American Legion post, school, or community leader',
  'Demonstrated leadership potential and civic interest',
  'Good academic standing',
  'U.S. citizen or legal resident',
]

const keyDates = [
  { label: 'Nominations Open', value: 'January 15' },
  { label: 'Applications Open', value: 'February 1' },
  { label: 'Application Deadline', value: 'May 1', highlight: true },
  { label: '2026 Session', value: 'June 13\u201319', highlight: true },
]

const faqItems = [
  { question: 'Do I need to be nominated before I can apply?', answer: 'Yes. You must be nominated by an American Legion post, school counselor, or community leader before submitting your application. If you haven\u2019t been nominated yet, ask your school counselor or contact your local Legion post.' },
  { question: 'What does it cost to attend?', answer: 'There is no cost to families. Every delegate is fully sponsored through a $500 sponsorship funded by alumni, local businesses, and community organizations. We do not accept payment from parents or families \u2014 finances are never a barrier to attending Boys State.' },
  { question: 'Can out-of-state students apply?', answer: 'Missouri Boys State is primarily for Missouri residents. Out-of-state students should contact their own state\u2019s Boys State program through The American Legion. In rare cases, exceptions may be considered \u2014 contact headquarters for guidance.' },
  { question: 'When will I hear back about my application?', answer: 'Applicants are typically notified within 2\u20133 weeks of submitting a complete application. You\u2019ll receive information about orientation meetings and session preparation after acceptance.' },
]

export default function ApplyPage() {
  return (
    <>
      <PageHero
        tag="Apply Now"
        title="Apply to Missouri Boys State"
        description="Your week of leadership starts with one application. Here's everything you need to get started."
      />

      {/* Eligibility & Key Dates */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Tag>Eligibility</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-6">Who Can Apply</h2>
              <ul className="space-y-3">
                {requirements.map((r, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 w-5 h-5 bg-red rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">{'\u2713'}</span>
                    </span>
                    <span className="text-gray-500">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 self-start">
              <Tag>Important Dates</Tag>
              <div className="space-y-0">
                {keyDates.map((d, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-3 text-sm ${
                      d.highlight
                        ? 'bg-gold-bg -mx-4 px-4 py-3 rounded-md'
                        : 'border-b border-gray-200 last:border-b-0'
                    }`}
                  >
                    <span className="text-gray-500 font-medium">{d.label}</span>
                    <span className={`font-bold ${d.highlight ? 'text-red' : 'text-navy'}`}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Wireframe */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Application</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Start Your Application</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 bg-gray-50">
            <div className="space-y-5">
              {['Full Name', 'Email Address', 'High School', 'Expected Graduation Year', 'Nominating Legion Post or Organization', 'City / County'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-bold text-navy mb-1">{field}</label>
                  <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold text-navy mb-1">Tell us about yourself and your interest in Boys State</label>
                <div className="w-full h-24 bg-white border border-gray-200 rounded-md" />
              </div>
            </div>
            <button className="mt-8 bg-red hover:bg-red-dark text-white font-bold text-base px-9 py-4 rounded-lg transition">
              Submit Application
            </button>
            <p className="text-xs text-gray-400 mt-3">You will receive a confirmation email after submission.</p>
          </div>
        </div>
      </section>

      {/* Sponsorship & What's Included */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-7">
              <div className="w-10 h-10 bg-gold text-white rounded-lg flex items-center justify-center mb-4 font-bold text-lg">$</div>
              <h3 className="font-serif font-bold text-navy text-lg mb-2">No Cost to Families</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every delegate is <strong className="text-navy">fully sponsored</strong>. We do not accept payment from parents or families. Finances are never a barrier to attending Boys State.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-7">
              <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center mb-4 font-bold text-lg">{'\u2605'}</div>
              <h3 className="font-serif font-bold text-navy text-lg mb-2">Community Sponsored</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Each delegate&rsquo;s $500 sponsorship is funded by MBS alumni, local businesses, American Legion posts, and community organizations who believe in investing in Missouri&rsquo;s future leaders.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-7">
              <div className="w-10 h-10 bg-red text-white rounded-lg flex items-center justify-center mb-4 font-bold text-lg">{'\u2713'}</div>
              <h3 className="font-serif font-bold text-navy text-lg mb-2">What&rsquo;s Included</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Housing at Lindenwood University, three meals daily, all program materials, session t-shirt, and access to every activity and event during the week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Out-of-State & OCONUS */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Special Circumstances</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-6">Out-of-State &amp; OCONUS Applicants</h2>
          <div className="space-y-6">
            <div className="bg-cream border border-gray-200 rounded-xl p-7">
              <h3 className="font-serif font-bold text-navy text-lg mb-2">Out-of-Country (OCONUS) Students</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Sons of military personnel stationed outside the continental United States (OCONUS) may be eligible to attend Missouri Boys State if they have a Missouri connection (e.g., home of record). Contact headquarters with your situation and we will work to find a path for your student.
              </p>
            </div>
            <div className="bg-cream border border-gray-200 rounded-xl p-7">
              <h3 className="font-serif font-bold text-navy text-lg mb-2">Students from Other States</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Each state operates its own Boys State program through The American Legion. If you live outside Missouri, visit <strong className="text-navy">legion.org</strong> to find your state&rsquo;s program. In rare circumstances, students with strong Missouri ties may be considered &mdash; reach out to our registrar for guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Common Questions</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Application FAQ</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Still have questions?</h2>
          <p className="text-white/70 mb-6">We&rsquo;re here to help you through the application process.</p>
          <Link to="/contact" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
