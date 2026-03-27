import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const levels = [
  { name: 'Friend', amount: '$50', desc: 'Contributes toward sponsoring a future citizen', color: 'border-t-navy' },
  { name: 'Advocate', amount: '$100', desc: 'Funds program materials and meals for one citizen', color: 'border-t-[#2b82c9]' },
  { name: 'Champion', amount: '$250', desc: 'Covers half the cost to sponsor one citizen', color: 'border-t-gold' },
  { name: 'Sponsor', amount: '$500', desc: 'Fully sponsors one citizen\u2019s entire Boys State experience', color: 'border-t-red' },
]

const otherWays = [
  { to: '/give/planned', title: 'Planned Giving', desc: 'Include Missouri Boys State in your estate plan and create a lasting legacy for future generations of leaders.' },
  { to: '/give/matching', title: 'Matching Gifts', desc: 'Many employers match charitable contributions. Check with your HR department to double your impact.' },
  { to: '/give/memorial', title: 'Memorial & Honor Gifts', desc: 'Make a gift in memory or in honor of a loved one. We\u2019ll send a personalized acknowledgment to the honoree or family.' },
]

export default function GivePage() {
  return (
    <>
      <PageHero
        tag="Give"
        title="Invest in Missouri&rsquo;s Future Leaders"
        description="Every citizen is fully sponsored. Your tax-deductible gift directly funds citizen sponsorships and ensures no young man is limited by finances."
      />

      {/* Impact */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <Tag>Your Impact</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">
              <span className="text-red">$500</span> Sponsors One Future Citizen
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Every citizen is fully sponsored \u2014 we never charge parents or families. A $500 sponsorship covers one citizen&rsquo;s entire week: housing, meals, materials, speakers, and life-changing civic education. Your gift at any level helps send Missouri&rsquo;s next generation of leaders to Boys State.
            </p>
          </div>

          {/* Giving Levels */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((l, i) => (
              <div key={i} className={`bg-white border border-gray-200 ${l.color} border-t-4 rounded-xl p-7 text-center`}>
                <span className="font-serif font-bold text-3xl text-navy">{l.amount}</span>
                <h3 className="font-serif font-bold text-navy text-lg mt-2 mb-2">{l.name}</h3>
                <p className="text-sm text-gray-400">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <Tag>Make a Gift</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Donate Online</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 bg-gray-50">
            <div className="flex gap-3 mb-6">
              {['$25', '$50', '$100', '$250', '$500', 'Other'].map((amt) => (
                <button key={amt} className="flex-1 py-3 border border-gray-200 rounded-lg text-sm font-bold text-navy hover:border-red hover:text-red transition">
                  {amt}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-navy mb-1">Full Name</label>
                <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-1">Email</label>
                <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
              </div>
            </div>
            <button className="mt-6 w-full bg-gold hover:bg-gold-light text-white font-bold text-base py-4 rounded-lg transition">
              Complete Donation
            </button>
            <p className="text-xs text-gray-400 mt-3 text-center">Missouri Boys State is a 501(c)(3). All gifts are tax-deductible.</p>
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Other Ways to Give</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">More Ways to Make a Difference</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {otherWays.map((w, i) => (
              <Link key={i} to={w.to} className="bg-white border border-gray-200 rounded-xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">{w.desc}</p>
                <span className="text-sm font-bold text-red">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Interested in Corporate Sponsorship?</h2>
          <p className="text-white/70 mb-6">Partner with Missouri Boys State and invest in the leaders of tomorrow.</p>
          <Link to="/give/corporate" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Explore Sponsorship
          </Link>
        </div>
      </section>
    </>
  )
}
