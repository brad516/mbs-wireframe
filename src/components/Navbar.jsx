import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'For Students', to: '/students' },
  { label: 'For Parents', to: '/parents' },
  { label: 'For Educators', to: '/educators' },
  { label: 'About', to: '/about' },
  { label: 'Alumni', to: '/alumni' },
  { label: 'News', to: '/news' },
  { label: 'Events', to: '/events' },
  { label: 'Sessions', to: '/sessions' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
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
        <div className="hidden lg:flex gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white/75 text-[13px] font-medium px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition whitespace-nowrap"
            >
              {link.label}
            </Link>
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

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-light border-t border-white/10 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-white/80 text-sm font-medium py-2 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-4">
            <Link to="/apply" className="bg-red text-white text-sm font-bold px-5 py-2 rounded-lg flex-1 text-center">Apply Now</Link>
            <Link to="/give" className="bg-gold text-white text-sm font-bold px-5 py-2 rounded-lg flex-1 text-center">Give</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
