import { useParams, Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SessionSubNav from '../../components/SessionSubNav'
import MediaPlaceholder from '../../components/MediaPlaceholder'
import Tag from '../../components/Tag'

const defaultStories = [
  { name: 'Student Name', city: 'City Name', quote: "Boys State taught me that leadership isn't about titles \u2014 it's about showing up and making things happen.", role: 'Citizen' },
  { name: 'Student Name', city: 'City Name', quote: "I went in knowing nobody and left with 30 guys I'll be friends with for life. And I got elected county sheriff.", role: 'County Sheriff' },
  { name: 'Student Name', city: 'City Name', quote: "My college interviewer asked me about Boys State more than anything else on my application.", role: 'Boys Nation Senator' },
  { name: 'Student Name', city: 'City Name', quote: "I never thought I\u2019d run for office, but Boys State showed me I could. I won governor and I\u2019ll never forget that feeling.", role: 'Governor' },
  { name: 'Student Name', city: 'City Name', quote: "The debates were intense, the friendships were real, and the experience was unforgettable.", role: 'Citizen' },
  { name: 'Student Name', city: 'City Name', quote: "Boys State didn\u2019t just teach me about government \u2014 it taught me about myself.", role: 'State Representative' },
]

export default function SessionAlumniStoriesPage() {
  const { year } = useParams()

  return (
    <>
      <PageHero
        tag={`Session ${year}`}
        title={`${year} Alumni Stories`}
        description={`Hear from the citizens of the ${year} Missouri Boys State session in their own words.`}
      />
      <SessionSubNav year={year} />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {defaultStories.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <MediaPlaceholder label={`${year} Story Video ${i + 1}`} size="square" showPlay />
                <div className="p-5">
                  <blockquote className="font-serif text-sm italic text-navy leading-relaxed mb-3">
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>
                  <strong className="text-sm text-navy block">{s.name}</strong>
                  <span className="text-xs text-gray-400">{s.city} &middot; {s.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
