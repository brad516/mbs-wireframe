import { useParams, Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const sessionData = {
  '2025': { governor: 'Governor Name', delegates: '1,584', location: 'Lindenwood University, St. Charles', dates: 'June 14\u201320, 2025' },
  '2024': { governor: 'Governor Name', delegates: '1,612', location: 'Lindenwood University, St. Charles', dates: 'June 15\u201321, 2024' },
  '2023': { governor: 'Governor Name', delegates: '1,575', location: 'Lindenwood University, St. Charles', dates: 'June 17\u201323, 2023' },
  '2022': { governor: 'Governor Name', delegates: '1,550', location: 'Lindenwood University, St. Charles', dates: 'June 18\u201324, 2022' },
  '2021': { governor: 'Governor Name', delegates: '1,200', location: 'University of Central Missouri, Warrensburg', dates: 'June 19\u201325, 2021' },
  '2019': { governor: 'Governor Name', delegates: '1,610', location: 'University of Central Missouri, Warrensburg', dates: 'June 15\u201321, 2019' },
  '2018': { governor: 'Governor Name', delegates: '1,598', location: 'University of Central Missouri, Warrensburg', dates: 'June 16\u201322, 2018' },
}

const subPages = [
  { slug: 'speakers', title: 'Keynote Speakers', desc: 'The leaders who addressed delegates during the session.' },
  { slug: 'election-results', title: 'Election Results', desc: 'Governor, state officers, and key election outcomes.' },
  { slug: 'citizens-of-the-week', title: 'Citizens of the Week', desc: 'Delegates recognized for outstanding leadership and character.' },
  { slug: 'alumni-stories', title: 'Alumni Stories', desc: 'Hear from delegates about their experience in their own words.' },
  { slug: 'closing', title: 'Closing Ceremony', desc: 'Highlights from the final ceremony and Boys Nation selection.' },
]

export default function SessionYearPage() {
  const { year } = useParams()
  const session = sessionData[year]

  if (!session) {
    return (
      <div className="py-24 text-center">
        <h1 className="font-serif font-bold text-navy text-3xl mb-4">Session Not Found</h1>
        <Link to="/sessions" className="text-red font-bold">&larr; Back to Sessions</Link>
      </div>
    )
  }

  return (
    <>
      <PageHero
        tag={`Session ${year}`}
        title={`${year} Missouri Boys State`}
        description={`${session.dates} \u2014 ${session.location}`}
      />

      {/* Session Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>Overview</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-6">Session at a Glance</h2>
              <div className="space-y-4">
                {[
                  { label: 'Dates', value: session.dates },
                  { label: 'Location', value: session.location },
                  { label: 'Delegates', value: session.delegates },
                  { label: 'Governor', value: session.governor },
                  { label: 'Boys Nation Senators', value: 'Senator Name, Senator Name' },
                ].map((item, i) => (
                  <div key={i} className="flex items-baseline gap-3 py-2 border-b border-gray-200">
                    <span className="font-bold text-sm text-navy min-w-[140px] shrink-0">{item.label}</span>
                    <span className="text-sm text-gray-500">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <MediaPlaceholder label={`${year} Session Group Photo`} size="tall" />
          </div>
        </div>
      </section>

      {/* Sub-pages Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Tag>Explore This Session</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Session Content</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subPages.map((page) => (
              <Link
                key={page.slug}
                to={`/session/${year}/${page.slug}`}
                className="bg-cream border border-gray-200 rounded-xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{page.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{page.desc}</p>
                <span className="text-sm font-bold text-red">View &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Photos</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">{year} Photo Gallery</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <MediaPlaceholder key={n} label={`${year} Photo ${n}`} size="landscape" />
            ))}
          </div>
        </div>
      </section>

      {/* Nav */}
      <section className="py-12 bg-cream border-t border-gray-200 text-center">
        <Link to="/sessions" className="text-sm font-bold text-navy hover:text-red transition">&larr; All Sessions</Link>
      </section>
    </>
  )
}
