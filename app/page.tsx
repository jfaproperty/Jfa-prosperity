import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import FadeUp from '@/components/FadeUp'

const benefits = [
  {
    icon: '🔨',
    title: 'No Repairs Needed',
    desc: 'Sell your house as-is. We buy in any condition — no cleaning, no fixes required.',
  },
  {
    icon: '💰',
    title: 'Zero Fees or Commissions',
    desc: 'Keep more of your money. No agent commissions, no closing costs, no hidden fees.',
  },
  {
    icon: '📅',
    title: 'Close on Your Timeline',
    desc: "Need to close in 7 days or 90? You choose the date that works best for you.",
  },
  {
    icon: '🤝',
    title: 'Local Texas Buyers',
    desc: "We're Texans serving Texans. We know the market and care about our communities.",
  },
]

const steps = [
  {
    num: '1',
    title: 'Tell Us About Your House',
    desc: 'Fill out the simple form above with your property address and contact info.',
  },
  {
    num: '2',
    title: 'Receive Your Cash Offer',
    desc: "We'll evaluate your home and send you a fair, no-obligation cash offer within 24 hours.",
  },
  {
    num: '3',
    title: 'Close & Get Paid',
    desc: 'Accept the offer, pick your closing date, and walk away with cash in hand.',
  },
]

const testimonials = [
  {
    name: 'Maria G.',
    location: 'San Antonio, TX',
    quote:
      'JFA Properties made the whole process stress-free. Got a fair offer the next day and closed in two weeks. Highly recommend!',
  },
  {
    name: 'Robert D.',
    location: 'Houston, TX',
    quote:
      'I was worried about the condition of my house but they bought it as-is. No repairs, no showings — just cash.',
  },
  {
    name: 'Tanya W.',
    location: 'Dallas, TX',
    quote:
      'Professional and honest from start to finish. JFA Properties is the real deal for selling fast in Texas.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen hero-clip noise-bg bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 flex items-center">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-32 left-0 w-96 h-96 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-40 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
              🏠 Texas Cash Home Buyers
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Sell Your Texas House{' '}
              <span className="relative inline-block">
                Fast for Cash.
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 9 Q75 2 150 9 Q225 16 298 9" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-blue-100 text-xl mb-4 leading-relaxed">No repairs. No fees. No hassle.</p>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              We buy houses across Texas in any condition. Get a fair cash offer within 24 hours and close on your timeline.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100">
              {['⚡ Offer in 24 Hours', '🔒 No Obligation', '📍 All Texas Cities'].map((t) => (
                <span key={t} className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="font-display text-2xl font-bold text-brand-800 mb-1">Get Your Free Cash Offer</h2>
            <p className="text-gray-500 text-sm mb-6">No obligation. Takes 30 seconds.</p>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl font-bold text-brand-900 mb-3">Why Sell to JFA Properties?</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Skip the traditional hassle. We make selling your home simple, fast, and fair.</p>
            </div>
          </FadeUp>
