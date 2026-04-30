'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Send, ChevronDown } from 'lucide-react'

// ── FUTURE: POST to /api/quote → email via Resend/SendGrid, CRM webhook, Twilio SMS ──

type FormState = 'idle' | 'submitting' | 'success'

const urgencyOptions = ['Emergency (ASAP)', 'Today', 'This Week', 'Just Pricing']
const customerTypes = ['Everyday Driver', 'Mechanic / Workshop', 'Business', 'Fleet Operator', 'Other']

interface FormData {
  name: string; phone: string; email: string; rego: string
  vehicleMakeModel: string; suburb: string; batteryIssue: string
  urgency: string; customerType: string; message: string
}

const initial: FormData = { name: '', phone: '', email: '', rego: '', vehicleMakeModel: '', suburb: '', batteryIssue: '', urgency: '', customerType: '', message: '' }

export function QuoteForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState<FormData>(initial)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: name === 'rego' ? value.toUpperCase() : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // ── REPLACE WITH: await fetch('/api/quote', { method: 'POST', body: JSON.stringify(form) }) ──
    await new Promise((r) => setTimeout(r, 1500))
    setFormState('success')
  }

  const input = 'w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-red-500 transition-colors'
  const label = 'block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2'

  return (
    <AnimatePresence mode="wait">
      {formState === 'success' ? (
        <motion.div key="success" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16 px-8">
          <CheckCircle2 className="w-14 h-14 text-red-600 mx-auto mb-5" />
          <h3 className="text-2xl font-black text-zinc-900 mb-3">Quote Request Received</h3>
          <p className="text-zinc-500 text-base mb-8 max-w-sm mx-auto leading-relaxed">
            We&apos;ll review your details and get back to you shortly. For urgent battery needs, call us directly.
          </p>
          <a href="tel:0000000000"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Call Now: 0000 000 000
          </a>
        </motion.div>
      ) : (
        <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className={label}>Full Name *</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={input} required /></div>
            <div><label className={label}>Phone *</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="04XX XXX XXX" className={input} required /></div>
          </div>
          <div><label className={label}>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={input} /></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className={label}>Vehicle Rego</label>
              <input type="text" name="rego" value={form.rego} onChange={handleChange} placeholder="1ABC123" maxLength={8}
                className={`${input} tracking-widest font-bold`} /></div>
            <div><label className={label}>Make & Model</label>
              <input type="text" name="vehicleMakeModel" value={form.vehicleMakeModel} onChange={handleChange} placeholder="e.g. Toyota Camry 2019" className={input} /></div>
          </div>
          <div><label className={label}>Your Suburb *</label>
            <input type="text" name="suburb" value={form.suburb} onChange={handleChange} placeholder="e.g. Maddington" className={input} required /></div>
          <div><label className={label}>Battery Issue / What do you need?</label>
            <input type="text" name="batteryIssue" value={form.batteryIssue} onChange={handleChange} placeholder="e.g. Car won't start, needs new battery" className={input} /></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className={label}>Urgency *</label>
              <div className="relative">
                <select name="urgency" value={form.urgency} onChange={handleChange} className={`${input} appearance-none pr-9`} required>
                  <option value="" disabled>Select urgency</option>
                  {urgencyOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
            </div>
            <div><label className={label}>Customer Type *</label>
              <div className="relative">
                <select name="customerType" value={form.customerType} onChange={handleChange} className={`${input} appearance-none pr-9`} required>
                  <option value="" disabled>Select type</option>
                  {customerTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
            </div>
          </div>
          <div><label className={label}>Additional Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any other details..." rows={3} className={input} /></div>

          <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit"
            disabled={formState === 'submitting'}
            className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-4 px-6 rounded-lg transition-colors text-sm cursor-pointer disabled:cursor-not-allowed">
            {formState === 'submitting'
              ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
              : <><Send className="w-4 h-4" /> Get My Battery Quote</>}
          </motion.button>
          <p className="text-xs text-zinc-400 text-center">
            We respond to all quotes within a few hours. Urgent — please call directly.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
