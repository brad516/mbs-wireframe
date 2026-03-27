import { Link } from 'react-router-dom'

const cols = [
  {
    title: 'Program',
    links: [
      { label: 'For Students', to: '/students' },
      { label: 'For Parents', to: '/parents' },
      { label: 'For Educators', to: '/educators' },
      { label: 'About', to: '/about' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Alumni', to: '/alumni' },
      { label: 'Give / Donate', to: '/give' },
      { label: 'Events', to: '/events' },
      { label: 'Session Archives', to: '/sessions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'News & Media', to: '/news' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Annual Report', to: '/about/financials' },
      { label: 'Press Room', to: '/news/press' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-lg font-bold text-white block mb-3">Missouri Boys State</span>
            <p className="text-[13px] leading-relaxed text-white/50">
              A program of The American Legion, Department of Missouri. Developing tomorrow's civic leaders since 1938.
            </p>
            <div className="flex gap-3 mt-4">
              {['FB', 'IG', 'X', 'YT'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center text-[11px] font-bold text-white/60 hover:bg-white/20 hover:text-white transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h5 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 mb-4">{col.title}</h5>
              {col.links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-white/70 py-1 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Donate & Contact */}
          <div>
            <h5 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 mb-4">Support Boys State</h5>
            <p className="text-[13px] text-white/50 mb-4">Your tax-deductible gift changes lives.</p>
            <Link
              to="/give"
              className="inline-block bg-gold hover:bg-gold-light text-white text-[13px] font-bold px-5 py-2 rounded-lg transition"
            >
              Donate Now
            </Link>
            <a
              href="https://store.moboysstate.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/50 hover:text-white mt-4 transition"
            >
              Shop MBS Store &rarr;
            </a>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-[11px] text-white/35 leading-relaxed">
                P.O. Box 667<br />
                Warrensburg, MO 64093<br />
                660.429.2761<br />
                headquarters@moboysstate.org
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/35">&copy; 2026 Missouri Boys State. A program of The American Legion, Department of Missouri.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="text-xs text-white/35 hover:text-white/60">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-white/35 hover:text-white/60">Terms of Use</Link>
            <a href="https://staff.moboysstate.org" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/40">Staff Login</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
