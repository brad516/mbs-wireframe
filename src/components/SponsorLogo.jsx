import { sponsors } from '../data/sponsors'

export default function SponsorLogo({ name, className = '' }) {
  const sponsor = sponsors[name]

  if (!sponsor) {
    return (
      <div className={`bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center px-4 ${className}`}>
        <span className="text-[11px] font-bold text-gray-300 text-center leading-tight">{name}<br />Logo</span>
      </div>
    )
  }

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-lg flex items-center justify-center px-4 py-3 transition hover:shadow-md ${sponsor.dark ? 'bg-navy' : 'bg-white border border-gray-200'} ${className}`}
    >
      <img src={sponsor.logo} alt={name} loading="lazy" className="h-full w-full object-contain" />
    </a>
  )
}
