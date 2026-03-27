import { Link, useLocation } from 'react-router-dom'

const subPages = [
  { slug: '', label: 'Overview' },
  { slug: '/speakers', label: 'Speakers' },
  { slug: '/election-results', label: 'Election Results' },
  { slug: '/citizens-of-the-week', label: 'Citizens of the Week' },
  { slug: '/alumni-stories', label: 'Alumni Stories' },
  { slug: '/closing', label: 'Closing Ceremony' },
]

export default function SessionSubNav({ year }) {
  const { pathname } = useLocation()
  const base = `/session/${year}`

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-1 overflow-x-auto -mb-px">
          <Link
            to="/sessions"
            className="shrink-0 text-xs font-bold text-gray-400 hover:text-navy px-3 py-3 transition"
          >
            &larr; All Sessions
          </Link>
          <span className="text-gray-300 text-xs">|</span>
          {subPages.map((page) => {
            const to = `${base}${page.slug}`
            const isActive = pathname === to
            return (
              <Link
                key={page.slug}
                to={to}
                className={`shrink-0 text-xs font-bold px-3 py-3 border-b-2 transition ${
                  isActive
                    ? 'border-red text-red'
                    : 'border-transparent text-gray-500 hover:text-navy hover:border-gray-300'
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
