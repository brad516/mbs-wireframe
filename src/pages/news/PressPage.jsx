import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const releases = [
  { date: 'Mar 15, 2026', title: '2026 Missouri Boys State Session Dates Announced', desc: 'The American Legion Boys State of Missouri, Inc. announces the 2026 session will be held June 13\u201319 at Lindenwood University.' },
  { date: 'Feb 28, 2026', title: 'Three MBS Alumni Named to Missouri Supreme Court Commission', desc: 'Former Boys State delegates continue the program\u2019s legacy of civic leadership at the highest levels.' },
  { date: 'Jan 15, 2026', title: 'Nominations Open for 2026 Missouri Boys State', desc: 'American Legion posts, schools, and community leaders are invited to nominate outstanding high school juniors.' },
  { date: 'Nov 20, 2025', title: 'Annual Golf Tournament Raises $45,000 for Scholarships', desc: 'The fall fundraiser at Old Warson Country Club drew record participation and exceeded its fundraising goal.' },
  { date: 'Jun 20, 2025', title: '2025 Missouri Boys State Session Concludes Successfully', desc: 'Nearly 1,600 delegates participated in the week-long civic education program at Lindenwood University.' },
]

export default function PressPage() {
  return (
    <>
      <PageHero
        tag="Press"
        title="Press Room"
        description="Press releases, media resources, and contact information for journalists covering Missouri Boys State."
      />

      {/* Press Releases */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Tag>Press Releases</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Recent Releases</h2>
          <div className="space-y-0">
            {releases.map((r, i) => (
              <a key={i} href="#" className="block py-5 border-b border-gray-200 first:pt-0 hover:opacity-80 transition">
                <span className="text-[11px] font-bold text-gold tracking-wide uppercase">{r.date}</span>
                <h3 className="font-serif text-[15px] font-bold text-navy my-1 leading-snug">{r.title}</h3>
                <p className="text-[13px] text-gray-400">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Media Kit</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">Resources for Media</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Logo Package', desc: 'Official MBS logos in various formats (PNG, SVG, EPS) for print and digital use.' },
              { title: 'Photo Library', desc: 'High-resolution photos from recent sessions available for editorial use.' },
              { title: 'Fact Sheet', desc: 'Key facts, statistics, and background information about Missouri Boys State.' },
            ].map((item, i) => (
              <div key={i} className="bg-cream border border-gray-200 rounded-xl p-7 text-center">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{item.desc}</p>
                <button className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-[13px] px-5 py-2 rounded-lg transition">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-cream border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Tag>Media Contact</Tag>
          <h3 className="font-serif font-bold text-navy text-xl mb-2">Communications Director Name</h3>
          <p className="text-sm text-gray-400">press@moboysstate.org &middot; 660.429.2761</p>
          <p className="text-sm text-gray-400 mt-1">P.O. Box 667, Warrensburg, MO 64093</p>
        </div>
      </section>
    </>
  )
}
