import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const featured = {
  date: 'Mar 15, 2026',
  title: '2026 Session Dates Announced: June 13\u201319 at Lindenwood University',
  desc: 'Missouri Boys State will return to Lindenwood University in St. Charles for its annual session. Registration opens April 1 for all sponsored citizens. This year\u2019s program promises expanded activities, new keynote speakers, and record-setting community sponsorship contributions.',
}

const articles = [
  { date: 'Feb 28, 2026', title: 'Three MBS Alumni Named to Missouri Supreme Court Commission', desc: 'The tradition of civic leadership continues at the highest levels of Missouri government.' },
  { date: 'Feb 10, 2026', title: 'Sponsorship Fund Surpasses $200K Goal for 2026', desc: 'Community generosity ensures every citizen is fully sponsored. The MBS Memorial Trust has exceeded its fundraising target.' },
  { date: 'Jan 25, 2026', title: 'Nominations Now Open for 2026 Session', desc: 'American Legion posts, schools, and community leaders can begin nominating outstanding high school juniors.' },
  { date: 'Dec 15, 2025', title: 'MBS Governor Earns Full Scholarship to Mizzou', desc: 'The 2025 Boys State governor has been awarded a prestigious leadership scholarship to the University of Missouri.' },
  { date: 'Nov 20, 2025', title: 'Annual Golf Tournament Raises $45,000', desc: 'The fall fundraiser at Old Warson Country Club drew record participation and exceeded its goal.' },
  { date: 'Oct 5, 2025', title: 'Alumni Homecoming Weekend Draws 300+ Attendees', desc: 'Alumni from six decades gathered at Lindenwood University for a weekend of reconnection and celebration.' },
]

export default function NewsPage() {
  return (
    <>
      <PageHero
        tag="News"
        title="News & Media"
        description="The latest from Missouri Boys State \u2014 announcements, stories, and updates."
      />

      {/* Featured Article */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <MediaPlaceholder label="Featured Article Photo" size="landscape" />
            <div>
              <span className="text-[11px] font-bold text-gold tracking-wide uppercase">{featured.date}</span>
              <h2 className="font-serif font-bold text-navy text-2xl lg:text-3xl my-3 leading-snug">{featured.title}</h2>
              <p className="text-gray-500 leading-relaxed">{featured.desc}</p>
              <a href="#" className="inline-block mt-4 text-sm font-bold text-red">Read Full Article &rarr;</a>
            </div>
          </div>

          {/* Article Grid */}
          <Tag>Recent News</Tag>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {articles.map((a, i) => (
              <a key={i} href="#" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition block">
                <span className="text-[11px] font-bold text-gold tracking-wide uppercase">{a.date}</span>
                <h3 className="font-serif font-bold text-navy text-[15px] mt-2 mb-1 leading-snug">{a.title}</h3>
                <p className="text-[13px] text-gray-400">{a.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Press Room Link */}
      <section className="py-16 bg-cream border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-serif font-bold text-navy text-xl mb-2">Looking for press materials?</h3>
          <p className="text-sm text-gray-400 mb-4">Access press releases, media kits, and contact information for media inquiries.</p>
          <Link to="/news/press" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Press Room
          </Link>
        </div>
      </section>
    </>
  )
}
