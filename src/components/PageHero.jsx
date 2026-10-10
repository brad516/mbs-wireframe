import Tag from './Tag'
import HeroBackground from './HeroBackground'

export default function PageHero({ tag, title, description, photo, photoPosition }) {
  if (photo) {
    return (
      <section className="relative bg-navy-dark overflow-hidden min-h-[52vh] flex items-end lg:items-center">
        <HeroBackground slot={photo} position={photoPosition} />
        <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 pt-40 pb-12 lg:py-24 motion-safe:animate-rise">
          {tag && <Tag light>{tag}</Tag>}
          <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.06] mb-5 max-w-2xl">
            {title}
          </h1>
          {description && (
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="relative bg-navy py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.navy.lighter),transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-light/60 to-transparent" />
      <div className="relative max-w-4xl mx-auto px-6 text-center motion-safe:animate-rise">
        {tag && <Tag light>{tag}</Tag>}
        <h1 className="font-serif font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
