'use client'
import { useState } from 'react'

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ address: '', phone: '', email: '' })
  const [agreed, setAgreed] = useState({ nonMarketing: false, marketing: false, privacy: false })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()  }
 if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="font-display text-2xl font-bold text-brand-800 mb-2">
          We&apos;ve Got Your Info!
        </h3>
        <p className="text-gray-600">
          A member of our team will reach out within 24 hours with your cash offer.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'space-y-4'}>
      <div>
        <input
          type="text"
          required
          placeholder="Property address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-900 placeholder-gray-400 bg-white shadow-sm"
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Mobile number (optional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-900 placeholder-gray-400 bg-white shadow-sm"
        />
      </div>
      <div>
        <input
          type="email"
          required
          placeholder="Email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-900 placeholder-gray-400 bg-white shadow-sm"
        />
      </div>

      <div className="space-y-2 pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed.nonMarketing}
            onChange={(e) => setAgreed({ ...agreed, nonMarketing: e.target.checked })}
            className="mt-1 accent-brand-600 w-4 h-4 flex-shrink-0"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            I agree to receive non-marketing SMS messages from JFA Properties LLC regarding cash offer updates, property evaluations, and closing coordination. Msg & data rates may apply. Reply STOP to unsubscribe.
          </span>
        </label>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed.marketing}
            onChange={(e) => setAgreed({ ...agreed, marketing: e.target.checked })}
            className="mt-1 accent-brand-600 w-4 h-4 flex-shrink-0"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            I agree to receive marketing SMS messages from JFA Properties LLC regarding promotional offers. Reply STOP to unsubscribe.
          </span>
        </label>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={agreed.privacy}
            onChange={(e) => setAgreed({ ...agreed, privacy: e.target.checked })}
            className="mt-1 accent-brand-600 w-4 h-4 flex-shrink-0"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            By checking this box, I accept the{' '}
            <a href="/privacy" className="text-brand-600 underline">Privacy Policy</a> and{' '}
            <a href="/privacy#terms" className="text-brand-600 underline">Terms of Service</a>.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={!agreed.nonMarketing || !agreed.privacy}
        className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg text-base transition-all shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5 active:translate-y-0"
      >
        Get My Free Cash Offer →
      </button>

      <div className="flex items-center justify-center gap-6 pt-1 text-xs text-gray-500">
        <span className="flex items-center gap-1">🔒 100% Private</span>
        <span className="flex items-center gap-1">✓ No Obligation</span>
        <span className="flex items-center gap-1">⚡ Takes 30 Seconds</span>
      </div>
    </form>
  )
}
