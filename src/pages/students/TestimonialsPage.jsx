import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const testimonials = [
  { quote: "Boys State taught me that leadership isn't about titles \u2014 it's about showing up and making things happen.", name: 'Student Name', detail: '2024 Citizen, City of [Name]' },
  { quote: "I went in knowing nobody and left with 30 guys I'll be friends with for life. And I got elected county sheriff.", name: 'Student Name', detail: '2024 Citizen, City of [Name]' },
  { quote: "My college interviewer asked me about Boys State more than anything else on my application. It was the thing that set me apart.", name: 'Student Name', detail: '2023 Citizen, Boys Nation Senator' },
  { quote: "I never thought I\u2019d run for office, but Boys State showed me I could. I won governor and I\u2019ll never forget that feeling.", name: 'Student Name', detail: '2023 Citizen, Governor' },
  { quote: "The debates were intense, the friendships were real, and the experience was unforgettable. I\u2019d do it all over again.", name: 'Student Name', detail: '2024 Citizen, City of [Name]' },
  { quote: "Boys State didn\u2019t just teach me about government \u2014 it taught me about myself. I left more confident than I\u2019ve ever been.", name: 'Student Name', detail: '2022 Citizen, City of [Name]' },
]

const years = ['All Years', '2024', '2023', '2022']

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
                    <span className="block text-xs text-gray-400">{t.detail}</span>
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
          <p className="text-white/70 mb-6">Applications for the 2026 session are open now.</p>
          <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}
