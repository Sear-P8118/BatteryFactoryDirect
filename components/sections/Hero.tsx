'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'

// ── VIDEO: Replace placeholder div with:
//    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
//      <source src="/videos/hero.mp4" type="video/mp4" />
//    </video>

const ctaBlocks = [
  {
    label: 'Enter Your Rego',
    sub: 'Find the exact battery for your vehicle',
    href: '/quote',
    primary: true,
  },
  {
    label: 'Call Now',
    sub: '24/7 emergency battery help',
    href: 'tel:0000000000',
    phone: true,
  },
  {
    label: 'Get a Quote',
    sub: 'Delivery or installation across Perth',
    href: '/quote',
  },
]

export function Hero() {
  return (
    <section className="relative">

      {/* ── HERO PANEL ─────────────────────── */}
      <div className="relative h-[88vh] min-h-[580px] flex items-center overflow-hidden bg-zinc-900">

        {/* Video placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }} />
          <div className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(220,38,38,0.12) 0%, transparent 60%)',
            }} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />

        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-5">
              Maddington, Perth WA · Opening Soon
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white mb-6">
              Perth&apos;s Warehouse&#8209;Direct<br />
              <span className="text-zinc-400">Battery Supplier</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
              Enter your rego, match the right battery, and get Perth-wide delivery or installation — direct from our Maddington supply hub.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute right-0 bottom-0 hidden xl:block pointer-events-none select-none"
          aria-hidden
        >
          <span className="text-[240px] font-black text-zinc-800 leading-none">12V</span>
        </motion.div>
      </div>

      {/* ── 3-BLOCK CTA STRIP ──────────────── */}
      <div className="bg-white border-b border-zinc-200 shadow-sm">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
            {ctaBlocks.map((block, i) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <Link
                  href={block.href}
                  className={`group flex items-center justify-between gap-4 px-8 py-6 transition-colors duration-200 ${
                    block.primary
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-white hover:bg-zinc-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {block.phone && <Phone className="w-4 h-4 text-red-600 group-hover:text-red-700" />}
                      <p className={`font-bold text-base ${block.primary ? 'text-white' : 'text-zinc-900'}`}>
                        {block.label}
                      </p>
                    </div>
                    <p className={`text-sm ${block.primary ? 'text-red-100' : 'text-zinc-500'}`}>
                      {block.sub}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1 ${
                    block.primary ? 'text-white' : 'text-zinc-400'
                  }`} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
