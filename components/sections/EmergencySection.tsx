'use client'
import { motion } from 'framer-motion'
import { Phone, Clock, MapPin, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const features = [
  {
    icon: Clock,
    label: 'Available 24/7',
    sub: 'Including weekends and public holidays across Perth',
  },
  {
    icon: MapPin,
    label: 'All Perth Suburbs',
    sub: 'North, south, east, metro, and surrounding areas',
  },
  {
    icon: Zap,
    label: 'Fast Response',
    sub: 'Emergency battery dispatched as fast as possible',
  },
  {
    icon: Phone,
    label: 'Call or Book Online',
    sub: 'Phone or quote form available around the clock',
  },
]

export function EmergencySection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0a0a0a]" id="emergency">
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/25 via-transparent to-transparent pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-4">
              24/7 Emergency Service
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-50 leading-tight mb-6">
              Battery Died?
              <br />
              <span className="text-zinc-400">We&apos;ll Fix It Fast.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Stranded with a flat battery anywhere in Perth? We offer 24/7 emergency battery replacement — including mobile delivery and installation. Call us and we&apos;ll get you moving.
            </p>
            <motion.a
              href="tel:0000000000"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now: 0000 000 000
            </motion.a>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                  <div className="w-8 h-8 rounded bg-red-600/15 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-zinc-100 font-semibold text-sm mb-1">{label}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
