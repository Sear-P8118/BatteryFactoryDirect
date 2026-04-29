import type { Metadata } from 'next'
import { Phone, Clock, MapPin } from 'lucide-react'
import { QuoteForm } from '@/components/quote/QuoteForm'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Get a Battery Quote | Battery Factory Direct Perth',
  description:
    'Request a battery quote from Battery Factory Direct. Enter your rego, vehicle details, and suburb for a fast Perth battery quote with delivery and installation options.',
}

const sideItems = [
  {
    icon: Phone,
    label: 'Prefer to call?',
    sub: '0000 000 000 — available 24/7 for emergencies',
    href: 'tel:0000000000',
  },
  {
    icon: Clock,
    label: 'Fast response',
    sub: 'We reply to all quotes within a few hours',
  },
  {
    icon: MapPin,
    label: 'Maddington, Perth WA',
    sub: 'Walk-in warehouse opening soon',
  },
]

const tradeTypes = ['Mechanics', 'Workshops', 'Fleets', 'Dealerships', 'Tradies', 'Businesses']

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left info panel */}
            <AnimatedSection direction="left">
              <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-4">
                Get a Quote
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-zinc-50 leading-tight mb-5">
                Let&apos;s Find Your Battery.
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Fill in your details and we&apos;ll get back to you with the right battery, price, and delivery or installation options for your vehicle.
              </p>

              <div className="space-y-5 mb-10">
                {sideItems.map(({ icon: Icon, label, sub, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      {href ? (
                        <a
                          href={href}
                          className="text-zinc-100 font-semibold text-sm hover:text-red-400 transition-colors"
                        >
                          {label}
                        </a>
                      ) : (
                        <p className="text-zinc-100 font-semibold text-sm">{label}</p>
                      )}
                      <p className="text-zinc-500 text-xs mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
                  We also supply
                </p>
                <div className="flex flex-wrap gap-2">
                  {tradeTypes.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right form */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
                <QuoteForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
