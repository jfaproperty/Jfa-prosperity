'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white font-display font-bold text-lg group-hover:bg-brand-700 transition-colors">
            J
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-brand-800' : 'text-white'}`}>
            JFA Property
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            Get Free Quote
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 rounded transition-all ${scrolled ? 'bg-gray-800' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 rounded transition-all ${scrolled ? 'bg-gray-800' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 rounded transition-all ${scrolled ? 'bg-gray-800' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium py-1 hover:text-brand-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-brand-600 text-white font-semibold px-5 py-3 rounded-lg text-center"
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
