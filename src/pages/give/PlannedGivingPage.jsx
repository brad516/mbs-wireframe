import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const givingTypes = [
  {
    title: 'Bequest in Your Will',
    desc: 'Name Missouri Boys State as a beneficiary in your will or living trust. You can designate a specific dollar amount, a percentage of your estate, or the remainder after other bequests are fulfilled.',
  },
  {
    title: 'Beneficiary Designation',
    desc: 'Designate MBS as a beneficiary of your retirement account (IRA, 401k), life insurance policy, or donor-advised fund. One of the simplest ways to make a lasting gift.',
  },
  {
    title: 'Charitable Remainder Trust',
    desc: 'Establish a trust that provides you or your family with income during your lifetime, then transfers the remaining assets to Missouri Boys State.',
  },
  {
    title: 'Charitable Gift Annuity',
    desc: 'Make a gift and receive fixed payments for life in return. A charitable gift annuity offers a guaranteed income stream and a current-year tax deduction.',
  },
]

const reasons = [
  'Create a lasting legacy that shapes civic leaders for decades to come',
  'Receive potential estate and income tax benefits',
  'Ensure Missouri Boys State remains free for every citizen, forever',
  'Join the MBS Legacy Society and be recognized for your commitment',
  'Your gift can be directed to specific programs or general operations',
]

export default function PlannedGivingPage() {
  return (
    <>
      <PageHero
        tag="Planned Giving"
        title="Leave a Legacy of Leadership"
        description="A planned gift to Missouri Boys State ensures that future generations of young men can experience the week that changes everything &mdash; at no cost to their families."
      />

      {/* Why Planned Giving */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>Your Legacy</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">Shape the Future Beyond Your Lifetime</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                For 85+ years, Missouri Boys State has developed civic leaders because people like you believed in investing in the next generation. A planned gift ensures that legacy continues &mdash; funding citizen sponsorships, program innovation, and the experiences that shape tomorrow&rsquo;s leaders.
              </p>
              <ul className="space-y-3">
                {reasons.map((r, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-gray-500">
                    <span className="text-red font-bold mt-0.5">{'\u2713'}</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream border border-gray-200 rounded-xl p-12 text-center">
              <span className="font-serif font-bold text-5xl text-navy">85+</span>
              <p className="text-sm text-gray-400 mt-2">Years of developing civic leaders</p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <span className="font-serif font-bold text-3xl text-red">50,000+</span>
                <p className="text-sm text-gray-400 mt-1">Lifetime alumni and counting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Planned Gifts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Ways to Give</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Types of Planned Gifts</h2>
            <p className="text-gray-400">There are many ways to include Missouri Boys State in your long-term plans. We recommend consulting with your financial advisor to determine the best option for your situation.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {givingTypes.map((g, i) => (
              <div key={i} className="bg-cream border border-gray-200 rounded-xl p-7">
                <h3 className="font-serif font-bold text-navy text-lg mb-3">{g.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Society */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Tag>Legacy Society</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-4">The MBS Legacy Society</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            When you include Missouri Boys State in your estate plans, you become a member of the MBS Legacy Society &mdash; a group of forward-thinking donors who have made a commitment to the future of civic leadership in Missouri.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Legacy Society members receive special recognition at events, annual updates on how their commitment is shaping the program, and the knowledge that their investment will develop leaders for generations to come.
          </p>
          <div className="bg-cream border border-gray-200 rounded-xl p-8 inline-block">
            <p className="text-sm text-navy font-bold mb-1">Already included MBS in your plans?</p>
            <p className="text-sm text-gray-400">Let us know so we can welcome you to the Legacy Society and ensure your wishes are honored.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Get Started</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">Start the Conversation</h2>
          <p className="text-gray-500 mb-8">We&rsquo;re happy to discuss planned giving options and help you find the right fit. Reach out to our development team to get started.</p>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {['Full Name', 'Email', 'Phone', 'Preferred Contact Method'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-bold text-navy mb-1">{field}</label>
                  <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                </div>
              ))}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-navy mb-1">Tell us about your interest in planned giving</label>
              <div className="w-full h-20 bg-white border border-gray-200 rounded-md" />
            </div>
            <button className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Submit Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-3">Want to make an immediate impact?</h2>
          <p className="text-white/70 mb-6">A $500 gift today fully sponsors one citizen&rsquo;s Boys State experience.</p>
          <Link to="/give" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Donate Now
          </Link>
        </div>
      </section>
    </>
  )
}
