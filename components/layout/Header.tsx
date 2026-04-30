'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Battery Range', href: '/battery-range' },
  { label: 'Quote', href: '/quote' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm'
          : 'bg-white border-b border-zinc-200'
      )}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-18">

            <Link href="/" className="flex-shrink-0">
              <span className="text-base sm:text-lg font-black tracking-tight text-zinc-900">BATTERY FACTORY</span>
              <span className="text-base sm:text-lg font-black tracking-tight text-red-600"> DIRECT</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors duration-150 relative pb-0.5',
                    pathname === link.href
                      ? 'text-zinc-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-red-600'
                      : 'text-zinc-500 hover:text-zinc-900'
                  )}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:0000000000"
                className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                0000 000 000
              </a>
              <Link href="/quote"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors">
                Enter Your Rego
              </Link>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors" aria-label="Menu">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white flex flex-col lg:hidden pt-16">
            <div className="border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <span className="text-lg font-black text-zinc-900">BATTERY FACTORY</span>
                <span className="text-lg font-black text-red-600"> DIRECT</span>
              </Link>
              <button onClick={() => setMenuOpen(false)} className="p-2 text-zinc-400 hover:text-zinc-900">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className="py-4 border-b border-zinc-100 text-lg font-semibold text-zinc-700 hover:text-zinc-900 transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 pb-10 space-y-3">
              <a href="tel:0000000000"
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-zinc-300 rounded text-zinc-800 font-semibold text-sm">
                <Phone className="w-4 h-4" /> 0000 000 000
              </a>
              <Link href="/quote"
                className="flex items-center justify-center w-full py-4 bg-red-600 text-white font-bold rounded text-base">
                Enter Your Rego
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
