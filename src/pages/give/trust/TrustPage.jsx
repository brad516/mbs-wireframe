import { Link } from 'react-router-dom'
import PageHero from '../../../components/PageHero'
import Tag from '../../../components/Tag'
import InfluenceStat from '../../../components/InfluenceStat'
import { trust, funds, lehrSpeakers } from '../../../data/trust'

const yearsOfSpeakers = lehrSpeakers.length

export default function TrustPage() {
  return (
    <>
      <PageHero
        photo="hero.give"
        photoPosition="object-[center_18%]"
        tag="The Memorial Trust"
        title="The Fund That Keeps Boys State Here"
        description={trust.summary}
      />

      {/* Why it exists */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Tag>Since {trust.foundedYear}</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-5">A rainy day fund, built to last</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">{trust.origin}</p>
            <p className="text-gray-600 leading-relaxed">{trust.legal}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-red">This year</span>
              <h3 className="font-serif font-bold text-navy text-xl mt-2 mb-2">A gift to Missouri Boys State</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Is spent on the next session: one citizen&rsquo;s week costs $500, and every citizen is fully sponsored.</p>
            </div>
            <div className="p-8 bg-cream">
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold">Every year after</span>
              <h3 className="font-serif font-bold text-navy text-xl mt-2 mb-2">A gift to the Memorial Trust</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Is invested. The principal stays put and what it earns pays for speakers, scholarships and sponsorships, year after year.</p>
            </div>
          </div>
        </div>
      </section>

      <InfluenceStat number={String(yearsOfSpeakers)} headline="national speakers, one for every session since 1989">
        The Trust&rsquo;s Lehr Speakers Chair has brought senators, governors, generals and journalists to Boys State. The chair&rsquo;s endowment pays the speaker&rsquo;s fee and expenses.
      </InfluenceStat>

      {/* Funds */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <Tag>Four Funds</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-4">Choose what your gift does</h2>
            <p className="text-gray-600 leading-relaxed">Every gift to the Trust goes into one of four funds. Three have a set purpose. The fourth goes wherever the trustees see the greatest need.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {funds.map((f) => (
              <div key={f.slug} className="bg-white p-8 flex flex-col">
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold">{f.kind}{f.since ? ` · since ${f.since}` : ''}</span>
                <p className="font-serif font-bold text-navy text-xl leading-snug mt-3 mb-2">{f.hook}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{f.desc}</p>
                <Link to={`/give?fund=${f.slug}#donate`} className="mt-auto text-sm font-bold text-red hover:text-red-dark transition">
                  Give to the {f.name} &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/give/trust/funds" className="text-sm font-bold text-navy hover:text-red transition">Read about each fund and who it is named for &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Who runs it */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <Tag>Who Runs It</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-4">Its own trustees, one shared purpose</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Trust and Missouri Boys State are two organizations. The program&rsquo;s board runs the session. The trustees look after the endowment and decide what it pays for. Both exist for the same week in June.
            </p>
            <Link to="/give/trust/trustees" className="text-sm font-bold text-red hover:text-red-dark transition">Meet the trustees &rarr;</Link>
          </div>
          <div>
            <Tag>Fundraising</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-4">Trivia night is the Trust&rsquo;s event</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The annual trivia night is hosted by the Memorial Trust and raises money for it.
            </p>
            <Link to="/events/trivia" className="text-sm font-bold text-red hover:text-red-dark transition">Trivia night details and tickets &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Give to the endowment</h2>
          <p className="text-white/70 mb-6">One-time or monthly. Your receipt comes from {trust.name}.</p>
          <Link to="/give?fund=weyer#donate" className="inline-block bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Give to the Memorial Trust
          </Link>
        </div>
      </section>
    </>
  )
}
