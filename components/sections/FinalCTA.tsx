'use client'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function FinalCTA() {
  return (
    <section className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
          <AnimatedSection className="px-10 py-12">
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold mb-2">Battery Matching</p>
            <h3 className="text-white font-black text-2xl mb-4 leading-tight">Enter Your Rego</h3>
            <p className="text-zinc-500 text-sm mb-6">Find the exact battery for your vehicle in seconds.</p>
            <Link href="/quote"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-lg transition-colors text-sm">
              Get Started <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.07} className="px-10 py-12">
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold mb-2">Emergency Help</p>
            <h3 className="text-white font-black text-2xl mb-4 leading-tight">Battery Died Now?</h3>
            <p className="text-zinc-500 text-sm mb-6">24/7 emergency battery replacement across all Perth suburbs.</p>
            <a href="tel:0000000000"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-bold py-3 px-5 rounded-lg transition-colors text-sm">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.14} className="px-10 py-12">
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold mb-2">Trade Customers</p>
            <h3 className="text-white font-black text-2xl mb-4 leading-tight">Apply for Trade Supply</h3>
            <p className="text-zinc-500 text-sm mb-6">Mechanics, fleets, and businesses — apply for trade pricing.</p>
            <Link href="/quote"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-bold py-3 px-5 rounded-lg transition-colors text-sm">
              Apply Now <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
