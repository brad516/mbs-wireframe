import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

// The sub-pages of each main section. Shown as a slim bar under the header on
// every page in that section, so visitors can move sideways between them.
const sections = [
  {
    base: '/students',
    label: 'For Students',
    pages: [
      { to: '/students', label: 'Overview' },
      { to: '/students/what-is-boys-state', label: 'What Is Boys State' },
      { to: '/students/week-in-the-life', label: 'A Week in the Life' },
      { to: '/students/testimonials', label: 'Testimonials' },
      { to: '/students/boys-nation', label: 'Boys Nation' },
      { to: '/students/college-credit', label: 'College Credit' },
      { to: '/students/orientation', label: 'Orientation' },
      { to: '/students/checkin', label: 'Check-In' },
    ],
  },
  {
    base: '/about',
    label: 'About',
    pages: [
      { to: '/about', label: 'Overview' },
      { to: '/about/program-structure', label: 'Program Structure' },
      { to: '/about/american-legion', label: 'The American Legion' },
      { to: '/about/staff', label: 'Staff & Board' },
      { to: '/about/financials', label: 'Financials' },
    ],
  },
  {
    base: '/alumni',
    label: 'Alumni',
    pages: [
      { to: '/alumni', label: 'Overview' },
      { to: '/alumni/notable', label: 'Notable Alumni' },
      { to: '/alumni/hall-of-fame', label: 'Hall of Fame' },
      { to: '/alumni/join', label: 'Join the Association' },
    ],
  },
  {
    base: '/give',
    label: 'Give',
    pages: [
      { to: '/give', label: 'Donate' },
      { to: '/give/corporate', label: 'Corporate Partners' },
      { to: '/give/matching', label: 'Matching Gifts' },
      { to: '/give/planned', label: 'Planned Giving' },
      { to: '/give/memorial', label: 'Memorial & Honor Gifts' },
      { to: '/give/trust', label: 'Memorial Trust' },
    ],
  },
  {
    base: '/news',
    label: 'News & Events',
    // Events and the session archive live outside /news but belong to this
    // section. Casino Night is left out: it has its own in-page bar.
    also: ['/events', '/events/trivia', '/events/golf', '/sessions'],
    pages: [
      { to: '/news', label: 'Latest News' },
      { to: '/news/press', label: 'Press Room' },
      { to: '/events', label: 'Events' },
      { to: '/sessions', label: 'Session Archives' },
    ],
  },
]

export default function SectionNav() {
  const { pathname } = useLocation()
  const section = sections.find((s) => pathname === s.base || pathname.startsWith(`${s.base}/`) || s.also?.includes(pathname))
  const activeRef = useRef(null)

  // Keep the current page in view when the bar scrolls sideways on phones.
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [pathname])

  if (!section) return null

  return (
    <nav aria-label={`${section.label} pages`} className="bg-cream border-b border-gray-200 sticky top-[72px] z-30">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-5">
        <span className="hidden md:block shrink-0 text-[11px] font-bold tracking-[0.15em] uppercase text-gold">{section.label}</span>
        <ul className="flex items-center gap-1 overflow-x-auto -mx-2 px-2">
          {section.pages.map((page) => {
            // An event's own page still counts as being under Events, and a
            // Trust page under Memorial Trust.
            const active = pathname === page.to || (['/events', '/give/trust'].includes(page.to) && pathname.startsWith(`${page.to}/`))
            return (
              <li key={page.to} className="shrink-0">
                <Link
                  to={page.to}
                  ref={active ? activeRef : null}
                  aria-current={active ? 'page' : undefined}
                  className={`block text-[13px] font-semibold px-3 py-3 border-b-2 -mb-px whitespace-nowrap transition ${
                    active ? 'text-navy border-red' : 'text-gray-600 border-transparent hover:text-navy hover:border-gray-300'
                  }`}
                >
                  {page.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
