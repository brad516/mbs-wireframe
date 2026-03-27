import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const timeline = [
  { time: '12:00 PM', title: 'Arrival & Parking', desc: 'Arrive at Lindenwood University. Follow signs to the designated parking and drop-off area.' },
  { time: '12:00\u20131:00 PM', title: 'Registration', desc: 'Check in at the registration desk. Receive your city assignment, nametag, t-shirt, and welcome packet.' },
  { time: '1:00\u20132:00 PM', title: 'Move In', desc: 'Find your dorm room, meet your roommate, and get settled. Staff and counselors are available to help.' },
  { time: '2:00\u20133:00 PM', title: 'City Assembly', desc: 'Meet your city-mates and city counselors. Introductions, icebreakers, and overview of the week.' },
  { time: '3:00 PM', title: 'Parents Depart', desc: 'Say goodbye to family. The Boys State experience officially begins.' },
  { time: '5:00 PM', title: 'Opening Ceremony', desc: 'All delegates assemble for the official opening ceremony, welcome address, and program orientation.' },
]

const toBring = [
  'Comfortable clothing for 7 days (casual and athletic)',
  'Business casual outfit (khakis/slacks, collared shirt)',
  'Comfortable shoes and athletic shoes',
  'Personal toiletries and hygiene items',
  'Any prescription medications (in original containers)',
  'Bedding: pillow, sheets, blanket (or sleeping bag)',
  'Towels and washcloths',
  'Notebook and pen',
  'Small amount of spending money ($20\u201350)',
  'Positive attitude and willingness to participate',
]

const notToBring = [
  'Alcohol, tobacco, or any illegal substances',
  'Weapons of any kind',
  'Fireworks or explosives',
  'Valuable jewelry or large amounts of cash',
  'Pets',
]

export default function CheckinPage() {
  return (
    <>
      <PageHero
        tag="First Day"
        title="Check-In Day Instructions"
        description="Everything you need to know about arriving at Lindenwood University for your first day at Boys State."
      />

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Tag>Check-In Day</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Sunday Schedule</h2>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="bg-red text-white rounded-lg px-3 py-2 text-center shrink-0 min-w-[110px]">
                  <span className="block text-xs font-bold">{t.time}</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-serif font-bold text-navy text-base mb-1">{t.title}</h3>
                  <p className="text-sm text-gray-400">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Tag>Packing List</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-6">What to Bring</h2>
              <ul className="space-y-2">
                {toBring.map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <span className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center shrink-0" />
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Tag>Prohibited Items</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-6">What NOT to Bring</h2>
              <ul className="space-y-2">
                {notToBring.map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <span className="w-5 h-5 bg-red/10 rounded flex items-center justify-center shrink-0">
                      <span className="text-red text-xs font-bold">&times;</span>
                    </span>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <Tag>Campus</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Lindenwood University Campus</h2>
          <MediaPlaceholder label="Campus Map \u2014 Lindenwood University, St. Charles, MO" size="landscape" />
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-serif font-bold text-navy text-base mb-1">MBS Headquarters</h3>
              <p className="text-sm text-gray-400">660.429.2761</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-navy text-base mb-1">Email</h3>
              <p className="text-sm text-gray-400">headquarters@moboysstate.org</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-navy text-base mb-1">Emergency (During Session)</h3>
              <p className="text-sm text-gray-400">Number provided at check-in</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
