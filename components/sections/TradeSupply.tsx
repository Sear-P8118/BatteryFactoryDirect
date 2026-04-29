'use client'
import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2, ChevronRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const features = [
  'Business and trade pricing on all battery lines',
  'Priority stock access for workshop needs',
  'Fast dispatch and Perth-wide delivery',
  'Account-based ordering for regular clients',
  'Suitable for mechanics, workshops, and dealerships',
  'Fleet battery supply at scale',
  'Technical support and battery specification guidance',
]

const tradeTypes = [
  'Mechanics & Auto Workshops',
  'Car Dealerships',
  'Fleet Operators',
  'Transport Companies',
  'Tradie Businesses',
]

export function TradeSupply() {
  return (
    <section className="py-20 md:py-28 bg-[#111111]" id="trade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Trade Supply"
              title="For Mechanics, Workshops & Fleets"
              subtitle="Battery Factory Direct operates a dedicated trade supply program for automotive professionals and businesses across Perth."
            />
            <ul className="space-y-3 mb-8">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  {feat}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="/quote"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm"
              >
                Apply for Trade Supply
                <ChevronRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/quote"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-semibold py-3 px-6 rounded-lg transition-colors text-sm"
              >
                Request Business Pricing
              </motion.a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-zinc-100 font-bold text-lg">Trade Account</p>
                  <p className="text-zinc-500 text-sm">For qualified Perth businesses</p>
                </div>
              </div>
              <div className="space-y-0 mb-6">
                {tradeTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center justify-between py-3.5 border-b border-zinc-800"
                  >
                    <span className="text-zinc-300 text-sm font-medium">{type}</span>
                    <span className="text-xs text-zinc-500 bg-zinc-800 px-2.5 py-0.5 rounded-full">
                      Eligible
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Trade supply is available for verified businesses across Perth and surrounds. Contact us to discuss your requirements and set up a trade account.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
