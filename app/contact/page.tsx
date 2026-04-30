import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Battery Factory Direct | Maddington Perth',
  description: 'Contact Battery Factory Direct in Maddington, Perth. Get a battery quote, call for emergency battery replacement, or email our team.',
}

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '0000 000 000', href: 'tel:0000000000' },
  { icon: Mail, label: 'Email', value: 'info@batteryfactorydirect.com.au', href: 'mailto:info@batteryfactorydirect.com.au' },
  { icon: MapPin, label: 'Address', value: 'Maddington, WA 6109', href: undefined },
  { icon: Clock, label: 'Hours', value: 'Opening Soon · 24/7 Emergency', href: undefined },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-100">
      {/* Dark hero */}
      <section className="bg-zinc-900 pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5 tracking-tight">Contact Us</h1>
            <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
              Have a question or need a battery fast? Reach out by phone, email, or the form below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div className="space-y-6">
              <AnimatedSection direction="left">
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
                      <div className="w-8 h-8 rounded bg-red-50 border border-red-100 flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-zinc-400 text-xs uppercase tracking-widest font-semibold mb-1">{label}</p>
                      {href
                        ? <a href={href} className="text-zinc-900 text-sm font-semibold hover:text-red-600 transition-colors leading-snug">{value}</a>
                        : <p className="text-zinc-900 text-sm font-semibold leading-snug">{value}</p>}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Map placeholder */}
              <AnimatedSection direction="left" delay={0.1}>
                <div className="bg-zinc-200 border border-zinc-300 border-dashed rounded-xl overflow-hidden">
                  <div className="h-52 flex items-center justify-center">
                    <div className="text-center px-6">
                      <MapPin className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
                      <p className="text-zinc-600 font-semibold text-sm mb-1">Maddington, WA 6109</p>
                      <p className="text-zinc-400 text-xs">Map embed will go here once address is confirmed</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Emergency */}
              <AnimatedSection direction="left" delay={0.15}>
                <div className="relative overflow-hidden bg-zinc-900 rounded-xl p-6">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 rounded-l-xl" />
                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-red-500" />
                      <p className="text-red-400 text-xs font-semibold uppercase tracking-widest">24/7 Emergency Battery Help</p>
                    </div>
                    <p className="text-white font-bold text-lg mb-1">Battery died right now?</p>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">Call us immediately — emergency battery replacement across Perth, any time.</p>
                    <a href="tel:0000000000"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-lg transition-colors text-sm">
                      <Phone className="w-4 h-4" /> Call Now: 0000 000 000
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right form */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-zinc-900 mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
