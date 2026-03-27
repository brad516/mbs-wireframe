import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const inductees = [
  { name: 'Inductee Name', year: 'Class of 19XX', role: 'Governor of Missouri', inducted: '2024', desc: 'Served as MBS Governor, went on to become a two-term Governor of Missouri and champion of education reform.' },
  { name: 'Inductee Name', year: 'Class of 19XX', role: 'U.S. Senator', inducted: '2023', desc: 'Represented Missouri in the U.S. Senate for 18 years. Known for bipartisan leadership and veterans\u2019 advocacy.' },
  { name: 'Inductee Name', year: 'Class of 19XX', role: 'U.S. Army General (Ret.)', inducted: '2023', desc: 'Four-star general who led major operations. Credits Boys State with sparking his commitment to service.' },
  { name: 'Inductee Name', year: 'Class of 19XX', role: 'CEO & Philanthropist', inducted: '2022', desc: 'Built a Fortune 500 company from the ground up. Major donor to MBS scholarships and youth programs.' },
  { name: 'Inductee Name', year: 'Class of 19XX', role: 'Missouri Supreme Court Justice', inducted: '2022', desc: 'Longest-serving justice on the Missouri Supreme Court. A champion of civic education and rule of law.' },
  { name: 'Inductee Name', year: 'Class of 19XX', role: 'University President', inducted: '2021', desc: 'Led a major Missouri university for two decades. Established Boys State scholarship programs at the institution.' },
]

export default function HallOfFamePage() {
  return (
    <>
      <PageHero
        tag="Recognition"
        title="Hall of Fame"
        description="Honoring the alumni whose extraordinary achievements and service reflect the highest ideals of Missouri Boys State."
      />

      {/* About */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Tag>About the Hall of Fame</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-4">Excellence Recognized</h2>
          <p className="text-gray-500 leading-relaxed">
            The Missouri Boys State Hall of Fame was established to honor alumni who have demonstrated extraordinary achievement in their careers, exceptional service to their communities, and a lasting commitment to the values instilled during their Boys State experience. Inductees are selected annually by a committee of alumni, staff, and board members.
          </p>
        </div>
      </section>

      {/* Inductees */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Tag>Inductees</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Hall of Fame Members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inductees.map((person, i) => (
              <div key={i} className="bg-cream border border-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <span className="text-sm text-gray-300 font-bold">Photo</span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold text-gold tracking-wide uppercase">Inducted {person.inducted}</span>
                  <h3 className="font-serif font-bold text-navy text-lg mt-1">{person.name}</h3>
                  <span className="text-xs text-red font-bold">{person.role}</span>
                  <span className="text-xs text-gray-400 block">{person.year}</span>
                  <p className="text-sm text-gray-400 mt-2">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nominate */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Know a worthy alumni?</h2>
          <p className="text-white/70 mb-6">Nominations for the Hall of Fame are accepted year-round.</p>
          <Link to="/contact" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Submit a Nomination
          </Link>
        </div>
      </section>
    </>
  )
}
