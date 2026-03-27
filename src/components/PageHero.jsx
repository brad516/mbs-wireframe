import Tag from './Tag'

export default function PageHero({ tag, title, description }) {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {tag && <Tag light>{tag}</Tag>}
        <h1 className="font-serif font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
