import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact Us' },
]

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/how-it-works', label: 'Our Process' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/privacy#terms', label: 'Terms of Service' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white font-display font-bold text-lg">
                J
              </div>
              <span className="font-display font-bold text-xl">JFA <Property></Property></span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              We buy houses for cash across Texas. Fair offers, no hassle, close on your timeline.
            </p>
            <a href="tel:+12103199323" className="text-brand-300 font-semibold hover:text-white transition-colors">
              (210) 319-9323
            </a>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li>
                <a href="tel:+12103199323" className="hover:text-white transition-colors">
                  (210) 319-9323
                </a>
              </li>
              <li>
                <a href="mailto:jfaproperty@gmail.com" className="hover:text-white transition-colors">
                  jfaproperty@gmail.com
                </a>
              </li>
              <li>Texas, USA</li>
            </ul>
            <div className="mt-6 bg-brand-800 rounded-xl px-4 py-3 text-xs text-blue-200 border border-brand-700">
              🏠 Local & Trusted Texas Buyer
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-8 text-center text-blue-300 text-sm">
          © {new Date().getFullYear()} JFA Property. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
