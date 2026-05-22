import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'How It Works | JFA Properties LLC',
  description: 'Learn how our simple 3-step process works to get you a fair cash offer and close on your timeline.',
}

const steps = [
  {
    num: '01',
    title: 'Tell Us About Your House',
    desc: 'Start by filling out our simple form with your property address and contact information. It takes less than 60 seconds and there is absolutely no obligation.',
    details: ['Enter your property address', 'Provide a phone number or email', 'Tell us a little about the condition (optional)'],
  },
  {
    num: '02',
    title: 'We Evaluate & Make an Offer',
    desc: 'Our team will review your property details and may schedule a quick walkthrough. We will send a fair no-obligation cash offer within 24 hours.',
    details: ['We research comparable sales in your area', 'We account for condition, location, and market trends', 'You receive a written cash offer with no pressure'],
  },
  {
    num: '03',
    title: 'Close & Receive Your Cash',
    desc: 'Once you accept, we handle all the paperwork. You pick the closing date — as fast as 7 days or as far out as you need.',
    details: ['We handle all the closing paperwork', 'You choose the closing date', 'Get paid via wire transfer or certified check'],
  },
]

const faqs = [
  { q: 'How quickly can you close?', a: 'We can close in as little as 7 days. If you need more time we can work on your schedule.' },
  { q: 'Do I need to clean or make repairs?', a: 'No. We buy houses in any condition. Sell it as-is.' },
  { q: 'Are there any fees or commissions?', a: 'None. Zero. We cover all closing costs and there are no agent commissions.' },
  { q: 'Is my information kept private?', a: 'Absolutely. Your information is never sold or shared without your permission.' },
]

export default function HowItWorksPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-blue-100 text-xl leading-relaxed">
            Selling your house to JFA Properties is simple, transparent, and stress-free in just 3 steps.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {steps.map((s, i) => (
            <FadeUp key={s.num} delay={i * 100}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-brand-600 text-white font-display font-bold text-3xl flex items-center justify-center step-ring">
                  {s.num}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-800 mb-3">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
