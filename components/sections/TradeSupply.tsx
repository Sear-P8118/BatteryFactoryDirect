'use client'
import Link from 'next/link'
import { ChevronRight, CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const features = [
  'Business and trade pricing on all battery lines',
  'Priority stock access for workshop needs',
  'Fast dispatch and Perth-wide delivery',
  'Account-based ordering for regular clients',
  'Technical support and battery specification guidance',
]

const types = ['Mechanics & Workshops', 'Car Dealerships', 'Fleet Operators', 'Transport Companies', 'Tradie Businesses']

export function TradeSupply() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-950 border-t border-zinc-800/50" id="trade">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <AnimatedSection direction="left">
            <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-4">Trade Supply</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              For Mechanics,<br />Workshops & Fleets
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-7">
              Battery Factory Direct runs a dedicated trade supply program for automotive professionals and businesses across Perth.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/quote"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm">
                Apply for Trade Supply <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/quote"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-semibold py-3 px-6 rounded-lg transition-colors text-sm">
                Request Business Pricing
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-900 px-6 py-5 border-b border-zinc-800">
                <p className="text-white font-bold">Trade Account — Who&apos;s Eligible</p>
              </div>
              <div className="divide-y divide-zinc-800">
                {types.map((t) => (
                  <div key={t} className="flex items-center justify-between px-6 py-4 bg-zinc-950 hover:bg-zinc-900/50 transition-colors">
                    <span className="text-zinc-300 text-sm font-medium">{t}</span>
                    <span className="text-xs text-green-400 bg-green-400/10 px-2.5 py-0.5 rounded-full font-semibold">Eligible</span>
                  </div>
                ))}
              </div>
              <div className="bg-zinc-900 px-6 py-4 border-t border-zinc-800">
                <p className="text-zinc-600 text-xs">Contact us to set up a trade account and discuss your requirements.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
