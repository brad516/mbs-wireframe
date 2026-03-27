import PageHero from '../components/PageHero'

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" description="Last updated: March 2026" />
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-sm">
          <h2 className="font-serif font-bold text-navy text-2xl mb-4">Acceptance of Terms</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            By accessing and using the Missouri Boys State website (&ldquo;Site&rdquo;), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
          </p>
          <h2 className="font-serif font-bold text-navy text-2xl mb-4">Use of the Site</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            You may use the Site for lawful purposes only. You agree not to use the Site in any way that could damage, disable, or impair the Site or interfere with any other party&rsquo;s use. Content on this Site is provided for informational purposes about Missouri Boys State programs and activities.
          </p>
          <h2 className="font-serif font-bold text-navy text-2xl mb-4">Intellectual Property</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            All content on this Site, including text, graphics, logos, and images, is the property of The American Legion Boys State of Missouri, Inc. and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.
          </p>
          <h2 className="font-serif font-bold text-navy text-2xl mb-4">Limitation of Liability</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Missouri Boys State provides this Site on an &ldquo;as is&rdquo; basis. We make no warranties regarding the accuracy or completeness of the content. In no event shall Missouri Boys State be liable for any damages arising from your use of the Site.
          </p>
          <h2 className="font-serif font-bold text-navy text-2xl mb-4">Governing Law</h2>
          <p className="text-gray-500 leading-relaxed">
            These terms are governed by the laws of the State of Missouri. For questions, contact headquarters@moboysstate.org.
          </p>
        </div>
      </section>
    </>
  )
}
