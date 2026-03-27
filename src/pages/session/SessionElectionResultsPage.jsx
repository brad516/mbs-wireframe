import { useParams, Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SessionSubNav from '../../components/SessionSubNav'
import Tag from '../../components/Tag'

const resultsData = {
  '2025': {
    governor: { name: 'Governor Name', city: 'City Name', party: 'Nationalist' },
    ltGovernor: { name: 'Lt. Governor Name', city: 'City Name', party: 'Federalist' },
    officers: [
      { office: 'Secretary of State', name: 'Officer Name', party: 'Nationalist' },
      { office: 'Attorney General', name: 'Officer Name', party: 'Federalist' },
      { office: 'State Auditor', name: 'Officer Name', party: 'Nationalist' },
      { office: 'State Treasurer', name: 'Officer Name', party: 'Federalist' },
    ],
    boysNation: ['Senator Name (City)', 'Senator Name (City)'],
  },
}

const defaultResults = {
  governor: { name: 'Governor Name', city: 'City Name', party: 'Party Name' },
  ltGovernor: { name: 'Lt. Governor Name', city: 'City Name', party: 'Party Name' },
  officers: [
    { office: 'Secretary of State', name: 'Officer Name', party: 'Party Name' },
    { office: 'Attorney General', name: 'Officer Name', party: 'Party Name' },
    { office: 'State Auditor', name: 'Officer Name', party: 'Party Name' },
    { office: 'State Treasurer', name: 'Officer Name', party: 'Party Name' },
  ],
  boysNation: ['Senator Name', 'Senator Name'],
}

export default function SessionElectionResultsPage() {
  const { year } = useParams()
  const results = resultsData[year] || defaultResults

  return (
    <>
      <PageHero
        tag={`Session ${year}`}
        title={`${year} Election Results`}
        description={`The elected leaders of the ${year} Missouri Boys State government.`}
      />
      <SessionSubNav year={year} />

      {/* Governor & Lt. Governor */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { label: 'Governor', ...results.governor },
              { label: 'Lt. Governor', ...results.ltGovernor },
            ].map((official, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <span className="text-sm text-gray-300 font-bold">Photo</span>
                </div>
                <div className="p-5 text-center">
                  <span className="text-[11px] font-bold text-gold tracking-wide uppercase">{official.label}</span>
                  <h3 className="font-serif font-bold text-navy text-xl mt-1">{official.name}</h3>
                  <p className="text-sm text-gray-400">{official.city} &middot; {official.party} Party</p>
                </div>
              </div>
            ))}
          </div>

          {/* State Officers */}
          <Tag>State Officers</Tag>
          <h2 className="font-serif font-bold text-navy text-2xl mb-6">Elected Officials</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-12">
            <div className="grid grid-cols-3 bg-navy text-white text-sm font-bold px-6 py-3">
              <span>Office</span>
              <span>Name</span>
              <span>Party</span>
            </div>
            {results.officers.map((o, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-200`}>
                <span className="font-bold text-navy">{o.office}</span>
                <span className="text-gray-500">{o.name}</span>
                <span className="text-gray-400">{o.party}</span>
              </div>
            ))}
          </div>

          {/* Boys Nation */}
          <Tag>Boys Nation</Tag>
          <h2 className="font-serif font-bold text-navy text-2xl mb-6">Boys Nation Senators</h2>
          <div className="bg-gold-bg border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-3">Selected to represent Missouri at Boys Nation in Washington, D.C.:</p>
            <ul className="space-y-2">
              {results.boysNation.map((name, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <span className="text-red font-bold">{'\u2605'}</span>
                  <span className="font-bold text-navy">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}
