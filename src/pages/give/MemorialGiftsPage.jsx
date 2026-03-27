import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

export default function MemorialGiftsPage() {
  return (
    <>
      <PageHero
        tag="Memorial & Honor Gifts"
        title="Give in Someone&rsquo;s Name"
        description="Honor a loved one, celebrate a milestone, or memorialize someone special with a gift that sponsors future citizens of Missouri Boys State."
      />

      {/* Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-5">
                <span className="text-navy text-xl font-bold">{'\u2605'}</span>
              </div>
              <h3 className="font-serif font-bold text-navy text-xl mb-3">In Honor Of</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Celebrate a birthday, graduation, retirement, Father&rsquo;s Day, or any special occasion with a gift that shapes the next generation of leaders. A great way to honor a Boys State alumnus in your life.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2"><span className="text-red font-bold">{'\u2713'}</span>Personalized acknowledgment sent to the honoree or their family</li>
                <li className="flex gap-2"><span className="text-red font-bold">{'\u2713'}</span>Option to include a personal message</li>
                <li className="flex gap-2"><span className="text-red font-bold">{'\u2713'}</span>Tax-deductible receipt provided to donor</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center mb-5">
                <span className="text-red text-xl font-bold">{'\u2764'}</span>
              </div>
              <h3 className="font-serif font-bold text-navy text-xl mb-3">In Memory Of</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Remember a loved one with a gift that carries their legacy forward. Memorial gifts are a meaningful way to honor someone who valued civic leadership, service, or the Boys State experience.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2"><span className="text-red font-bold">{'\u2713'}</span>Personalized sympathy acknowledgment sent to the family</li>
                <li className="flex gap-2"><span className="text-red font-bold">{'\u2713'}</span>Name recognized in the MBS Annual Report (with permission)</li>
                <li className="flex gap-2"><span className="text-red font-bold">{'\u2713'}</span>Tax-deductible receipt provided to donor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Make a Gift</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-3">Memorial &amp; Honor Gift Form</h2>
          <p className="text-gray-500 mb-8">Complete the form below and we&rsquo;ll handle the rest &mdash; including sending a personalized acknowledgment to the honoree or family.</p>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50">
            <div className="mb-6">
              <label className="block text-sm font-bold text-navy mb-2">Gift Type</label>
              <div className="flex gap-3">
                <button className="flex-1 py-3 border-2 border-navy rounded-lg text-sm font-bold text-navy bg-cream">
                  In Honor Of
                </button>
                <button className="flex-1 py-3 border border-gray-200 rounded-lg text-sm font-bold text-gray-400">
                  In Memory Of
                </button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {['Honoree / Memorialized Name', 'Relationship to Honoree', 'Your Full Name', 'Your Email'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-bold text-navy mb-1">{field}</label>
                  <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-navy mb-2">Gift Amount</label>
              <div className="flex gap-3">
                {['$50', '$100', '$250', '$500', 'Other'].map((amt) => (
                  <button key={amt} className="flex-1 py-3 border border-gray-200 rounded-lg text-sm font-bold text-navy hover:border-red hover:text-red transition">
                    {amt}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold text-navy mb-1">Acknowledgment Recipient Name</label>
                <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-1">Acknowledgment Recipient Email or Address</label>
                <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-navy mb-1">Personal Message (optional)</label>
              <div className="w-full h-20 bg-white border border-gray-200 rounded-md" />
            </div>
            <button className="w-full bg-gold hover:bg-gold-light text-white font-bold text-base py-4 rounded-lg transition">
              Complete Gift
            </button>
            <p className="text-xs text-gray-400 mt-3 text-center">Missouri Boys State is a 501(c)(3). All gifts are tax-deductible.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-3">Prefer to give another way?</h2>
          <p className="text-white/70 mb-6">Explore all the ways you can support Missouri Boys State.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/give" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Donate Online
            </Link>
            <Link to="/give/planned" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Planned Giving
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
