import { Link } from 'react-router-dom'
import Tag from '../components/Tag'
import MediaPlaceholder from '../components/MediaPlaceholder'
import FAQAccordion from '../components/FAQAccordion'

/* ══════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════ */

const faqItems = [
  { question: 'Is my son safe at Boys State?', answer: 'Absolutely. Citizens are supervised 24/7 by trained adult counselors, many of whom are educators and military veterans. On-site medical staff are available around the clock. The program takes place on the secure, enclosed campus of Lindenwood University.' },
  { question: 'How much does it cost?', answer: 'There is no cost to families. Every citizen is fully sponsored by alumni, local businesses, American Legion posts, and community organizations through a $500 sponsorship. We do not accept payment from parents or families \u2014 this ensures that no young man is ever limited by finances.' },
  { question: 'Is my son covered by insurance in the event of an accident?', answer: 'Yes. Missouri Boys State carries insurance coverage for all citizens during the program. Details are provided upon acceptance. Please ensure any existing medical conditions or medications are noted on the application.' },
  { question: 'My son has a medical condition, physical disability, and/or dietary restrictions. Can he still participate?', answer: 'Yes. We accommodate medical needs, physical disabilities, and dietary restrictions. Please note any requirements on the application and contact headquarters to discuss specific accommodations. Our on-site medical staff will work with you to ensure your son\u2019s needs are met throughout the week.' },
  { question: 'Can parents visit during the week?', answer: 'Parents are welcome to attend the inauguration ceremony on Thursday and other designated events. The full week schedule will be provided after acceptance. Day-to-day visits are limited to preserve the immersive experience \u2014 this is intentional and part of what makes the week so transformative.' },
  { question: 'When can I pick up my son?', answer: 'The program concludes on Friday after the Democracy in Action ceremony and awards. Specific pick-up times and logistics are communicated prior to the session. Some Legion posts and schools arrange group transportation.' },
  { question: 'What if my son is homeschooled?', answer: 'Homeschooled students are welcome and eligible. The same eligibility criteria apply: he must have completed his junior year equivalent and be between 15 and 19 years old. Contact your local American Legion post for sponsorship and nomination.' },
  { question: 'What if my son has to take the ACT on Saturday?', answer: 'We understand scheduling conflicts. Contact headquarters at 660.429.2761 to discuss late arrival options. We make every effort to accommodate standardized testing schedules.' },
  { question: 'How does the nomination process work?', answer: 'Students are typically nominated by their local American Legion post, school counselor, or a community leader. If your son hasn\u2019t been nominated, contact your local Legion post or school counselor to express interest. You can also reach out to us directly.' },
  { question: 'Will Boys State help with college admissions?', answer: 'Yes. Boys State is widely recognized by colleges and universities as a premier leadership program. Citizens frequently cite their Boys State experience in college essays and interviews. The program also offers college credit through Lindenwood University and access to over $2M in scholarships.' },
  { question: 'Can I get copies of the photos taken during the program?', answer: 'Yes. Photos and videos from the session are shared through our website, social media, and the MBS app. City counselors also capture photos throughout the week. Session archives are available at moboysstate.org.' },
  { question: 'What should my son bring?', answer: 'A detailed packing list is provided after acceptance. Generally: comfortable clothing for a week, business casual attire for formal events (optional but recommended if running for office), personal toiletries, any medications, and a positive attitude. Citizens may also bring a small amount of cash (~$45) for snacks and the MBS Store.' },
]

const parentTestimonials = [
  { quote: "He left as a quiet kid who wasn\u2019t sure about going. He came back confident, articulate, and already talking about running for student council. I\u2019ve never seen a change like that in one week.", name: 'Parent Name', detail: 'Parent of 2024 Citizen' },
  { quote: "I was nervous about sending him for a whole week. By Tuesday he was calling to tell me he got elected county commissioner. The growth was instant and it hasn\u2019t stopped.", name: 'Parent Name', detail: 'Parent of 2023 Citizen' },
  { quote: "His college interviewer spent 20 minutes asking about Boys State. It was the single strongest thing on his application. Worth every ounce of effort to get him there.", name: 'Parent Name', detail: 'Parent of 2022 Citizen' },
]

/* ══════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════ */
function ParentHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-lighter" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 to-navy/60 z-[1]" />

      <div className="relative z-[2] text-center max-w-3xl px-6 py-10">
        <p className="text-gold-light text-xs font-bold tracking-[0.2em] uppercase mb-5">
          For Parents & Guardians
        </p>
        <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
          The Week That<br />Changes Everything
        </h1>
        <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Your son has been identified as a leader. Missouri Boys State is where that potential becomes real &mdash; in a safe, supervised, fully sponsored program that&rsquo;s transformed tens of thousands of young men since 1938.
        </p>

        {/* Key parent stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 mb-10">
          {[
            { number: '$0', label: 'Cost to Your Family', highlight: true },
            { number: '24/7', label: 'Adult Supervision' },
            { number: '85+', label: 'Years Running' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12">
              <div className="text-center">
                <span className={`block font-serif text-3xl sm:text-4xl font-bold leading-none ${s.highlight ? 'text-gold-light' : 'text-white'}`}>{s.number}</span>
                <span className="block text-[12px] font-medium text-white/50 mt-1">{s.label}</span>
              </div>
              {i < 2 && <div className="hidden sm:block w-px h-8 bg-white/20" />}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-base px-9 py-4 rounded-lg transition">
            Apply Now
          </Link>
          <a href="#what-to-know" className="border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold text-sm px-7 py-3 rounded-lg transition">
            What You Need to Know &darr;
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] text-white/20 text-sm">
        Parent Hero Photo Background
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
            2026 Session: June 13&ndash;19 at Lindenwood University, St. Charles, MO
          </p>
          <span className="hidden sm:inline text-white/40">|</span>
          <p className="text-white/90 text-sm">
            Applications close <strong>May 1</strong>
          </p>
          <Link to="/apply" className="bg-white text-red font-bold text-xs px-4 py-1.5 rounded-md hover:bg-cream transition ml-1">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   AT A GLANCE + VIDEO
   ══════════════════════════════════════════════════ */
function AtAGlanceWithVideo() {
  return (
    <section id="what-to-know" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Tag>At a Glance</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">What Is Missouri Boys State?</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Missouri Boys State is an 8-day immersive leadership and civic education program where ~850 rising high school seniors build a complete state government from scratch &mdash; with real elections, a working legislature, courts, media outlets, and businesses.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              It&rsquo;s held every June at Lindenwood University and is completely free to families. Every citizen is fully sponsored through donations from alumni, businesses, and American Legion posts across Missouri.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '\u{1F6E1}\uFE0F', label: 'Safe & supervised 24/7' },
                { icon: '\u{1F4B0}', label: '$0 cost to families' },
                { icon: '\u{1F393}', label: 'College credit available' },
                { icon: '\u{1F3C6}', label: '$2M+ in scholarships' },
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
   SAFETY & SUPERVISION
   ══════════════════════════════════════════════════ */
function Safety() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Tag>Safety First</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-4">Your Son Is in Good Hands</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              We know this is a big decision. Missouri Boys State operates on the secure, enclosed campus of Lindenwood University with safety built into every layer of the program.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                '24/7 adult supervision by trained counselors (many are educators and veterans)',
                'On-site medical staff and emergency protocols around the clock',
                'Secure campus with controlled access points',
                'All ~200 staff members are background-checked',
                'Structured daily schedule with designated rest periods',
                'Electronic device policy to keep citizens engaged and present',
                'Code of Conduct enforced throughout the program',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start text-sm text-gray-500">
                  <span className="text-red font-bold mt-0.5">{'\u2713'}</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 leading-relaxed">
              Most staff members are MBS alumni themselves &mdash; volunteers who return year after year because the program changed their lives, too.
            </p>
          </div>
          <MediaPlaceholder label="Lindenwood University campus — safe, enclosed, supervised" size="tall" />
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   WHAT HE'LL EXPERIENCE (Week overview for parents)
   ══════════════════════════════════════════════════ */
function WeekOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Tag>The Week</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">What the Week Looks Like</h2>
          <p className="text-gray-400">Your son will be busy from the moment he arrives. Here&rsquo;s the arc of the week at a glance.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { day: 'Saturday', title: 'Arrival & Orientation', desc: 'Check in at Lindenwood, meet his city of ~50 citizens and counselors, get assigned to a political party, and start organizing.' },
            { day: 'Sunday', title: 'First Elections', desc: 'City elections for Mayor, City Council, Senators, and Representatives. His city government is operational by evening.' },
            { day: 'Mon\u2013Tue', title: 'Legislature & County', desc: 'General Assembly convenes. Bills debated and passed. County elections expand government. Courts begin hearing cases.' },
            { day: 'Wednesday', title: 'Statewide Primary', desc: 'Candidates for Governor face off. The gubernatorial debate is the highlight of the week. Campaign energy peaks.' },
            { day: 'Thursday', title: 'Governor Elected', desc: 'The statewide general election. Inauguration ceremony (parents welcome). Full state government is running.' },
            { day: 'Friday', title: 'Awards & Closing', desc: 'Democracy in Action ceremony. Citizen of the Week, Model City, and scholarship awards. He comes home a different person.' },
          ].map((d, i) => (
            <div key={i} className="bg-cream border border-gray-200 rounded-xl p-5">
              <span className="text-[10px] font-bold tracking-wider uppercase text-red">{d.day}</span>
              <h3 className="font-serif font-bold text-navy text-base mt-1 mb-1">{d.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/students/week-in-the-life" className="text-sm font-bold text-red hover:underline">
            See the Full Day-by-Day Breakdown &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   WHAT HE'LL LEARN (Academics)
   ══════════════════════════════════════════════════ */
function WhatHellLearn() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Tag>Academics</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">What Your Son Will Learn</h2>
          <p className="text-gray-400">This isn&rsquo;t summer camp. Missouri Boys State is an accredited academic program with 9 schools of instruction taught by practicing professionals.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Government & Civics', desc: 'Build a three-branch government at city, county, and state levels. He won\u2019t study government \u2014 he\u2019ll run one.' },
            { title: 'Leadership & Public Speaking', desc: 'Campaign speeches, legislative debates, courtroom arguments. Real confidence built through real experience.' },
            { title: 'Critical Thinking', desc: 'Drafting bills, resolving disputes, managing a budget \u2014 the program demands analytical thinking at every turn.' },
            { title: 'Journalism & Media', desc: 'Citizens run a daily newspaper, radio station, and TV news show in professional studios.' },
            { title: 'Business & Economics', desc: 'Start a business, hire employees, manage inventory, pay taxes \u2014 all using the Boys State economy.' },
            { title: 'College Credit', desc: 'Accredited by Lindenwood University. Pass the final exam with 70%+ and apply for 2\u20133 hours of credit.' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif font-bold text-navy text-base mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/about/program-structure" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            See Full Program Structure &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   SPEAKERS (parent framing)
   ══════════════════════════════════════════════════ */
function SpeakersForParents() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MediaPlaceholder label="General Assembly — keynote speaker addressing citizens" size="tall" />
          <div>
            <Tag>Every Evening</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-4">He&rsquo;ll Hear From Real Leaders</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Every night, the entire state gathers for General Assembly featuring keynote speakers who are current and former governors, military generals, members of Congress, Fortune 500 CEOs, and civic leaders &mdash; many of whom are Boys State alumni.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Your son won&rsquo;t just listen. He&rsquo;ll ask them questions directly during live Q&amp;A sessions. These are real conversations with real leaders, in the same room.
            </p>
            <p className="text-sm text-gray-400">
              Past speakers have included sitting governors, presidential appointees, federal judges, and commanders of military installations. The caliber of access is unlike anything available in a typical high school experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   WHAT HE'LL COME HOME WITH
   ══════════════════════════════════════════════════ */
function WhatHellComeHomeWith() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase mb-3 text-gold-light">The Transformation</span>
          <h2 className="font-serif font-bold text-white text-3xl mb-3">What He&rsquo;ll Come Home With</h2>
          <p className="text-white/60">Parents consistently tell us their sons come home changed. Here&rsquo;s what you can expect.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: 'Confidence', desc: 'The kind that comes from standing up in front of 100 people and earning their vote, or arguing a case in front of a judge.' },
            { title: 'Lifelong Friendships', desc: '30\u201350 guys in his city who went through the same intense week. Many alumni say these are the strongest friendships of their lives.' },
            { title: 'A Stronger Application', desc: 'Boys State is recognized by every major university. It signals leadership, initiative, and civic engagement in a way few programs can.' },
            { title: 'Civic Understanding', desc: 'Not from a textbook \u2014 from doing it. He\u2019ll understand how government works because he built one.' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-serif font-bold text-white text-base mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   SCHOLARSHIPS
   ══════════════════════════════════════════════════ */
function Scholarships() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Tag>Scholarships</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">Real Scholarship Dollars</h2>
          <p className="text-gray-400">Boys State isn&rsquo;t just a line on a resume. It comes with real financial opportunities for college.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { amount: '$100,000', label: 'Vogel Family Man in the Arena Scholarship', note: '1 citizen per year' },
            { amount: '$10,000', label: 'Wayne S. Gregory Citizen of the Week', note: 'Plus $5K and $2.5K runners-up' },
            { amount: 'Full Tuition', label: 'Lindenwood Citizen Leadership Scholarship', note: '4-year full tuition' },
            { amount: '$2M+', label: 'Harley Wyatt Memorial Program', note: 'From MO colleges & universities' },
          ].map((s, i) => (
            <div key={i} className="bg-cream border border-gray-200 rounded-xl p-6 text-center">
              <span className="block font-serif font-bold text-red text-2xl mb-1">{s.amount}</span>
              <span className="block text-sm font-bold text-navy mb-1">{s.label}</span>
              <span className="block text-xs text-gray-400">{s.note}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/students/college-credit" className="text-sm font-bold text-red hover:underline">
            Full Scholarship & College Credit Details &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   SPONSORSHIP MODEL
   ══════════════════════════════════════════════════ */
function SponsorshipModel() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Tag>How It&rsquo;s Funded</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-2">Every Citizen Is Fully Sponsored</h2>
        </div>
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-8">
          <div className="py-3 border-b border-gray-200">
            <span className="text-sm font-bold text-navy">Cost to Families:</span>
            <p className="text-lg font-bold text-red mt-1">$0 &mdash; There is no fee for parents or families.</p>
          </div>
          <div className="py-3 border-b border-gray-200">
            <span className="text-sm font-bold text-navy">How It Works:</span>
            <p className="text-sm text-gray-400 mt-1">Each citizen is sponsored through a $500 sponsorship funded by MBS alumni, local businesses, American Legion posts, and community organizations. We do not accept payment from parents or families.</p>
          </div>
          <div className="py-3 border-b border-gray-200">
            <span className="text-sm font-bold text-navy">What&rsquo;s Included:</span>
            <p className="text-sm text-gray-400 mt-1">Housing at Lindenwood University, three meals daily, all program materials, session t-shirt, campus activities, speakers, and events for the full week.</p>
          </div>
          <div className="py-3 border-b border-gray-200">
            <span className="text-sm font-bold text-navy">Why We Do It This Way:</span>
            <p className="text-sm text-gray-400 mt-1">We believe every young man who is nominated should be able to attend, regardless of financial circumstances. This model ensures that ability &mdash; not ability to pay &mdash; determines who attends Missouri Boys State.</p>
          </div>
          <div className="py-3 bg-gold-bg -mx-4 px-4 rounded-md mt-2">
            <span className="text-sm font-bold text-navy">Want to pay it forward?</span>
            <p className="text-sm text-gray-400 mt-1">If you&rsquo;d like to give back, consider <Link to="/give" className="text-red font-bold hover:underline">sponsoring a future citizen</Link>. Your $500 gift sends one more young man to Boys State.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   PARENT TESTIMONIALS
   ══════════════════════════════════════════════════ */
function ParentTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Tag>From Parents Like You</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">What Other Parents Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {parentTestimonials.map((t, i) => (
            <div key={i} className="bg-cream border border-gray-200 rounded-xl p-6">
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
   ELIGIBILITY (compact)
   ══════════════════════════════════════════════════ */
function Eligibility() {
  return (
    <section className="border-y border-gray-200 py-12 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-serif font-bold text-navy text-xl mb-2">Is Your Son Eligible?</h3>
            <p className="text-sm text-gray-500">
              <strong className="text-navy">Junior year complete</strong> at a Missouri high school &middot; <strong className="text-navy">Age 15&ndash;19</strong> by the first day &middot; <strong className="text-navy">Nominated</strong> by a school counselor, Legion post, or community leader
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-[13px] px-5 py-2 rounded-lg transition">
              Apply Now
            </Link>
            <Link to="/contact" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-[13px] px-5 py-2 rounded-lg transition">
              Contact Us
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
function ParentFAQ() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <Tag>Common Questions</Tag>
        <h2 className="font-serif font-bold text-navy text-3xl mb-8">Parent & Guardian FAQ</h2>
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
        <h2 className="font-serif font-bold text-white text-2xl mb-4">Ready to help your son take the next step?</h2>
        <p className="text-white/70 mb-6">Applications for the 2026 session are open. The deadline is May 1.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Apply Now
          </Link>
          <Link to="/contact" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Contact Us
          </Link>
          <Link to="/students" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Student Info
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════ */
export default function ParentsPage() {
  return (
    <>
      <ParentHero />
      <SessionSpotlight />
      <AtAGlanceWithVideo />
      <Safety />
      <WeekOverview />
      <WhatHellLearn />
      <SpeakersForParents />
      <WhatHellComeHomeWith />
      <Scholarships />
      <SponsorshipModel />
      <ParentTestimonials />
      <Eligibility />
      <ParentFAQ />
      <BottomCTA />
    </>
  )
}
