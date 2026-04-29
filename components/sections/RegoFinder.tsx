'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, CheckCircle2, MapPin, Truck, ChevronRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

type SearchState = 'idle' | 'searching' | 'result'

// ─── FUTURE API INTEGRATION ────────────────────────────────────────────────────
// Replace MOCK_RESULT and the fake delay with a real API call, e.g.:
//   GET /api/rego-match?rego=1ABC123&suburb=Maddington
// Expected response shape: { batteryCode, batteryType, vehicleMatch, price, priceInstalled }
// ──────────────────────────────────────────────────────────────────────────────
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
    // ── REPLACE WITH REAL API CALL ──
    await new Promise((r) => setTimeout(r, 1600))
    setState('result')
  }

  const handleReset = () => {
    setState('idle')
    setRego('')
    setSuburb('')
  }

  return (
    <section
      className="py-20 md:py-28 bg-[#0f0f0f] relative overflow-hidden"
      id="rego-finder"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(239,68,68,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.035) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Battery Matching Tool"
              title="Find Your Battery in Seconds"
              subtitle="Enter your vehicle registration and we'll match the exact battery for your make, model, and engine — no guessing required."
              centered
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
              <AnimatePresence mode="wait">
                {state !== 'result' ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                          Vehicle Registration
                        </label>
                        <input
                          type="text"
                          value={rego}
                          onChange={(e) => setRego(e.target.value.toUpperCase())}
                          placeholder="e.g. 1ABC123"
                          maxLength={8}
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3.5 text-zinc-100 placeholder-zinc-600 text-lg font-semibold tracking-widest focus:outline-none focus:border-red-500 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                          Your Suburb
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                          <input
                            type="text"
                            value={suburb}
                            onChange={(e) => setSuburb(e.target.value)}
                            placeholder="e.g. Maddington"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-10 pr-4 py-3.5 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-red-500 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={state === 'searching' || !rego.trim()}
                      className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-4 px-6 rounded-lg transition-colors text-base cursor-pointer disabled:cursor-not-allowed"
                    >
                      {state === 'searching' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Matching your vehicle...
                        </>
                      ) : (
                        <>
                          <Search className="w-5 h-5" />
                          Find My Battery
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-zinc-700 text-center">
                      WA rego plates supported · Your data is not stored
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="border border-red-500/25 rounded-xl bg-zinc-800/40 p-6 mb-4">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <p className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">
                            Battery Match Found
                          </p>
                          <h3 className="text-2xl font-black text-zinc-50">{MOCK_RESULT.batteryCode}</h3>
                          <p className="text-zinc-400 text-sm">{MOCK_RESULT.batteryType}</p>
                        </div>
                        <CheckCircle2 className="w-8 h-8 text-red-500 flex-shrink-0" />
                      </div>

                      <div className="grid sm:grid-cols-3 gap-3 mb-6">
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <p className="text-xs text-zinc-600 mb-1.5 uppercase tracking-wide font-medium">Vehicle Match</p>
                          <p className="text-sm font-semibold text-zinc-200 leading-tight">{MOCK_RESULT.vehicleMatch}</p>
                        </div>
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <p className="text-xs text-zinc-600 mb-1.5 uppercase tracking-wide font-medium">From Price</p>
                          <p className="text-2xl font-black text-zinc-50 leading-none">{MOCK_RESULT.price}</p>
                          <p className="text-xs text-zinc-500 mt-1">{MOCK_RESULT.priceInstalled}</p>
                        </div>
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <p className="text-xs text-zinc-600 mb-1.5 uppercase tracking-wide font-medium">Delivery</p>
                          <div className="flex items-center gap-2">
                            <Truck className="w-4 h-4 text-red-500" />
                            <p className="text-sm font-semibold text-zinc-200">Perth-Wide</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="/quote"
                          className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-lg transition-colors text-sm"
                        >
                          Book Delivery & Install
                          <ChevronRight className="w-4 h-4" />
                        </a>
                        <a
                          href="tel:0000000000"
                          className="flex items-center justify-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 font-semibold py-3 px-5 rounded-lg transition-colors text-sm"
                        >
                          Call to Confirm
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="w-full text-sm text-zinc-600 hover:text-zinc-400 transition-colors py-2"
                    >
                      ← Search another vehicle
                    </button>
                    <p className="text-xs text-zinc-800 text-center mt-2">
                      Preview only. Live rego matching system launching soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
