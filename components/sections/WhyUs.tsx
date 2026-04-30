'use client'
import { Building2, Truck, Search, Wrench, Phone, Briefcase } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const points = [
  { icon: Building2, title: 'Warehouse-Direct Pricing', description: 'No retail markup — batteries priced straight from our Maddington supply hub.' },
  { icon: Truck, title: 'Perth-Wide Delivery', description: 'All suburbs, north to south. Fast dispatch from Maddington.' },
  { icon: Search, title: 'Matched to Your Vehicle', description: 'Rego lookup identifies the exact battery for your make, model, and engine.' },
  { icon: Wrench, title: 'Installation Available', description: 'At home, at work, or roadside — we fit the battery wherever your vehicle is.' },
  { icon: Phone, title: '24/7 Emergency Support', description: 'Battery died at the worst time? We respond around the clock.' },
  { icon: Briefcase, title: 'Trade Supply Available', description: 'Mechanics, workshops, fleets, and businesses — trade pricing and priority stock.' },
]

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-zinc-200" id="services">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        <AnimatedSection className="mb-12">
          <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-3">Why Battery Factory Direct</p>
          <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            Built Different.<br />Priced Direct.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-200">
          {points.map(({ icon: Icon, title, description }, i) => (
            <AnimatedSection key={title} delay={i * 0.07}
              className="group border-r border-b border-zinc-200 p-8 hover:bg-zinc-50 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg border border-zinc-200 group-hover:border-red-200 group-hover:bg-red-50 flex items-center justify-center mb-5 transition-all duration-300">
                <Icon className="w-5 h-5 text-zinc-400 group-hover:text-red-600 transition-colors duration-300" />
              </div>
              <h3 className="text-zinc-900 font-bold text-lg mb-2">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
