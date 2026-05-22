'use client'
import { useState } from 'react'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

const faqs = [
  { q: 'Who is JFA Properties LLC?', a: 'JFA Properties is a Texas-based real estate investment company. We buy houses directly from homeowners for cash, allowing you to skip the traditional listing process entirely.' },
  { q: 'How fast can I get an offer?', a: 'We typically provide a written cash offer within 24 hours of receiving your property information. In many cases, we can provide a same-day offer.' },
  { q: 'How fast can you close?', a: 'We can close in as little as 7 days. If you need more time, we are flexible and can work on your preferred timeline.' },
  { q: 'Do I need to make any repairs before selling?', a: 'No. We buy houses in any condition. You do not need to fix or clean anything.' },
  { q: 'Are there any fees, commissions, or hidden costs?', a: 'Absolutely none. There are no agent commissions, no closing fees, and no hidden charges. We cover all closing costs.' },
  { q: 'How do you determine your cash offer?', a: 'We look at the property location, comparable recent sales in the area, current condition, and the cost of any needed repairs.' },
  { q: 'Am I obligated to accept the offer?', a: 'Never. There is zero obligation to accept. You are free to say no at any point.' },
  { q: 'What types of properties do you buy?', a: 'We buy single-family homes, multi-family properties, condos, townhomes, and land across Texas.' },
  { q: 'What situations do you work with?', a: 'Common situations include divorce, inherited property, job relocation, foreclosure, bankruptcy, and major repairs needed.' },
  { q: 'Is my personal information kept private?', a: 'Yes, completely. We never sell or share your personal information with third parties without your consent.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-brand-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-brand-50 transition-colors"
      >
        <span className="font-semibold text-brand-800 pr-4">{q}</span>
        <span className={`text-brand-600 text-xl flex-shrink-0 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white text-gray-600 text-sm leading-relaxed border-t border-brand-50">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-100 text-xl">Everything you need to know about selling your Texas home to JFA Properties.</p>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          {faqs.map((f, i) => (
            <FadeUp key={f.q} delay={i * 40}>
              <FAQItem q={f.q} a={f.a} />
            </FadeUp>
          ))}
        </div>
      </div>

      <div className="py-16 bg-brand-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-blue-100 mb-8">Reach out to our team — we are always happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-brand-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-xl">
              Get My Free Cash Offer
            </Link>
            <a href="tel:+12103199323" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              Call (210) 319-9323
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
