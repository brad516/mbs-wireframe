import PageHero from '../../components/PageHero'
import Tag from '../../components/Tag'

const staff = [
  { name: 'Executive Director Name', title: 'Executive Director', bio: 'Leads the overall direction and strategy of Missouri Boys State. MBS alumnus, Class of 19XX.' },
  { name: 'Program Director Name', title: 'Program Director', bio: 'Oversees session programming, curriculum development, and delegate experience.' },
  { name: 'Director of Development Name', title: 'Director of Development', bio: 'Manages fundraising, corporate partnerships, and the MBS Memorial Trust.' },
  { name: 'Director of Operations Name', title: 'Director of Operations', bio: 'Coordinates logistics, campus operations, and volunteer management.' },
  { name: 'Communications Director Name', title: 'Communications Director', bio: 'Manages media relations, digital presence, and alumni communications.' },
  { name: 'Registrar Name', title: 'Registrar', bio: 'Handles delegate registration, nominations, and application processing.' },
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
