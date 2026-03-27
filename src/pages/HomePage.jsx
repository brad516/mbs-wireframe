import { Link } from 'react-router-dom'
import MediaPlaceholder from '../components/MediaPlaceholder'

/* ── Section tag label ── */
function Tag({ children, light }) {
  return (
    <span className={`inline-block text-[11px] font-bold tracking-[0.18em] uppercase mb-3 ${light ? 'text-gold-light' : 'text-gold'}`}>
      {children}
    </span>
  )
}

/* ══════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-navy overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-lighter" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 to-navy/60 z-[1]" />

      <div className="relative z-[2] text-center max-w-3xl px-6 py-10">
        <p className="text-gold-light text-xs font-bold tracking-[0.2em] uppercase mb-5">
          A Program of The American Legion, Department of Missouri
        </p>
        <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
          Where Missouri&rsquo;s<br />Next Leaders Begin
        </h1>
        <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto mb-9">
          For 85+ years, Boys State has challenged the best high school juniors in Missouri to lead, compete, and govern — one transformative week at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-base px-9 py-4 rounded-lg transition">
            Apply / Attend
          </Link>
          <Link to="/nominate" className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold text-sm px-7 py-3 rounded-lg transition">
            Nominate a Student
          </Link>
          <Link to="/give" className="bg-gold hover:bg-gold-light text-white font-bold text-base px-9 py-4 rounded-lg transition">
            Give / Sponsor
          </Link>
        </div>
      </div>

      {/* Video placeholder indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] text-white/25 text-sm">
        Hero Video / Full-Screen Photo Background
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   STATS BAR
   ══════════════════════════════════════════════════ */
const stats = [
  { number: '85+', label: 'Years of Leadership' },
  { number: '1,600', label: 'Delegates Each Summer' },
  { number: '50,000+', label: 'Alumni Nationwide' },
  { number: '2', label: 'Boys Nation Senators Annually' },
]

function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-200 py-9">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12">
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-navy leading-none">{s.number}</span>
                <span className="block text-[13px] font-medium text-gray-400 mt-1.5">{s.label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   WHAT IS MBS?
   ══════════════════════════════════════════════════ */
function WhatIsMBS() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Tag>The Program</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">What Is Missouri Boys State?</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">
              Missouri Boys State is a week-long immersive leadership and civic education program for high school juniors, sponsored by The American Legion.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Each summer, approximately 1,600 of Missouri&rsquo;s most promising young men gather at Lindenwood University to build a functioning 51st state from the ground up — complete with cities, counties, political parties, a legislature, and a judiciary.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Delegates campaign for office, draft legislation, argue cases, and learn firsthand how government works — not from a textbook, but by doing it.
            </p>
            <Link to="/students/what-is-boys-state" className="inline-block mt-6 bg-navy hover:bg-navy-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Learn More
            </Link>
          </div>
          <MediaPlaceholder label="Program Overview Photo or 30-sec Explainer Video" size="tall" showPlay />
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   STUDENT VOICES
   ══════════════════════════════════════════════════ */
const testimonials = [
  {
    quote: "Boys State taught me that leadership isn't about titles — it's about showing up and making things happen.",
    name: 'Student Name',
    detail: '2024 Delegate, City of [Name]',
  },
  {
    quote: "I went in knowing nobody and left with 30 guys I'll be friends with for life. And I got elected county sheriff.",
    name: 'Student Name',
    detail: '2024 Delegate, City of [Name]',
  },
  {
    quote: "My college interviewer asked me about Boys State more than anything else on my application. It was the thing that set me apart.",
    name: 'Student Name',
    detail: '2023 Delegate, Boys Nation Senator',
  },
]

function StudentVoices() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Tag>In Their Own Words</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-2">Student Voices</h2>
          <p className="text-gray-400">Hear directly from recent delegates about the week that changed everything.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-cream border border-gray-200 rounded-xl overflow-hidden">
              <MediaPlaceholder label={`Student Video ${i + 1}`} size="square" showPlay />
              <div className="p-5">
                <blockquote className="font-serif text-sm italic text-navy leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <strong className="text-sm text-navy">{t.name}</strong>
                  <span className="block text-xs text-gray-400">{t.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/students/testimonials" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Read More Student Stories
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   PROGRAM HIGHLIGHTS
   ══════════════════════════════════════════════════ */
const highlights = [
  { title: 'Campaign & Elections', desc: 'Run for office from city council to governor. Write speeches, build coalitions, debate opponents, and face the voters.', img: 'Mock Elections Photo' },
  { title: 'Legislature & Law', desc: 'Draft real bills, debate in committee, and pass legislation through both chambers of the Boys State legislature.', img: 'Legislature Photo' },
  { title: 'City Life & Competition', desc: 'Build your city from scratch. Compete in athletics, talent shows, and city challenges. Bond with your city-mates for life.', img: 'Campus Life Photo' },
  { title: 'Keynote Speakers', desc: 'Hear from governors, generals, CEOs, and civic leaders who share their journeys and challenge delegates to lead.', img: 'Leadership Moment Photo' },
]

function ProgramHighlights() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Tag>The Experience</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-2">A Week Like No Other</h2>
          <p className="text-gray-400">From campaign speeches to courtroom arguments, every day at Boys State is designed to challenge, inspire, and transform.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <MediaPlaceholder label={h.img} size="landscape" />
              <div className="p-5">
                <h3 className="font-serif font-bold text-navy text-lg mb-1">{h.title}</h3>
                <p className="text-sm text-gray-400">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/students/week-in-the-life" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            See the Full Week
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   ALUMNI IMPACT
   ══════════════════════════════════════════════════ */
const alumniRoles = [
  { role: 'Governors', detail: 'Multiple Missouri governors are MBS alumni' },
  { role: 'U.S. Senators', detail: 'Leaders who serve at the highest levels of government' },
  { role: 'Military Officers', detail: 'Generals and admirals who learned to lead at Boys State' },
  { role: 'CEOs & Entrepreneurs', detail: 'Business leaders across every industry' },
]

function AlumniImpact() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MediaPlaceholder label="Alumni Collage / Notable Alumni Grid" size="tall" />
          <div>
            <Tag>The Legacy</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">MBS Alumni Are Everywhere</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              For more than 80 years, Missouri Boys State has shaped the leaders who shape Missouri — and the nation.
            </p>
            <div className="space-y-0">
              {alumniRoles.map((a, i) => (
                <div key={i} className="flex items-baseline gap-3 py-3 border-b border-gray-200">
                  <span className="font-serif font-bold text-sm text-red min-w-[140px] shrink-0">{a.role}</span>
                  <span className="text-sm text-gray-400">{a.detail}</span>
                </div>
              ))}
            </div>
            <Link to="/alumni/notable" className="inline-block mt-6 bg-navy hover:bg-navy-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Meet Notable Alumni
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   AUDIENCE PATHWAYS
   ══════════════════════════════════════════════════ */
const paths = [
  { to: '/students', icon: '\u{1F393}', title: 'Student', desc: 'Discover what Boys State is, what the week looks like, and how to get nominated.', color: 'border-t-red' },
  { to: '/parents', icon: '\u{1F468}\u200D\u{1F469}\u200D\u{1F466}', title: 'Parent', desc: 'Everything you need to know about safety, cost, outcomes, and the nomination process.', color: 'border-t-[#2b82c9]' },
  { to: '/educators', icon: '\u{1F3EB}', title: 'Educator', desc: 'Tools, resources, and a nomination toolkit to help you send your best students.', color: 'border-t-[#1aaa7a]' },
  { to: '/alumni', icon: '\u2B50', title: 'Alumni', desc: 'Reconnect, give back, and stay involved with the program that shaped you.', color: 'border-t-gold' },
]

function AudiencePaths() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Tag>Find Your Path</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl">I Am A...</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {paths.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={`bg-white border border-gray-200 ${p.color} border-t-4 rounded-xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all`}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-serif font-bold text-navy text-xl mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.desc}</p>
              <span className="inline-block mt-4 text-sm font-bold text-navy">Explore &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   DONATE STRIP
   ══════════════════════════════════════════════════ */
function DonateStrip() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <Tag light>Support the Mission</Tag>
            <h2 className="font-serif font-bold text-white text-3xl lg:text-4xl mb-4">Every Dollar Sends a Future Leader</h2>
            <p className="text-white/80 text-base leading-relaxed">
              It costs approximately <strong className="text-gold-light">$375 per delegate</strong> to deliver the Boys State experience. Your gift — at any level — directly funds scholarships, program operations, and the next generation of Missouri&rsquo;s civic leaders.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-center gap-3">
            <Link to="/give" className="bg-gold hover:bg-gold-light text-white font-bold text-base px-9 py-4 rounded-lg transition w-full text-center">
              Make a Gift
            </Link>
            <Link to="/give/corporate" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-base px-9 py-4 rounded-lg transition w-full text-center">
              Corporate Sponsorship
            </Link>
            <p className="text-xs text-white/40 mt-1">Missouri Boys State is a 501(c)(3). All gifts are tax-deductible.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   NEWS & EVENTS
   ══════════════════════════════════════════════════ */
const newsItems = [
  { date: 'Mar 15, 2026', title: '2026 Session Dates Announced: June 13–19 at Lindenwood University', desc: 'Registration opens April 1 for all sponsored delegates.' },
  { date: 'Feb 28, 2026', title: 'Three MBS Alumni Named to Missouri Supreme Court Commission', desc: 'The tradition of civic leadership continues at the highest levels.' },
  { date: 'Feb 10, 2026', title: 'Scholarship Fund Surpasses $200K Goal for 2026', desc: 'Community generosity ensures no delegate misses out due to cost.' },
]

const events = [
  { month: 'APR', day: '18', title: 'Spring Trivia Night', loc: 'Fundraiser at The Coliseum, St. Louis', link: '/events/trivia', cta: 'Get Tickets' },
  { month: 'MAY', day: '10', title: 'Annual Golf Tournament', loc: 'Old Warson Country Club', link: '/events/golf', cta: 'Register' },
  { month: 'JUN', day: '13', title: '2026 Boys State Session Begins', loc: 'Lindenwood University, St. Charles', link: '/students', cta: 'Learn More' },
]

const keyDates = [
  { label: 'Nominations Open', value: 'January 15' },
  { label: 'Nominations Close', value: 'May 1' },
  { label: '2026 Session', value: 'June 13–19', highlight: true },
  { label: 'Boys Nation', value: 'July (TBD)' },
  { label: 'Alumni Homecoming', value: 'October (TBD)' },
]

function NewsEvents() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr_280px] gap-10">
          {/* News */}
          <div>
            <Tag>Latest News</Tag>
            <div className="mb-6">
              {newsItems.map((n, i) => (
                <a key={i} href="#" className="block py-4 border-b border-gray-200 first:pt-0 hover:opacity-80 transition">
                  <span className="text-[11px] font-bold text-gold tracking-wide uppercase">{n.date}</span>
                  <h4 className="font-serif text-[15px] font-bold text-navy my-1 leading-snug">{n.title}</h4>
                  <p className="text-[13px] text-gray-400">{n.desc}</p>
                </a>
              ))}
            </div>
            <Link to="/news" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-[13px] px-5 py-2 rounded-lg transition">
              All News &rarr;
            </Link>
          </div>

          {/* Events */}
          <div>
            <Tag>Upcoming Events</Tag>
            <div className="space-y-4 mb-6">
              {events.map((e, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-red text-white rounded-lg px-3 py-2 text-center shrink-0 min-w-[56px]">
                    <span className="block text-[10px] font-bold tracking-wider uppercase opacity-80">{e.month}</span>
                    <span className="block font-serif text-[22px] font-bold leading-none">{e.day}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-[15px] font-bold text-navy">{e.title}</h4>
                    <p className="text-[13px] text-gray-400">{e.loc}</p>
                    <Link to={e.link} className="text-[13px] font-bold text-red mt-1 inline-block">{e.cta} &rarr;</Link>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/events" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-[13px] px-5 py-2 rounded-lg transition">
              All Events &rarr;
            </Link>
          </div>

          {/* Key Dates */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 self-start">
            <Tag>Key Dates</Tag>
            <div>
              {keyDates.map((d, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-2.5 text-[13px] ${
                    d.highlight
                      ? 'bg-gold-bg -mx-3 px-3 py-2.5 rounded-md'
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
  )
}

/* ══════════════════════════════════════════════════
   HOME PAGE
   ══════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhatIsMBS />
      <StudentVoices />
      <ProgramHighlights />
      <AlumniImpact />
      <AudiencePaths />
      <DonateStrip />
      <NewsEvents />
    </>
  )
}
