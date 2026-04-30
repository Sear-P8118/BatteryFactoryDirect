import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Filter } from 'lucide-react'
import { CategoryGrid } from '@/components/catalogue/CategoryGrid'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { RegoFinder } from '@/components/sections/RegoFinder'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Battery Range | Battery Factory Direct Perth',
  description: 'Browse our full range of car, 4WD, truck, marine, AGM, and lithium batteries. Perth battery supplier — warehouse-direct pricing from our Maddington supply hub.',
}

const filterLabels = ['All', 'Car', '4WD', 'Truck', 'Marine', 'AGM', 'Lithium']

export default function BatteryRangePage() {
  return (
    <main className="min-h-screen bg-zinc-100">
      {/* Page hero */}
      <section className="bg-zinc-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-4">Maddington, Perth WA</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5">Battery Range</h1>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
              From everyday passenger cars to heavy trucks, marine craft, and specialist applications — we stock or can source the right battery for virtually every vehicle in Perth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/quote" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm">
                Enter Your Rego <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/quote" className="inline-flex items-center gap-2 border border-zinc-600 hover:border-zinc-400 text-zinc-300 font-semibold py-3 px-6 rounded-lg transition-colors text-sm">
                Get Battery Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter bar */}
      <div className="border-b border-zinc-200 bg-white sticky top-16 z-30">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-3">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-4 h-4 text-zinc-400 flex-shrink-0" />
            <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mr-1">Filter:</span>
            {filterLabels.map((f) => (
              <button key={f} className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                f === 'All'
                  ? 'border-red-600 text-red-600 bg-red-50'
                  : 'border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700'
              }`}>{f}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <CategoryGrid />
        </div>
      </div>

      <RegoFinder />
      <FinalCTA />
    </main>
  )
}
