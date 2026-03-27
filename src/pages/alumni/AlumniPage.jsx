import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const getInvolved = [
  { to: '/alumni/join', title: 'Join the Alumni Association', desc: 'Connect with 50,000+ fellow alumni. Access events, networking, and ways to give back.', cta: 'Join Now', color: 'bg-red' },
  { to: '/give', title: 'Sponsor a Future Citizen', desc: 'Your tax-deductible gift of $500 fully sponsors a delegate. Pay it forward and send the next generation to Boys State.', cta: 'Donate', color: 'bg-gold' },
  { to: '/events', title: 'Attend Events', desc: 'Trivia nights, golf tournaments, homecoming \u2014 stay connected with the MBS community.', cta: 'See Events', color: 'bg-navy' },
]

const spotlights = [
  { name: 'Alumni Name', year: 'Class of 2015', role: 'State Representative, District 42', quote: 'Boys State showed me that public service isn\u2019t about power \u2014 it\u2019s about people.' },
  { name: 'Alumni Name', year: 'Class of 2008', role: 'CEO, Missouri Tech Startup', quote: 'The leadership skills I built at Boys State are the same ones I use to run my company today.' },
  { name: 'Alumni Name', year: 'Class of 2019', role: 'U.S. Army Officer', quote: 'Boys State was the first place someone told me I could lead. I haven\u2019t stopped since.' },
]

export default function AlumniPage() {
  return (
    <>
      <PageHero
        tag="Alumni"
        title="Once a Boys Stater, Always a Boys Stater"
        description="Join a network of 50,000+ alumni who are leading in every field and every community across Missouri and beyond."
      />

      {/* Get Involved */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {getInvolved.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-7">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.desc}</p>
                <Link to={item.to} className={`inline-block ${item.color} hover:opacity-90 text-white font-bold text-sm px-5 py-2 rounded-lg transition`}>
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Spotlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Alumni Spotlights</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Leading Everywhere</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {spotlights.map((s, i) => (
              <div key={i} className="bg-cream border border-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <span className="text-sm text-gray-300 font-bold">Photo</span>
                </div>
                <div className="p-5">
                  <blockquote className="font-serif text-sm italic text-navy leading-relaxed mb-3">
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>
                  <strong className="text-sm text-navy block">{s.name}</strong>
                  <span className="text-xs text-gray-400 block">{s.year}</span>
                  <span className="text-xs text-red font-bold">{s.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream border-y border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '50,000+', label: 'Lifetime Alumni' },
              { number: '85+', label: 'Years of Brotherhood' },
              { number: '49', label: 'States with Programs' },
              { number: '2', label: 'Boys Nation Senators / Year' },
            ].map((s, i) => (
              <div key={i}>
                <span className="block font-serif text-3xl font-bold text-navy leading-none">{s.number}</span>
                <span className="block text-[13px] font-medium text-gray-400 mt-1.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/alumni/notable" className="bg-navy hover:bg-navy-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Notable Alumni
            </Link>
            <Link to="/alumni/join" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Join the Alumni Association
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Your Boys State story isn&rsquo;t over</h2>
          <p className="text-white/70 mb-6">Give back to the program that shaped you. Your support sends the next generation.</p>
          <Link to="/give" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Make a Gift
          </Link>
        </div>
      </section>
    </>
  )
}
