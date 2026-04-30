'use client'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function EmergencySection() {
  return (
    <section className="bg-red-600" id="emergency">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <AnimatedSection direction="left">
            <p className="text-red-200 text-xs font-semibold tracking-widest uppercase mb-3">
              24/7 Emergency Service
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Battery Died?<br />We&apos;ll Fix It Fast.
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1} className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <div>
              <p className="text-red-200 text-sm mb-1">Stranded anywhere in Perth?</p>
              <p className="text-white text-base font-semibold max-w-xs">
                Emergency battery replacement across all Perth suburbs, any time of day or night.
              </p>
            </div>
            <motion.a href="tel:0000000000"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-white text-red-600 font-black py-4 px-8 rounded-lg whitespace-nowrap text-base self-start sm:self-center">
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
