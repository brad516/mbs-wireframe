import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Tag from '../components/Tag'
import FAQAccordion from '../components/FAQAccordion'

const tabs = [
  {
    label: 'General',
    items: [
      { question: 'What is Missouri Boys State?', answer: 'Missouri Boys State is a week-long immersive leadership and civic education program for high school juniors, sponsored by The American Legion. Each summer, approximately 1,600 delegates build a functioning 51st state from the ground up.' },
      { question: 'When and where is the 2026 session?', answer: 'The 2026 session runs June 13\u201319 at Lindenwood University in St. Charles, Missouri.' },
      { question: 'How long has Boys State been running?', answer: 'Missouri Boys State has been developing civic leaders since 1938 \u2014 over 85 years of continuous operation, with more than 50,000 alumni.' },
      { question: 'Is Missouri Boys State affiliated with a political party?', answer: 'No. Boys State is entirely nonpartisan. While delegates form political parties during the program, these are not affiliated with any real-world party. The focus is on understanding the democratic process, not partisan politics.' },
      { question: 'What is Boys Nation?', answer: 'Boys Nation is a national program where the top two delegates from each state\u2019s Boys State convene in Washington, D.C. for a week of government simulation at the federal level. Missouri sends two senators each year.' },
      { question: 'How do I contact Missouri Boys State?', answer: 'Contact headquarters at 660.429.2761 or headquarters@moboysstate.org. Mailing address: P.O. Box 667, Warrensburg, MO 64093.' },
    ],
  },
  {
    label: 'Students',
    items: [
      { question: 'How do I get nominated?', answer: 'Talk to your school counselor, a teacher, or your local American Legion post. They can submit a nomination on your behalf. You can also contact MBS headquarters to express interest.' },
      { question: 'What will I do during the week?', answer: 'You\u2019ll build a city, run for office, draft legislation, argue court cases, compete in athletics, hear from keynote speakers, and form lifelong friendships \u2014 all while learning how government works by doing it.' },
      { question: 'Do I need political experience?', answer: 'Absolutely not. Boys State is designed for students from all backgrounds and interests. Many delegates discover a passion for civic engagement they never knew they had.' },
      { question: 'Can I earn college credit?', answer: 'Yes. Missouri Boys State partners with institutions to offer college credit opportunities. Details are provided after acceptance.' },
      { question: 'What should I bring?', answer: 'A detailed packing list is provided after acceptance. Generally: comfortable clothing for a week, business casual attire for formal events, personal toiletries, and any medications.' },
    ],
  },
  {
    label: 'Parents',
    items: [
      { question: 'Is Boys State safe?', answer: 'Yes. Delegates are supervised 24/7 by trained adult counselors on the secure Lindenwood University campus. Medical staff are on-site at all times. All staff are background-checked.' },
      { question: 'How much does it cost?', answer: 'The program fee is approximately $375, covering housing, meals, materials, and all activities. Scholarships and financial aid are widely available. No student is ever turned away for inability to pay.' },
      { question: 'Can parents visit?', answer: 'Parents are welcome at the inauguration ceremony and designated events. Day-to-day visits are limited to preserve the immersive experience.' },
      { question: 'What about dietary restrictions or medical needs?', answer: 'We accommodate dietary restrictions and medical needs. Note any requirements on the application and contact headquarters to discuss specifics.' },
    ],
  },
  {
    label: 'Educators',
    items: [
      { question: 'How do I nominate students?', answer: 'Use the online nomination form at moboysstate.org/nominate. There\u2019s no limit to how many students you can nominate.' },
      { question: 'Can you visit our school?', answer: 'Yes. We offer 30\u201345 minute informational presentations. Request a visit through our educator page or contact headquarters.' },
      { question: 'Is there a cost to the school?', answer: 'No. There is no cost to the school for nominations. The program fee is the delegate\u2019s responsibility, with sponsorships and scholarships widely available.' },
      { question: 'What makes a good Boys State candidate?', answer: 'We look for students who demonstrate leadership, character, academic achievement, and civic interest. The program thrives on diversity of thought and background.' },
    ],
  },
]

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <PageHero
        tag="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about Missouri Boys State, organized by topic."
      />

      {/* Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-1 py-3">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-md text-sm font-bold transition ${
                  activeTab === i ? 'bg-navy text-white' : 'text-navy hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>{tabs[activeTab].label} Questions</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">{tabs[activeTab].label}</h2>
          <FAQAccordion items={tabs[activeTab].items} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Still have questions?</h2>
          <p className="text-white/70 mb-6">We&rsquo;re happy to help. Reach out anytime.</p>
          <Link to="/contact" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
