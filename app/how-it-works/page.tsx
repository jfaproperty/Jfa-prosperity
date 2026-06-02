import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main>
      <div className="bg-gradient-to-br from-green-700 to-green-500 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-xl opacity-90">Selling your house to JFA Property is simple and stress-free in just 3 steps.</p>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-green-600 text-white font-bold text-3xl flex items-center justify-center">01</div>
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-3">Tell Us About Your House</h2>
              <p className="text-gray-600 leading-relaxed">Fill out our simple form with your property address and basic details. No obligation whatsoever — it takes less than 60 seconds.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-green-600 text-white font-bold text-3xl flex items-center justify-center">02</div>
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-3">We Evaluate and Make an Offer</h2>
              <p className="text-gray-600 leading-relaxed">Our team reviews your property and sends you a fair, no-obligation cash offer within 24 hours. No repairs needed, no agent fees, no commissions.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-green-600 text-white font-bold text-3xl flex items-center justify-center">03</div>
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-3">Close and Receive Your Cash</h2>
              <p className="text-gray-600 leading-relaxed">Once you accept the offer, we handle all the paperwork. You choose the closing date and walk away with cash in hand — anywhere in Texas.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-green-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Get your free cash offer today — no obligation, no pressure.</p>
          <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors">
            Get My Free Cash Offer
          </Link>
        </div>
      </div>
    </main>
  );
}