import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const scholarships = [
  { title: 'Samsung American Legion Scholarship', desc: 'National scholarship available to Boys State and Boys Nation citizens for college tuition.', amount: 'Up to $10,000' },
  { title: 'Partner University Scholarships', desc: 'Several Missouri universities offer scholarships specifically for Boys State alumni.', amount: 'Varies by institution' },
  { title: 'MBS Memorial Trust College Scholarships', desc: 'Merit-based college scholarships funded by the Missouri Boys State Memorial Trust and generous donors.', amount: 'Varies' },
  { title: 'Boys Nation Scholarships', desc: 'Additional scholarship opportunities for citizens selected to represent Missouri at Boys Nation in Washington, D.C.', amount: 'Varies' },
]

export default function CollegeCreditPage() {
  return (
    <>
      <PageHero
        tag="College & Careers"
        title="College Credit & Scholarships"
        description="Boys State doesn't just build leaders \u2014 it opens doors to college credit, scholarships, and a standout application."
      />

      {/* College Credit */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>College Credit</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">Earn Credit While You Lead</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                Missouri Boys State partners with accredited institutions to offer college credit for your participation. The program&rsquo;s curriculum in government, leadership, and civic engagement qualifies for credit at participating universities.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Details about credit eligibility, partner institutions, and the enrollment process are provided to all accepted citizens. Credits may be transferable to the college or university of your choice.
              </p>
            </div>
            <div className="bg-cream border border-gray-200 rounded-xl p-12 text-center">
              <div className="text-5xl mb-4">{'\u{1F393}'}</div>
              <p className="font-serif font-bold text-navy text-xl mb-2">College Credit Available</p>
              <p className="text-sm text-gray-400">Through partner institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Scholarships</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Scholarship Opportunities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {scholarships.map((s, i) => (
              <div key={i} className="bg-cream border border-gray-200 rounded-xl p-7">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-bold text-navy text-lg">{s.title}</h3>
                  <span className="text-sm font-bold text-red shrink-0 ml-4">{s.amount}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Value */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Tag>Application Advantage</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-4">Stand Out on Every Application</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Admissions officers at top universities recognize Missouri Boys State as one of the premier leadership programs in the country. Citizens consistently report that their Boys State experience was the most-discussed topic in college interviews.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether you&rsquo;re applying to colleges, scholarship programs, or internships \u2014 Boys State on your resume signals leadership, civic engagement, and initiative.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Invest in your future</h2>
          <p className="text-white/70 mb-6">Apply now for a week that pays dividends for the rest of your life.</p>
          <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}
