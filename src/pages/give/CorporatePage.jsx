import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const tiers = [
  { name: 'Bronze', amount: '$1,000', benefits: ['Logo on event materials', 'Social media recognition', 'Certificate of partnership'] },
  { name: 'Silver', amount: '$2,500', benefits: ['All Bronze benefits', 'Logo on MBS website', 'Branded signage at session', '2 event tickets'] },
  { name: 'Gold', amount: '$5,000', benefits: ['All Silver benefits', 'Speaking opportunity at event', 'Named scholarship (1 delegate)', '4 event tickets'] },
  { name: 'Platinum', amount: '$10,000+', benefits: ['All Gold benefits', 'Premier logo placement', 'Named scholarship (3 delegates)', 'VIP access to session activities', 'Custom partnership opportunities'] },
]

const sponsors = ['The American Legion', 'Lindenwood University', 'Edward Jones', 'Missouri Farm Bureau', 'Veterans United', 'Commerce Bank']

export default function CorporatePage() {
  return (
    <>
      <PageHero
        tag="Corporate"
        title="Corporate Sponsorship"
        description="Partner with Missouri Boys State and invest in the leaders of tomorrow while strengthening your brand's civic presence."
      />

      {/* Why Sponsor */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>Why Sponsor</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">A Partnership That Matters</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                Corporate sponsorship of Missouri Boys State is an investment in civic education, youth leadership, and the future of Missouri. Your partnership directly funds scholarships, program operations, and the experiences that shape tomorrow&rsquo;s leaders.
              </p>
              <div className="space-y-3 mt-6">
                {['Reach 1,600+ high-achieving students and their families', 'Association with Missouri\u2019s most prestigious youth leadership program', 'Visibility across events, digital channels, and on-campus signage', 'Tax-deductible contribution to a 501(c)(3) organization'].map((item, i) => (
                  <div key={i} className="flex gap-2 items-start text-sm text-gray-500">
                    <span className="text-red font-bold mt-0.5">{'\u2713'}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream border border-gray-200 rounded-xl p-12 text-center">
              <span className="font-serif font-bold text-5xl text-navy">1,600+</span>
              <p className="text-sm text-gray-400 mt-2">Delegates and families reached annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Sponsorship Levels</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Choose Your Partnership Level</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((t, i) => (
              <div key={i} className={`border rounded-xl p-7 ${i === 3 ? 'bg-navy text-white border-navy' : 'bg-white border-gray-200'}`}>
                <span className={`font-serif font-bold text-3xl ${i === 3 ? 'text-gold-light' : 'text-navy'}`}>{t.amount}</span>
                <h3 className={`font-serif font-bold text-lg mt-1 mb-4 ${i === 3 ? 'text-white' : 'text-navy'}`}>{t.name}</h3>
                <ul className="space-y-2">
                  {t.benefits.map((b, j) => (
                    <li key={j} className={`text-sm flex gap-2 items-start ${i === 3 ? 'text-white/80' : 'text-gray-400'}`}>
                      <span className={`${i === 3 ? 'text-gold-light' : 'text-red'} font-bold`}>{'\u2713'}</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-cream border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <Tag>Current Partners</Tag>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {sponsors.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg h-20 flex items-center justify-center px-4">
                <span className="text-[11px] font-bold text-gray-300 text-center leading-tight">{s}<br />Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Get Started</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Sponsorship Inquiry</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {['Contact Name', 'Email', 'Company', 'Phone'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-bold text-navy mb-1">{field}</label>
                  <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-navy mb-1">Interested Sponsorship Level</label>
              <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-navy mb-1">Message</label>
              <div className="w-full h-20 bg-white border border-gray-200 rounded-md" />
            </div>
            <button className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Submit Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Individual Giving */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Looking to make an individual gift?</h2>
          <Link to="/give" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Donate Now
          </Link>
        </div>
      </section>
    </>
  )
}
