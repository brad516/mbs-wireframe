import { Link } from 'react-router-dom'
import Tag from '../components/Tag'
import MediaPlaceholder from '../components/MediaPlaceholder'
import FAQAccordion from '../components/FAQAccordion'

/* ══════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════ */

const curriculumMap = [
  { subject: 'Government & Civics', school: 'Legislative & Executive Policy', desc: 'Students draft bills, debate in committee, and pass legislation through a bicameral legislature. They experience the full lawmaking process \u2014 not as a simulation, but as the real governing body of a functioning state.', icon: '\u{1F3DB}\uFE0F' },
  { subject: 'Law & Criminal Justice', school: 'Law', desc: 'Students pass a Bar Exam, try civil and criminal cases before juries, serve as judges, and argue constitutional questions before the Supreme Court. Taught by practicing attorneys and judges.', icon: '\u2696\uFE0F' },
  { subject: 'Business & Economics', school: 'Commerce', desc: 'Students launch businesses using Boys State Bucks, hire employees, manage inventory, pay taxes, and compete for the Outstanding Business award. Real entrepreneurship with real consequences.', icon: '\u{1F4B0}' },
  { subject: 'Journalism & Communications', school: 'Journalism & Media', desc: 'Students produce a daily newspaper, radio broadcasts, a podcast, and a TV news show in professional studios. They learn reporting, editing, media ethics, and the role of a free press.', icon: '\u{1F4F0}' },
  { subject: 'Public Safety & Law Enforcement', school: 'Law Enforcement & Public Safety', desc: 'Taught by Missouri State Highway Patrol troopers. Students can apply for the elite MBS Highway Patrol or serve as city police, county sheriffs, or fire chiefs.', icon: '\u{1F6A8}' },
  { subject: 'Political Science', school: 'Campaigning & Political Operations', desc: 'Students run real campaigns \u2014 building coalitions, fundraising, managing communications, and mobilizing voters. Party staff positions mirror professional political operations.', icon: '\u{1F4E3}' },
]

const steps = [
  { step: '1', title: 'Identify Candidates', desc: 'Look for juniors who demonstrate leadership, character, academic achievement, and civic interest. They don\u2019t need to be student council presidents \u2014 Boys State often reveals leadership in students who surprise everyone.' },
  { step: '2', title: 'Connect With Your Legion Post', desc: 'Your local American Legion post sponsors and funds citizens. Use our locator to find your post, or contact us and we\u2019ll make the connection for you.' },
  { step: '3', title: 'Submit Nominations', desc: 'Complete the online nomination form for each student. There is no limit \u2014 nominate every qualified student you have.' },
  { step: '4', title: 'Support Applications', desc: 'Encourage nominated students to complete their applications before the May 1 deadline. Share the student page with them and their parents.' },
]

const faqItems = [
  { question: 'How many students can our school nominate?', answer: 'There is no limit. We encourage schools to nominate every qualified student who demonstrates the leadership qualities and civic interest that Boys State develops. One counselor nominating 5\u201310 students per year is common at engaged schools.' },
  { question: 'Do students need to be nominated by a Legion post?', answer: 'Not necessarily. While many citizens are sponsored by their local American Legion post, school counselors and educators can also submit nominations directly. We\u2019ll help connect nominated students with sponsoring organizations.' },
  { question: 'Is there a cost to the school or student?', answer: 'No. There is no cost to the school, the student, or their family. Every citizen is fully sponsored through a $500 sponsorship funded by alumni, local businesses, American Legion posts, and community organizations.' },
  { question: 'What makes a good Boys State candidate?', answer: 'Look for students who demonstrate leadership potential, intellectual curiosity, and civic-mindedness. They don\u2019t need to be the obvious choice \u2014 some of the strongest citizens are students who haven\u2019t yet had an opportunity to lead. Boys State often reveals leadership in students who surprise everyone, including themselves.' },
  { question: 'Can we request a school visit or presentation?', answer: 'Absolutely. Missouri Boys State offers informational presentations lasting approximately 30\u201345 minutes. A representative will visit your school to explain the experience and answer questions from students, parents, and staff. Use the form on this page to request a visit.' },
  { question: 'What outcomes can I expect for my students?', answer: 'Students consistently return with increased confidence, stronger public speaking skills, a deeper understanding of how government works, and friendships that last a lifetime. Many cite Boys State as the single most impactful experience of their high school years. The program also provides college credit through Lindenwood University and access to over $2M in scholarships.' },
  { question: 'How does the program handle students with medical needs or disabilities?', answer: 'We accommodate medical needs, physical disabilities, and dietary restrictions. Students should note any requirements on their application. Our on-site medical staff will work to ensure every citizen\u2019s needs are met throughout the week.' },
  { question: 'What if a student has an ACT or other testing conflict?', answer: 'We understand scheduling conflicts and work to accommodate late arrivals for standardized testing. Contact headquarters at 660.429.2761 to discuss options.' },
  { question: 'Are there downloadable materials I can share with parents?', answer: 'Yes. We\u2019re developing a nomination toolkit with downloadable flyers, parent information sheets, and classroom announcement templates. In the meantime, share the student and parent pages on our website, or request a school visit.' },
]

const educatorTestimonials = [
  { quote: "I\u2019ve nominated students for 12 years now. Without exception, every single one has come back a better version of themselves. It\u2019s the most impactful thing I do as a counselor.", name: 'Educator Name', detail: 'School Counselor, [School Name]' },
  { quote: "One of my quietest students came back from Boys State and ran for class president. He won. That program unlocked something in him that I couldn\u2019t.", name: 'Educator Name', detail: 'Social Studies Teacher, [School Name]' },
  { quote: "The students who go to Boys State come back and elevate the entire school. They\u2019re more engaged, more confident, and they pull other students up with them.", name: 'Educator Name', detail: 'Principal, [School Name]' },
]

/* ══════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════ */
function EducatorHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-lighter" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 to-navy/60 z-[1]" />

      <div className="relative z-[2] text-center max-w-3xl px-6 py-10">
        <p className="text-gold-light text-xs font-bold tracking-[0.2em] uppercase mb-5">
          For Educators & Counselors
        </p>
        <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
          You&rsquo;re the Pipeline
        </h1>
        <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto mb-8">
          One counselor can change dozens of lives. Every year, educators like you identify the students who become Missouri Boys State citizens &mdash; and come back transformed. Help us find your next one.
        </p>

        <div className="flex items-center justify-center gap-8 sm:gap-12 mb-10">
          {[
            { number: '$0', label: 'Cost to Schools or Families', highlight: true },
            { number: '500+', label: 'MO Schools Represented' },
            { number: 'No Limit', label: 'On Nominations Per School' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12">
              <div className="text-center">
                <span className={`block font-serif text-2xl sm:text-3xl font-bold leading-none ${s.highlight ? 'text-gold-light' : 'text-white'}`}>{s.number}</span>
                <span className="block text-[11px] font-medium text-white/50 mt-1 max-w-[120px]">{s.label}</span>
              </div>
              {i < 2 && <div className="hidden sm:block w-px h-8 bg-white/20" />}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/nominate" className="bg-red hover:bg-red-dark text-white font-bold text-base px-9 py-4 rounded-lg transition">
            Nominate a Student
          </Link>
          <a href="#why-nominate" className="border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold text-sm px-7 py-3 rounded-lg transition">
            Why Nominate &darr;
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] text-white/20 text-sm">
        Educator Hero Photo Background
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   SESSION SPOTLIGHT
   ══════════════════════════════════════════════════ */
function SessionSpotlight() {
  return (
    <section className="bg-red py-3">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <p className="text-white text-sm font-bold">
            2026 Session: June 13&ndash;19 at Lindenwood University
          </p>
          <span className="hidden sm:inline text-white/40">|</span>
          <p className="text-white/90 text-sm">
            Nomination deadline: <strong>May 1</strong>
          </p>
          <Link to="/nominate" className="bg-white text-red font-bold text-xs px-4 py-1.5 rounded-md hover:bg-cream transition ml-1">
            Nominate Now
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   WHY NOMINATE + VIDEO
   ══════════════════════════════════════════════════ */
function WhyNominate() {
  return (
    <section id="why-nominate" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Tag>Why Nominate</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">The Single Most Impactful Week of Their High School Career</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Missouri Boys State isn&rsquo;t a generic leadership camp. It&rsquo;s an 8-day immersive program where ~850 rising seniors build a functioning state government from scratch &mdash; with real elections, a working legislature, courts, media, and businesses.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Students return to your school with stronger communication skills, increased confidence, a deeper understanding of government, and friendships that last a lifetime. And it costs your school and their families nothing.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Leadership development', icon: '\u{1F3AF}' },
                { label: 'College credit through Lindenwood', icon: '\u{1F393}' },
                { label: '$2M+ in scholarships', icon: '\u{1F4B0}' },
                { label: 'Recognized by admissions officers', icon: '\u{1F4CB}' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              src="https://www.youtube.com/embed/VNV6nnKb138"
              title="What is Missouri Boys State?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   FORCE MULTIPLIER CALLOUT
   ══════════════════════════════════════════════════ */
function ForceMultiplier() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif font-bold text-white text-2xl lg:text-3xl mb-4">One Counselor. Dozens of Leaders.</h2>
        <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
          You are the most important person in the MBS pipeline. A single school counselor who nominates 5&ndash;10 students per year creates a compounding effect &mdash; those citizens come back and inspire the next class, building a culture of civic engagement that outlasts any one student.
        </p>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   WHAT STUDENTS EXPERIENCE (week overview for educators)
   ══════════════════════════════════════════════════ */
function WhatStudentsExperience() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Tag>The Program</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">What Your Students Will Experience</h2>
          <p className="text-gray-400">An 8-day arc from arrival to inauguration &mdash; here&rsquo;s what the week looks like so you can brief students and parents.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { day: 'Saturday', title: 'Arrival & City Formation', desc: 'Students check in, meet their city of ~50 citizens, get assigned to a political party, and begin organizing government.' },
            { day: 'Sunday', title: 'First Elections', desc: 'City elections for Mayor, Council, Senators, Representatives. Government is operational by evening.' },
            { day: 'Mon\u2013Tue', title: 'Legislature & Courts', desc: 'General Assembly convenes. Bills debated and passed. County elections. Bar Exam and court cases begin.' },
            { day: 'Wednesday', title: 'Statewide Primary', desc: 'Candidates for Governor face off in an open primary. Gubernatorial debate that evening.' },
            { day: 'Thursday', title: 'Governor Elected', desc: 'Statewide general election and inauguration. Full state government running.' },
            { day: 'Friday', title: 'Awards & Closing', desc: 'Democracy in Action ceremony. Citizen of the Week ($10K), Model City, Model County awards. Final exam for college credit.' },
          ].map((d, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <span className="text-[10px] font-bold tracking-wider uppercase text-red">{d.day}</span>
              <h3 className="font-serif font-bold text-navy text-base mt-1 mb-1">{d.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/students/week-in-the-life" className="text-sm font-bold text-red hover:underline">
            Full Day-by-Day Breakdown &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   CURRICULUM ALIGNMENT
   ══════════════════════════════════════════════════ */
function CurriculumAlignment() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Tag>Curriculum Alignment</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">How MBS Maps to Your Classroom</h2>
          <p className="text-gray-400">9 schools of instruction taught by real-world practitioners. Here&rsquo;s how they connect to what you already teach &mdash; use this to identify which students are the best fit.</p>
        </div>
        <div className="space-y-4">
          {curriculumMap.map((c, i) => (
            <div key={i} className="bg-cream border border-gray-200 rounded-xl p-6 flex flex-col lg:flex-row gap-4 items-start">
              <div className="lg:w-52 shrink-0 flex lg:flex-col items-center lg:items-start gap-3 lg:gap-0">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gold block mb-0.5">Your Subject</span>
                  <h3 className="font-serif font-bold text-navy text-base">{c.subject}</h3>
                  <span className="text-xs text-gray-400 mt-0.5 block">MBS School: {c.school}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/about/program-structure" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Full Program Structure & 100+ Positions &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   STUDENT OUTCOMES
   ══════════════════════════════════════════════════ */
function StudentOutcomes() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase mb-3 text-gold-light">Outcomes</span>
          <h2 className="font-serif font-bold text-white text-3xl mb-3">What They Come Back With</h2>
          <p className="text-white/60">The transformation is consistent, year after year. Here&rsquo;s what educators report seeing in their students after Boys State.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: 'Confidence', desc: 'The kind that comes from standing up in front of 100 people and earning their vote.' },
            { title: 'Public Speaking', desc: 'Campaign speeches, legislative debates, courtroom arguments \u2014 all done before a live audience of peers.' },
            { title: 'Civic Literacy', desc: 'They understand how government works because they built one. Not theory \u2014 practice.' },
            { title: 'A Network', desc: '50 guys in their city, 850 in their class, and 67,000+ in the alumni network. For life.' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-serif font-bold text-white text-base mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
          {[
            { number: '$100K', label: 'Top scholarship (Vogel Family)' },
            { number: '$2M+', label: 'In scholarships available annually' },
            { number: '2\u20133 hrs', label: 'College credit through Lindenwood' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <span className="block font-serif text-2xl font-bold text-gold-light">{s.number}</span>
              <span className="text-[11px] text-white/50">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   EDUCATOR TESTIMONIALS
   ══════════════════════════════════════════════════ */
function EducatorTestimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Tag>From Educators Like You</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">What Other Educators Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {educatorTestimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
              <blockquote className="font-serif text-sm italic text-navy leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <strong className="text-sm text-navy">{t.name}</strong>
                <span className="block text-xs text-gray-400">{t.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   NOMINATION TOOLKIT
   ══════════════════════════════════════════════════ */
function NominationToolkit() {
  return (
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
        <div className="text-center mt-10 space-y-3">
          <div>
            <Link to="/nominate" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Nominate a Student
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            Share with parents: <Link to="/parents" className="text-red font-bold hover:underline">Parent Info Page</Link> &middot; Share with students: <Link to="/students" className="text-red font-bold hover:underline">Student Info Page</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   DOWNLOADABLE RESOURCES
   ══════════════════════════════════════════════════ */
function DownloadableResources() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Downloads */}
          <div>
            <Tag>Resources</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-4">Spread the Word</h2>
            <p className="text-gray-500 mb-6">Download and share these materials with students, parents, and colleagues.</p>
            <div className="space-y-3">
              {[
                { label: 'Student Information Flyer', desc: 'One-page overview for students \u2014 print or email', type: 'PDF' },
                { label: 'Parent Information Sheet', desc: 'Key facts for parents: safety, cost, outcomes', type: 'PDF' },
                { label: 'Classroom Announcement Script', desc: 'Ready-to-read announcement for morning PA or class', type: 'DOC' },
                { label: 'Nomination Letter Template', desc: 'Template letter from counselor to Legion post', type: 'DOC' },
              ].map((r, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition">
                  <div className="bg-navy/5 text-navy text-[10px] font-bold w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    {r.type}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-navy block">{r.label}</span>
                    <span className="text-xs text-gray-400">{r.desc}</span>
                  </div>
                  <span className="text-xs font-bold text-red shrink-0">Download &darr;</span>
                </div>
              ))}
            </div>
          </div>

          {/* Request a Visit */}
          <div>
            <Tag>School Visits</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-4">Request a Presentation</h2>
            <p className="text-gray-500 mb-6">We offer 30&ndash;45 minute presentations for students being considered for nomination. A representative will visit your school.</p>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50">
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {['Your Name', 'Email', 'School Name', 'School City'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-bold text-navy mb-1">{field}</label>
                    <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                  </div>
                ))}
              </div>
              <div className="mb-3">
                <label className="block text-sm font-bold text-navy mb-1">Preferred Date(s)</label>
                <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-navy mb-1">Notes</label>
                <div className="w-full h-16 bg-white border border-gray-200 rounded-md" />
              </div>
              <button className="bg-navy hover:bg-navy-light text-white font-bold text-sm px-6 py-2.5 rounded-lg transition">
                Request Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   FIND YOUR LEGION POST
   ══════════════════════════════════════════════════ */
function LegionPostFinder() {
  return (
    <section className="border-y border-gray-200 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-serif font-bold text-navy text-xl mb-2">Find Your Local Legion Post</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
              American Legion posts across Missouri sponsor and fund citizens. If you don&rsquo;t have a relationship with your local post, we&rsquo;ll help you make the connection. This is often the biggest drop-off point in the nomination journey &mdash; we&rsquo;re here to eliminate that barrier.
            </p>
          </div>
          <div className="shrink-0 flex gap-3">
            <a href="https://www.legion.org/posts" target="_blank" rel="noopener noreferrer" className="bg-navy hover:bg-navy-light text-white font-bold text-[13px] px-5 py-2 rounded-lg transition whitespace-nowrap">
              Find a Post &rarr;
            </a>
            <Link to="/contact" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-[13px] px-5 py-2 rounded-lg transition whitespace-nowrap">
              Need Help?
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   FAQ
   ══════════════════════════════════════════════════ */
function EducatorFAQ() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <Tag>Common Questions</Tag>
        <h2 className="font-serif font-bold text-navy text-3xl mb-8">Educator FAQ</h2>
        <FAQAccordion items={faqItems} />
        <div className="mt-6">
          <Link to="/faq" className="text-sm font-bold text-red hover:underline">
            See All FAQs &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   BOTTOM CTA
   ══════════════════════════════════════════════════ */
function BottomCTA() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif font-bold text-white text-2xl mb-4">Every Great Leader Starts Somewhere</h2>
        <p className="text-white/70 mb-6 max-w-lg mx-auto">Help your students start here. The nomination deadline for the 2026 session is May 1.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/nominate" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Nominate a Student
          </Link>
          <Link to="/contact" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════ */
export default function EducatorsPage() {
  return (
    <>
      <EducatorHero />
      <SessionSpotlight />
      <WhyNominate />
      <ForceMultiplier />
      <WhatStudentsExperience />
      <CurriculumAlignment />
      <StudentOutcomes />
      <EducatorTestimonials />
      <NominationToolkit />
      <DownloadableResources />
      <LegionPostFinder />
      <EducatorFAQ />
      <BottomCTA />
    </>
  )
}
