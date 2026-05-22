import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JFA Properties LLC – We Buy Houses for Cash in Texas',
  description:
    'JFA Properties buys houses for cash across Texas. No repairs, no fees, no hassle. Get a free cash offer in 24 hours and close on your timeline.',
  keywords: 'sell house fast cash, we buy houses Texas, cash home buyer Texas, JFA Properties',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
