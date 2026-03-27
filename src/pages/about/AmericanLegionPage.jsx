import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const timeline = [
  { year: '1935', title: 'Boys State Founded', desc: 'The American Legion establishes Boys State as a national program to teach youth about government through hands-on participation.' },
  { year: '1938', title: 'Missouri Boys State Begins', desc: 'The American Legion, Department of Missouri, holds its first Boys State session, launching a tradition that continues to this day.' },
  { year: '1946', title: 'Post-War Growth', desc: 'Following World War II, the program expands significantly as returning veterans champion civic education for the next generation.' },
  { year: '1960s', title: 'Program Expansion', desc: 'Citizen counts grow past 1,000. The program becomes recognized as one of the premier civic education experiences in the state.' },
  { year: '1990s', title: 'Modernization', desc: 'The program incorporates new technology and updated curricula while maintaining its core focus on hands-on government simulation.' },
  { year: '2010', title: 'Alumni Association Founded', desc: 'The Missouri Boys State Alumni Association is established to connect the growing network of over 50,000 former citizens.' },
  { year: '2020s', title: 'New Era', desc: 'Missouri Boys State moves to Lindenwood University and continues to evolve, reaching 1,600 citizens annually while honoring its founding principles.' },
]

export default function AmericanLegionPage() {
  return (
    <>
      <PageHero
        tag="Our History"
        title="The American Legion & Missouri Boys State"
        description="Since 1938, The American Legion has been the driving force behind Missouri Boys State \u2014 a partnership built on service, patriotism, and civic education."
      />

      {/* Legion Connection */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>The Partnership</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">A Foundation of Service</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                The American Legion, Department of Missouri, has sponsored and operated Missouri Boys State since 1938. Local Legion posts across the state are the backbone of the program \u2014 identifying, nominating, and often sponsoring the outstanding young men who become citizens.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                The Legion&rsquo;s commitment to youth development, patriotism, and civic education is the foundation on which Boys State was built. Veterans who served their country now serve their communities by investing in the next generation of leaders.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Today, hundreds of Legion posts participate in the nomination process, and Legion volunteers serve as counselors, mentors, and supporters throughout the Boys State experience.
              </p>
            </div>
            <MediaPlaceholder label="American Legion / Boys State Historical Photo" size="tall" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Timeline</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Key Milestones</h2>
          </div>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="bg-navy text-white rounded-lg px-3 py-2 text-center shrink-0 min-w-[80px]">
                  <span className="block font-serif text-lg font-bold">{t.year}</span>
                </div>
                <div className="flex-1 bg-cream border border-gray-200 rounded-xl p-5">
                  <h3 className="font-serif font-bold text-navy text-base mb-1">{t.title}</h3>
                  <p className="text-sm text-gray-400">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Posts Participate */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Get Involved</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">How Legion Posts Participate</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Nominate Citizens', desc: 'Identify outstanding young men in your community and submit nominations for Boys State.' },
              { title: 'Sponsor Citizens', desc: 'Fund $500 sponsorships so every nominated young man can attend, regardless of financial circumstances.' },
              { title: 'Volunteer & Mentor', desc: 'Serve as counselors, speakers, or mentors during the session. Share your experience with the next generation.' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-7">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Ready to get your post involved?</h2>
          <p className="text-white/70 mb-6">Contact us to learn more about nominating citizens and supporting Missouri Boys State.</p>
          <Link to="/contact" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
