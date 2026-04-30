import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Battery Factory Direct | Perth Warehouse-Direct Battery Supplier',
    template: '%s | Battery Factory Direct',
  },
  description:
    'Perth warehouse-direct battery supplier based in Maddington. Car, truck, AGM, marine and lithium batteries. Perth-wide delivery, installation and 24/7 emergency support.',
  keywords: [
    'Perth car batteries',
    'Maddington batteries',
    'battery supplier Perth',
    'AGM batteries Perth',
    'car battery replacement Perth',
    'mobile battery delivery Perth',
    'emergency battery Perth',
    'trade battery supplier Perth',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Battery Factory Direct',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-100 text-zinc-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
