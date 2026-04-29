import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Truck, Wrench, Users, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { NetworkSection } from '@/components/sections/NetworkSection'

export const metadata: Metadata = {
  title: 'About Battery Factory Direct | Maddington Perth Battery Supplier',
  description:
    'Battery Factory Direct is a warehouse-direct battery supply hub in Maddington, Perth. Fast, affordable, properly matched batteries for Perth drivers and businesses.',
}

const pillars = [
  {
    icon: Building2,
    title: 'Warehouse-Direct',
    sub: 'Supply straight from our Maddington hub — no retail markup',
  },
  {
    icon: Truck,
    title: 'Perth-Wide Delivery',
    sub: 'Fast delivery to all suburbs, north and south',
  },
  {
    icon: Wrench,
    title: 'Installation Available',
    sub: 'We fit the battery wherever your vehicle is',
  },
  {
    icon: Users,
    title: 'For Everyone',
    sub: 'Everyday drivers, mechanics, fleets, and tradies',
  },
]

const values = [
  {
    title: 'Right Battery, First Time',
    sub: 'Rego-matching means we identify the correct battery for your exact vehicle spec before anything ships.',
  },
  {
    title: 'Transparent Pricing',
    sub: "Warehouse-direct pricing means the price you see is what you pay — no hidden delivery add-ons or installation surprises.",
  },
  {
    title: 'Fast Response',
    sub: "Emergency enquiries get treated like emergencies. Quote requests get answered fast, not in two business days.",
  },
  {
    title: 'Genuine Stock Only',
    sub: 'We supply from reputable battery manufacturers. No grey-market, no counterfeit, no cut-price surprises.',
  },
  {
    title: 'Practical Support',
    sub: "Not sure what you need? Our team knows batteries inside out and can guide you to the right option for your vehicle.",
  },
  {
    title: 'Built for Perth',
    sub: "Perth-specific operation. Our delivery zones, pricing, and service model are built for the Perth market, not a national call centre.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(239,68,68,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-zinc-50 leading-tight mb-5">
              Perth&apos;s Direct Battery
              <br />
              <span className="text-zinc-400">Supply Hub</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              Battery Factory Direct is a Maddington-based warehouse supply hub built to give Perth
              drivers and businesses fast, affordable, properly matched batteries — without the
              retail markup.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeader
                eyebrow="Our Approach"
                title="Warehouse Direct. Battery Matched. Perth-Wide."
              />
              <div className="space-y-5 text-zinc-400 text-base leading-relaxed">
                <p>
                  Battery Factory Direct was built around a simple idea: Perth drivers
                  shouldn&apos;t have to guess which battery they need, overpay at a retail store,
                  or wait days for a delivery that should take hours.
                </p>
                <p>
                  Operating from Maddington in Perth&apos;s south-east, we supply batteries
                  directly from our warehouse — cutting out the middleman and making genuine savings
                  available to everyday drivers and trade customers alike.
                </p>
                <p>
                  Our rego-matching tool means customers get the exact battery specification for
                  their vehicle — no guessing, no wrong batteries, no returns.
                </p>
                <p>
                  Whether you&apos;re a daily driver, a mechanic workshop, a fleet operator, or
                  someone stranded at 11pm — Battery Factory Direct is built to respond fast and
                  get you the right battery.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {pillars.map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                    <Icon className="w-6 h-6 text-red-500 mb-3" />
                    <p className="text-zinc-100 font-bold text-sm mb-1.5">{title}</p>
                    <p className="text-zinc-500 text-xs leading-relaxed">{sub}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Principles"
              title="How We Operate"
              subtitle="The commitments we hold ourselves to at Battery Factory Direct."
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.07}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-full">
                  <div className="w-2 h-8 bg-red-600 rounded-full mb-4" />
                  <h3 className="text-zinc-100 font-bold text-lg mb-2">{val.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{val.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <NetworkSection />

      {/* CTA strip */}
      <section className="py-16 bg-[#0f0f0f] border-y border-zinc-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-zinc-50 mb-4">Ready to find your battery?</h2>
            <p className="text-zinc-400 mb-7">Enter your rego, request a quote, or call us directly.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm"
              >
                Enter Your Rego
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0000000000"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-semibold py-3 px-6 rounded-lg transition-colors text-sm"
              >
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
