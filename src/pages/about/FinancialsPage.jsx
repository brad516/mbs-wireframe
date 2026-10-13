import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const metrics = [
  { number: '1,600', label: 'Citizens Served (2025)' },
  { number: '$800K+', label: 'In Sponsorships Raised (2025)' },
  { number: '100%', label: 'of Citizens Fully Sponsored' },
  { number: '100%', label: 'of Donations Go to Programs' },
]

const breakdown = [
  { category: 'Program Operations', pct: '45%', desc: 'Housing, meals, materials, campus rental, and logistics' },
  { category: 'Citizen Sponsorships', pct: '25%', desc: 'Funding the $500-per-citizen sponsorship that ensures every nominated young man can attend' },
  { category: 'Staff & Volunteers', pct: '15%', desc: 'Counselor training, support, and program coordination' },
  { category: 'Outreach & Recruitment', pct: '10%', desc: 'School visits, orientation meetings, and marketing' },
  { category: 'Administration', pct: '5%', desc: 'Overhead, insurance, and organizational support' },
]

export default function FinancialsPage() {
  return (
    <>
      <PageHero
        tag="Transparency"
        title="Annual Report & Financials"
        description="We believe in full transparency about how we fund and deliver the Boys State experience."
      />

      {/* Impact Metrics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {metrics.map((m, i) => (
              <div key={i}>
                <span className="block font-serif text-4xl font-bold text-red leading-none">{m.number}</span>
                <span className="block text-[13px] font-medium text-gray-500 mt-1.5">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Breakdown */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Tag>How We Use Your Support</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Where the Money Goes</h2>
          <div className="mb-8">
            <MediaPlaceholder label="Revenue & Expense Pie Chart / Bar Chart" size="landscape" />
          </div>
          <div className="bg-cream border border-gray-200 rounded-xl overflow-hidden">
            {breakdown.map((b, i) => (
              <div key={i} className={`flex items-center gap-4 px-6 py-4 ${i > 0 ? 'border-t border-gray-200' : ''}`}>
                <span className="font-serif font-bold text-navy text-lg min-w-[50px]">{b.pct}</span>
                <div className="flex-1">
                  <span className="font-bold text-sm text-navy">{b.category}</span>
                  <p className="text-xs text-gray-500">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two organizations */}
      <section className="py-24 bg-cream border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <Tag>Two Organizations, One Mission</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Who holds what</h2>
          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-white p-8">
              <h3 className="font-serif font-bold text-navy text-xl mb-2">Missouri Boys State</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Runs the session. Annual gifts, event proceeds and American Legion sponsorships pay for that year&rsquo;s citizens: housing, meals, materials and staff.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif font-bold text-navy text-xl mb-2">The Memorial Trust</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Holds the endowment. Founded in 1982, with its own trustees. Its earnings pay for the Lehr speaker, scholarships and sponsorships where local support has declined.</p>
              <Link to="/give/trust" className="text-sm font-bold text-red hover:text-red-dark transition">How the Memorial Trust works &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Report Download */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Tag>Annual Report</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-4">Download Our Annual Report</h2>
          <p className="text-gray-600 mb-8">Our full annual report includes detailed financial statements, program outcomes, donor recognition, and plans for the future.</p>
          <button className="bg-navy hover:bg-navy-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Download 2025 Annual Report (PDF)
          </button>
          <p className="text-xs text-gray-500 mt-3">Missouri Boys State is a 501(c)(3) nonprofit. EIN: XX-XXXXXXX<br />The Missouri Boys State Memorial Trust, Inc. is a separate 501(c)(3). EIN: XX-XXXXXXX</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Support the Mission</h2>
          <p className="text-white/70 mb-6">Every dollar goes directly to developing Missouri&rsquo;s next generation of leaders.</p>
          <Link to="/give" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Make a Gift
          </Link>
        </div>
      </section>
    </>
  )
}
