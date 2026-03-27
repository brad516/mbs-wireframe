import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
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
    label: 'News',
    to: '/news',
    children: [
      { label: 'Latest News', to: '/news' },
      { label: 'Press Room', to: '/news/press' },
    ],
  },
  { label: 'Events', to: '/events' },
  { label: 'Sessions', to: '/sessions' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  return (
    <>
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

          {/* Desktop nav links with mega menu */}
          <div className="hidden lg:flex gap-1 flex-1">
            {navItems.map((item) => (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                <Link
                  to={item.to}
                  className="text-white/75 text-[13px] font-medium px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition whitespace-nowrap inline-flex items-center gap-1"
                >
                  {item.label}
                  {item.children && <span className="text-[10px] leading-none">▾</span>}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-xl py-3 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-5 py-2 text-sm text-gray-600 hover:text-navy hover:bg-cream transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex gap-2 shrink-0">
            <Link to="/nominate" className="text-white/80 border border-white/30 hover:border-white hover:bg-white/10 text-[13px] font-bold px-4 py-1.5 rounded-lg transition">
              Nominate
            </Link>
            <Link to="/give" className="bg-gold hover:bg-gold-light text-white text-[13px] font-bold px-4 py-1.5 rounded-lg transition">
              Give
            </Link>
            <Link to="/apply" className="bg-red hover:bg-red-dark text-white text-[13px] font-bold px-4 py-1.5 rounded-lg transition">
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
      </nav>

      {/* Mobile slide-out drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setOpen(false)} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-800 text-2xl leading-none p-1"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Mobile nav items */}
        <div className="px-4 pb-6 space-y-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.to}>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                  }
                  className="w-full flex items-center justify-between py-3 text-navy font-semibold text-[15px] border-b border-gray-100"
                >
                  {item.label}
                  <span
                    className={`text-xs text-gray-400 transition-transform duration-200 ${
                      mobileExpanded === item.label ? 'rotate-180' : ''
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {mobileExpanded === item.label && (
                  <div className="pl-4 py-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block py-2 text-sm text-gray-600 hover:text-navy transition"
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

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 pt-6">
            <Link
              to="/nominate"
              className="text-navy border-2 border-navy text-sm font-bold px-5 py-2.5 rounded-lg text-center transition hover:bg-navy hover:text-white"
              onClick={() => setOpen(false)}
            >
              Nominate
            </Link>
            <Link
              to="/give"
              className="bg-gold hover:bg-gold-light text-white text-sm font-bold px-5 py-2.5 rounded-lg text-center transition"
              onClick={() => setOpen(false)}
            >
              Give
            </Link>
            <Link
              to="/apply"
              className="bg-red hover:bg-red-dark text-white text-sm font-bold px-5 py-2.5 rounded-lg text-center transition"
              onClick={() => setOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
