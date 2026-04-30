'use client'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const stats = [
  { value: '9', label: 'Battery Categories' },
  { value: 'Perth-Wide', label: 'Delivery Coverage' },
  { value: '24/7', label: 'Emergency Support' },
  { value: 'Direct', label: 'Warehouse Pricing' },
]

export function WhoWeAre() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-950">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <AnimatedSection direction="left">
            <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              A New Kind of Battery Business for Perth
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-4">
              Battery Factory Direct is a Maddington-based warehouse supply hub — built to give Perth drivers and businesses the right battery, at a direct price, delivered fast.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed">
              We supply everything from everyday car batteries to AGM, lithium, marine, truck, and commercial batteries. Our rego-matching tool identifies the exact battery for your vehicle before anything ships.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-px bg-zinc-800 rounded-lg overflow-hidden">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-zinc-900 px-8 py-8">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-black text-white mb-1"
                  >
                    {value}
                  </motion.p>
                  <p className="text-zinc-500 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
