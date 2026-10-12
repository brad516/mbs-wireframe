import CountUp from './CountUp'
import { surveySource } from '../data/survey2026'

// A row of survey figures with the source line underneath.
export default function SurveyStats({ stats, className = '' }) {
  return (
    <div className={className}>
      <dl className={`grid grid-cols-2 ${stats.length > 4 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden`}>
        {stats.map((s) => (
          <div key={s.label} className="bg-cream p-7 text-center">
            <dd className="font-serif font-bold text-navy text-4xl">{s.plain ? s.number : <CountUp value={s.number} />}</dd>
            <dt className="text-sm text-gray-600 mt-2">{s.label}</dt>
          </div>
        ))}
      </dl>
      <p className="text-xs text-gray-500 mt-3">{surveySource}</p>
    </div>
  )
}
