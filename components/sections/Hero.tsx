'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Truck, Clock, Building2, Wrench, Briefcase } from 'lucide-react'

const trustBadges = [
  { icon: Truck, label: 'Perth-Wide Delivery' },
  { icon: Clock, label: '24/7 Emergency' },
  { icon: Building2, label: 'Walk-in Warehouse' },
  { icon: Wrench, label: 'Installation Available' },
  { icon: Briefcase, label: 'Trade Supply' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(239,68,68,0.13) 0%, transparent 65%)',
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p variants={item} className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-6">
            Maddington, Perth WA · Opening Soon
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.92] text-zinc-50 mb-6"
          >
            Perth&apos;s
            <br />
            <span className="text-zinc-300">Warehouse-Direct</span>
            <br />
            Battery Supplier
          </motion.h1>

          {/* Sub */}
          <motion.p variants={item} className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
            Enter your rego, match the right battery, and get Perth-wide delivery or installation — direct from our Maddington supply hub.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-14">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-base"
            >
              Enter Your Rego
            </Link>
            <a
              href="tel:0000000000"
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold py-4 px-8 rounded-lg transition-colors text-base border border-zinc-700"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-semibold py-4 px-8 rounded-lg transition-colors text-base"
            >
              Get Battery Quote
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={item} className="flex flex-wrap gap-x-7 gap-y-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-zinc-500">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 2 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex items-center pointer-events-none select-none"
          aria-hidden
        >
          <span className="text-[220px] font-black text-zinc-900 leading-none">12V</span>
        </motion.div>
      </div>
    </section>
  )
}
