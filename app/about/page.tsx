import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'About Us | JFA Properties LLC',
  description: 'Learn about JFA Properties LLC — a Texas-based cash home buyer committed to helping homeowners sell fast and fairly.',
}

const values = [
  { icon: '🤝', title: 'Integrity First', desc: 'We give honest offers and never pressure you. What you see is what you get.' },
  { icon: '⚡', title: 'Speed & Simplicity', desc: 'We know time matters. Our process is designed to be fast, clear, and hassle-free.' },
  { icon: '📍', title: 'Texas Roots', desc: "We're locals. We understand Texas communities, markets, and what homeowners here truly need." },
  { icon: '💙', title: 'Community Care', desc: "We don't just buy houses — we invest in neighborhoods and the people who live in them." },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-4">About JFA Properties</h1>
          <p className="text-blue-100 text-xl leading-relaxed">
            A Texas company built on trust, transparency, and treating every homeowner with respect.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <FadeUp>
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-800 mb-5">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                JFA Properties LLC was founded by Texans who saw how stressful the traditional home-selling process could be — months on the market, costly repairs, uncertain buyers, and expensive commissions eating into profits.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We created a better way. By purchasing homes directly for cash, we eliminate the middlemen, the delays, and the surprises. Our mission is simple: give homeowners a fair offer and a smooth, dignified exit from a property they&apos;re ready to leave.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We&apos;ve helped hundreds of Texas families sell homes in all kinds of situations — inherited properties, divorce, foreclosure, job relocation, and more. Whatever your situation, we&apos;re here to help.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 text-center">
              <div className="font-display text-6xl font-bold text-brand-700 mb-2">500+</div>
              <div className="text-gray-500 mb-6">Homes Purchased Across Texas</div>
              <div className="grid grid-cols-2 gap-4 text-center">
                {[['24 hrs', 'Avg Offer Time'], ['7 days', 'Fastest Close'], ['$0', 'Fees or Commissions'], ['100%', 'Satisfaction Focus']].map(([val, label]) => (
                  <div key={label} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="font-display text-2xl font-bold text-brand-700">{val}</div>
                    <div className="text-xs text-gray-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-brand-900 mb-12 text-center">Our Core Values</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 flex gap-5 border border-brand-100 hover:border-brand-300 transition-colors shadow-sm">
                  <div className="text-4xl flex-shrink-0">{v.icon}</div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-800 mb-2">{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-white text-center">
        <FadeUp>
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-display text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-blue-100 mb-8">No pressure. No obligation. Just an honest conversation about your home.</p>
            <Link href="/contact" className="inline-block bg-white text-brand-700 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-xl">
              Get My Free Cash Offer →
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
