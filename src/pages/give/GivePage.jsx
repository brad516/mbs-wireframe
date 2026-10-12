import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import InfluenceStat from '../../components/InfluenceStat'
import SurveyStats from '../../components/SurveyStats'
import { survey, surveySource, surveyQuotes } from '../../data/survey2026'
import { CoreValues } from '../../components/Mission'
import DonationFormDemo from '../../components/DonationFormDemo'
import { SampleBadge } from '../home/PrestigeSections'

const levels = [
  { name: 'Friend', amount: '$50', desc: 'Contributes toward sponsoring a future citizen', color: 'border-t-navy' },
  { name: 'Advocate', amount: '$100', desc: 'Funds program materials and meals for one citizen', color: 'border-t-[#2b82c9]' },
  { name: 'Champion', amount: '$250', desc: 'Covers half the cost to sponsor one citizen', color: 'border-t-gold' },
  { name: 'Sponsor', amount: '$500', desc: 'Fully sponsors one citizen’s entire Boys State experience', color: 'border-t-red' },
]

const otherWays = [
  { to: '/give/planned', title: 'Planned Giving', desc: 'Include Missouri Boys State in your estate plan and create a lasting legacy for future generations of leaders.' },
  { to: '/give/matching', title: 'Matching Gifts', desc: 'Many employers match charitable contributions. Check with your HR department to double your impact.' },
  { to: '/give/memorial', title: 'Memorial & Honor Gifts', desc: 'Make a gift in memory or in honor of a loved one. We’ll send a personalized acknowledgment to the honoree or family.' },
]

export default function GivePage() {
  return (
    <>
      <PageHero
        photo="hero.give"
        photoPosition="object-[center_18%]"
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
            <p className="text-gray-600 leading-relaxed">
              Every citizen is fully sponsored — we never charge parents or families. A $500 sponsorship covers one citizen&rsquo;s entire week: housing, meals, materials, speakers, and life-changing civic education. Your gift at any level helps send Missouri&rsquo;s next generation of leaders to Boys State.
            </p>
          </div>

          {/* Giving Levels */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((l, i) => (
              <div key={i} className={`bg-white border border-gray-200 ${l.color} border-t-4 rounded-xl p-7 text-center`}>
                <span className="font-serif font-bold text-3xl text-navy">{l.amount}</span>
                <h3 className="font-serif font-bold text-navy text-lg mt-2 mb-2">{l.name}</h3>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a gift produces */}
      <InfluenceStat number={survey.donors.lead.number} headline={survey.donors.lead.headline} source={surveySource}>
        {survey.donors.lead.detail}
      </InfluenceStat>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <Tag>What Your Gift Produces</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-4">One Week, Measured</h2>
            <p className="text-gray-600 leading-relaxed">
              At the end of the 2026 session we asked every citizen what the week had done for him. This is what they said.
            </p>
          </div>
          <SurveyStats stats={survey.donors.stats} className="mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            {surveyQuotes.donors.map((q, i) => (
              <blockquote key={i} className="border-t-2 border-gold pt-6">
                <p className="font-serif italic text-navy text-lg leading-relaxed">&ldquo;{q.quote}&rdquo;</p>
                <footer className="text-xs text-gray-500 mt-3">{q.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <InfluenceStat number={survey.donors.bus.number} headline={survey.donors.bus.headline} source={surveySource}>
        {survey.donors.bus.detail} Your gift keeps those buses running.
      </InfluenceStat>

      {/* Donation Form Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <Tag>Make a Gift</Tag>
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="font-serif font-bold text-navy text-3xl">Donate Online</h2>
            <SampleBadge />
          </div>
          <DonationFormDemo />
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
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{w.desc}</p>
                <span className="text-sm font-bold text-red">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CoreValues variant="band" lead="Every gift goes toward one mission and four values." />
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
