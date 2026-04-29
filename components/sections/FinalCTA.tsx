'use client'
import { motion } from 'framer-motion'
import { Phone, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-zinc-950">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(239,68,68,0.09) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Need a battery today?
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-50 leading-tight mb-6">
            Let&apos;s Find Your Battery.
            <br />
            <span className="text-zinc-400">Right now.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Enter your rego, call our team, or request a quote. Perth-wide delivery and installation available.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-base"
              >
                Enter Your Rego
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="tel:0000000000"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold py-4 px-8 rounded-lg transition-colors text-base border border-zinc-700"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 border border-zinc-600 hover:border-zinc-400 text-zinc-300 font-semibold py-4 px-8 rounded-lg transition-colors text-base"
              >
                Get Quote
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
