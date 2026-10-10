import Tag from './Tag'
import { vision, mission, coreValues } from '../data/mission'

// The vision as a large statement with the mission beneath it.
export function MissionVision({ align = 'center' }) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'max-w-4xl mx-auto text-center' : 'max-w-2xl'}>
      <Tag>Our Vision</Tag>
      <p className="font-serif font-bold text-navy text-3xl lg:text-4xl leading-snug mb-10">
        {vision}
      </p>
      <div className={`border-t border-gray-200 pt-8 ${centered ? 'max-w-2xl mx-auto' : ''}`}>
        <Tag>Our Mission</Tag>
        <p className="text-lg text-gray-600 leading-relaxed">{mission}</p>
      </div>
    </div>
  )
}

// The four core values.
//   grid  four columns with the word, the statement and how it shows up
//   list  stacked, for a narrow column
//   band  a compact navy strip for the foot of a page
export function CoreValues({ variant = 'grid', lead }) {
  if (variant === 'band') {
    return (
      <section className="bg-cream border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <Tag>Our Core Values</Tag>
            {lead && <p className="font-serif font-bold text-navy text-2xl lg:text-3xl max-w-2xl leading-snug">{lead}</p>}
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {coreValues.map((v) => (
              <li key={v.word} className="bg-white p-6">
                <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-gold">{v.word}</span>
                <span className="block font-serif font-bold text-navy text-lg mt-2">{v.statement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  if (variant === 'list') {
    return (
      <ul className="divide-y divide-gray-200 border-y border-gray-200">
        {coreValues.map((v) => (
          <li key={v.word} className="py-5">
            <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-gold">{v.word}</span>
            <span className="block font-serif font-bold text-navy text-lg mt-1">{v.statement}</span>
            <span className="block text-sm text-gray-600 leading-relaxed mt-1">{v.inPractice}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
      {coreValues.map((v, i) => (
        <li key={v.word} className="bg-cream p-7">
          <span className="font-serif text-gold text-sm font-bold tracking-widest">0{i + 1}</span>
          <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-gold mt-3">{v.word}</span>
          <h3 className="font-serif font-bold text-navy text-xl mt-1 mb-3">{v.statement}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{v.inPractice}</p>
        </li>
      ))}
    </ul>
  )
}
