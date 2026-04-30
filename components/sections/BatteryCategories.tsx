'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { batteryCategories } from '@/data/categories'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

// ── FUTURE: Replace placeholder gradient divs with real product photography ──

const categoryBg: Record<string, string> = {
  car: 'bg-zinc-200',
  '4wd': 'bg-stone-200',
  truck: 'bg-zinc-300',
  marine: 'bg-slate-200',
  motorcycle: 'bg-neutral-200',
  agm: 'bg-zinc-200',
  lithium: 'bg-stone-300',
  'start-stop': 'bg-zinc-200',
  commercial: 'bg-neutral-300',
}

const badgeClass: Record<string, string> = {
  'Most Popular': 'bg-red-600 text-white',
  Premium: 'bg-zinc-900 text-white',
  Trade: 'bg-blue-700 text-white',
}

export function BatteryCategories() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-zinc-200">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-3">Battery Range</p>
            <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Whatever You Drive,<br />We Stock It
            </h2>
          </div>
          <Link href="/battery-range"
            className="flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors whitespace-nowrap border border-zinc-300 hover:border-zinc-500 px-4 py-2 rounded-lg">
            View Full Range <ChevronRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {batteryCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link href={`/battery-range#${cat.id}`}
                className={`group relative flex flex-col justify-end h-52 rounded-xl overflow-hidden border border-zinc-200 hover:border-red-300 hover:shadow-md transition-all duration-300 ${
                  categoryBg[cat.id] ?? 'bg-zinc-200'
                }`}
              >
                {/* Subtle bottom gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="relative p-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-bold text-lg leading-snug drop-shadow">{cat.name}</h3>
                    {cat.badge && (
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${
                        badgeClass[cat.badge] ?? 'bg-zinc-700 text-white'
                      }`}>
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-300 text-xs leading-snug mb-3 drop-shadow">
                    {cat.applications.slice(0, 3).join(' · ')}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-red-400 group-hover:text-red-300 transition-colors">
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
