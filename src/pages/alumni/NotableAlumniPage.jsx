import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const categories = ['All', 'Government', 'Military', 'Business', 'Education']

const alumni = [
  { name: 'Governor Name', year: 'Class of 19XX', role: 'Governor of Missouri', category: 'Government' },
  { name: 'Senator Name', year: 'Class of 19XX', role: 'U.S. Senator', category: 'Government' },
  { name: 'Representative Name', year: 'Class of 20XX', role: 'State Representative', category: 'Government' },
  { name: 'General Name', year: 'Class of 19XX', role: 'U.S. Army General', category: 'Military' },
  { name: 'Admiral Name', year: 'Class of 19XX', role: 'U.S. Navy Admiral', category: 'Military' },
  { name: 'CEO Name', year: 'Class of 19XX', role: 'CEO, Fortune 500 Company', category: 'Business' },
  { name: 'Founder Name', year: 'Class of 20XX', role: 'Founder & CEO, Tech Startup', category: 'Business' },
  { name: 'President Name', year: 'Class of 19XX', role: 'University President', category: 'Education' },
  { name: 'Judge Name', year: 'Class of 19XX', role: 'Missouri Supreme Court Justice', category: 'Government' },
  { name: 'Colonel Name', year: 'Class of 20XX', role: 'U.S. Air Force Colonel', category: 'Military' },
  { name: 'Director Name', year: 'Class of 20XX', role: 'Nonprofit Executive Director', category: 'Business' },
  { name: 'Professor Name', year: 'Class of 19XX', role: 'Distinguished Professor, Mizzou', category: 'Education' },
]

const governors = [
  { year: '2025', name: 'Governor Name', hometown: 'City, MO' },
  { year: '2024', name: 'Governor Name', hometown: 'City, MO' },
  { year: '2023', name: 'Governor Name', hometown: 'City, MO' },
  { year: '2022', name: 'Governor Name', hometown: 'City, MO' },
  { year: '2021', name: 'Governor Name', hometown: 'City, MO' },
  { year: '2019', name: 'Governor Name', hometown: 'City, MO' },
]

export default function NotableAlumniPage() {
  return (
    <>
      <PageHero
        tag="Alumni"
        title="Notable Alumni"
        description="Missouri Boys State alumni lead in government, military, business, education, and every field in between."
      />

      {/* Category Tabs (wireframe) */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 py-3">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`px-4 py-2 rounded-md text-sm font-bold transition ${
                  i === 0 ? 'bg-navy text-white' : 'text-navy hover:bg-gray-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumni.map((a, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <span className="text-sm text-gray-300 font-bold">Photo</span>
                </div>
                <div className="p-4">
                  <strong className="text-sm text-navy block">{a.name}</strong>
                  <span className="text-xs text-gold font-bold">{a.year}</span>
                  <span className="text-xs text-gray-400 block">{a.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MBS Governors */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Tag>MBS Governors</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Boys State Governors</h2>
          <p className="text-gray-500 mb-6">Missouri Boys State governors have come from all over the state, from towns and cities of all sizes. Every citizen at the start of the week has the opportunity to run for governor.</p>
          <div className="bg-cream border border-gray-200 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-navy text-white text-sm font-bold px-6 py-3">
              <span>Year</span>
              <span>Governor</span>
              <span>Hometown</span>
            </div>
            {governors.map((g, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-3 text-sm ${i % 2 === 0 ? 'bg-cream' : 'bg-white'} border-t border-gray-200`}>
                <span className="font-bold text-navy">{g.year}</span>
                <span className="text-gray-500">{g.name}</span>
                <span className="text-gray-400">{g.hometown}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Add your story</h2>
          <p className="text-white/70 mb-6">Join the alumni association and stay connected to the Boys State community.</p>
          <Link to="/alumni/join" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Join Alumni Association
          </Link>
        </div>
      </section>
    </>
  )
}
