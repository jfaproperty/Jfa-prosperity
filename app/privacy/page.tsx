import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | JFA Properties LLC',
}

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-display text-4xl font-bold text-brand-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-brand-800 mb-3">Information We Collect</h2>
            <p>We collect information you provide directly to us, including your name, email address, phone number, and property address when you fill out our contact forms.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-brand-800 mb-3">How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services; respond to your inquiries and send you cash offer information; send you marketing communications if you opt in; and comply with legal obligations.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-brand-800 mb-3">SMS Communications</h2>
            <p>If you opt in to SMS communications, we may send you messages related to your cash offer, property evaluation updates, and marketing materials. You may opt out at any time by replying STOP.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-brand-800 mb-3">Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-brand-800 mb-3">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:jfaproperty@gmail.com" className="text-brand-600">jfaproperty@gmail.com</a>.</p>
          </section>

          <div id="terms" className="border-t border-gray-200 pt-8">
            <h1 className="font-display text-4xl font-bold text-brand-900 mb-2">Terms of Service</h1>
            <p className="text-gray-400 text-sm mb-6">Last updated: January 1, 2025</p>
            <p>By using our website and services, you agree to these terms. Our services are provided for informational purposes, and any cash offer is subject to property inspection and verification. We reserve the right to withdraw or modify any offer at any time prior to a signed purchase agreement.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
