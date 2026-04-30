'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { batteryCategories } from '@/data/categories'

// ── FUTURE: Replace static categories with CMS/inventory data ──

const badgeClass: Record<string, string> = {
  'Most Popular': 'bg-red-600 text-white',
  Premium: 'bg-zinc-900 text-white',
  Trade: 'bg-blue-700 text-white',
}

export function CategoryGrid() {
  return (
    <section className="py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {batteryCategories.map((cat) => (
          <motion.div key={cat.id} id={cat.id}
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
            <motion.div
              whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
              className="bg-white border border-zinc-200 rounded-xl p-6 h-full flex flex-col transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-zinc-900 font-bold text-xl leading-tight pr-3">{cat.name}</h3>
                {cat.badge && (
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${badgeClass[cat.badge] ?? 'bg-zinc-200 text-zinc-700'}`}>
                    {cat.badge}
                  </span>
                )}
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1">{cat.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cat.applications.map((app) => (
                  <span key={app} className="text-xs bg-zinc-100 border border-zinc-200 text-zinc-500 px-2 py-0.5 rounded">{app}</span>
                ))}
              </div>
              <Link href="/quote" className="flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">
                Get a Quote <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Future product listings placeholder */}
      <div className="mt-12 border border-zinc-200 border-dashed rounded-xl p-8 text-center bg-zinc-50">
        <p className="text-zinc-500 text-sm font-semibold mb-2">Full Product Listing Coming Soon</p>
        <p className="text-zinc-400 text-xs max-w-md mx-auto leading-relaxed">
          Individual product pages with specs, compatibility, and real-time stock will be live when the inventory system is integrated. Enter your rego for an immediate match.
        </p>
      </div>
    </section>
  )
}
