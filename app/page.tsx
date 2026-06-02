import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export default function HomePage() {
  return (
    <div>
      <div className="relative min-h-screen bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 flex items-center">
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-40 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Sell Your Texas House Fast for Cash.
            </h1>
            <p className="text-blue-100 text-xl mb-4">No repairs. No fees. No hassle.</p>
            <p className="text-blue-200 text-lg mb-8">
              We buy houses across Texas in any condition. Get a fair cash offer within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="font-display text-2xl font-bold text-brand-800 mb-1">Get Your Free Cash Offer</h2>
            <p className="text-gray-500 text-sm mb-6">No obligation. Takes 30 seconds.</p>
            <LeadForm />
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-brand-900 mb-6">Why Sell to JFA Property?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-brand-50 rounded-2xl p-6">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="font-display text-lg font-bold text-brand-800 mb-2">No Repairs Needed</h3>
              <p className="text-gray-600 text-sm">Sell your house as-is. We buy in any condition.</p>
            </div>
            <div className="bg-brand-50 rounded-2xl p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-display text-lg font-bold text-brand-800 mb-2">Zero Fees</h3>
              <p className="text-gray-600 text-sm">No agent commissions, no closing costs, no hidden fees.</p>
            </div>
            <div className="bg-brand-50 rounded-2xl p-6">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-display text-lg font-bold text-brand-800 mb-2">Your Timeline</h3>
              <p className="text-gray-600 text-sm">Close in 7 days or 90. You choose the date.</p>
            </div>
            <div className="bg-brand-50 rounded-2xl p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-display text-lg font-bold text-brand-800 mb-2">Local Texas Buyers</h3>
              <p className="text-gray-600 text-sm">We are Texans serving Texans.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-brand-700">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="font-display text-4xl font-bold mb-4">Ready to Sell Your House Fast?</h2>
          <p className="text-blue-100 text-lg mb-8">Join hundreds of Texas homeowners who got a fair cash offer.</p>
          <Link href="/contact" className="inline-block bg-white text-brand-700 font-bold text-lg px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-xl">
            Get My Free Cash Offer
          </Link>
        </div>
      </div>
    </div>
  )
}
