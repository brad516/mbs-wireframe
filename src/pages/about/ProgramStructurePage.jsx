import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'
import { CoreValues } from '../../components/Mission'
import MediaPlaceholder from '../../components/MediaPlaceholder'
import { getPhoto } from '../../lib/photos'

/* ── Schools of Instruction ── */
const schools = [
  {
    name: 'Law',
    desc: 'Taught by practicing attorneys and judges. Learn trial procedure, constitutional law, and the MBS Bar Exam. Required for all attorneys, judges, and the Attorney General.',
    positions: ['City Attorney', 'Municipal Judge', 'Prosecuting Attorney', 'Circuit Judge', 'Supreme Court Justice', 'Attorney General'],
    color: 'border-l-red',
  },
  {
    name: 'Legislative & Executive Policy',
    desc: 'Taught by policy professionals and lobbyists. Covers the legislative process, budget development, executive leadership, and strategic communications.',
    positions: ['Senator', 'Representative', 'Governor\'s Staff', 'Cabinet Directors', 'Lobbyists'],
    color: 'border-l-navy',
  },
  {
    name: 'Law Enforcement & Public Safety',
    desc: 'Taught by Missouri State Highway Patrol troopers and public safety professionals. Required for Highway Patrol, recommended for sheriffs and police.',
    positions: ['Highway Patrol Trooper', 'Sheriff', 'Police Chief', 'Fire Chief', 'Capitol Police'],
    color: 'border-l-[#2b82c9]',
  },
  {
    name: 'Journalism & Media',
    desc: 'Run a daily newspaper, radio station, podcast, and TV news show. Taught by professional journalists in MBS\'s own broadcast studios.',
    positions: ['Newspaper Editor', 'KMBS Radio Host', 'KMBS-TV Anchor', 'Reporter', 'Photographer'],
    color: 'border-l-[#7040b0]',
  },
  {
    name: 'Commerce',
    desc: 'Learn to launch and operate a business using Boys State Bucks. Covers business licensing, economics, ethics, and entrepreneurship.',
    positions: ['Business Owner', 'Chamber of Commerce'],
    color: 'border-l-gold',
  },
  {
    name: 'Local Government & Policy',
    desc: 'Focuses on city and county government operations, municipal law, public services, and community development.',
    positions: ['Mayor', 'City Council', 'County Commissioner', 'City Clerk', 'County Clerk'],
    color: 'border-l-[#1aaa7a]',
  },
  {
    name: 'Campaigning & Political Operations',
    desc: 'Learn campaign strategy, voter outreach, fundraising, coalition building, and political communications from real political operatives.',
    positions: ['Party Executive Director', 'Communications Director', 'Field Director', 'Fundraising Director'],
    color: 'border-l-[#c05000]',
  },
  {
    name: 'Education',
    desc: 'Explores education policy, school governance, and the role of public education in a democracy.',
    positions: ['State Board of Education', 'Commissioner of Education'],
    color: 'border-l-[#4a7a3a]',
  },
  {
    name: 'International Affairs',
    desc: 'Examines diplomacy, foreign policy, global economics, and Missouri\'s role in the international community.',
    positions: [],
    color: 'border-l-[#2e7a9a]',
  },
]

/* ── Government Levels ── */
const businessSteps = [
  { n: '01', title: 'Pitch', desc: 'Citizens in the School of Commerce develop an idea: a print shop, a campaign consultancy, a snack stand, a newspaper ad agency.' },
  { n: '02', title: 'License', desc: 'They apply to their city for a business license, pay the fee in Boys State Bucks and answer to the city council that granted it.' },
  { n: '03', title: 'Open', desc: 'Businesses open on Main Street and sell to the people with money to spend: candidates, campaigns, cities and fellow citizens.' },
  { n: '04', title: 'Compete', desc: 'Owners keep books, pay taxes and lobby the legislature. The best is named Outstanding Business at the end of the week.' },
]

const careers = [
  { sector: 'Elected office', roles: ['Mayor', 'City Council', 'Senator', 'Representative', 'County Commissioner', 'Governor'] },
  { sector: 'Law & courts', roles: ['Attorney', 'Judge', 'Court Clerk', 'Prosecuting Attorney'] },
  { sector: 'Public safety', roles: ['Law Enforcement Officer', 'Firefighter', 'Sheriff'] },
  { sector: 'Business & finance', roles: ['Business Owner', 'Treasurer', 'Lobbyist', 'Chamber of Commerce'] },
  { sector: 'Media', roles: ['Newspaper Journalist', 'TV Journalist', 'Podcast Journalist', 'Public Relations Specialist'] },
  { sector: 'Politics & staff', roles: ['Party Leader', 'Political Strategist', 'Legislative Staff', 'City Clerk'] },
]

const beyondCapitol = [
  { title: 'Athletics', desc: 'City against city in softball, soccer, basketball, tennis, pickleball, cross country and more. The standings count toward Model City.' },
  { title: 'State Fair', desc: 'An evening with Missouri Girls State: a booth from every city, carnival games and staff-judged competitions.' },
  { title: 'Naturalization ceremony', desc: 'Citizens watch people from around the world take the oath and become Americans, then give them a standing ovation.' },
  { title: 'Truman Model City Award', desc: 'Everything a city does all week is tallied, from elections to athletics to its businesses. One city wins.' },
]

const govLevels = [
  {
    level: 'City',
    size: '~50 citizens (3 wards)',
    count: '16 cities',
    legislative: 'City Council',
    executive: 'Mayor',
    judicial: 'Municipal Court',
    elected: ['Mayor', 'City Council (5)', 'City Treasurer', 'Municipal Judge'],
    appointed: ['City Clerk', 'City Attorney', 'Police Chief', 'Fire Chief', 'Athletic Director', 'and more'],
  },
  {
    level: 'County',
    size: '~100 citizens (2 cities)',
    count: '8 counties',
    legislative: 'County Commission',
    executive: 'Presiding Commissioner',
    judicial: 'Circuit Court',
    elected: ['Presiding Commissioner', 'Commissioners (2)', 'Circuit Judge', 'Sheriff', 'Prosecuting Attorney', 'County Clerk', 'County Treasurer'],
    appointed: ['Deputy Sheriff', 'Deputy County Clerk', 'Assistant Prosecuting Attorney'],
  },
  {
    level: 'State',
    size: '~850 citizens (8 counties)',
    count: '1 state',
    legislative: 'General Assembly (Senate + House)',
    executive: 'Governor',
    judicial: 'Supreme Court',
    elected: ['Governor', 'Lt. Governor', 'Secretary of State', 'State Treasurer', 'State Auditor', 'Attorney General', '36 Senators', '108 Representatives'],
    appointed: ['Chief of Staff', 'Press Secretary', 'Budget Director', '7 Department Directors', 'Highway Patrol', 'Capitol Police', 'and more'],
  },
]

/* ── Counties & Cities ── */
const counties = [
  { county: 'Scott', cities: ['Pershing', 'Carver'] },
  { county: 'Frank', cities: ['Boone', 'Crowder'] },
  { county: 'Barton', cities: ['Lewis', 'Clark'] },
  { county: 'Benton', cities: ['Kohn', 'Whitfield'] },
  { county: 'Bradley', cities: ['Doniphan', 'Carnahan'] },
  { county: 'Gamble', cities: ['Blair', 'Richardson'] },
  { county: 'Newberry', cities: ['Duggan', 'Ingle'] },
  { county: 'Bacon', cities: ['Weyer', 'Gambrel'] },
]

export default function ProgramStructurePage() {
  return (
    <>
      <PageHero
        tag="The Program"
        title="Program Structure"
        description="Missouri Boys State is a fully functioning state — a government, an economy, courts and a press, built from scratch by citizens every year. Here's how it all works."
      />

      {/* Government Structure Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Tag>Government Structure</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-3">The 51st State</h2>
            <p className="text-gray-500">Citizens build a three-branch government at every level — city, county, and state. Each level has its own legislature, executive, and judiciary, just like the real Missouri.</p>
          </div>

          {/* Ward → City → County → State visual */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 mb-16">
            {[
              { label: 'Ward', sub: '~15 citizens', color: 'bg-gray-100 text-gray-600 border-gray-200' },
              { label: 'City', sub: '3 wards', color: 'bg-red/5 text-red border-red/20' },
              { label: 'County', sub: '2 cities', color: 'bg-navy/5 text-navy border-navy/20' },
              { label: 'State', sub: '8 counties', color: 'bg-gold-bg text-gold border-gold/30' },
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <div className={`${item.color} border rounded-xl px-6 py-4 text-center min-w-[120px]`}>
                  <span className="font-serif font-bold text-lg block">{item.label}</span>
                  <span className="text-xs opacity-70">{item.sub}</span>
                </div>
                {i < 3 && <span className="hidden sm:block text-gray-300 text-2xl mx-3">&rarr;</span>}
              </div>
            ))}
          </div>

          {/* Level cards */}
          <div className="space-y-6">
            {govLevels.map((g) => (
              <div key={g.level} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-navy px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <h3 className="font-serif font-bold text-white text-xl">{g.level} Level</h3>
                  <span className="text-white/60 text-sm">{g.size} &middot; {g.count}</span>
                </div>
                <div className="p-6">
                  {/* Three branches */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { branch: 'Legislative', body: g.legislative },
                      { branch: 'Executive', body: g.executive },
                      { branch: 'Judicial', body: g.judicial },
                    ].map((b) => (
                      <div key={b.branch} className="bg-cream rounded-lg px-4 py-3 text-center">
                        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gold block mb-1">{b.branch}</span>
                        <span className="text-sm font-bold text-navy">{b.body}</span>
                      </div>
                    ))}
                  </div>
                  {/* Positions */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500 mb-2 block">Elected</span>
                      <div className="flex flex-wrap gap-1.5">
                        {g.elected.map((p) => (
                          <span key={p} className="bg-red/5 text-red text-xs font-medium px-2.5 py-1 rounded-md">{p}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500 mb-2 block">Appointed</span>
                      <div className="flex flex-wrap gap-1.5">
                        {g.appointed.map((p) => (
                          <span key={p} className="bg-navy/5 text-navy text-xs font-medium px-2.5 py-1 rounded-md">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counties & Cities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Geography</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-3">8 Counties, 16 Cities</h2>
            <p className="text-gray-500">Each county is composed of two cities. You'll be assigned to a city when you arrive — this is your home base for the week.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {counties.map((c) => (
              <div key={c.county} className="bg-cream border border-gray-200 rounded-xl p-5">
                <h4 className="font-serif font-bold text-navy text-base mb-2">{c.county} County</h4>
                <div className="flex gap-2">
                  {c.cities.map((city) => (
                    <span key={city} className="bg-white border border-gray-200 text-sm text-gray-600 px-3 py-1 rounded-md flex-1 text-center">{city}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Parties */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Political Parties</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-3">Federalists & Nationalists</h2>
            <p className="text-gray-500">Every citizen is randomly assigned to one of two parties. These are fictional — they have no relation to real-world political parties. You define what your party stands for.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {['Federalist Party', 'Nationalist Party'].map((party) => (
              <div key={party} className="bg-white border border-gray-200 rounded-xl p-7 text-center">
                <h3 className="font-serif font-bold text-navy text-xl mb-3">{party}</h3>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li>Draft your party platform at city, county, and state levels</li>
                  <li>Nominate candidates for every elected office via caucuses</li>
                  <li>Elect party leadership at every level</li>
                  <li>Run statewide primary and general election campaigns</li>
                  <li>Hire party staff: Executive Director, Field Director, Communications Director</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economy */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <Tag light>The Economy</Tag>
              <h2 className="font-serif font-bold text-white text-3xl lg:text-4xl mb-4">A State Needs More Than a Government</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Not every citizen runs for office. Some open a business. Missouri Boys State has its own currency, Boys State Bucks, its own Main Street, and an economy that the government has to tax, regulate and answer to.
              </p>
              <p className="text-white/80 leading-relaxed">
                Entrepreneurs learn what every owner learns: customers are hard to find, regulations cost money, and the people writing the rules will take your call if you show up.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MediaPlaceholder label="Main Street businesses" size="square" photo={getPhoto('structure.mainstreet', 1)} sizes="(min-width: 1024px) 25vw, 50vw" />
              <MediaPlaceholder label="Citizens doing business" size="square" photo={getPhoto('structure.mainstreet', 0)} sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {businessSteps.map((step) => (
              <li key={step.n} className="bg-navy p-7">
                <span className="font-serif text-gold-light text-sm font-bold tracking-widest">{step.n}</span>
                <h3 className="font-serif font-bold text-white text-xl mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Careers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <Tag>Every Citizen Has a Job</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-4">Only a Few Are Elected. Everyone Works.</h2>
            <p className="text-gray-600 leading-relaxed">
              At the end of the week, Outstanding Citizen awards are given in nineteen roles. Most of them are not elected offices. A state runs on its clerks, reporters, firefighters and shop owners as much as its Governor.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {careers.map((c) => (
              <div key={c.sector} className="bg-white p-7">
                <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold mb-4">{c.sector}</h3>
                <ul className="space-y-2">
                  {c.roles.map((role) => (
                    <li key={role} className="font-serif font-bold text-navy">{role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Capitol */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <Tag>Beyond the Capitol</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl">The Rest of the Week</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beyondCapitol.map((item) => (
              <div key={item.title} className="border-t-2 border-gold pt-6">
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools of Instruction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Tag>Schools of Instruction</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl lg:text-4xl mb-3">9 Schools. Real-World Instructors.</h2>
            <p className="text-gray-500">Every citizen attends one school of instruction for the week. Classes are taught by practicing attorneys, Highway Patrol troopers, journalists, business executives, and policy professionals. Some positions require a specific school.</p>
          </div>
          <div className="space-y-4">
            {schools.map((s) => (
              <div key={s.name} className={`bg-cream border border-gray-200 ${s.color} border-l-4 rounded-r-xl p-6`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-navy text-lg mb-1">{s.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                  {s.positions.length > 0 && (
                    <div className="lg:w-72 shrink-0">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-gray-500 block mb-1.5">Unlocks Positions</span>
                      <div className="flex flex-wrap gap-1.5">
                        {s.positions.map((p) => (
                          <span key={p} className="bg-white border border-gray-200 text-xs text-navy font-medium px-2 py-0.5 rounded">{p}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Tag>Media at MBS</Tag>
            <h2 className="font-serif font-bold text-navy text-3xl mb-3">Run the Press</h2>
            <p className="text-gray-500">MBS has a fully operational media operation — citizens produce real content every day of the program.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'The MBS Leader', desc: 'A daily print newspaper produced in partnership with Missouri Girls State. Citizens write, edit, photograph, and lay out every issue.', type: 'Print' },
              { name: 'KMBS Radio & Podcast', desc: 'Daily audio news delivered to the entire state. Citizens report, produce, and host live broadcasts.', type: 'Audio' },
              { name: 'KMBS-TV', desc: 'A broadcast news show recorded in professional TV studios on campus. Citizens anchor, produce, and edit video content.', type: 'Video' },
            ].map((m) => (
              <div key={m.name} className="bg-white border border-gray-200 rounded-xl p-7">
                <span className="text-[10px] font-bold tracking-wider uppercase text-gold mb-2 block">{m.type}</span>
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{m.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoreValues variant="band" lead="The structure changes a little every year. These do not." />
      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-white text-2xl mb-4">Ready to build the 51st state?</h2>
          <p className="text-white/70 mb-6">Applications for the 2027 session are open now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/apply" className="bg-red hover:bg-red-dark text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Apply Now
            </Link>
            <Link to="/students" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-7 py-3 rounded-lg transition">
              Student Info
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
