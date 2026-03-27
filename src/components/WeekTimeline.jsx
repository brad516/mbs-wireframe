import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MediaPlaceholder from './MediaPlaceholder'
import Tag from './Tag'

const phases = [
  {
    day: 'Saturday',
    label: 'Day 1',
    title: 'Arrival & City Formation',
    desc: 'You arrive at Lindenwood University, meet your City Counselor, and unpack in your dorm. That night, the energy hits — you\'re assigned to the Federalist or Nationalist party, meet your city of ~50 citizens, and begin organizing from scratch. By midnight, you\'re already debating platforms and sizing up who\'s running for what.',
    img: 'Arrival Day — Citizens checking in, meeting their city',
    accent: 'bg-red',
  },
  {
    day: 'Sunday',
    label: 'Day 2',
    title: 'Elections & City Government',
    desc: 'The pace is relentless. Party caucuses nominate candidates, campaigns launch, and speeches fill the halls. By afternoon, your city has elected a Mayor, City Council, Senators, and Representatives. Appointed officials follow — City Attorney, Police Chief, Fire Chief. Your city government is live before dinner.',
    img: 'Sunday — Campaign speeches and city elections',
    accent: 'bg-red',
  },
  {
    day: 'Mon–Tue',
    label: 'Days 3–4',
    title: 'Legislature, Courts & County Government',
    desc: 'The General Assembly convenes. Bills are drafted, debated in committee, and voted on in both chambers. Attorneys pass the Bar Exam and try cases in Circuit Court. County elections expand the government further — Presiding Commissioners, Sheriffs, Prosecuting Attorneys, and Circuit Judges take office.',
    img: 'Legislature in session — Bills, debates, committee hearings',
    accent: 'bg-navy',
  },
  {
    day: 'Wednesday',
    label: 'Day 5',
    title: 'The Statewide Primary & the Governor\'s Race',
    desc: 'The stakes go statewide. Candidates for Governor, Lieutenant Governor, Secretary of State, and more face off in an open primary election. That evening, the Federalist and Nationalist nominees for Governor debate before the entire state. Campaign war rooms run through the night.',
    img: 'Gubernatorial debate — Two candidates, packed auditorium',
    accent: 'bg-gold',
  },
  {
    day: 'Thursday',
    label: 'Day 6',
    title: 'General Election & Inauguration',
    desc: 'Every citizen votes in the statewide general election. The Governor is elected and inaugurated. Cabinet members are confirmed by the Senate. The full machinery of state government — legislative, executive, judicial — is running. You built this.',
    img: 'Inauguration — The new Governor takes the oath of office',
    accent: 'bg-navy',
  },
  {
    day: 'Friday',
    label: 'Day 7',
    title: 'Democracy in Action & Brotherhood',
    desc: 'The week culminates in the Democracy in Action ceremony — Citizen of the Week, Model City, Model County, and Outstanding Business awards are announced. But it\'s the quiet moments that hit hardest: the friendships forged in your city, the late-night conversations, the realization that this week changed something in you.',
    img: 'Closing ceremony — Awards, brotherhood, lasting bonds',
    accent: 'bg-red',
  },
]

function TimelinePhase({ phase, index, isVisible }) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`
        relative flex items-start gap-6 lg:gap-12
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${50}ms` }}
    >
      {/* Timeline spine connector — visible on lg */}
      <div className="hidden lg:flex flex-col items-center shrink-0 w-20">
        <div className={`${phase.accent} text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md whitespace-nowrap`}>
          {phase.day}
        </div>
        <div className="w-px flex-1 bg-gray-200 mt-2" />
      </div>

      {/* Content card */}
      <div className={`flex-1 grid lg:grid-cols-2 gap-6 items-center ${isEven ? '' : 'lg:[direction:rtl]'}`}>
        <div className={`${isEven ? '' : 'lg:[direction:ltr]'}`}>
          {/* Mobile day badge */}
          <div className="lg:hidden mb-3">
            <span className={`${phase.accent} text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-md`}>
              {phase.day}
            </span>
          </div>
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold mb-1 block">{phase.label}</span>
          <h3 className="font-serif font-bold text-navy text-xl lg:text-2xl mb-3">{phase.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{phase.desc}</p>
        </div>
        <div className={`${isEven ? '' : 'lg:[direction:ltr]'}`}>
          <MediaPlaceholder label={phase.img} size="landscape" />
        </div>
      </div>
    </div>
  )
}

export default function WeekTimeline() {
  const sectionRef = useRef(null)
  const phaseRefs = useRef([])
  const [visiblePhases, setVisiblePhases] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index)
          if (entry.isIntersecting) {
            setVisiblePhases((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    phaseRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Tag>The Experience</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-3">A Week Like No Other</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            From the moment you arrive on Saturday to the bonds you carry home on Friday, every day at Boys State builds on the last — accelerating toward something you didn&rsquo;t know you were capable of.
          </p>
        </div>

        {/* Progress bar — desktop */}
        <div className="hidden lg:flex items-center justify-between max-w-3xl mx-auto mb-16 relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-300" />
          {phases.map((phase, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div
                className={`
                  w-3 h-3 rounded-full border-2 transition-all duration-500
                  ${visiblePhases.has(i)
                    ? 'bg-red border-red scale-125'
                    : 'bg-white border-gray-300'
                  }
                `}
              />
              <span className={`
                text-[10px] font-bold mt-2 transition-colors duration-500
                ${visiblePhases.has(i) ? 'text-navy' : 'text-gray-300'}
              `}>
                {phase.day}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline phases */}
        <div className="space-y-16 lg:space-y-20">
          {phases.map((phase, i) => (
            <div
              key={i}
              ref={(el) => (phaseRefs.current[i] = el)}
              data-index={i}
            >
              <TimelinePhase
                phase={phase}
                index={i}
                isVisible={visiblePhases.has(i)}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/students/week-in-the-life"
            className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition"
          >
            Explore the Full Week
          </Link>
        </div>
      </div>
    </section>
  )
}
