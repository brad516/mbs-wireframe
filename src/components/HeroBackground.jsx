import { getPhoto } from '../lib/photos'

// Full-bleed photo behind a page hero, darkened so white text stays readable.
// Falls back to the plain navy gradient when the slot has no photo.
export default function HeroBackground({ slot, position = 'object-center' }) {
  const photo = getPhoto(slot)

  if (!photo) {
    return (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-lighter" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 to-navy/60 z-[1]" />
      </>
    )
  }

  return (
    <>
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes="100vw"
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        fetchPriority="high"
        className={`absolute inset-0 w-full h-full object-cover ${position} motion-safe:animate-hero-zoom`}
      />
      <div className="absolute inset-0 bg-navy/65 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-navy/50 z-[1]" />
    </>
  )
}
