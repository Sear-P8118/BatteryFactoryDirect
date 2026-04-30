'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Search, CheckCircle2, MapPin, Truck, ChevronRight, Phone } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

type SearchState = 'idle' | 'searching' | 'result'

// ── FUTURE API INTEGRATION ──────────────────────────────────────────────────
// Replace MOCK_RESULT + fake delay with:
//   const res = await fetch(`/api/rego-match?rego=${rego}&suburb=${suburb}`)
//   const data = await res.json()
// ───────────────────────────────────────────────────────────────────────────
const MOCK_RESULT = {
  batteryCode: 'DIN66 AGM',
  batteryType: 'AGM Start-Stop Battery',
  vehicleMatch: 'Toyota Camry 2.5L (2018–2024)',
  price: '$285',
  priceInstalled: '$345 installed',
}

export function RegoFinder() {
  const [rego, setRego] = useState('')
  const [suburb, setSuburb] = useState('')
  const [state, setState] = useState<SearchState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!rego.trim()) return
    setState('searching')
    await new Promise((r) => setTimeout(r, 1500))
    setState('result')
  }

  return (
    <section className="py-20 lg:py-28 bg-zinc-100 border-t border-zinc-200" id="rego-finder">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <AnimatedSection direction="left">
            <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-4">Battery Matching Tool</p>
            <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 leading-tight tracking-tight mb-5">
              Find Your Battery<br />in Seconds
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Enter your vehicle registration and we&apos;ll match the exact battery for your make, model, and engine. No guessing, no wrong batteries.
            </p>
            <div className="space-y-3">
              {[
                'Matched to your exact vehicle spec',
                'Perth-wide delivery or install',
                'Instant price from warehouse stock',
              ].map((pt) => (
                <div key={pt} className="flex items-center gap-3 text-sm text-zinc-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                  {pt}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-4">
                <p className="text-white font-bold text-sm">Battery Finder</p>
                <p className="text-zinc-400 text-xs mt-0.5">WA registration plates supported</p>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {state !== 'result' ? (
                    <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                          Vehicle Registration *
                        </label>
                        <input
                          type="text" value={rego}
                          onChange={(e) => setRego(e.target.value.toUpperCase())}
                          placeholder="e.g. 1ABC123" maxLength={8}
                          className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-zinc-900 placeholder-zinc-400 text-lg font-bold tracking-widest focus:outline-none focus:border-red-500 transition-colors"
                          required />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                          Your Suburb
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="text" value={suburb}
                            onChange={(e) => setSuburb(e.target.value)}
                            placeholder="e.g. Maddington"
                            className="w-full bg-zinc-50 border border-zinc-300 rounded-lg pl-10 pr-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors" />
                        </div>
                      </div>
                      <button type="submit" disabled={state === 'searching' || !rego.trim()}
                        className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold py-3.5 rounded-lg transition-colors text-sm cursor-pointer disabled:cursor-not-allowed">
                        {state === 'searching' ? (
                          <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Matching your vehicle...</>
                        ) : (
                          <><Search className="w-4 h-4" /> Find My Battery</>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}>
                      <div className="flex items-center gap-3 mb-5">
                        <CheckCircle2 className="w-5 h-5 text-red-600" />
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-widest">Battery Match Found</p>
                      </div>

                      <div className="border border-zinc-200 rounded-lg overflow-hidden mb-4">
                        <div className="bg-zinc-900 px-5 py-4 border-b border-zinc-700">
                          <p className="text-white font-black text-xl">{MOCK_RESULT.batteryCode}</p>
                          <p className="text-zinc-400 text-sm">{MOCK_RESULT.batteryType}</p>
                        </div>
                        <div className="grid grid-cols-3 divide-x divide-zinc-200 bg-white">
                          <div className="px-4 py-3">
                            <p className="text-zinc-400 text-xs mb-1">Vehicle</p>
                            <p className="text-zinc-900 text-xs font-semibold leading-snug">{MOCK_RESULT.vehicleMatch}</p>
                          </div>
                          <div className="px-4 py-3">
                            <p className="text-zinc-400 text-xs mb-1">From</p>
                            <p className="text-zinc-900 font-black text-lg leading-none">{MOCK_RESULT.price}</p>
                          </div>
                          <div className="px-4 py-3">
                            <p className="text-zinc-400 text-xs mb-1">Delivery</p>
                            <div className="flex items-center gap-1">
                              <Truck className="w-3 h-3 text-red-600" />
                              <p className="text-zinc-900 text-xs font-semibold">Perth-Wide</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 mb-3">
                        <Link href="/quote"
                          className="flex-1 flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                          Book Delivery & Install <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                        <a href="tel:0000000000"
                          className="flex items-center justify-center gap-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold py-3 px-4 rounded-lg transition-colors text-sm border border-zinc-300">
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                      <button onClick={() => { setState('idle'); setRego(''); setSuburb('') }}
                        className="w-full text-xs text-zinc-400 hover:text-zinc-600 transition-colors py-1">
                        ← Search another vehicle
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
