import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Tag from '../components/Tag'
import FAQAccordion from '../components/FAQAccordion'

const atAGlance = [
  { icon: '\u{1F6E1}\uFE0F', title: 'Safe & Supervised', desc: 'Delegates are supervised 24/7 by trained adult counselors. Medical staff are on-site at all times on the secure Lindenwood University campus.' },
  { icon: '$', title: 'Affordable', desc: 'The program fee is approximately $375. Scholarships and financial aid are available \u2014 no student is ever turned away for inability to pay.' },
  { icon: '\u{1F4C5}', title: 'One Week', desc: 'The 2026 session runs June 13\u201319 at Lindenwood University in St. Charles, MO. Pre-session orientation meetings are held statewide.' },
  { icon: '\u{1F3AF}', title: 'Proven Outcomes', desc: 'Alumni report stronger college applications, increased confidence, lifelong friendships, and a deeper understanding of civic responsibility.' },
]

const faqItems = [
  { question: 'Is my son safe at Boys State?', answer: 'Absolutely. Delegates are supervised 24/7 by trained adult counselors, many of whom are educators and military veterans. On-site medical staff are available around the clock. The program takes place on the secure, enclosed campus of Lindenwood University.' },
  { question: 'How much does it cost?', answer: 'The program fee is approximately $375, which covers housing, meals, materials, and all activities. Many delegates are fully or partially sponsored by their local American Legion post. Additional scholarships and financial aid are available \u2014 no student is ever turned away for inability to pay.' },
  { question: 'Can parents visit during the week?', answer: 'Parents are welcome to attend the inauguration ceremony and other designated events. The full week schedule will be provided after acceptance. Day-to-day visits are limited to preserve the immersive experience.' },
  { question: 'What should my son bring?', answer: 'A detailed packing list and check-in instructions are provided after acceptance. Generally: comfortable clothing for a week, business casual attire for formal events, personal toiletries, any medications, and a positive attitude.' },
  { question: 'How does the nomination process work?', answer: 'Students are typically nominated by their local American Legion post, school counselor, or a community leader. If your son hasn\u2019t been nominated, contact your local Legion post or school counselor to express interest.' },
  { question: 'Will Boys State help with college admissions?', answer: 'Yes. Boys State is widely recognized by colleges and universities as a premier leadership program. Delegates frequently cite their Boys State experience in college essays and interviews. The program also offers college credit opportunities through partner institutions.' },
  { question: 'What if my son has dietary restrictions or medical needs?', answer: 'We accommodate dietary restrictions and medical needs. Please note any requirements on the application and contact headquarters to discuss specific accommodations.' },
  { question: 'How do I learn more before committing?', answer: 'Attend one of our statewide orientation meetings held in the spring, or contact headquarters at 660.429.2761 or headquarters@moboysstate.org.' },
]

export default function ParentsPage() {
  return (
    <>
      <PageHero
        tag="For Parents"
        title="Everything You Need to Know"
        description="We know sending your son to a week-long program is a big decision. Here&rsquo;s what you need to feel confident about it."
      />

      {/* At a Glance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {atAGlance.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-7 text-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Supervision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>Safety First</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">Your Son Is in Good Hands</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Missouri Boys State operates on the secure campus of Lindenwood University in St. Charles. Every aspect of the program is designed with delegate safety and well-being as the top priority.
              </p>
              <ul className="space-y-3">
                {['24/7 adult supervision by trained counselors', 'On-site medical staff and emergency protocols', 'Secure campus with controlled access', 'Background-checked staff and volunteers', 'Structured daily schedule with designated rest periods'].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-gray-500">
                    <span className="text-red font-bold mt-0.5">{'\u2713'}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream border border-gray-200 rounded-xl p-12 text-center">
              <div className="text-5xl mb-4">{'\u{1F3EB}'}</div>
              <p className="text-sm text-gray-400">Lindenwood University Campus Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Cost & Value</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-2">An Investment in Your Son&rsquo;s Future</h2>
          </div>
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-500">Program Fee</span>
              <span className="font-bold text-navy text-lg">~$375</span>
            </div>
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm font-bold text-navy">What&rsquo;s Included:</span>
              <p className="text-sm text-gray-400 mt-1">Housing, three meals daily, all program materials, session t-shirt, campus activities, speakers, and events for the full week.</p>
            </div>
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm font-bold text-navy">Financial Aid:</span>
              <p className="text-sm text-gray-400 mt-1">Many delegates are fully or partially sponsored by their local American Legion post. Additional scholarships are available through the MBS Memorial Trust.</p>
            </div>
            <div className="py-3 bg-gold-bg -mx-4 px-4 rounded-md mt-2">
              <span className="text-sm font-bold text-red">No student is ever turned away due to inability to pay.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Common Questions</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Parent FAQ</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Ready to help your son take the next step?</h2>
          <p className="text-white/70 mb-6">Applications for the 2026 session are open now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Apply Now
            </Link>
            <Link to="/contact" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
