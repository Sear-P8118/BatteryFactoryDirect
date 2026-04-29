'use client'
import { motion } from 'framer-motion'
import { Building2, Truck, Search, Wrench, Phone, Briefcase } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const points = [
  {
    icon: Building2,
    title: 'Warehouse-Direct Pricing',
    description:
      'No retail markup. Batteries priced direct from our Maddington supply hub — so you pay less without compromising on quality.',
  },
  {
    icon: Truck,
    title: 'Perth-Wide Delivery',
    description:
      'Fast delivery to all Perth suburbs, north and south. We dispatch from Maddington and get your battery to you when you need it.',
  },
  {
    icon: Search,
    title: 'Matched to Your Vehicle',
    description:
      'Enter your rego and we identify the exact battery for your make, model, and engine. No guessing. No wrong batteries.',
  },
  {
    icon: Wrench,
    title: 'Installation Available',
    description:
      "We'll fit the battery for you — at home, at work, or roadside. Perth-wide installation available on request.",
  },
  {
    icon: Phone,
    title: '24/7 Emergency Support',
    description:
      'Battery died at the worst time? We offer emergency battery help around the clock, across all Perth suburbs.',
  },
  {
    icon: Briefcase,
    title: 'Trade Supply Available',
    description:
      'Mechanics, workshops, fleets, and businesses can access trade pricing, priority stock, and fast dispatch through our trade program.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Why Battery Factory Direct"
            title="Built Different. Priced Direct."
            subtitle="We're not a panel shop with a battery on the shelf. We're a warehouse-direct supplier built to give Perth drivers faster, cheaper, better battery service."
          />
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {points.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: 'rgba(239,68,68,0.28)' }}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-800 group-hover:bg-red-600/10 flex items-center justify-center mb-4 transition-colors duration-300">
                <Icon className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors duration-300" />
              </div>
              <h3 className="text-zinc-100 font-bold text-lg mb-2">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
