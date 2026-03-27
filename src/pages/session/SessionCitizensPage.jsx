import { useParams, Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SessionSubNav from '../../components/SessionSubNav'
import Tag from '../../components/Tag'

const defaultCitizens = [
  { name: 'Citizen Name', city: 'City Name', reason: 'Outstanding leadership during city elections and legislative sessions. Demonstrated exceptional character throughout the week.' },
  { name: 'Citizen Name', city: 'City Name', reason: 'Exemplary civic engagement, including authoring key legislation and mentoring fellow citizens.' },
  { name: 'Citizen Name', city: 'City Name', reason: 'Led his city to the overall city competition championship while serving as mayor with distinction.' },
  { name: 'Citizen Name', city: 'City Name', reason: 'Recognized for outstanding sportsmanship, leadership in athletics, and contributions to city spirit.' },
  { name: 'Citizen Name', city: 'City Name', reason: 'Demonstrated tireless service to his city and county, going above and beyond in every activity.' },
]

export default function SessionCitizensPage() {
  const { year } = useParams()

  return (
    <>
      <PageHero
        tag={`Session ${year}`}
        title={`${year} Citizens of the Week`}
        description="Citizens recognized for outstanding leadership, character, and contributions during their Boys State session."
      />
      <SessionSubNav year={year} />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Tag>Honorees</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Recognized Citizens</h2>
          <div className="space-y-6">
            {defaultCitizens.map((c, i) => (
              <div key={i} className="flex gap-5 items-start bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-xl shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-300 font-bold">Photo</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-lg">{c.name}</h3>
                  <span className="text-xs text-red font-bold">{c.city}</span>
                  <p className="text-sm text-gray-400 mt-2">{c.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
