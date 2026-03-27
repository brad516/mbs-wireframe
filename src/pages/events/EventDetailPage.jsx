import { useParams, Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const eventData = {
  trivia: {
    tag: 'Fundraiser',
    title: 'Spring Trivia Night',
    description: 'Test your knowledge and sponsor future Missouri Boys State citizens.',
    date: 'Saturday, April 18, 2026',
    time: '6:00 PM \u2013 10:00 PM',
    location: 'The Coliseum, St. Louis, MO',
    details: 'Join us for our annual trivia fundraiser! Assemble a team of up to 8 players and compete for prizes while helping sponsor future MBS citizens. The evening includes dinner, a silent auction, and plenty of fun. All proceeds directly fund citizen sponsorships for the 2026 session.',
    price: '$30 per person / $200 per table of 8',
    cta: 'Get Tickets',
  },
  golf: {
    tag: 'Fundraiser',
    title: 'Annual Golf Tournament',
    description: 'A day on the course for a great cause.',
    date: 'Saturday, May 10, 2026',
    time: '8:00 AM Shotgun Start',
    location: 'Old Warson Country Club, St. Louis, MO',
    details: 'Our premier fundraising event returns to Old Warson Country Club. The tournament features a four-person scramble format, lunch, on-course contests, and an awards reception. Individual and team registrations are available. Sponsorship opportunities are also available for businesses looking to support MBS.',
    price: '$150 per golfer / $500 per foursome',
    cta: 'Register Now',
  },
}

export default function EventDetailPage() {
  const { slug } = useParams()
  const event = eventData[slug]

  if (!event) {
    return (
      <div className="py-24 text-center">
        <h1 className="font-serif font-bold text-navy text-3xl mb-4">Event Not Found</h1>
        <Link to="/events" className="text-red font-bold">&larr; Back to Events</Link>
      </div>
    )
  }

  return (
    <>
      <PageHero tag={event.tag} title={event.title} description={event.description} />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Details */}
            <div className="lg:col-span-2">
              <Tag>About This Event</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-6">Event Details</h2>
              <p className="text-gray-500 leading-relaxed mb-8">{event.details}</p>
              <MediaPlaceholder label={`${event.title} Photo / Flyer`} size="landscape" />
            </div>

            {/* Info Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-7 self-start">
              <h3 className="font-serif font-bold text-navy text-lg mb-4">Event Info</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-bold text-navy block">Date</span>
                  <span className="text-gray-500">{event.date}</span>
                </div>
                <div>
                  <span className="font-bold text-navy block">Time</span>
                  <span className="text-gray-500">{event.time}</span>
                </div>
                <div>
                  <span className="font-bold text-navy block">Location</span>
                  <span className="text-gray-500">{event.location}</span>
                </div>
                <div>
                  <span className="font-bold text-navy block">Cost</span>
                  <span className="text-gray-500">{event.price}</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-red hover:bg-red-dark text-white font-bold text-sm py-3 rounded-lg transition">
                {event.cta}
              </button>
              <MediaPlaceholder label="Venue Map" size="landscape" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream border-t border-gray-200 text-center">
        <Link to="/events" className="text-sm font-bold text-navy hover:text-red transition">&larr; Back to All Events</Link>
      </section>
    </>
  )
}
