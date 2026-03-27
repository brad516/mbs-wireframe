import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const leadership = [
  { name: 'Executive Director Name', title: 'Executive Director' },
  { name: 'Board Chair Name', title: 'Board Chair' },
  { name: 'Program Director Name', title: 'Program Director' },
  { name: 'Director of Development Name', title: 'Director of Development' },
]

const stats = [
  { number: '85+', label: 'Years Running' },
  { number: '1,600', label: 'Delegates per Session' },
  { number: '50,000+', label: 'Lifetime Alumni' },
  { number: '49', label: 'States with Programs' },
]

const subPages = [
  { to: '/about/american-legion', title: 'Our History & The American Legion', desc: 'From 1938 to today \u2014 the story of MBS and the Legion that built it.' },
  { to: '/about/financials', title: 'Annual Report & Financials', desc: 'Transparency in how we fund and deliver the Boys State experience.' },
  { to: '/about/staff', title: 'Our Team', desc: 'Meet the staff and volunteers who make Boys State happen.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About"
        title="About Missouri Boys State"
        description="A program of The American Legion, developing civic leaders since 1938."
      />

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>Our Mission</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">Developing Civic Leaders for a Stronger Missouri</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                Missouri Boys State exists to inspire and educate the next generation of civic leaders through hands-on participation in the democratic process.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We believe that when young people experience government firsthand, they become better citizens, stronger leaders, and more engaged members of their communities. Our vision is a Missouri where every community benefits from leaders shaped by the values of service, integrity, and informed civic participation.
              </p>
            </div>
            <MediaPlaceholder label="About MBS Photo / Group Shot" size="tall" />
          </div>
        </div>
      </section>

      {/* Values & Constitution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Tag>Our Values</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-6">What We Stand For</h2>
              <div className="space-y-4">
                {[
                  { title: 'Service', desc: 'A commitment to something greater than ourselves, rooted in the American Legion tradition of selfless service.' },
                  { title: 'Leadership', desc: 'The courage to step forward, make decisions, and inspire others toward a common purpose.' },
                  { title: 'Integrity', desc: 'Doing what is right even when no one is watching. Character is the foundation of effective citizenship.' },
                  { title: 'Civic Engagement', desc: 'An informed, active citizenry is essential to democracy. Boys State cultivates lifelong participants in the democratic process.' },
                ].map((v, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-red/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-sm">{v.title}</h3>
                      <p className="text-sm text-gray-400">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Tag>The MBS Constitution</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-6">A Government by Delegates</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Missouri Boys State operates under its own constitution, drafted and ratified by delegates. The constitution establishes the structure of the 51st state&rsquo;s government, including the powers of each branch, the rights of citizens, and the election process.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Each year, delegates propose amendments through the legislative process &mdash; debating, voting, and enacting constitutional changes just as real legislators do. The constitution is a living document that evolves with each session.
              </p>
              <p className="text-sm text-gray-400 italic">
                The full MBS Constitution is provided to all delegates during orientation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream border-y border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <span className="block font-serif text-4xl font-bold text-navy leading-none">{s.number}</span>
                <span className="block text-[13px] font-medium text-gray-400 mt-1.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Leadership</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Our Leadership Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l, i) => (
              <div key={i} className="bg-cream border border-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <span className="text-sm text-gray-300 font-bold">Photo</span>
                </div>
                <div className="p-5 text-center">
                  <strong className="text-sm text-navy block">{l.name}</strong>
                  <span className="text-xs text-gray-400">{l.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Learn More</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Explore</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {subPages.map((p, i) => (
              <Link key={i} to={p.to} className="bg-white border border-gray-200 rounded-xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                <span className="inline-block mt-4 text-sm font-bold text-navy">Read More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Get Involved</h2>
          <p className="text-white/70 mb-6">Whether you give, nominate, or volunteer \u2014 you help build the next generation of leaders.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/give" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Make a Gift
            </Link>
            <Link to="/nominate" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Nominate a Student
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
