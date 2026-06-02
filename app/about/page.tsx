import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-4">About JFA Property</h1>
          <p className="text-blue-100 text-xl leading-relaxed">
            A Texas company helping homeowners sell fast for cash.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-900 mb-6">We Are JFA Property</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Hi, I'm Juan with JFA Property LLC. We are a Texas-based real estate investment company that buys houses for cash across the entire state of Texas.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                We started JFA Property because we saw too many Texas homeowners struggling to sell their homes through traditional methods — dealing with repairs, agent fees, and months of uncertainty.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Our mission is simple: make selling your home as fast, fair, and stress-free as possible — no matter where you are in Texas.
              </p>
            </div>
            <div className="bg-brand-50 rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold mb-6 text-brand-700">Why Homeowners Choose Us</h3>
              <ul className="space-y-4">
                {[
                  "We buy houses in any condition",
                  "No repairs or cleaning needed",
                  "No agent fees or commissions",
                  "Close in as little as 7 days",
                  "We serve all of Texas",
                  "Fair and transparent offers",
                  "Local Texas company you can trust",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-brand-600">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-brand-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-8">Get your free cash offer today — no obligation, no pressure.</p>
          <Link href="/contact" className="inline-block bg-brand-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-700 transition-colors">
            Get My Free Cash Offer
          </Link>
        </div>
      </div>
    </div>
  );
}