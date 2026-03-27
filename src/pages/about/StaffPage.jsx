import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const staff = [
  { name: 'Executive Director Name', title: 'Executive Director', bio: 'Leads the overall direction and strategy of Missouri Boys State. MBS alumnus, Class of 19XX.' },
  { name: 'Program Director Name', title: 'Program Director', bio: 'Oversees session programming, curriculum development, and citizen experience.' },
  { name: 'Director of Development Name', title: 'Director of Development', bio: 'Manages fundraising, corporate partnerships, and the MBS Memorial Trust.' },
  { name: 'Director of Operations Name', title: 'Director of Operations', bio: 'Coordinates logistics, campus operations, and volunteer management.' },
  { name: 'Communications Director Name', title: 'Communications Director', bio: 'Manages media relations, digital presence, and alumni communications.' },
  { name: 'Registrar Name', title: 'Registrar', bio: 'Handles citizen registration, nominations, and application processing.' },
]

export default function StaffPage() {
  return (
    <>
      <PageHero
        tag="Our Team"
        title="Meet the Staff"
        description="The dedicated team and volunteers who make Missouri Boys State happen year after year."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <span className="text-sm text-gray-300 font-bold">Photo</span>
                </div>
                <div className="p-5">
                  <strong className="text-sm text-navy block">{s.name}</strong>
                  <span className="text-xs text-red font-bold block mb-2">{s.title}</span>
                  <p className="text-sm text-gray-400">{s.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <Tag>Governance</Tag>
          <h2 className="font-serif font-bold text-navy text-3xl mb-8">Board of Directors</h2>
          <p className="text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Missouri Boys State is governed by a volunteer board of directors composed of American Legion leaders, MBS alumni, and community members dedicated to the program&rsquo;s mission.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-navy text-white text-sm font-bold px-6 py-3">
              <span>Name</span>
              <span>Title</span>
              <span>Affiliation</span>
            </div>
            {[
              { name: 'Board Chair Name', title: 'Chair', affiliation: 'American Legion Dept. of Missouri' },
              { name: 'Vice Chair Name', title: 'Vice Chair', affiliation: 'MBS Alumnus, Class of 19XX' },
              { name: 'Treasurer Name', title: 'Treasurer', affiliation: 'MBS Memorial Trust' },
              { name: 'Secretary Name', title: 'Secretary', affiliation: 'American Legion Post XXX' },
              { name: 'Director Name', title: 'Director', affiliation: 'Community Leader' },
              { name: 'Director Name', title: 'Director', affiliation: 'MBS Alumnus, Class of 20XX' },
              { name: 'Director Name', title: 'Director', affiliation: 'American Legion Post XXX' },
              { name: 'Director Name', title: 'Director, Ex Officio', affiliation: 'MBS Executive Director' },
            ].map((d, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-200`}>
                <span className="font-bold text-navy">{d.name}</span>
                <span className="text-gray-500">{d.title}</span>
                <span className="text-gray-400">{d.affiliation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream border-t border-gray-200 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Tag>Contact</Tag>
          <h3 className="font-serif font-bold text-navy text-xl mb-2">Missouri Boys State Headquarters</h3>
          <p className="text-sm text-gray-400">P.O. Box 667, Warrensburg, MO 64093</p>
          <p className="text-sm text-gray-400">660.429.2761 &middot; headquarters@moboysstate.org</p>
        </div>
      </section>
    </>
  )
}
