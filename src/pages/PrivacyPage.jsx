import PageHero from '../components/PageHero'

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Last updated: March 2026" />
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-sm">
          <h2 className="font-serif font-bold text-navy text-2xl mb-4">Information We Collect</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Missouri Boys State (&ldquo;MBS,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;) collects personal information that you voluntarily provide when applying to the program, making a donation, nominating a student, joining the alumni association, or contacting us. This may include your name, email address, phone number, mailing address, school information, and payment details.
          </p>
          <h2 className="font-serif font-bold text-navy text-2xl mb-4">How We Use Your Information</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            We use collected information to process applications and registrations, communicate about program activities, process donations and issue tax receipts, send newsletters and updates (with your consent), and improve our programs and website experience.
          </p>
          <h2 className="font-serif font-bold text-navy text-2xl mb-4">Cookies & Analytics</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Our website may use cookies and analytics tools to understand how visitors use our site and to improve the user experience. You can control cookie settings through your browser preferences.
          </p>
          <h2 className="font-serif font-bold text-navy text-2xl mb-4">Data Sharing</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website and programs, subject to confidentiality agreements.
          </p>
          <h2 className="font-serif font-bold text-navy text-2xl mb-4">Contact</h2>
          <p className="text-gray-500 leading-relaxed">
            For questions about this privacy policy, contact us at headquarters@moboysstate.org or P.O. Box 667, Warrensburg, MO 64093.
          </p>
        </div>
      </section>
    </>
  )
}
