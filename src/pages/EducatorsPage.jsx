import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Tag from '../components/Tag'
import FAQAccordion from '../components/FAQAccordion'

const benefits = [
  { title: 'Leadership Development', desc: 'Students return with stronger communication, decision-making, and teamwork skills that benefit the entire school community.' },
  { title: 'College Readiness', desc: 'Boys State is widely recognized by admissions officers. Citizens earn a prestigious credential and often receive college credit.' },
  { title: 'Civic Engagement', desc: 'Students gain firsthand understanding of government and democratic participation \u2014 knowledge they carry into adulthood.' },
]

const steps = [
  { step: '1', title: 'Identify Candidates', desc: 'Look for juniors who demonstrate leadership, character, academic achievement, and civic interest.' },
  { step: '2', title: 'Submit Nominations', desc: 'Complete the online nomination form for each student. You can nominate as many qualified students as you wish.' },
  { step: '3', title: 'Support Applications', desc: 'Encourage nominated students to complete their applications before the May 1 deadline.' },
  { step: '4', title: 'Celebrate Citizens', desc: 'Recognized your citizens\u2019 achievement! Many schools announce Boys State selections publicly.' },
]

const faqItems = [
  { question: 'How many students can our school nominate?', answer: 'There is no limit. We encourage schools to nominate every qualified student who demonstrates the leadership qualities and civic interest that Boys State develops.' },
  { question: 'Can we request a school visit or presentation?', answer: 'Absolutely. Missouri Boys State offers informational presentations lasting approximately 30\u201345 minutes. Use the form below to request a visit to your school.' },
  { question: 'Do students need to be nominated by a Legion post?', answer: 'Not necessarily. While many citizens are nominated by their local American Legion post, school counselors and educators can also submit nominations directly.' },
  { question: 'Is there a cost to the school or student?', answer: 'No. There is no cost to the school, the student, or their family. Every citizen is fully sponsored through a $500 sponsorship funded by alumni, local businesses, and community organizations.' },
]

export default function EducatorsPage() {
  return (
    <>
      <PageHero
        tag="For Educators"
        title="Send Your Best Students to Boys State"
        description="You know your students better than anyone. Help us find Missouri's next generation of civic leaders."
      />

      {/* Why Nominate */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Why Nominate</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Benefits for Students & Schools</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-7">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nomination Toolkit */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Nomination Toolkit</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">How to Nominate</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="bg-navy text-white w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif font-bold text-xl">{s.step}</span>
                </div>
                <h3 className="font-serif font-bold text-navy text-base mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/nominate" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Nominate a Student
            </Link>
          </div>
        </div>
      </section>

      {/* Request a Visit */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>School Visits</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-4">Request a Presentation</h2>
          <p className="text-gray-500 mb-8">We offer 30\u201345 minute presentations designed for students being considered for nomination. A representative will visit your school to explain the Boys State experience and answer questions.</p>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {['Your Name', 'Email', 'School Name', 'School City'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-bold text-navy mb-1">{field}</label>
                  <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-navy mb-1">Preferred Date(s)</label>
              <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-navy mb-1">Additional Notes</label>
              <div className="w-full h-20 bg-white border border-gray-200 rounded-md" />
            </div>
            <button className="bg-navy hover:bg-navy-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Request Visit
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Common Questions</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Educator FAQ</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Ready to nominate?</h2>
          <p className="text-white/70 mb-6">Every great leader starts somewhere. Help your students start here.</p>
          <Link to="/nominate" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Nominate a Student
          </Link>
        </div>
      </section>
    </>
  )
}
