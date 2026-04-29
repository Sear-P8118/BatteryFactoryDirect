import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Battery Factory Direct | Maddington Perth',
  description:
    'Contact Battery Factory Direct in Maddington, Perth. Get a battery quote, call for emergency battery replacement, or email our team.',
}

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '0000 000 000', href: 'tel:0000000000' },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@batteryfactorydirect.com.au',
    href: 'mailto:info@batteryfactorydirect.com.au',
  },
  { icon: MapPin, label: 'Address', value: 'Maddington, WA 6109', href: undefined },
  { icon: Clock, label: 'Hours', value: 'Opening Soon · 24/7 Emergency', href: undefined },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection>
            <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-zinc-50 leading-tight mb-5">
              Contact Us
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-14">
              Have a question or need a battery fast? Reach out by phone, email, or the form below.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left info */}
            <div className="space-y-6">
              <AnimatedSection direction="left">
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <div
                      key={label}
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                    >
                      <div className="w-8 h-8 rounded bg-red-600/10 flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4 text-red-500" />
                      </div>
                      <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-zinc-200 text-sm font-semibold hover:text-red-400 transition-colors leading-snug"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-zinc-200 text-sm font-semibold leading-snug">{value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Map placeholder */}
              <AnimatedSection direction="left" delay={0.1}>
                <div className="bg-zinc-900 border border-zinc-800 border-dashed rounded-xl overflow-hidden">
                  <div className="h-56 flex items-center justify-center">
                    <div className="text-center px-6">
                      <MapPin className="w-8 h-8 text-zinc-700 mx-auto mb-3" />
                      <p className="text-zinc-500 font-semibold text-sm mb-1">
                        Maddington, WA 6109
                      </p>
                      <p className="text-zinc-700 text-xs">
                        Map embed will go here once address is confirmed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Emergency strip */}
              <AnimatedSection direction="left" delay={0.15}>
                <div className="relative overflow-hidden bg-zinc-900 border border-red-500/20 rounded-xl p-6">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 rounded-l-xl" />
                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-red-500" />
                      <p className="text-red-500 text-xs font-semibold uppercase tracking-widest">
                        24/7 Emergency Battery Help
                      </p>
                    </div>
                    <p className="text-zinc-300 font-bold text-lg mb-1">Battery died right now?</p>
                    <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
                      Call us immediately — we offer emergency battery replacement across Perth any
                      time of day or night.
                    </p>
                    <a
                      href="tel:0000000000"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-lg transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now: 0000 000 000
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right form */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-zinc-100 mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
