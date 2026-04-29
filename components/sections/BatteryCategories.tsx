'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { batteryCategories } from '@/data/categories'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

const badgeClass: Record<string, string> = {
  'Most Popular': 'bg-red-600/20 text-red-400',
  Premium: 'bg-zinc-700 text-zinc-300',
  Trade: 'bg-blue-600/20 text-blue-400',
}

export function BatteryCategories() {
  return (
    <section className="py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Battery Range"
            title="Whatever You Drive, We Stock It"
            subtitle="From everyday passenger vehicles to heavy commercial trucks and marine craft — Battery Factory Direct supplies the right battery for every application."
          />
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {batteryCategories.map((cat) => (
            <motion.div key={cat.id} variants={cardVariants}>
              <Link
                href={`/battery-range#${cat.id}`}
                className="group relative block bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 transition-all duration-300 hover:bg-zinc-800/50 h-full"
              >
                {cat.badge && (
                  <span
                    className={`absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full ${
                      badgeClass[cat.badge] ?? 'bg-zinc-700 text-zinc-300'
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
                <h3 className="text-zinc-100 font-bold text-lg mb-2 group-hover:text-white transition-colors pr-16">
                  {cat.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cat.applications.slice(0, 3).map((app) => (
                    <span key={app} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                      {app}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-red-500 group-hover:gap-2 transition-all">
                  View Range
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/battery-range"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 font-semibold transition-colors border border-zinc-700 hover:border-zinc-500 px-6 py-3 rounded-lg text-sm"
            >
              View Full Battery Range
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
