import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'How It Works | JFA Properties LLC',
  description: 'Learn how our simple 3-step process works to get you a fair cash offer.',
}

const steps = [
  {
    num: '01',
    title: 'Tell Us About Your House',
    desc: 'Fill out our simple form with your property address and contact info. Takes less than 60 seconds with no obligation.',
    details: ['Enter your property address', 'Provide a phone number or email', 'Tell us about the condition (optional)'],
  },
  {
    num: '02',
    title: 'We Evaluate & Make an Offer',
    desc: 'Our team reviews your property and sends a fair no-obligation cash offer within 24 hours.',
    details: ['We research comparable sales in your area', 'We account for condition and market trends', 'You receive a written cash offer with no pressure'],
  },
  {
    num: '03',
    title: 'Close & Receive Your Cash',
    desc: 'Once you accept we handle all the paperwork. You pick the closing date as fast as 7 days.',
    details: ['We handle all closing paperwork', 'You choose the closing date', 'Get paid via wire transfer or certified check'],
  },
]

const faqs = [
  { q: 'How quickly can you close?', a: 'We can close in as little as 7 days or work on your schedule.' },
  { q: 'Do I need to clean or make repairs?', a: 'No. We buy houses in any condition. Sell it as-is.' },
  { q: 'Are there any fees or commissions?', a: 'None. We cover all closing costs. No agent commissions.' },
  { q: 'Is my information kept private?', a: 'Absolutely. Your information is never sold or shared.' },
]

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
