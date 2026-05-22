import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Reviews | JFA Properties LLC',
  description: 'Read what Texas homeowners say about selling their house to JFA Properties LLC.',
}

const reviews = [
  { name: 'Maria G.', city: 'San Antonio, TX', stars: 5, text: 'JFA Properties made the whole process completely stress-free. Got a fair offer the next day and closed in two weeks. Highly recommend to anyone needing to sell fast!' },
  { name: 'Robert D.', city: 'Houston, TX', stars: 5, text: 'I was worried about the condition of my house but they bought it completely as-is. No repairs, no showings, no open houses — just a fair cash offer and a smooth closing.' },
  { name: 'Tanya W.', city: 'Dallas, TX', stars: 5, text: 'Professional, honest, and local. JFA Properties is the real deal for selling fast in Texas. They treated me with respect and explained everything clearly.' },
  { name: 'Carlos M.', city: 'Austin, TX', stars: 5, text: "I inherited a property that needed a lot of work. JFA Properties gave me a fair offer and handled everything. I didn't have to lift a finger." },
  { name: 'Debra H.', city: 'Fort Worth, TX', stars: 5, text: 'Going through a tough time and needed to sell quickly. JFA was compassionate, fast, and fair. I had cash in hand in 10 days. Unbelievable service.' },
  { name: 'Marcus T.', city: 'El Paso, TX', stars: 5, text: 'No games, no gimmicks. They gave me a real offer, explained it thoroughly, and closed on the date I needed. Would use them again in a heartbeat.' },
]

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display text-5xl font-bold mb-4">What Homeowners Say</h1>
          <div className="flex justify-center gap-1 text-yellow-300 text-2xl mb-4">★★★★★</div>
          <p className="text-blue-100 text-xl">Real reviews from real Texas homeowners.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {reviews.map((r, i) => (
              <FadeUp key={r.name} delay={i * 80}>
                <div className="bg-brand-50 rounded-2xl p-7 border border-brand-100 hover:border-brand-300 transition-all hover:shadow-md h-full flex flex-col">
                  <div className="text-yellow-400 text-sm mb-3">{'★'.repeat(r.stars)}</div>
                  <p className="text-gray-700 leading-relaxed italic flex-1 mb-5">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-800 text-sm">{r.name}</div>
                      <div className="text-gray-400 text-xs">{r.city}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
