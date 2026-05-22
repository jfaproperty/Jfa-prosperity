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
    desc: "Our team will review your property details and may schedule a quick walkthrough at a time convenient for you. We'll send a fair, no-obligation cash offer within 24 hours.",
    details: ['We research comparable sales in your area', 'We account for condition, location, and market trends', 'You receive a written cash offer — no pressure, no games'],
  },
  {
    num: '03',
    title: 'Close & Receive Your Cash',
    desc: "Once you accept, we handle all the paperwork. You pick the closing date — as fast as 7 days or as far out as you need. At closing, you walk away with cash.",
    details: ['We handle all the closing paperwork', 'You choose the closing date', 'Get paid via wire transfer or certified check'],
  },
]

const faqs = [
  { q: 'How quickly can you close?', a: 'We can close in as little as 7 days. If you need more time to prepare, we can also work on your schedule — weeks or even months out.' },
  { q: 'Do I need to clean or make repairs?', a: 'No. We buy houses in any condition — fire damage, foundation issues, hoarder homes, you name it. Sell it as-is.' },
  { q: 'Are there any fees or commissions?', a: 'None. Zero. We cover all closing costs and there are no agent commissions. The offer we make is the amount you receive.' },
  { q: 'Is my information kept private?', a: 'Absolutely. Your information is never sold or shared without your permission. See our Privacy Policy for full details.' },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-blue-100 text-xl leading-relaxed">
            Selling your house to JFA Properties is simple, transparent, and stress-free — j
