import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const steps = [
  { step: '1', title: 'Make Your Gift', desc: 'Donate online at any level through our Give page. Every dollar helps sponsor a future citizen.', color: 'bg-navy' },
  { step: '2', title: 'Check with Your Employer', desc: 'Ask your HR department or search your company\u2019s matching gift portal to see if they match charitable contributions.', color: 'bg-red' },
  { step: '3', title: 'Submit the Match Request', desc: 'Complete your employer\u2019s matching gift form. Most can be done online in just a few minutes.', color: 'bg-gold' },
  { step: '4', title: 'Double Your Impact', desc: 'Your employer sends their match to MBS. A $500 gift becomes $1,000 \u2014 sponsoring two citizens instead of one.', color: 'bg-navy-light' },
]

const commonEmployers = [
  'Boeing', 'Edward Jones', 'Cerner / Oracle Health', 'Emerson Electric',
  'Burns & McDonnell', 'Hallmark', 'Commerce Bank', 'DST Systems',
  'Garmin', 'O\u2019Reilly Auto Parts', 'Bass Pro Shops', 'Veterans United',
]

export default function MatchingGiftsPage() {
  return (
    <>
      <PageHero
        tag="Matching Gifts"
        title="Double Your Impact"
        description="Many employers match charitable contributions dollar-for-dollar. That means your $500 gift could sponsor two citizens instead of one."
      />

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Tag>How It Works</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-2">Four Simple Steps</h2>
            <p className="text-gray-400">Most matching gift requests take less than 5 minutes to complete.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className={`${s.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <span className="font-serif font-bold text-2xl">{s.step}</span>
                </div>
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Math */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>The Math</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">See Your Impact Multiply</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                When your employer matches your gift, every dollar goes twice as far. Here&rsquo;s what that looks like for Missouri Boys State:
              </p>
              <div className="space-y-3">
                {[
                  { gift: '$50', match: '$100', impact: 'Covers program materials for a citizen' },
                  { gift: '$100', match: '$200', impact: 'Funds meals for a citizen\u2019s entire week' },
                  { gift: '$250', match: '$500', impact: 'Fully sponsors one citizen' },
                  { gift: '$500', match: '$1,000', impact: 'Sponsors two citizens to Boys State' },
                ].map((row, i) => (
                  <div key={i} className="bg-cream border border-gray-200 rounded-lg px-5 py-3 flex items-center gap-4">
                    <span className="font-serif font-bold text-navy text-lg w-16">{row.gift}</span>
                    <span className="text-gray-400">&rarr;</span>
                    <span className="font-serif font-bold text-red text-lg w-16">{row.match}</span>
                    <span className="text-sm text-gray-500 flex-1">{row.impact}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream border border-gray-200 rounded-xl p-12 text-center">
              <span className="font-serif font-bold text-6xl text-red">2x</span>
              <p className="text-sm text-gray-400 mt-3">Your gift, doubled by your employer</p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-navy font-bold">Some employers match 2:1 or even 3:1</p>
                <p className="text-xs text-gray-400 mt-1">Check your company&rsquo;s specific policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employer Search */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Find Your Employer</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">Does Your Employer Match?</h2>
          <p className="text-gray-500 mb-8">Search below to see if your company offers a matching gift program. Thousands of employers participate.</p>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50 mb-10">
            <label className="block text-sm font-bold text-navy mb-2">Search Your Employer</label>
            <div className="flex gap-3">
              <div className="flex-1 h-12 bg-white border border-gray-200 rounded-lg" />
              <button className="bg-navy text-white font-bold text-sm px-6 rounded-lg transition hover:bg-navy-light">
                Search
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">Matching gift search widget placeholder &mdash; integrates with Double the Donation or similar service.</p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-navy text-lg mb-4">Common Missouri Employers That Match</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {commonEmployers.map((e, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 text-center">
                  {e}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">This is not a complete list. Contact your HR department to confirm your company&rsquo;s matching gift policy.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-3">Ready to double your impact?</h2>
          <p className="text-white/70 mb-6">Make a gift now, then submit your employer&rsquo;s matching gift form.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/give" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Make a Gift
            </Link>
            <Link to="/contact" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
