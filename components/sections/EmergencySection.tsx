'use client'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function EmergencySection() {
  return (
    <section className="bg-zinc-900" id="emergency">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

          <AnimatedSection direction="left">
            <p className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-3">24/7 Emergency Service</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Battery Died?<br />We&apos;ll Fix It Fast.
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center flex-shrink-0">
            <div>
              <p className="text-zinc-400 text-sm mb-1">Stranded anywhere in Perth?</p>
              <p className="text-white text-base font-semibold max-w-xs">
                Emergency battery replacement across all Perth suburbs, any time, day or night.
              </p>
            </div>
            <motion.a href="tel:0000000000"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 rounded-lg whitespace-nowrap text-base transition-colors">
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
