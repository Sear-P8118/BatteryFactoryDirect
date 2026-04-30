'use client'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const brands = [
  { name: 'Car Battery Perth', area: 'Perth Metro', desc: 'Mobile battery delivery and roadside service across Perth metro.' },
  { name: 'Fremantle Batteries', area: 'Fremantle & South Perth', desc: 'Local battery supply and service for the Fremantle community.' },
]

export function NetworkSection() {
  return (
    <section className="py-16 bg-zinc-900 border-t border-zinc-800/50">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <div className="flex-shrink-0">
            <p className="text-zinc-600 text-xs font-semibold uppercase tracking-widest mb-2">Perth Battery Network</p>
            <h3 className="text-2xl font-black text-white">Connected Across Perth</h3>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
            Battery Factory Direct operates as part of a growing Perth battery network, supporting mobile delivery, local service, and direct battery supply through connected brands including{' '}
            <span className="text-zinc-300 font-medium">Car Battery Perth</span> and{' '}
            <span className="text-zinc-300 font-medium">Fremantle Batteries</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 lg:ml-auto">
            {brands.map((b) => (
              <div key={b.name} className="border border-zinc-800 rounded-lg px-5 py-4 min-w-[180px]">
                <p className="text-white font-bold text-sm mb-0.5">{b.name}</p>
                <p className="text-zinc-600 text-xs">{b.area}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
