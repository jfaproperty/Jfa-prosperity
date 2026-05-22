import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import FadeUp from '@/components/FadeUp'

const benefits = [
  { icon: '🔨', title: 'No Repairs Needed', desc: 'Sell your house as-is. We buy in any condition.' },
  { icon: '💰', title: 'Zero Fees or Commissions', desc: 'No agent commissions, no closing costs, no hidden fees.' },
  { icon: '📅', title: 'Close on Your Timeline', desc: 'Need to close in 7 days or 90? You choose the date.' },
  { icon: '🤝', title: 'Local Texas Buyers', desc: 'We are Texans serving Texans. We care about our communities.' },
]

const steps = [
  { num: '1', title: 'Tell Us About Your House', desc: 'Fill out the simple form with your property address and contact info.' },
  { num: '2', title: 'Receive Your Cash Offer', desc: 'We will send a fair no-obligation cash offer within 24 hours.' },
  { num: '3', title: 'Close & Get Paid', desc: 'Accept the offer, pick your closing date, and walk away with cash.' },
]

const testimonials = [
  { name: 'Maria G.', location: 'San Antonio, TX', quote: 'JFA Properties made the whole process stress-free. Got a fair offer the next day and closed in two weeks!' },
  { name: 'Robert D.', location: 'Houston, TX', quote: 'They bought my house as-is. No repairs, no showings, no stress — just a fair cash offer.' },
  { name: 'Tanya W.', location: 'Dallas, TX', quote: 'Professional and honest from start to finish. The real deal for selling fast in Texas.' },
]

export default function HomePage() {
  return (
    <div>
      <div className="relative min-h-screen hero-clip bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 flex items-center">
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-40 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              🏠 Texas Cash Home Buyers
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Sell Your Texas House Fast for Cash.
            </h1>
            <p className="text-blue-100 text-xl mb-4 leading-relaxed">No repairs. No fees. No hassle.</p>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              We buy houses across Texas in any condition. Get a fair cash offer within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100">
              {['Offer in 24 Hours', 'No Obligation', 'All Texas Cities'].map((t) => (
                <span key={t} className="bg-white/10 rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="font-display text-2xl font-bold text-brand-800 mb-1">Get Your Free Cash Offer</h2>
            <p className="text-gray-500 text-sm mb-6">No obligation. Takes 30 seconds.</p>
            <LeadForm />
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl font-bold text-brand-900 mb-3">Why Sell to JFA Properties?</h2>
              <p className="text-gray-500 max-w-xl mx-auto">We make selling your home simple, fast, and fair.</p>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <FadeUp key={b.title} delay={i * 100}>
                <div className="group bg-brand-50 hover:bg-brand-600 rounded-2xl p-6 transition-all duration-300">
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="font-display text-lg font-bold text-brand-800 group-hover:text-white mb-2 transition-colors">{b.title}</h3>
                  <p className="text-gray-600 group-hover:text-blue-100 text-sm leading-relaxed transition-colors">{b.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl font-bold text-brand-900 mb-3">Our Simple 3-Step Process</h2>
              <p className="text-gray-500 max-w-lg mx-auto">From first contact to cash in hand.</p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <FadeUp key={s.num} delay={i * 150}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-600 text-white font-display font-bold text-2xl mb-5 step-ring">{s.num}</div>
                  <h3 className="font-display text-xl font-bold text-brand-800 mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl font-bold text-brand-900 mb-3">What Texas Homeowners Are Saying</h2>
              <div className="flex justify-center gap-1 text-yellow-400 text-lg mt-2">★★★★★</div>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 120}>
                <div className="bg-brand-50 rounded-2xl p-7 border border-brand-100 hover:border-brand-300 transition-colors">
                  <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                  <p className="text-gray-700 leading-relaxed mb-5 italic">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm">{t.name[0]}</div>
                    <div>
                      <div className="font-semibold text-brand-800 text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.location}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-brand-700">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="font-displ
