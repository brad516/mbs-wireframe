import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Tag from '../components/Tag'
import FAQAccordion from '../components/FAQAccordion'

const nominators = [
  { title: 'American Legion Posts', desc: 'Local posts are the backbone of the nomination process. Each post can nominate multiple delegates from their community.', icon: '\u2605' },
  { title: 'Educators & Counselors', desc: 'Teachers, principals, and school counselors can nominate students who demonstrate leadership and civic interest.', icon: '\u{1F3EB}' },
  { title: 'Community Leaders', desc: 'Coaches, pastors, civic leaders, and other community members who know a standout young man can submit a nomination.', icon: '\u{1F91D}' },
]

const qualities = [
  'Demonstrated leadership in school, sports, or community',
  'Strong moral character and integrity',
  'Academic achievement and intellectual curiosity',
  'Interest in government, law, or civic affairs',
  'Ability to work with others and build consensus',
  'A desire to grow, compete, and serve',
]

const faqItems = [
  { question: 'How many students can I nominate?', answer: 'There is no limit to the number of students you can nominate. We encourage nominators to identify all qualified young men in their community.' },
  { question: 'Does the nominee need to know they\u2019re being nominated?', answer: 'We recommend informing the student and their family before submitting a nomination, as they\u2019ll need to complete an application after being nominated.' },
  { question: 'Is there a fee to nominate or attend?', answer: 'No. Nominating a student is free, and there is no cost to the delegate or their family. Every delegate is fully sponsored through a $500 sponsorship funded by alumni, local businesses, and community organizations.' },
  { question: 'What happens after I submit a nomination?', answer: 'The nominee and their family will receive information about completing an application. Once accepted, they\u2019ll be invited to attend a pre-session orientation meeting.' },
]

export default function NominatePage() {
  return (
    <>
      <PageHero
        tag="Nominate"
        title="Nominate a Student"
        description="Know a young leader who deserves this opportunity? Help them discover Missouri Boys State."
      />

      {/* Who Can Nominate */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Who Can Nominate</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Three Paths to Nomination</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {nominators.map((n, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-7 text-center">
                <div className="text-3xl mb-4">{n.icon}</div>
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{n.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>Ideal Candidates</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-6">What We Look For</h2>
              <ul className="space-y-3">
                {qualities.map((q, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 w-5 h-5 bg-red rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">{'\u2713'}</span>
                    </span>
                    <span className="text-gray-500">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream border border-gray-200 rounded-xl p-12 text-center">
              <div className="text-5xl mb-4">{'\u{1F393}'}</div>
              <p className="text-sm text-gray-400">Student Leadership Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nomination Form */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Submit a Nomination</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Nomination Form</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 bg-gray-50">
            <h3 className="font-bold text-navy text-sm mb-4 uppercase tracking-wide">Your Information (Nominator)</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {['Your Name', 'Your Email', 'Organization / Legion Post', 'Your Role'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-bold text-navy mb-1">{field}</label>
                  <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                </div>
              ))}
            </div>
            <h3 className="font-bold text-navy text-sm mb-4 uppercase tracking-wide">Student Information</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {['Student Name', 'Student Email', 'High School', 'City / County'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-bold text-navy mb-1">{field}</label>
                  <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                </div>
              ))}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-navy mb-1">Why are you nominating this student?</label>
              <div className="w-full h-24 bg-white border border-gray-200 rounded-md" />
            </div>
            <button className="bg-red hover:bg-red-dark text-white font-bold text-base px-9 py-4 rounded-lg transition">
              Submit Nomination
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Common Questions</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Nomination FAQ</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Questions about nominating?</h2>
          <p className="text-white/70 mb-6">Contact us at headquarters@moboysstate.org or 660.429.2761</p>
          <Link to="/contact" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
