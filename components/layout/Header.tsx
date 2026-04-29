'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
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
    const handle = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 py-3'
            : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <span className="text-lg sm:text-xl font-black tracking-tight text-zinc-100">
                BATTERY FACTORY
              </span>
              <span className="text-lg sm:text-xl font-black tracking-tight text-red-500"> DIRECT</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors duration-200 relative',
                    pathname === link.href
                      ? 'text-zinc-100'
                      : 'text-zinc-400 hover:text-zinc-100'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-red-500 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:0000000000"
                className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
              <Link
                href="/quote"
                className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
              >
                Enter Your Rego
              </Link>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed inset-0 z-50 bg-zinc-950 flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-800">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <span className="text-xl font-black text-zinc-100">BATTERY FACTORY</span>
                <span className="text-xl font-black text-red-500"> DIRECT</span>
              </Link>
              <button onClick={() => setMenuOpen(false)} className="p-2 text-zinc-400 hover:text-zinc-100">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col px-4 py-6 gap-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center justify-between py-4 border-b border-zinc-800/60 text-lg font-semibold',
                    pathname === link.href ? 'text-zinc-100' : 'text-zinc-400'
                  )}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                </Link>
              ))}
            </nav>

            <div className="px-4 pb-10 flex flex-col gap-3">
              <a
                href="tel:0000000000"
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-zinc-700 rounded-lg text-zinc-100 font-semibold"
              >
                <Phone className="w-4 h-4" />
                0000 000 000
              </a>
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-base transition-colors"
              >
                Enter Your Rego
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
