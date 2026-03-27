import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const selectionCriteria = [
  'Demonstrated outstanding leadership during Boys State week',
  'Elected or appointed to a significant state-level office',
  'Strong participation in legislative, judicial, or executive activities',
  'Exemplary character and conduct throughout the session',
  'Selected by a committee of senior counselors and staff',
]

const notableAlumni = [
  { name: 'Notable Name', year: 'Boys Nation 20XX', role: 'U.S. Senator / Governor / Leader', desc: 'Brief description of their career path from Boys Nation to national leadership.' },
  { name: 'Notable Name', year: 'Boys Nation 20XX', role: 'Military / Business / Civic Leader', desc: 'Brief description of their achievements and connection to the Boys Nation experience.' },
  { name: 'Notable Name', year: 'Boys Nation 20XX', role: 'Public Servant / Entrepreneur', desc: 'Brief description highlighting how Boys Nation shaped their trajectory.' },
]

export default function BoysNationPage() {
  return (
    <>
      <PageHero
        tag="Boys Nation"
        title="From Missouri to Washington, D.C."
        description="Each year, two outstanding Missouri Boys State citizens are selected to represent our state at Boys Nation in the nation's capital."
      />

      {/* What Is Boys Nation */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>The Program</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">What Is Boys Nation?</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                Boys Nation is The American Legion&rsquo;s premier youth program at the national level. Each summer, two representatives from every state&rsquo;s Boys State program convene in Washington, D.C. for a week of government simulation at the federal level.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Boys Nation senators draft and debate legislation, elect a president and vice president, and hear from national leaders including senators, Supreme Court justices, and cabinet members.
              </p>
              <p className="text-gray-500 leading-relaxed">
                The program has produced presidents, senators, governors, and leaders across every field. It represents the pinnacle of the Boys State experience.
              </p>
            </div>
            <MediaPlaceholder label="Boys Nation in Washington, D.C. Photo" size="tall" />
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Tag>Selection</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-6">How Citizens Are Selected</h2>
            <p className="text-gray-500 mb-8">On the final day of Missouri Boys State, a selection committee identifies two outstanding citizens to represent Missouri at Boys Nation. Selection is based on:</p>
            <ul className="space-y-3">
              {selectionCriteria.map((c, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1 w-5 h-5 bg-red rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">{'\u2713'}</span>
                  </span>
                  <span className="text-gray-500">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Notable Alumni</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Missouri&rsquo;s Boys Nation Alumni</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {notableAlumni.map((a, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <span className="text-sm text-gray-300 font-bold">Photo</span>
                </div>
                <div className="p-5">
                  <strong className="text-sm text-navy block">{a.name}</strong>
                  <span className="text-xs text-gold font-bold">{a.year}</span>
                  <span className="text-xs text-gray-400 block">{a.role}</span>
                  <p className="text-sm text-gray-400 mt-2">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">It all starts at Boys State</h2>
          <p className="text-white/70 mb-6">Every Boys Nation senator began as a Boys State citizen. Your journey starts with one application.</p>
          <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}
