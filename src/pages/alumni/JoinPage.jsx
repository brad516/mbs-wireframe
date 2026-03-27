import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const benefits = [
  { title: 'Network', desc: 'Connect with 50,000+ alumni across Missouri and beyond. Find mentors, colleagues, and lifelong friends.' },
  { title: 'Events', desc: 'Access to alumni-exclusive events including homecoming weekend, golf tournaments, and regional gatherings.' },
  { title: 'Give Back', desc: 'Volunteer as a counselor, mentor, or speaker. Help shape the next generation of Boys State delegates.' },
]

export default function JoinPage() {
  return (
    <>
      <PageHero
        tag="Alumni Association"
        title="Join the Alumni Association"
        description="Nearly 70,000 young men have passed through Missouri Boys State. Stay connected to the program that shaped you."
      />

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Member Benefits</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Why Join</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-7 text-center">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Sign Up</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Membership Form</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {['Full Name', 'Email Address', 'Year Attended', 'City Assigned'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-bold text-navy mb-1">{field}</label>
                  <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                </div>
              ))}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-navy mb-1">Current City / State</label>
              <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
            </div>
            <button className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Join the Alumni Association
            </button>
            <p className="text-xs text-gray-400 mt-3">Membership is free. You&rsquo;ll receive a welcome email with next steps.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Want to give back too?</h2>
          <p className="text-white/70 mb-6">Pay it forward \u2014 your $500 gift fully sponsors a future citizen to attend Boys State.</p>
          <Link to="/give" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Make a Gift
          </Link>
        </div>
      </section>
    </>
  )
}
