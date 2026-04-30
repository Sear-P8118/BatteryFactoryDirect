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
        scrolled ? 'bg-zinc-950/98 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
      )}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-base sm:text-lg font-black tracking-tight text-white">
                BATTERY FACTORY
              </span>
              <span className="text-base sm:text-lg font-black tracking-tight text-red-500"> DIRECT</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors duration-150',
                    pathname === link.href ? 'text-white' : 'text-zinc-400 hover:text-white'
                  )}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:0000000000"
                className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
                0000 000 000
              </a>
              <Link href="/quote"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors">
                Enter Your Rego
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors" aria-label="Menu">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-zinc-950 flex flex-col lg:hidden pt-16">
            <div className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <span className="text-lg font-black text-white">BATTERY FACTORY</span>
                <span className="text-lg font-black text-red-500"> DIRECT</span>
              </Link>
              <button onClick={() => setMenuOpen(false)} className="p-2 text-zinc-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col px-6 py-6 gap-0">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className="py-4 border-b border-zinc-800/60 text-lg font-semibold text-zinc-300 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 pb-10 space-y-3">
              <a href="tel:0000000000"
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-zinc-700 rounded text-zinc-100 font-semibold text-sm">
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
