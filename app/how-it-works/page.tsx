import Link from 'next/link'

export default function HowItWorksPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-blue-100 text-xl leading-relaxed">
            Selling your house to JFA Properties is simple and stress-free in just 3 steps.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-brand-600 text-white font-display font-bold text-3xl flex items-center justify-center">
              01
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-800 mb-3">Tell Us About Your House</h2>
              <p className="text-gray-600 leading-relaxed">Fill out our simple form with your property address and contact info. Takes less than 60 seconds with no obligation.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-brand-600 text-white font-display font-bold text-3xl flex items-center justify-center">
              02
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-800 mb-3">We Evaluate and Make an Offer</h2>
              <p className="text-gray-600 leading-relaxed">Our team reviews your property and sends a fair no-obligation cash offer within 24 hours.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-brand-600 text-white font-display font-bold text-3xl flex items-center justify-center">
              03
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-800 mb-3">Close and Receive Your Cash</h2>
              <p className="text-gray-600 leading-relaxed">Once you accept we handle all the paperwork. You pick the closing date as fast as 7 days.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-brand-900 mb-10 text-center">Common Questions</h2>
          <div className="space-y-5">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
              <h3 className="font-semibold text-brand-800 mb-2">How quickly can you close?</h3>
              <p className="text-gray-600 text-sm">We can close in as little as 7 days or work on your schedule.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
              <h3 className="font-semibold text-brand-800 mb-2">Do I need to make repairs?</h3>
              <p className="text-gray-600 text-sm">No. We buy houses in any condition. Sell it as-is.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
              <h3 className="font-semibold text-brand-800 mb-2">Are there any fees or commissions?</h3>
              <p className="text-gray-600 text-sm">None. We cover all closing costs. No agent commissions.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
              <h3 className="font-semibold t
