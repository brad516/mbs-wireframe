import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="py-32 bg-navy text-center">
      <div className="max-w-xl mx-auto px-6">
        <span className="font-serif font-bold text-8xl text-white/20">404</span>
        <h1 className="font-serif font-bold text-white text-3xl mt-4 mb-3">Page Not Found</h1>
        <p className="text-white/60 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="bg-gold hover:bg-gold-light text-white font-bold text-sm px-7 py-3 rounded-lg transition inline-block">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
