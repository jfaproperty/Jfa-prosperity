import Link from 'next/link'

const reviews = [
  { name: 'Maria G.', city: 'San Antonio, TX', text: 'JFA Properties made the whole process stress-free. Got a fair offer the next day and closed in two weeks!' },
  { name: 'Robert D.', city: 'Houston, TX', text: 'They bought my house as-is. No repairs, no showings — just a fair cash offer and a smooth closing.' },
  { name: 'Tanya W.', city: 'Dallas, TX', text: 'Professional, honest, and local. JFA Properties is the real deal for selling fast in Texas.' },
  { name: 'Carlos M.', city: 'Austin, TX', text: 'I inherited a property that needed work. JFA gave me a fair offer and handled everything.' },
  { name: 'Debra H.', city: 'Fort Worth, TX', text: 'Going through a tough time and needed to sell quickly. JFA was compassionate and fast. Cash in 10 days.' },
  { name: 'Marcus T.', city: 'El Paso, TX', text: 'No games, no gimmicks. Real offer, closed on the date I needed. Would use them again.' },
]

export default function ReviewsPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display text-5xl font-bold mb-4">What Homeowners Say</h1>
          <p className="text-blue-100 text-xl">Real reviews from real Texas homeowners.</p>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {reviews.map((r) => (
              <div key={r.name} className="bg-brand-50 rounded-2xl p-7 border border-brand-100 h-full flex flex-col">
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-gray-700 leading-relaxed italic flex-1 mb-5">{r.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-800 text-sm">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 bg-brand-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Join Our Happy Sellers?</h2>
          <p className="text-blue-100 mb-8">Get your free cash offer — no pressure, no obligation.</p>
          <Link href="/contact" className="inline-block bg-white text-brand-700 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-xl">
            Get My Free Cash Offer
          </Link>
        </div>
      </div>
    </div>
  )
}
