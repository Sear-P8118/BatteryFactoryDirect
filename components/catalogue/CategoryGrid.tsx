'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { batteryCategories } from '@/data/categories'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const badgeClass: Record<string, string> = {
  'Most Popular': 'bg-red-600/20 text-red-400',
  Premium: 'bg-zinc-700 text-zinc-300',
  Trade: 'bg-blue-600/20 text-blue-400',
}

export function CategoryGrid() {
  return (
    // ── FUTURE: Replace static categories with real-time inventory data ──
    // Connect to a CMS (Sanity, Contentful) or inventory database.
    // Each category card should link to /battery-range/[category] with real product listings.
    <section className="py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {batteryCategories.map((cat) => (
          <motion.div key={cat.id} id={cat.id} variants={cardVariants}>
            <motion.div
              whileHover={{ y: -3, borderColor: 'rgba(239,68,68,0.3)' }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-full flex flex-col transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-zinc-100 font-bold text-xl leading-tight pr-3">{cat.name}</h3>
                {cat.badge && (
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                      badgeClass[cat.badge] ?? 'bg-zinc-700 text-zinc-300'
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{cat.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cat.applications.map((app) => (
                  <span key={app} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                    {app}
                  </span>
                ))}
              </div>
              <Link
                href="/quote"
                className="flex items-center gap-1.5 text-sm font-semibold text-red-500 hover:text-red-400 transition-colors"
              >
                Get a Quote
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Placeholder for future product listings */}
      <div className="mt-14 border border-zinc-800 border-dashed rounded-xl p-8 text-center">
        <p className="text-zinc-500 text-sm font-semibold mb-2">Full Product Listing Coming Soon</p>
        <p className="text-zinc-600 text-xs max-w-md mx-auto leading-relaxed">
          Individual product pages with specs, compatibility, and real-time stock will be live when the inventory system is integrated. Enter your rego above for an immediate match.
        </p>
      </div>
    </section>
  )
}
