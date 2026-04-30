'use client'
import { Shield, Package, Clock, MapPin, Camera, FileText } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const promises = [
  { icon: Shield, title: 'Genuine stock only', sub: 'No grey-market or counterfeit batteries' },
  { icon: Package, title: 'Warehouse-direct', sub: 'Supply from our Maddington facility' },
  { icon: Clock, title: '24/7 emergency', sub: 'Around-the-clock battery help' },
  { icon: MapPin, title: 'Perth-wide coverage', sub: 'All suburbs, north to south' },
]

export function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0f0f0f] border-t border-zinc-800/50">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <AnimatedSection className="mb-12">
          <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-3">Our Commitment</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-xl">
            A New Standard for Perth Battery Supply
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/40 rounded-xl overflow-hidden mb-6">
          {promises.map(({ icon: Icon, title, sub }, i) => (
            <AnimatedSection key={title} delay={i * 0.07}
              className="bg-zinc-900 px-7 py-8">
              <Icon className="w-5 h-5 text-red-500 mb-4" />
              <p className="text-white font-semibold text-sm mb-1">{title}</p>
              <p className="text-zinc-500 text-xs leading-relaxed">{sub}</p>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: Camera, title: 'Warehouse photos coming soon', sub: 'Real install and facility imagery once our Maddington location opens' },
            { icon: FileText, title: 'Customer reviews loading soon', sub: 'Opening soon in Maddington — verified reviews will appear post-launch' },
          ].map(({ icon: Icon, title, sub }) => (
            <AnimatedSection key={title}>
              <div className="border border-zinc-800 border-dashed rounded-xl p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-zinc-700" />
                </div>
                <div>
                  <p className="text-zinc-400 font-semibold text-sm">{title}</p>
                  <p className="text-zinc-600 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
