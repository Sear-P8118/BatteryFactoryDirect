'use client'
import { Link2, MapPin } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const brands = [
  {
    name: 'Car Battery Perth',
    description:
      'Mobile battery delivery and roadside battery service across Perth metro and suburbs.',
    area: 'Perth Metro',
  },
  {
    name: 'Fremantle Batteries',
    description:
      'Local battery supply and service supporting the Fremantle and southern coastal communities.',
    area: 'Fremantle & South Perth',
  },
]

export function NetworkSection() {
  return (
    <section className="py-20 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Perth Battery Network"
            title="Connected Across Perth"
            subtitle="Battery Factory Direct operates as part of a growing Perth battery network, extending mobile delivery, local service, and direct battery supply across the city."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mb-8">
          {brands.map((brand, i) => (
            <AnimatedSection key={brand.name} delay={i * 0.1}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Link2 className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-zinc-100 font-bold text-lg">{brand.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3 h-3 text-zinc-600" />
                      <span className="text-xs text-zinc-500">{brand.area}</span>
                    </div>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{brand.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5">
            <p className="text-zinc-500 text-sm leading-relaxed">
              <span className="text-zinc-300 font-medium">Network note: </span>
              Battery Factory Direct, Car Battery Perth, and Fremantle Batteries operate as connected brands supporting Perth-wide battery supply and mobile service. Each brand focuses on a specific delivery and service area within the broader Perth network.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
