import { Link, useLocation } from 'react-router-dom'

// The Memorial Trust's own pages. Sits under the hero on each of them, below
// the Give section bar.
const pages = [
  { to: '/give/trust', label: 'About the Trust' },
  { to: '/give/trust/funds', label: 'The Four Funds' },
  { to: '/give/trust/scholarships', label: 'Scholarships' },
  { to: '/give/trust/speakers', label: 'Lehr Speakers Chair' },
  { to: '/give/trust/trustees', label: 'Trustees' },
]

export default function TrustSubNav() {
  const { pathname } = useLocation()

  return (
    <nav aria-label="Memorial Trust pages" className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-1 overflow-x-auto -mb-px">
          {pages.map((page) => {
            const isActive = pathname === page.to
            return (
              <Link
                key={page.to}
                to={page.to}
                aria-current={isActive ? 'page' : undefined}
                className={`shrink-0 text-xs font-bold px-3 py-3 border-b-2 transition ${
                  isActive
                    ? 'border-red text-red'
                    : 'border-transparent text-gray-600 hover:text-navy hover:border-gray-300'
                }`}
              >
                {page.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
