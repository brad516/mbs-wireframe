import PageHero from '../components/PageHero'
import Tag from '../components/Tag'
import MediaPlaceholder from '../components/MediaPlaceholder'

const contactInfo = [
  { label: 'Address', value: 'P.O. Box 667\nWarrensburg, MO 64093', icon: '\u{1F4CD}' },
  { label: 'Phone', value: '660.429.2761', icon: '\u{1F4DE}' },
  { label: 'Email', value: 'headquarters@moboysstate.org', icon: '\u2709\uFE0F' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact"
        title="Get in Touch"
        description="Have a question about Missouri Boys State? We&rsquo;re here to help."
      />

      {/* Contact Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((c, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-7 text-center">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{c.label}</h3>
                <p className="text-sm text-gray-500 whitespace-pre-line">{c.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Tag>Send a Message</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-8">Contact Form</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50">
                <div className="space-y-4">
                  {['Full Name', 'Email Address'].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-bold text-navy mb-1">{field}</label>
                      <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1">Subject</label>
                    <div className="w-full h-10 bg-white border border-gray-200 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1">Message</label>
                    <div className="w-full h-28 bg-white border border-gray-200 rounded-md" />
                  </div>
                </div>
                <button className="mt-6 bg-navy hover:bg-navy-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
                  Send Message
                </button>
              </div>
            </div>
            <div>
              <Tag>Location</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-8">Find Us</h2>
              <MediaPlaceholder label="Map \u2014 Warrensburg, MO / Lindenwood University, St. Charles" size="tall" />
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 bg-cream border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-serif font-bold text-navy text-xl mb-4">Follow Us</h3>
          <div className="flex gap-3 justify-center">
            {['Facebook', 'Instagram', 'X / Twitter', 'YouTube'].map((s) => (
              <a key={s} href="#" className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-bold text-navy hover:border-navy transition">
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
