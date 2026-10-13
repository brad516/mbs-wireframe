import { Link } from 'react-router-dom'
import PageHero from '../../../components/PageHero'
import TrustSubNav from '../../../components/TrustSubNav'
import Tag from '../../../components/Tag'
import { trust, funds, majorGifts } from '../../../data/trust'

export default function TrustFundsPage() {
  return (
    <>
      <PageHero
        tag="The Memorial Trust"
        title="The Four Funds"
        description="Where a gift to the Trust goes, what it pays for, and who each fund is named for."
      />
      <TrustSubNav />

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {funds.map((f) => (
            <article key={f.slug} id={f.slug} className="bg-white border border-gray-200 rounded-xl p-8 lg:p-10 scroll-mt-36">
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold">{f.kind}{f.since ? ` · since ${f.since}` : ''}</span>
              <h2 className="font-serif font-bold text-navy text-2xl mt-2 mb-3">{f.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-3">{f.desc}</p>
              {f.namedFor && <p className="text-sm text-gray-500 leading-relaxed mb-3">Named for {f.namedFor}</p>}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
                <Link to={`/give?fund=${f.slug}#donate`} className="bg-navy hover:bg-navy-light text-white font-bold text-sm px-6 py-2.5 rounded-lg transition">
                  Give to this fund
                </Link>
                {f.link && (
                  <Link to={f.link.to} className="text-sm font-bold text-red hover:text-red-dark transition">{f.link.label} &rarr;</Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Major gifts */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Tag>Major Gifts</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-4">With thanks</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mb-8">The Trust recognizes its major donors here, in the session booklet and in program publications.</p>
          <ul className="border-t border-gray-200">
            {majorGifts.map((g) => (
              <li key={g.donors} className="flex flex-wrap justify-between gap-2 py-4 border-b border-gray-200">
                <span className="font-serif font-bold text-navy">{g.donors} <span className="font-sans font-normal text-sm text-gray-500">· {g.home}</span></span>
                <span className="text-sm text-gray-500">{g.date}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-6">
            To talk about a major or named gift, write to <a href={`mailto:${trust.email}`} className="font-bold text-navy hover:text-red">{trust.email}</a> or see <Link to="/give/planned" className="font-bold text-navy hover:text-red">planned giving</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
