import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import MediaPlaceholder from '../../components/MediaPlaceholder'

const structure = [
  { title: 'Cities', desc: 'Citizens are assigned to one of dozens of cities \u2014 each with its own mayor, city council, police chief, and municipal judges. Cities compete for the overall city championship.' },
  { title: 'Counties', desc: 'Cities are grouped into counties with elected county officials including sheriffs, assessors, and commissioners. County government mirrors real Missouri structure.' },
  { title: 'Political Parties', desc: 'Two parties \u2014 Nationalists and Federalists \u2014 hold conventions, draft platforms, select candidates, and campaign for statewide office.' },
  { title: 'Three Branches', desc: 'A full legislature drafts and passes bills, an executive branch governs, and a judiciary hears cases \u2014 all elected and run by citizens.' },
  { title: 'Schools of Instruction', desc: 'Expert-led sessions teach citizens about each branch of government, parliamentary procedure, and the legislative process before they take office.' },
  { title: 'Athletics & Activities', desc: 'Competitive sports, talent shows, band, chorus, and newspaper \u2014 city pride extends well beyond the statehouse.' },
]

const outcomes = [
  { title: 'Leadership Skills', desc: 'Public speaking, decision-making, negotiation, and the confidence to lead in any setting.' },
  { title: 'Lifelong Friendships', desc: 'Bonds forged through shared challenge, late-night strategy sessions, and city pride.' },
  { title: 'College Applications', desc: 'Boys State is one of the most recognized credentials on a college application. Admissions officers know what it means.' },
  { title: 'Boys Nation', desc: 'The top two citizens represent Missouri in Washington, D.C. at the national Boys Nation program.' },
]

export default function WhatIsBoysStatePage() {
  return (
    <>
      <PageHero
        tag="The Program"
        title="What Is Missouri Boys State?"
        description="A week-long immersive leadership and civic education program where you don't study government \u2014 you build one."
      />

      {/* Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Tag>The Experience</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">Build a State from Scratch</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                Every summer, approximately 1,600 of Missouri&rsquo;s most promising high school juniors gather at Lindenwood University to create a functioning state government from the ground up.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Citizens form cities, organize into political parties, campaign for office, draft legislation, argue court cases, and govern \u2014 all in one transformative week. There are no spectators at Boys State. Everyone participates, everyone leads, everyone learns.
              </p>
              <p className="text-gray-500 leading-relaxed">
                The program is sponsored by The American Legion, Department of Missouri, and has been developing civic leaders since 1938.
              </p>
            </div>
            <MediaPlaceholder label="Program Overview Video / Photo" size="tall" showPlay />
          </div>
        </div>
      </section>

      {/* The Structure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>How It Works</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">How It Works</h2>
            <p className="text-gray-400">Missouri Boys State replicates the full structure of state government.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {structure.map((s, i) => (
              <div key={i} className="bg-cream border border-gray-200 rounded-xl p-7">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Life */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MediaPlaceholder label="Campus Life / Daily Activities Photo" size="tall" />
            <div>
              <Tag>Daily Life</Tag>
              <h2 className="font-serif font-bold text-navy text-3xl mb-4">A Packed Schedule</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Each day at Boys State is filled with activity \u2014 from morning assemblies and campaign speeches to legislative sessions, court hearings, athletic competitions, and keynote speakers.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Evenings feature city meetings, talent shows, and the kind of conversations that happen when 1,600 motivated young men are all in the same place.
              </p>
              <Link to="/students/week-in-the-life" className="bg-navy hover:bg-navy-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
                See the Full Week
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>What You Gain</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl">More Than a Week</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-2.5 h-2.5 bg-red rounded-full" />
                </div>
                <h3 className="font-serif font-bold text-navy text-base mb-2">{o.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Ready to build your state?</h2>
          <p className="text-white/70 mb-6">Applications for the 2026 session are open now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Apply Now
            </Link>
            <Link to="/nominate" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Nominate a Student
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
