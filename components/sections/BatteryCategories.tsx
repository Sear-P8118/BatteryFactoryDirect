'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { batteryCategories } from '@/data/categories'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

// ── FUTURE: Replace placeholder bg divs with real product/category photography ──

const categoryColors: Record<string, string> = {
  car: 'from-zinc-800 to-zinc-900',
  '4wd': 'from-stone-800 to-zinc-900',
  truck: 'from-zinc-700 to-zinc-900',
  marine: 'from-slate-800 to-zinc-900',
  motorcycle: 'from-zinc-800 to-neutral-900',
  agm: 'from-red-950 to-zinc-900',
  lithium: 'from-zinc-800 to-zinc-950',
  'start-stop': 'from-neutral-800 to-zinc-900',
  commercial: 'from-zinc-800 to-zinc-900',
}

const badgeClass: Record<string, string> = {
  'Most Popular': 'bg-red-600 text-white',
  Premium: 'bg-white/10 text-white',
  Trade: 'bg-blue-600/80 text-white',
}

export function BatteryCategories() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-3">Battery Range</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Whatever You Drive,<br />We Stock It
            </h2>
          </div>
          <Link href="/battery-range"
            className="flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
            View Full Range <ChevronRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        {/* Primary grid — 3 large + 6 smaller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {batteryCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Link href={`/battery-range#${cat.id}`}
                className={`group relative flex flex-col justify-end h-52 rounded-lg overflow-hidden bg-gradient-to-br ${
                  categoryColors[cat.id] ?? 'from-zinc-800 to-zinc-900'
                } border border-zinc-800 hover:border-zinc-600 transition-all duration-300`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-300" />

                {/* Bottom content */}
                <div className="relative p-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-bold text-lg leading-snug">{cat.name}</h3>
                    {cat.badge && (
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${
                        badgeClass[cat.badge] ?? 'bg-zinc-700 text-zinc-300'
                      }`}>
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400 text-xs leading-snug mb-3 line-clamp-1">
                    {cat.applications.slice(0, 3).join(' · ')}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-400 group-hover:text-red-300 transition-colors">
                    View Range <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
