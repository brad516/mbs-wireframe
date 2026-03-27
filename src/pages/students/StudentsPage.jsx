import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'
import FAQAccordion from '../../components/FAQAccordion'

/* ══════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════ */

const heroStats = [
  { number: '$0', label: 'Cost to You', highlight: true },
  { number: '850', label: 'Citizens Per Summer' },
  { number: '100+', label: 'Positions to Hold' },
]

const weekPhases = [
  { day: 'Saturday', title: 'Arrival & City Formation', desc: 'You arrive at Lindenwood, meet your city of ~50 citizens, get assigned to the Federalist or Nationalist party, and start organizing from scratch. By midnight, platforms are being debated and alliances are forming.', img: 'Arrival — Checking in, meeting the city', accent: 'bg-red' },
  { day: 'Sunday', title: 'Elections & City Government', desc: 'Caucuses nominate candidates, campaigns launch, speeches echo through the halls. By afternoon your city has a Mayor, City Council, Senators, and Representatives. City government is live before dinner.', img: 'Sunday — Campaigns and city elections', accent: 'bg-red' },
  { day: 'Mon\u2013Tue', title: 'Legislature, Courts & Counties', desc: 'The General Assembly convenes. Bills are drafted and debated. Attorneys pass the Bar Exam. County elections expand government further — Commissioners, Sheriffs, Judges, and Prosecutors take office.', img: 'Legislature in session — Debates and committee hearings', accent: 'bg-navy' },
  { day: 'Wednesday', title: 'Statewide Primary & Governor\u2019s Race', desc: 'The stakes go statewide. Candidates for Governor face off in an open primary. That evening, the nominees debate before the entire state. Campaign war rooms run through the night.', img: 'Gubernatorial debate — Packed auditorium', accent: 'bg-gold' },
  { day: 'Thursday', title: 'General Election & Inauguration', desc: 'Every citizen votes. The Governor is elected and inaugurated. Cabinet confirmed by the Senate. The full machinery of state government — legislative, executive, judicial — is running. You built this.', img: 'Inauguration — The Governor takes the oath', accent: 'bg-navy' },
  { day: 'Friday', title: 'Democracy in Action & Brotherhood', desc: 'Citizen of the Week. Model City. Model County. But it\u2019s the quiet moments that hit hardest — the friendships, the late-night conversations, the realization that this week changed something in you.', img: 'Closing — Awards, brotherhood, lasting bonds', accent: 'bg-red' },
]

const schoolHighlights = [
  { name: 'Law', desc: 'Pass the Bar Exam. Try cases. Become a judge.', icon: '\u2696\uFE0F' },
  { name: 'Journalism & Media', desc: 'Run the newspaper, radio, or TV news show.', icon: '\u{1F4F0}' },
  { name: 'Commerce', desc: 'Launch a business. Hire employees. Compete for Outstanding Business.', icon: '\u{1F4B0}' },
  { name: 'Law Enforcement', desc: 'Apply for the MBS Highway Patrol \u2014 the most elite unit at Boys State.', icon: '\u{1F6A8}' },
  { name: 'Legislative & Executive Policy', desc: 'Draft bills, debate legislation, and run the Governor\u2019s office.', icon: '\u{1F3DB}\uFE0F' },
  { name: 'Campaigning', desc: 'Run campaigns, build coalitions, and win elections.', icon: '\u{1F4E3}' },
]

const testimonials = [
  { quote: "Boys State taught me that leadership isn\u2019t about titles \u2014 it\u2019s about showing up and making things happen.", name: 'Student Name', detail: '2024 Citizen, City of [Name]' },
  { quote: "I went in knowing nobody and left with 30 guys I\u2019ll be friends with for life. And I got elected county sheriff.", name: 'Student Name', detail: '2024 Citizen, City of [Name]' },
  { quote: "My college interviewer asked me about Boys State more than anything else on my application. It was the thing that set me apart.", name: 'Student Name', detail: '2023 Citizen, Boys Nation Senator' },
]

const subPages = [
  { to: '/students/what-is-boys-state', title: 'What Is Boys State?', desc: 'Deep dive into the program and what makes it unlike anything else.', color: 'border-t-red' },
  { to: '/students/week-in-the-life', title: 'A Week in the Life', desc: 'Full day-by-day breakdown from Saturday to Friday.', color: 'border-t-navy' },
  { to: '/students/boys-nation', title: 'Boys Nation', desc: 'Represent Missouri in Washington, D.C.', color: 'border-t-gold' },
  { to: '/students/college-credit', title: 'College Credit & Scholarships', desc: 'Lindenwood credit and $2M+ in scholarship opportunities.', color: 'border-t-[#2b82c9]' },
  { to: '/about/program-structure', title: 'Program Structure', desc: 'All 9 schools, 100+ positions, and the full government structure.', color: 'border-t-[#7040b0]' },
  { to: '/students/orientation', title: 'Orientation & Prep', desc: 'What to bring, what to expect, and how to prepare.', color: 'border-t-[#1aaa7a]' },
]

const faqItems = [
  { question: 'What is Missouri Boys State?', answer: 'An 8-day immersive leadership and civic education program for rising high school seniors. You and ~850 other citizens build a functioning state government from scratch \u2014 complete with elections, legislature, courts, media, and businesses.' },
  { question: 'How much does it cost?', answer: 'Nothing. Every citizen is fully sponsored. There is no fee for you or your family. You may want to bring ~$45 for snacks, toiletries, and the official MBS t-shirt.' },
  { question: 'What should I expect?', answer: 'A fast-paced, action-packed week. You\u2019ll hit the ground running Saturday night with party organization and caucuses. Elections, legislation, court cases, and campaigns happen every day. You\u2019ll also attend a school of instruction, compete in athletics, and hear from keynote speakers every night.' },
  { question: 'What are the dates for 2026?', answer: 'The 2026 session runs June 13\u201319 at Lindenwood University in St. Charles, MO.' },
  { question: 'What should I bring?', answer: 'Comfortable clothes for the week, business casual attire if you plan to run for office, personal toiletries, any medications, and a positive attitude. A full packing list is provided after acceptance.' },
  { question: 'Can I bring a musical instrument?', answer: 'Yes! There are often informal jam sessions and talent show opportunities during the week.' },
]

/* ══════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════ */
function StudentHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-lighter" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 to-navy/60 z-[1]" />

      <div className="relative z-[2] text-center max-w-3xl px-6 py-10">
        <p className="text-gold-light text-xs font-bold tracking-[0.2em] uppercase mb-5">
          For Students
        </p>
        <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
          This Is Your Week
        </h1>
        <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto mb-8">
          850 citizens. 8 days. You&rsquo;ll build a government, run for office, try cases in court, launch businesses, and make friendships that last a lifetime. And it won&rsquo;t cost you a dime.
        </p>

        {/* Inline stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 mb-10">
          {heroStats.map((s, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12">
              <div className="text-center">
                <span className={`block font-serif text-3xl sm:text-4xl font-bold leading-none ${s.highlight ? 'text-gold-light' : 'text-white'}`}>{s.number}</span>
                <span className="block text-[12px] font-medium text-white/50 mt-1">{s.label}</span>
              </div>
              {i < heroStats.length - 1 && <div className="hidden sm:block w-px h-8 bg-white/20" />}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-base px-9 py-4 rounded-lg transition">
            Apply Now
          </Link>
          <a href="#the-week" className="border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold text-sm px-7 py-3 rounded-lg transition">
            See the Week &darr;
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] text-white/20 text-sm">
        Student Hero Photo / Video Background
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   QUICK EXPLAINER + VIDEO
   ══════════════════════════════════════════════════ */
function QuickExplainer() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Tag>New Here?</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">What Is Missouri Boys State?</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">
              Missouri Boys State is a week-long program where you and 850 other rising seniors build an entire state government from the ground up &mdash; with real elections, real legislation, real courts, and real consequences.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              You&rsquo;re randomly assigned to a city and a political party. From there, everything is up to you. Run for mayor. Draft a bill. Start a business. Join the Highway Patrol. Argue a case before the Supreme Court.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              It&rsquo;s held every June at Lindenwood University in St. Charles, and it&rsquo;s completely free &mdash; every citizen is fully sponsored.
            </p>
            <Link to="/students/what-is-boys-state" className="inline-block mt-6 text-sm font-bold text-red hover:underline">
              Read the Full Overview &rarr;
            </Link>
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
   WEEK CAROUSEL
   ══════════════════════════════════════════════════ */
function WeekCarousel() {
  return (
    <section id="the-week" className="py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Tag>The Experience</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-3">A Week Like No Other</h2>
          <p className="text-gray-400">Scroll through the week that changes everything.</p>
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 lg:px-[calc((100vw-1200px)/2+24px)] pb-6 -mb-6" style={{ scrollbarWidth: 'thin' }}>
          {weekPhases.map((phase, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[85vw] sm:w-[420px] lg:w-[480px] bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative">
                <MediaPlaceholder label={phase.img} size="landscape" />
                <span className={`absolute top-3 left-3 ${phase.accent} text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-md`}>
                  {phase.day}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{phase.desc}</p>
              </div>
            </div>
          ))}
          {/* CTA card */}
          <div className="snap-start shrink-0 w-[85vw] sm:w-[420px] lg:w-[480px] bg-navy rounded-xl flex flex-col items-center justify-center p-12 text-center">
            <h3 className="font-serif font-bold text-white text-2xl mb-4">Ready to Start<br />Your Week?</h3>
            <p className="text-white/70 text-sm mb-6 max-w-xs">Join 850 citizens this summer for the experience of a lifetime.</p>
            <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Apply Now
            </Link>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 bottom-6 w-24 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   WHAT CAN YOU DO? (Schools)
   ══════════════════════════════════════════════════ */
function SchoolsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Tag>What Will You Do?</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">Pick Your Path</h2>
          <p className="text-gray-400">Every citizen attends one school of instruction for the week. Your school determines which positions you can hold &mdash; and there are over 100 to choose from.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schoolHighlights.map((s) => (
            <div key={s.name} className="bg-cream border border-gray-200 rounded-xl p-6 flex gap-4 items-start hover:shadow-md transition">
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
  )
}

/* ══════════════════════════════════════════════════
   SPEAKERS
   ══════════════════════════════════════════════════ */
const pastSpeakers = [
  { name: 'Governor [Name]', role: 'Governor of Missouri', detail: 'MBS Alumnus', year: '2024' },
  { name: 'General [Name]', role: 'U.S. Army Major General', detail: 'MBS Alumnus', year: '2024' },
  { name: 'Senator [Name]', role: 'U.S. Senate, Missouri', detail: '', year: '2023' },
  { name: 'CEO [Name]', role: 'Fortune 500 CEO', detail: 'MBS Alumnus', year: '2023' },
  { name: 'Secretary [Name]', role: 'Former Cabinet Secretary', detail: '', year: '2022' },
  { name: 'Judge [Name]', role: 'Missouri Supreme Court', detail: 'MBS Alumnus', year: '2022' },
]

function Speakers() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Tag>Every Night</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">Hear From People Who Changed the World</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Every evening, the entire state gathers for General Assembly &mdash; featuring keynote speakers who are governors, generals, members of Congress, CEOs, and civic leaders. Many of them are Boys State alumni who started right where you are.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              You won&rsquo;t just listen. You&rsquo;ll ask them questions directly during live Q&amp;A sessions. These aren&rsquo;t distant figures on a screen &mdash; they&rsquo;re in the room with you.
            </p>
            <Link to="/sessions" className="text-sm font-bold text-red hover:underline">
              See Past Session Speakers &rarr;
            </Link>
          </div>
          <div>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-navy px-5 py-3">
                <span className="text-[10px] font-bold tracking-wider uppercase text-white/50">Past General Assembly Speakers</span>
              </div>
              <div className="divide-y divide-gray-100">
                {pastSpeakers.map((s, i) => (
                  <div key={i} className="px-5 py-3 flex items-center gap-3">
                    <div className="w-9 h-9 bg-cream rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-gray-300">{s.year}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-bold text-navy block truncate">{s.name}</span>
                      <span className="text-xs text-gray-400">{s.role}</span>
                    </div>
                    {s.detail && (
                      <span className="text-[10px] font-bold text-gold bg-gold-bg px-2 py-0.5 rounded shrink-0">{s.detail}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   AWARDS & COMPETITION
   ══════════════════════════════════════════════════ */
function AwardsCompetition() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Tag>Compete & Win</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">Your Effort Gets Recognized</h2>
          <p className="text-gray-400">Boys State isn&rsquo;t just about participation &mdash; it&rsquo;s about pushing yourself. The program awards real scholarships and recognition to citizens who go all in.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { award: 'Citizen of the Week', prize: '$10,000', desc: 'The highest individual honor. Selected by staff based on leadership, participation, and character across the entire week.', highlight: true },
            { award: 'Model City', prize: 'Trophy & Recognition', desc: 'Awarded to the city that best demonstrates governance, civic engagement, athletics, and community spirit.' },
            { award: 'Model County', prize: 'Trophy & Recognition', desc: 'The county that excels in government operations, judicial proceedings, cooperation, and economic activity.' },
            { award: 'Outstanding Business', prize: 'Award & Recognition', desc: 'Given to the citizen-run business that demonstrates the most creativity, profitability, and ethical operations.' },
          ].map((a, i) => (
            <div key={i} className={`rounded-xl p-6 text-center ${a.highlight ? 'bg-navy text-white' : 'bg-cream border border-gray-200'}`}>
              {a.highlight && <span className="text-gold-light font-serif font-bold text-2xl block mb-1">{a.prize}</span>}
              <h3 className={`font-serif font-bold text-base mb-2 ${a.highlight ? 'text-white' : 'text-navy'}`}>{a.award}</h3>
              {!a.highlight && <span className="text-xs font-bold text-red block mb-2">{a.prize}</span>}
              <p className={`text-sm leading-relaxed ${a.highlight ? 'text-white/70' : 'text-gray-400'}`}>{a.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">
          Plus $5,000 and $2,500 runner-up scholarships, the <strong className="text-navy">$100,000 Vogel Family Scholarship</strong>, and access to $2M+ in college scholarships from Missouri universities.
        </p>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   ATHLETICS & FUN
   ══════════════════════════════════════════════════ */
function AthleticsAndFun() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <MediaPlaceholder label="Athletics — Basketball, volleyball, outdoor competitions" size="tall" />
          </div>
          <div className="order-1 lg:order-2">
            <Tag>It&rsquo;s Not All Government</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">Athletics, Talent Shows & More</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Every citizen participates in organized athletic competitions throughout the week. It&rsquo;s a chance to blow off steam, represent your city, and have some fun between legislative sessions and campaign rallies.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Basketball', 'Volleyball', 'Ultimate Frisbee', 'Track & Field', 'Softball', 'Badminton', 'Yard Games', 'Talent Show'].map((sport) => (
                <span key={sport} className="bg-white border border-gray-200 text-sm text-navy font-medium px-3 py-1.5 rounded-lg">{sport}</span>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Athletic performance factors into the Model City and Model County awards &mdash; so your city needs you on the field, not just in the Senate chamber.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   NOTABLE ALUMNI TEASE
   ══════════════════════════════════════════════════ */
function AlumniTease() {
  return (
    <section className="border-y border-gray-200 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
          <div className="flex-1">
            <h3 className="font-serif font-bold text-navy text-xl mb-2">You&rsquo;ll Be in Good Company</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
              Missouri Boys State alumni include <strong className="text-navy">governors</strong>, <strong className="text-navy">U.S. senators</strong>, <strong className="text-navy">military generals</strong>, <strong className="text-navy">Fortune 500 CEOs</strong>, and leaders in every field imaginable. They all started the same way you will &mdash; as a citizen in a city, figuring it out on day one.
            </p>
          </div>
          <Link to="/alumni/notable" className="shrink-0 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-[13px] px-5 py-2 rounded-lg transition whitespace-nowrap">
            Meet Notable Alumni &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   ELIGIBILITY
   ══════════════════════════════════════════════════ */
function Eligibility() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Tag>Eligibility</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">Can You Attend?</h2>
          <p className="text-gray-400">Three requirements. That&rsquo;s it.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { title: 'Junior Year Complete', desc: 'Completed your junior year at a Missouri high school with at least one semester remaining.' },
            { title: 'Age 15\u201319', desc: 'Between 15 and 19 years old by the first day of the program.' },
            { title: 'Nominated', desc: 'Nominated by your school counselor, local American Legion post, or a community leader.' },
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
        <p className="text-center text-sm text-gray-400 mt-8">
          Haven&rsquo;t been nominated yet? <Link to="/contact" className="text-red font-bold hover:underline">Talk to your counselor</Link> or <Link to="/contact" className="text-red font-bold hover:underline">contact us</Link> &mdash; we&rsquo;ll help you get connected.
        </p>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   STUDENT VOICES
   ══════════════════════════════════════════════════ */
function StudentVoices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Tag>In Their Own Words</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">Hear From Recent Citizens</h2>
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
        <div className="text-center mt-8">
          <Link to="/students/testimonials" className="text-sm font-bold text-red hover:underline">
            More Student Stories &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   DIG DEEPER (Subpage Cards)
   ══════════════════════════════════════════════════ */
function DigDeeper() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Tag>Keep Exploring</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl">Dig Deeper</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subPages.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={`bg-white border border-gray-200 ${p.color} border-t-4 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all`}
            >
              <h3 className="font-serif font-bold text-navy text-base mb-1">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              <span className="inline-block mt-3 text-xs font-bold text-navy">Learn More &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   FAQ
   ══════════════════════════════════════════════════ */
function StudentFAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <Tag>Questions?</Tag>
        <h2 className="font-serif font-bold text-navy text-3xl mb-8">Student FAQ</h2>
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
   STICKY BOTTOM CTA
   ══════════════════════════════════════════════════ */
function StickyApplyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-navy/95 backdrop-blur-sm border-t border-white/10 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <span className="text-white font-bold text-sm">2026 Session: June 13&ndash;19</span>
            <span className="text-white/50 text-sm ml-3">Applications close May 1</span>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-6 py-2.5 rounded-lg transition flex-1 sm:flex-none text-center">
              Apply Now
            </Link>
            <Link to="/nominate" className="border border-white/30 hover:border-white text-white font-bold text-sm px-6 py-2.5 rounded-lg transition flex-1 sm:flex-none text-center">
              Nominate
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════
   BOTTOM CTA
   ══════════════════════════════════════════════════ */
function BottomCTA() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif font-bold text-white text-2xl mb-4">Take the First Step</h2>
        <p className="text-white/70 mb-6 max-w-lg mx-auto">Applications for the 2026 session are open. Join 850 citizens this June for the week that shapes a lifetime.</p>
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
  )
}

/* ══════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════ */
export default function StudentsPage() {
  return (
    <>
      <StudentHero />
      <QuickExplainer />
      <WeekCarousel />
      <SchoolsPreview />
      <Speakers />
      <AwardsCompetition />
      <AthleticsAndFun />
      <Eligibility />
      <AlumniTease />
      <StudentVoices />
      <DigDeeper />
      <StudentFAQ />
      <BottomCTA />
      <StickyApplyCTA />
    </>
  )
}
