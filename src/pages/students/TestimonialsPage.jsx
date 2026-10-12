import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'
import { surveyQuotes } from '../../data/survey2026'

const testimonials = surveyQuotes.students

const years = ['All Years', '2026']

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        tag="Student Voices"
        title="In Their Own Words"
        description="Hear directly from recent citizens about the week that changed everything."
      />

      {/* Year Tabs (wireframe only) */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 py-3">
            {years.map((y, i) => (
              <button
                key={y}
                className={`px-4 py-2 rounded-md text-sm font-bold transition ${
                  i === 0 ? 'bg-navy text-white' : 'text-navy hover:bg-gray-100'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <MediaPlaceholder label={`Student Video ${i + 1}`} size="square" showPlay />
                <div className="p-5">
                  <blockquote className="font-serif text-sm italic text-navy leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <strong className="text-sm text-navy">{t.name}</strong>
                    <span className="block text-xs text-gray-500">{t.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Ready to write your own story?</h2>
          <p className="text-white/70 mb-6">Applications for the 2027 session are open now.</p>
          <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}
