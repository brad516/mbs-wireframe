import { getPhoto } from '../lib/photos'

// Full-bleed photo behind a page hero. Text sits on near-solid navy: the
// scrim runs bottom-up on small screens (text at the bottom) and left-to-right
// on large ones (text on the left), leaving the rest of the photo clear.
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
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy-dark from-35% via-navy-dark/80 to-navy-dark/20 lg:bg-gradient-to-r lg:from-navy-dark lg:from-30% lg:via-navy-dark/85 lg:via-50% lg:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 z-[1] bg-gradient-to-t from-navy-dark/70 to-transparent" />
    </>
  )
}
