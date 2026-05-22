import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Contact Us | JFA Properties LLC',
  description: 'Get in touch with JFA Properties LLC to receive your free cash offer on your Texas home.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display text-5xl font-bold mb-4">Get Your Free Cash Offer</h1>
          <p className="text-blue-100 text-xl">Fill out the form and we will be in touch within 24 hours.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <FadeUp>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-display text-2xl font-bold text-brand-800 mb-1">Your Information</h2>
              <p className="text-gray-500 text-sm mb-6">100% private. No obligation. Takes 30 seconds.</p>
              <LeadForm />
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-800 mb-3">Why JFA Properties?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are a local Texas company dedicated to making the home-selling experience fast, fair, and completely stress-free. No repairs. No fees. No drama.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: '📞', label: 'Phone', value: '(210) 319-9323', href: 'tel:+12103199323' },
                  { icon: '📧', label: 'Email', value: 'jfaproperty@gmail.com', href: 'mailto:jfaproperty@gmail.com' },
                  { icon: '📍', label: 'Service Area', value: 'All of Texas', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 bg-brand-50 rounded-xl p-4 border border-brand-100">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-brand-700 hover:text-brand-900 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-brand-700">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-700 text-white rounded-2xl p-6">
                <h4 className="font-display text-lg font-bold mb-3">What Happens Next?</h4>
                <ol className="space-y-2 text-sm text-blue-100">
                  <li className="flex gap-2"><span className="font-bold text-white">1.</span> We review your property details</li>
                  <li className="flex gap-2"><span className="font-bold text-white">2.</span> We contact you within 24 hours</li>
                  <li className="flex gap-2"><span className="font-bold text-white">3.</span> You receive a written cash offer</li>
                  <li className="flex gap-2"><span className="font-bold text-white">4.</span> You decide — no pressure, ever</li>
                </ol>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
