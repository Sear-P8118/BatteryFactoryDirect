'use client'
import { Shield, Clock, MapPin, Package, Camera, FileText } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const promises = [
  { icon: Shield, title: 'Genuine batteries only', sub: 'No grey-market or counterfeit stock' },
  { icon: Package, title: 'Warehouse-direct supply', sub: 'From our Maddington facility' },
  { icon: Clock, title: '24/7 emergency support', sub: 'Around-the-clock battery help' },
  { icon: MapPin, title: 'Perth-wide coverage', sub: 'All suburbs, north to south' },
]

export function TrustSection() {
  return (
    <section className="py-20 md:py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Commitment"
            title="A New Standard for Perth Battery Supply"
            subtitle="Battery Factory Direct is a new Maddington-based operation. We're launching with a clear promise — transparent pricing, genuine stock, and real service."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {promises.map(({ icon: Icon, title, sub }, i) => (
            <AnimatedSection key={title} delay={i * 0.08}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                <div className="w-9 h-9 rounded bg-zinc-800 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-red-500" />
                </div>
                <p className="text-zinc-100 font-semibold text-sm mb-1">{title}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{sub}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Honest placeholder cards for content coming soon */}
        <AnimatedSection delay={0.15}>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-zinc-900 border border-zinc-800 border-dashed rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-zinc-600" />
              </div>
              <div>
                <p className="text-zinc-400 font-semibold text-sm">Warehouse photos coming soon</p>
                <p className="text-zinc-600 text-xs mt-1 leading-relaxed">
                  Real install and facility imagery once our Maddington location opens
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 border-dashed rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-zinc-600" />
              </div>
              <div>
                <p className="text-zinc-400 font-semibold text-sm">Customer reviews loading soon</p>
                <p className="text-zinc-600 text-xs mt-1 leading-relaxed">
                  Opening soon in Maddington — verified reviews will appear post-launch
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
