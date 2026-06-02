import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-blue-100 text-xl leading-relaxed">
            Selling your house to JFA Property is simple and stress-free in just 3 steps.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-brand-600 text-white font-display font-bold text-3xl flex items-center justify-center">
              01
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-800 mb-3">Tell Us About Your House</h2>
              <p className="text-gray-600 leading-relaxed">Fill out our simple form with your property address and basic details. No obligation whatsoever — it takes less than 60 seconds.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start"