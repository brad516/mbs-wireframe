import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  {
    label: 'For Students',
    to: '/students',
    mega: {
      featured: {
        title: 'For Students',
        description: 'Everything you need to know about Missouri Boys State — from what to expect to how to prepare.',
        link: { label: 'Student Hub →', to: '/students' },
      },
      groups: [
        {
          heading: 'Discover MBS',
          links: [
            { label: 'What Is Boys State', to: '/students/what-is-boys-state' },
            { label: 'Week in the Life', to: '/students/week-in-the-life' },
            { label: 'Testimonials', to: '/students/testimonials' },
            { label: 'Boys Nation', to: '/students/boys-nation' },
          ],
        },
        {
          heading: 'Prepare to Attend',
          links: [
            { label: 'College Credit', to: '/students/college-credit' },
            { label: 'Orientation', to: '/students/orientation' },
            { label: 'First-Day Check-In', to: '/students/checkin' },
          ],
        },
      ],
    },
  },
  { label: 'For Parents', to: '/parents' },
  { label: 'For Educators', to: '/educators' },
  {
    label: 'About',
    to: '/about',
    mega: {
      featured: {
        title: 'About MBS',
        description: 'Since 1938, Missouri Boys State has developed the next generation of civic leaders.',
        link: { label: 'Our Story →', to: '/about' },
      },
      groups: [
        {
          heading: 'Learn More',
          links: [
            { label: 'Our Story', to: '/about' },
            { label: 'The American Legion', to: '/about/american-legion' },
            { label: 'Financials & Transparency', to: '/about/financials' },
            { label: 'Staff & Board', to: '/about/staff' },
          ],
        },
      ],
    },
  },
  {
    label: 'Alumni',
    to: '/alumni',
    mega: {
      featured: {
        title: 'Alumni Network',
        description: 'Join 50,000+ Boys State alumni making an impact across Missouri and beyond.',
        link: { label: 'Alumni Hub →', to: '/alumni' },
      },
      groups: [
        {
          heading: 'Get Involved',
          links: [
            { label: 'Alumni Hub', to: '/alumni' },
            { label: 'Notable Alumni', to: '/alumni/notable' },
            { label: 'Hall of Fame', to: '/alumni/hall-of-fame' },
            { label: 'Join the Association', to: '/alumni/join' },
          ],
        },
      ],
    },
  },
  {
    label: 'Give',
    to: '/give',
    mega: {
      featured: {
        title: 'Support MBS',
        description: '$500 sponsors one citizen\'s entire Boys State experience. Every citizen is fully sponsored — we never charge families.',
        link: { label: 'Donate Now →', to: '/give' },
      },
      groups: [
        {
          heading: 'Ways to Give',
          links: [
            { label: 'Donate Online', to: '/give' },
            { label: 'Corporate Partnerships', to: '/give/corporate' },
            { label: 'Planned Giving', to: '/give/planned' },
            { label: 'Matching Gifts', to: '/give/matching' },
            { label: 'Memorial & Honor Gifts', to: '/give/memorial' },
          ],
        },
      ],
    },
  },
  {
    label: 'News & Events',
    to: '/news',
    mega: {
      featured: {
        title: 'News & Events',
        description: 'Stay up to date with the latest from Missouri Boys State.',
        link: { label: 'Latest News →', to: '/news' },
      },
      groups: [
        {
          heading: 'Stay Connected',
          links: [
            { label: 'Latest News', to: '/news' },
            { label: 'Press Room', to: '/news/press' },
            { label: 'Events', to: '/events' },
            { label: 'Session Archives', to: '/sessions' },
          ],
        },
      ],
    },
  },
]

const utilityLinks = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

// Flatten all mega menu children for mobile
const mobileItems = [
  {
    label: 'For Students',
    to: '/students',
    children: [
      { label: 'What Is Boys State', to: '/students/what-is-boys-state' },
      { label: 'Week in the Life', to: '/students/week-in-the-life' },
      { label: 'Testimonials', to: '/students/testimonials' },
      { label: 'Boys Nation', to: '/students/boys-nation' },
      { label: 'College Credit', to: '/students/college-credit' },
      { label: 'Orientation', to: '/students/orientation' },
      { label: 'Check-In', to: '/students/checkin' },
    ],
  },
  { label: 'For Parents', to: '/parents' },
  { label: 'For Educators', to: '/educators' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Our Story', to: '/about' },
      { label: 'The American Legion', to: '/about/american-legion' },
      { label: 'Financials', to: '/about/financials' },
      { label: 'Staff & Board', to: '/about/staff' },
    ],
  },
  {
    label: 'Alumni',
    to: '/alumni',
    children: [
      { label: 'Alumni Hub', to: '/alumni' },
      { label: 'Notable Alumni', to: '/alumni/notable' },
      { label: 'Hall of Fame', to: '/alumni/hall-of-fame' },
      { label: 'Join', to: '/alumni/join' },
    ],
  },
  {
    label: 'Give',
    to: '/give',
    children: [
      { label: 'Donate Online', to: '/give' },
      { label: 'Corporate Partnerships', to: '/give/corporate' },
      { label: 'Planned Giving', to: '/give/planned' },
      { label: 'Matching Gifts', to: '/give/matching' },
      { label: 'Memorial & Honor Gifts', to: '/give/memorial' },
    ],
  },
  {
    label: 'News & Events',
    to: '/news',
    children: [
      { label: 'Latest News', to: '/news' },
      { label: 'Press Room', to: '/news/press' },
      { label: 'Events', to: '/events' },
      { label: 'Session Archives', to: '/sessions' },
    ],
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const timeoutRef = useRef(null)

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-navy-dark border-b border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9">
          <span className="text-white/50 text-[11px] tracking-wide">
            A Program of The American Legion
          </span>
          <div className="flex items-center gap-1">
            {utilityLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/60 text-[11px] font-medium px-2.5 py-1 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-white/20 mx-1">|</span>
            <Link
              to="/nominate"
              className="text-white/70 text-[11px] font-bold px-2.5 py-1 hover:text-white transition"
            >
              Nominate
            </Link>
            <Link
              to="/give"
              className="text-gold text-[11px] font-bold px-2.5 py-1 hover:text-gold-light transition"
            >
              Give
            </Link>
            <Link
              to="/apply"
              className="bg-red hover:bg-red-dark text-white text-[11px] font-bold px-3.5 py-1 rounded ml-1 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <nav className="bg-navy sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex items-center h-16 gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="bg-red text-white font-serif font-bold text-xs w-9 h-9 rounded-md flex items-center justify-center">
              MBS
            </span>
            <span className="text-white font-serif font-bold text-[15px] whitespace-nowrap hidden sm:block">
              Missouri Boys State
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex gap-0.5 flex-1 justify-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => item.mega ? handleMouseEnter(item.label) : null}
                onMouseLeave={() => item.mega ? handleMouseLeave() : null}
              >
                <Link
                  to={item.to}
                  className={`text-[13px] font-medium px-3.5 py-2 rounded-md transition whitespace-nowrap inline-flex items-center gap-1.5 ${
                    activeDropdown === item.label
                      ? 'text-white bg-white/10'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {item.mega && (
                    <svg className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
                      <path d="M3 4.5l3 3 3-3" />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop CTA - compact, since utility bar has full CTAs */}
          <div className="hidden lg:flex gap-2 shrink-0">
            <Link
              to="/apply"
              className="bg-red hover:bg-red-dark text-white text-[13px] font-bold px-5 py-2 rounded-lg transition"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden ml-auto flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
            <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
            <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
          </button>
        </div>

        {/* Mega menu panels */}
        {navItems.map((item) =>
          item.mega && activeDropdown === item.label ? (
            <div
              key={item.label}
              className="absolute left-0 right-0 bg-white border-t-4 border-red shadow-2xl z-40"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Featured / intro column */}
                  <div className="col-span-4 border-r border-gray-100 pr-8">
                    <h3 className="font-serif font-bold text-navy text-xl mb-2">
                      {item.mega.featured.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {item.mega.featured.description}
                    </p>
                    <Link
                      to={item.mega.featured.link.to}
                      className="text-sm font-bold text-red hover:text-red-dark transition"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.mega.featured.link.label}
                    </Link>
                  </div>

                  {/* Link groups */}
                  {item.mega.groups.map((group, gi) => (
                    <div key={gi} className="col-span-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                        {group.heading}
                      </h4>
                      <ul className="space-y-1">
                        {group.links.map((link) => (
                          <li key={link.to}>
                            <Link
                              to={link.to}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-navy hover:bg-cream transition group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-red transition shrink-0" />
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null
        )}
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile slide-out drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-serif font-bold text-navy text-sm">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-gray-800 text-2xl leading-none p-1"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Mobile nav items */}
        <div className="px-4 py-3 space-y-0.5">
          {mobileItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label
                    )
                  }
                  className="w-full flex items-center justify-between py-3 text-navy font-semibold text-[15px] border-b border-gray-100"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileExpanded === item.label ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 4.5l3 3 3-3" />
                  </svg>
                </button>
                {mobileExpanded === item.label && (
                  <div className="pl-4 py-1 space-y-0.5 bg-cream/50 -mx-4 px-8">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block py-2.5 text-sm text-gray-600 hover:text-navy transition"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="block py-3 text-navy font-semibold text-[15px] border-b border-gray-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile utility links */}
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="flex gap-4 mb-4">
            {utilityLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-gray-500 hover:text-navy transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile CTAs */}
        <div className="px-4 pb-6 space-y-2.5">
          <Link
            to="/apply"
            className="block bg-red hover:bg-red-dark text-white text-sm font-bold px-5 py-3 rounded-lg text-center transition"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
          <Link
            to="/give"
            className="block bg-gold hover:bg-gold-light text-white text-sm font-bold px-5 py-3 rounded-lg text-center transition"
            onClick={() => setOpen(false)}
          >
            Give
          </Link>
          <Link
            to="/nominate"
            className="block text-navy border-2 border-navy text-sm font-bold px-5 py-2.5 rounded-lg text-center transition hover:bg-navy hover:text-white"
            onClick={() => setOpen(false)}
          >
            Nominate a Student
          </Link>
        </div>
      </div>
    </>
  )
}
