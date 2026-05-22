'use client'
import { useState } from 'react'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

const faqs = [
  { q: 'Who is JFA Properties LLC?', a: 'JFA Properties is a Texas-based real estate investment company. We buy houses directly from homeowners for cash, allowing you to skip the traditional listing process entirely.' },
  { q: 'How fast can I get an offer?', a: 'We typically provide a written cash offer within 24 hours of receiving your property information. In many cases, we can provide a same-day offer.' },
  { q: 'How fast can you close?', a: 'We can close in as little as 7 days. If you need more time, we are flexible and can work on your preferred timeline — even if that is 30, 60, or 90 days out.' },
  { q: 'Do I need to make any repairs before selling?', a: "No. We buy houses in any condition — outdated kitchens, foundation issues, fire damage, water damage, code violations, you name it. You don't need to fix or clean anything." },
  { q: 'Are there any fees, commissions, or hidden costs?', a: 'Absolutely none. There are no agent commissions, no closing fees, and no hidden charges. We cover all closing costs. The offer we make is the amount you walk away with.' },
  { q: 'How do you determine your cash offer?', a: 'We look at the property location, comparable recent sales in the area, current condition, and the cost of any needed repairs. We aim to make the fairest offer possible while being transparent about how we arrive at it.' },
  { q: 'Am I obligated to accept the offer?', a: 'Never. There is zero obligation to accept. You are free to review the offer, take your time, and say no at any point — no pressure from our team, ever.' },
  { q: 'What types of properties do you buy?', a: 'We buy single-family homes, multi-family properties, condos, townhomes, and land across Texas. We also purchase properties in probate, pre-foreclosure, and with code violations.' },
  { q: 'What situations do you work with?', a: 'Common situations include divorce, inherited property, job relocation, behind on payments, downsizing, foreclosure, bankruptcy, major repairs needed, and landlords tired of tenants.' },
  { q: 'Is my personal information kept private?', a: 'Yes, completely. We never sell or share your personal information with third parties without your consent. Please review our Privacy Policy for full details.' },
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
