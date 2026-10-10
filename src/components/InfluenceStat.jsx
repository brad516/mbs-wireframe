import CountUp from './CountUp'

// One large survey figure with a sentence beside it.
export default function InfluenceStat({ number, headline, children, source }) {
  return (
    <section className="bg-white border-b border-gray-200 py-14">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-center">
        <p className="font-serif font-bold text-red text-7xl lg:text-8xl leading-none text-center md:text-left">
          <CountUp value={number} />
        </p>
        <div className="md:border-l md:border-gray-200 md:pl-12 text-center md:text-left">
          <h2 className="font-serif font-bold text-navy text-2xl lg:text-3xl leading-snug mb-3">{headline}</h2>
          <p className="text-gray-600 leading-relaxed">{children}</p>
          {source && <p className="text-xs text-gray-500 mt-3">{source}</p>}
        </div>
      </div>
    </section>
  )
}
