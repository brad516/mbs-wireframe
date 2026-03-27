import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const featuredPartners = [
  {
    name: 'Garmin',
    role: 'Athletics Partner',
    description:
      'Garmin powers the MBS athletics program, equipping citizens with wearable technology and supporting competitive and recreational sports throughout the week. Their team brings product expertise and a passion for active living directly onto campus.',
  },
  {
    name: 'Central Bank',
    role: 'Banking Partner',
    description:
      'Central Bank sends staff members to work alongside citizens during the session, facilitating the commerce system that drives Boys State\u2019s simulated economy. Citizens open accounts, manage budgets, and experience real-world banking firsthand.',
  },
  {
    name: "Andy's Frozen Custard",
    role: 'Entrepreneurship Partner',
    description:
      "Citizens can open and operate their own Andy\u2019s franchise during the session \u2014 managing inventory, staffing, marketing, and sales in a real business environment. Andy\u2019s also provides monetary support for the program.",
  },
]

const benefits = [
  {
    title: 'Experiential Integration',
    description:
      'Your products, services, or expertise become part of the Boys State experience \u2014 not just a logo on a banner.',
  },
  {
    title: 'Staff on the Ground',
    description:
      'Send your people to campus. Mentors, facilitators, and subject-matter experts working directly with citizens.',
  },
  {
    title: 'Brand Alignment',
    description:
      'Associate your organization with Missouri\u2019s most prestigious youth civic leadership program and 85+ years of impact.',
  },
  {
    title: 'Year-Round Visibility',
    description:
      'Recognition across digital channels, print materials, on-campus signage, and alumni communications throughout the year.',
  },
]

const tiers = [
  {
    name: 'Supporting',
    range: '$1K \u2013 $2.5K',
    features: [
      'Logo on event materials and website',
      'Social media recognition',
      'Certificate of partnership',
    ],
  },
  {
    name: 'Program',
    range: '$2.5K \u2013 $5K',
    features: [
      'All Supporting benefits',
      'Branded signage at session',
      'Named recognition in program guide',
      '2 session visit passes',
    ],
  },
  {
    name: 'Experience',
    range: '$5K \u2013 $15K',
    features: [
      'All Program benefits',
      'Experiential integration opportunity',
      'Staff participation during session',
      'Speaking opportunity at assembly',
      '4 session visit passes',
    ],
  },
  {
    name: 'Presenting',
    range: '$15K+',
    features: [
      'All Experience benefits',
      'Premier experiential partnership',
      'Custom program co-creation',
      'Year-round brand visibility',
      'VIP access to all session activities',
      'Dedicated partnership manager',
    ],
    highlighted: true,
  },
]

const currentPartners = [
  { name: 'The American Legion', role: 'Founding Sponsor' },
  { name: 'Lindenwood University', role: 'Campus Partner' },
  { name: 'Garmin', role: 'Athletics Partner' },
  { name: 'Central Bank', role: 'Banking Partner' },
  { name: "Andy's Frozen Custard", role: 'Entrepreneurship Partner' },
  { name: 'Edward Jones', role: 'Financial Literacy Partner' },
  { name: 'Missouri Farm Bureau', role: 'Community Partner' },
  { name: 'Veterans United', role: 'Community Partner' },
]

export default function CorporatePage() {
  return (
    <>
      <PageHero
        tag="Corporate Partnerships"
        title="More Than a Sponsorship"
        description="Our corporate partners don't just write checks — they embed their people, products, and expertise into the Boys State experience."
      />

      {/* Why Partner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>Why Partner</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">
                This Isn&rsquo;t a Logo on a Banner
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                Missouri Boys State corporate partnerships are built around
                experiential integration. Our partners send their people to
                campus, put their products in citizens&rsquo; hands, and share
                their expertise in real-world simulations. The result is a
                deeper connection between your organization and 1,600+ of
                Missouri&rsquo;s highest-achieving young men.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                When citizens run a franchise, manage a bank account, or
                compete with professional-grade equipment, they remember the
                organizations that made it possible. That&rsquo;s the kind of
                impact a traditional sponsorship can&rsquo;t deliver.
              </p>
            </div>
            <div className="bg-cream border border-gray-200 rounded-xl p-12">
              <div className="text-center mb-8">
                <span className="font-serif font-bold text-5xl text-navy">1,600+</span>
                <p className="text-sm text-gray-400 mt-2">
                  Citizens reached every summer
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8 text-center">
                <span className="font-serif font-bold text-5xl text-navy">85+</span>
                <p className="text-sm text-gray-400 mt-2">
                  Years of civic leadership development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-24 bg-cream border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Featured Partners</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">
              Partners Who Show Up
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              These organizations go beyond financial support — they bring
              their teams, their tools, and their knowledge directly to our
              citizens.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPartners.map((partner, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <MediaPlaceholder label={`${partner.name} Partnership`} size="landscape" />
                <div className="p-7">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-red mb-2">
                    {partner.role}
                  </span>
                  <h3 className="font-serif font-bold text-navy text-xl mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Partner Benefits</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">
              What a Partnership Looks Like
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-7"
              >
                <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red font-bold text-lg">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-navy text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Partnership Tiers</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">
              Find Your Level of Engagement
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              These tiers are starting points. Every partnership is
              custom-tailored to align with your organization&rsquo;s goals
              and capabilities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`border rounded-xl p-7 ${
                  tier.highlighted
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white border-gray-200'
                }`}
              >
                <span
                  className={`font-serif font-bold text-3xl ${
                    tier.highlighted ? 'text-gold-light' : 'text-navy'
                  }`}
                >
                  {tier.range}
                </span>
                <h3
                  className={`font-serif font-bold text-lg mt-1 mb-4 ${
                    tier.highlighted ? 'text-white' : 'text-navy'
                  }`}
                >
                  {tier.name}
                </h3>
                <ul className="space-y-2">
                  {tier.features.map((feature, j) => (
                    <li
                      key={j}
                      className={`text-sm flex gap-2 items-start ${
                        tier.highlighted ? 'text-white/80' : 'text-gray-400'
                      }`}
                    >
                      <span
                        className={`${
                          tier.highlighted ? 'text-gold-light' : 'text-red'
                        } font-bold`}
                      >
                        {'\u2713'}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-24 bg-cream border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag>Current Partners</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">
              Organizations Making It Possible
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {currentPartners.map((partner, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="h-16 flex items-center justify-center mb-3">
                  <span className="text-[11px] font-bold text-gray-300 leading-tight">
                    {partner.name}
                    <br />
                    Logo
                  </span>
                </div>
                <p className="font-serif font-bold text-navy text-sm">
                  {partner.name}
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  {partner.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Inquiry Form */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Tag>Get Started</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-2">
            Partnership Inquiry
          </h2>
          <p className="text-gray-500 mb-8">
            Tell us about your organization and how you&rsquo;d like to be
            involved. We&rsquo;ll follow up to explore a custom partnership.
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {['Contact Name', 'Email', 'Organization', 'Phone'].map(
                (field) => (
                  <div key={field}>
                    <label className="block text-sm font-bold text-navy mb-1">
                      {field}
                    </label>
                    <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                  </div>
                )
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-navy mb-1">
                Partnership Interest
              </label>
              <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-navy mb-1">
                How would you like to be involved?
              </label>
              <div className="w-full h-20 bg-white border border-gray-200 rounded-md" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-navy mb-1">
                Additional Details
              </label>
              <div className="w-full h-20 bg-white border border-gray-200 rounded-md" />
            </div>
            <button className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Submit Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA — Individual Sponsorship */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-3">
            Want to sponsor a citizen individually?
          </h2>
          <p className="text-white/70 mb-6">
            $500 sponsors one citizen&rsquo;s full Boys State experience.
          </p>
          <Link
            to="/give"
            className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition inline-block"
          >
            Sponsor a Citizen
          </Link>
        </div>
      </section>
    </>
  )
}
