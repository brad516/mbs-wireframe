import { Link } from 'react-router-dom'
import PageHero from '../../../components/PageHero'
import Tag from '../../../components/Tag'
import { trust, trustees } from '../../../data/trust'

const groups = ['Officers', 'Trustees', 'Non-voting']

export default function TrusteesPage() {
  return (
    <>
      <PageHero
        tag="The Memorial Trust"
        title="Board of Trustees"
        description="The volunteers who look after the endowment and decide what it pays for."
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Tag>Governance</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-4">Separate from the program&rsquo;s board</h2>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
            {trust.legalName} has its own trustees. They are not the board that runs the session; that board is listed on the <Link to="/about/staff" className="font-bold text-navy hover:text-red">Staff &amp; Board</Link> page.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-navy text-white text-sm font-bold px-6 py-3">
              <span>Name</span>
              <span>Role</span>
              <span>Home</span>
            </div>
            {groups.map((group) => (
              <div key={group}>
                <div className="px-6 py-2 bg-cream border-t border-gray-200 text-[11px] font-bold tracking-[0.15em] uppercase text-gold">{group}</div>
                {trustees.filter((t) => t.group === group).map((t) => (
                  <div key={t.name} className="grid grid-cols-3 px-6 py-3 text-sm border-t border-gray-200">
                    <span className="font-bold text-navy">{t.name}</span>
                    <span className="text-gray-600">{t.role}</span>
                    <span className="text-gray-500">{t.home}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">As listed on mbstrust.org. To be confirmed with the trustees before launch.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <Tag>Contact the Trust</Tag>
            <p className="text-gray-600 leading-relaxed">
              {trust.name}<br />
              {trust.address[0]}<br />
              {trust.address[1]}<br />
              {trust.phone}<br />
              <a href={`mailto:${trust.email}`} className="font-bold text-navy hover:text-red">{trust.email}</a>
            </p>
          </div>
          <div>
            <Tag>Tax Status</Tag>
            <p className="text-gray-600 leading-relaxed">{trust.legal}</p>
            <p className="text-xs text-gray-500 mt-3">EIN: [to confirm]</p>
          </div>
        </div>
      </section>
    </>
  )
}
