import { Link } from 'react-router-dom'
import Tag from '../../components/Tag'
import { survey } from '../../data/survey2026'

// Everything marked with <SampleBadge /> is placeholder copy for layout review:
// the names, figures and quotes are invented and must be replaced before launch.
export function SampleBadge({ light = false }) {
  return (
    <span
      className={`inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 rounded border border-dashed ${
        light ? 'border-white/40 text-white/70' : 'border-navy/30 text-navy/60'
      }`}
    >
      Sample content
    </span>
  )
}

/* ── "I am a…" router ─────────────────────────────── */
const audiences = [
  { label: 'Student', to: '/students' },
  { label: 'Parent', to: '/parents' },
  { label: 'Educator', to: '/educators' },
  { label: 'Alumnus', to: '/alumni' },
  { label: 'Sponsor', to: '/give/corporate' },
]

export function AudienceRouter() {
  return (
    <section className="bg-navy-dark border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
        <span className="font-serif italic text-white/80 text-base">I am a&hellip;</span>
        <div className="flex flex-wrap justify-center gap-2">
          {audiences.map((a) => (
            <Link
              key={a.label}
              to={a.to}
              className="border border-white/25 hover:border-gold-light hover:bg-white/5 text-white text-sm font-semibold px-5 py-2 rounded-full transition"
            >
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Outcomes ─────────────────────────────────────── */
export const outcomes = [
  survey.home,
  { number: '3', label: 'college credit hours earned on site' },
  { number: '$185,000', label: 'in scholarships awarded each year' },
  { number: '1 in 6', label: 'alumni go on to public office or military service' },
]

/* ── Selection ────────────────────────────────────── */
const selectionSteps = [
  { n: '01', title: 'Nominated', desc: 'A counselor, principal or teacher puts forward juniors who stand out for leadership, character, scholarship and service.' },
  { n: '02', title: 'Sponsored', desc: 'A local American Legion post or community sponsor reviews the nomination and underwrites the citizen’s place.' },
  { n: '03', title: 'Selected', desc: 'Nominees complete an application and interview. Each school may send only a limited number of delegates.' },
  { n: '04', title: 'Commissioned', desc: 'Selected juniors are commissioned as citizens of Missouri Boys State and assigned to a city, county and party.' },
]

const selectionFacts = [
  { number: '520+', label: 'Missouri high schools nominate' },
  { number: 'Top 3%', label: 'of the junior class is selected' },
  { number: '114', label: 'counties represented' },
]

export function Selection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <Tag>By Nomination</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">An Honor, Not a Camp</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              No one signs up for Missouri Boys State. Citizens are nominated by their schools, sponsored by their communities and selected from among the most promising juniors in the state.
            </p>
            <dl className="border-t border-gray-200">
              {selectionFacts.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-6 py-4 border-b border-gray-200">
                  <dt className="text-sm text-gray-600">{f.label}</dt>
                  <dd className="font-serif font-bold text-navy text-2xl whitespace-nowrap">{f.number}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4"><SampleBadge /></div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/nominate" className="bg-navy hover:bg-navy-light text-white font-bold text-sm px-7 py-3 rounded-lg transition">
                Nominate a Student
              </Link>
              <Link to="/about/program-structure" className="text-sm font-bold text-red hover:text-red-dark px-2 py-3">
                Selection criteria &rarr;
              </Link>
            </div>
          </div>
          <ol className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {selectionSteps.map((s) => (
              <li key={s.n} className="bg-cream p-8">
                <span className="font-serif text-gold text-sm font-bold tracking-widest">{s.n}</span>
                <h3 className="font-serif font-bold text-navy text-xl mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ── Distinguished alumni ─────────────────────────── */
const alumni = [
  { name: 'Hon. Marcus Whitfield', year: '1987', title: 'Judge, U.S. Court of Appeals' },
  { name: 'Daniel R. Okafor', year: '1994', title: 'Chief Executive, Fortune 500 manufacturer' },
  { name: 'Lt. Gen. Thomas Brandt', year: '1979', title: 'United States Army, retired' },
  { name: 'Sen. Andrew Kessler', year: '2001', title: 'Missouri State Senate' },
  { name: 'Dr. Samuel Reyes', year: '1998', title: 'University President' },
  { name: 'Ethan J. Caldwell', year: '2009', title: 'Rhodes Scholar, federal prosecutor' },
]

const initials = (name) =>
  name.replace(/^(Hon\.|Sen\.|Dr\.|Lt\. Gen\.)\s+/, '').split(' ').filter((w) => /^[A-Z][a-z]/.test(w)).map((w) => w[0]).slice(0, 2).join('')

export function DistinguishedAlumni() {
  return (
    <section className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Tag light>Distinguished Alumni</Tag>
            <h2 className="font-serif font-bold text-white text-3xl lg:text-4xl mb-3">They Stood Where You&rsquo;ll Stand</h2>
            <p className="text-white/80 leading-relaxed">
              For more than eight decades, Missouri Boys State citizens have gone on to lead courts, companies, campuses and the armed forces.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <SampleBadge light />
            <Link to="/alumni/notable" className="text-sm font-bold text-gold-light hover:text-white transition whitespace-nowrap">
              All notable alumni &rarr;
            </Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
          {alumni.map((a) => (
            <div key={a.name} className="bg-navy hover:bg-navy-light transition-colors p-7 flex items-center gap-5">
              <div className="shrink-0 w-16 h-16 rounded-full border border-gold-light/60 flex items-center justify-center font-serif text-gold-light text-lg">
                {initials(a.name)}
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-lg leading-snug">{a.name}</h3>
                <p className="text-sm text-white/70">{a.title}</p>
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold-light mt-1.5">Class of {a.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Endorsements ─────────────────────────────────── */
const endorsements = [
  {
    quote: 'I can tell within five minutes which of my colleagues went to Boys State. They already know how to disagree and still get the bill passed.',
    name: 'Sen. Andrew Kessler',
    role: 'Missouri State Senate · Class of 2001',
  },
  {
    quote: 'When a Boys State citizen applies, our admissions committee takes notice. It tells us a school chose this student to represent them.',
    name: 'Dr. Samuel Reyes',
    role: 'University President',
  },
  {
    quote: 'We nominate every year. Our students come back in June carrying themselves differently, and the whole building feels it by August.',
    name: 'Karen Holloway',
    role: 'Superintendent, public school district',
  },
]

export function Endorsements() {
  return (
    <section className="bg-cream py-24 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <Tag>In Their Words</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-3">Recognized by Those Who Lead Missouri</h2>
          <SampleBadge />
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {endorsements.map((e) => (
            <figure key={e.name} className="relative pt-8 border-t-2 border-gold">
              <span aria-hidden="true" className="absolute -top-1 left-0 font-serif text-6xl leading-none text-gold/40 select-none">&ldquo;</span>
              <blockquote className="font-serif text-navy text-xl leading-relaxed mt-4">{e.quote}</blockquote>
              <figcaption className="mt-6">
                <span className="block font-bold text-navy text-sm">{e.name}</span>
                <span className="block text-sm text-gray-600">{e.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Giving levels ────────────────────────────────── */
export const givingLevels = [
  { amount: '$100', label: 'Equips a city', desc: 'Supplies for one city’s government' },
  { amount: '$500', label: 'Sends a citizen', desc: 'One junior’s full week', featured: true },
  { amount: '$2,500', label: 'Sponsors a city', desc: 'Five citizens and their counselor' },
  { amount: '$10,000', label: 'Underwrites a county', desc: 'Named recognition all week' },
]
