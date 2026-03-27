import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Tag from '../components/Tag'
import FAQAccordion from '../components/FAQAccordion'

const benefits = [
  { title: 'Leadership Development', desc: 'Students return with stronger communication, decision-making, and teamwork skills that benefit the entire school community.' },
  { title: 'College Readiness', desc: 'Boys State is widely recognized by admissions officers. Citizens earn a prestigious credential and often receive college credit through Lindenwood University.' },
  { title: 'Civic Engagement', desc: 'Students gain firsthand understanding of government and democratic participation \u2014 knowledge they carry into adulthood.' },
]

const steps = [
  { step: '1', title: 'Identify Candidates', desc: 'Look for juniors who demonstrate leadership, character, academic achievement, and civic interest.' },
  { step: '2', title: 'Submit Nominations', desc: 'Complete the online nomination form for each student. You can nominate as many qualified students as you wish.' },
  { step: '3', title: 'Support Applications', desc: 'Encourage nominated students to complete their applications before the May 1 deadline.' },
  { step: '4', title: 'Celebrate Citizens', desc: 'Recognize your citizens\u2019 achievement! Many schools announce Boys State selections publicly.' },
]

const curriculumMap = [
  { subject: 'Government & Civics', school: 'Legislative & Executive Policy', desc: 'Students draft bills, debate in committee, and pass legislation through a bicameral legislature. They experience the full lawmaking process — not as a simulation, but as the real governing body of a functioning state.' },
  { subject: 'Law & Criminal Justice', school: 'Law', desc: 'Students pass a Bar Exam, try civil and criminal cases before juries, serve as judges, and argue constitutional questions before the Supreme Court. Taught by practicing attorneys and judges.' },
  { subject: 'Business & Economics', school: 'Commerce', desc: 'Students launch businesses using Boys State Bucks, hire employees, manage inventory, pay taxes, and compete for the Outstanding Business award. Real entrepreneurship with real consequences.' },
  { subject: 'Journalism & Communications', school: 'Journalism & Media', desc: 'Students produce a daily newspaper, radio broadcasts, a podcast, and a TV news show in professional studios. They learn reporting, editing, media ethics, and the role of a free press in democracy.' },
  { subject: 'Public Safety & Law Enforcement', school: 'Law Enforcement & Public Safety', desc: 'Taught by Missouri State Highway Patrol troopers. Students can apply for the elite MBS Highway Patrol or serve as city police, county sheriffs, or fire chiefs.' },
  { subject: 'Political Science', school: 'Campaigning & Political Operations', desc: 'Students run real campaigns — building coalitions, fundraising, managing communications, and mobilizing voters. Party staff positions mirror professional political operations.' },
]

const faqItems = [
  { question: 'How many students can our school nominate?', answer: 'There is no limit. We encourage schools to nominate every qualified student who demonstrates the leadership qualities and civic interest that Boys State develops.' },
  { question: 'Can we request a school visit or presentation?', answer: 'Absolutely. Missouri Boys State offers informational presentations lasting approximately 30\u201345 minutes. Use the form below to request a visit to your school.' },
  { question: 'Do students need to be nominated by a Legion post?', answer: 'Not necessarily. While many citizens are nominated by their local American Legion post, school counselors and educators can also submit nominations directly.' },
  { question: 'Is there a cost to the school or student?', answer: 'No. There is no cost to the school, the student, or their family. Every citizen is fully sponsored through a $500 sponsorship funded by alumni, local businesses, and community organizations.' },
  { question: 'What makes a good Boys State candidate?', answer: 'Look for students who demonstrate leadership potential, intellectual curiosity, and civic-mindedness. They don\u2019t need to be student council presidents — some of the strongest citizens are students who haven\u2019t yet had an opportunity to lead. Boys State often reveals leadership in students who surprise everyone, including themselves.' },
  { question: 'What outcomes can I expect for my students?', answer: 'Students consistently return with increased confidence, stronger public speaking skills, a deeper understanding of how government works, and friendships that last a lifetime. Many cite Boys State as the single most impactful experience of their high school years. The program also provides college credit opportunities and access to over $2M in scholarships.' },
]

export default function EducatorsPage() {
  return (
    <>
      <PageHero
        tag="For Educators"
        title="Send Your Best Students to Boys State"
        description="You know your students better than anyone. Help us find Missouri's next generation of civic leaders."
      />

      {/* Impact stats */}
      <section className="bg-white border-y border-gray-200 py-9">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {[
              { number: '67K', label: 'Alumni Since 1938' },
              { number: '500+', label: 'MO High Schools Represented (Last 5 Years)' },
              { number: '$0', label: 'Cost to Schools or Families' },
              { number: '$2M+', label: 'In Scholarships Available Annually' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-8 sm:gap-12">
                <div className="text-center">
                  <span className="block font-serif text-3xl font-bold text-navy leading-none">{s.number}</span>
                  <span className="block text-[12px] font-medium text-gray-400 mt-1.5 max-w-[140px]">{s.label}</span>
                </div>
                {i < 3 && <div className="hidden sm:block w-px h-10 bg-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Curriculum Alignment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Tag>Curriculum Alignment</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-3">How MBS Maps to Your Classroom</h2>
            <p className="text-gray-400">Missouri Boys State isn't a generic leadership camp. It's a rigorous academic program with 9 schools of instruction taught by real-world practitioners. Here's how it connects to what you already teach.</p>
          </div>
          <div className="space-y-4">
            {curriculumMap.map((c, i) => (
              <div key={i} className="bg-cream border border-gray-200 rounded-xl p-6 flex flex-col lg:flex-row gap-4">
                <div className="lg:w-48 shrink-0">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gold block mb-1">Your Subject</span>
                  <h3 className="font-serif font-bold text-navy text-base">{c.subject}</h3>
                  <span className="text-xs text-gray-400 mt-1 block">MBS School: {c.school}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/about/program-structure" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Full Program Structure & Positions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Nomination Toolkit */}
      <section className="py-24">
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
          <p className="text-gray-500 mb-8">We offer 30–45 minute presentations designed for students being considered for nomination. A representative will visit your school to explain the Boys State experience and answer questions.</p>
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
