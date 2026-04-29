'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Send, ChevronDown } from 'lucide-react'

// ── FUTURE INTEGRATION ──────────────────────────────────────────────────────
// On submit, POST formData to /api/quote (create app/api/quote/route.ts).
// That route handler should:
//   1. Validate input with zod
//   2. Send email notification via Resend / SendGrid / Nodemailer
//   3. Optionally push to CRM (HubSpot, Salesforce) or Zapier webhook
//   4. Optionally send SMS via Twilio
// ────────────────────────────────────────────────────────────────────────────

type FormState = 'idle' | 'submitting' | 'success'

const urgencyOptions = ['Emergency (ASAP)', 'Today', 'This Week', 'Just Pricing']
const customerTypes = ['Everyday Driver', 'Mechanic / Workshop', 'Business', 'Fleet Operator', 'Other']

interface FormData {
  name: string
  phone: string
  email: string
  rego: string
  vehicleMakeModel: string
  suburb: string
  batteryIssue: string
  urgency: string
  customerType: string
  message: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  rego: '',
  vehicleMakeModel: '',
  suburb: '',
  batteryIssue: '',
  urgency: '',
  customerType: '',
  message: '',
}

export function QuoteForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState<FormData>(initialForm)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'rego' ? value.toUpperCase() : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // ── REPLACE WITH: await fetch('/api/quote', { method: 'POST', body: JSON.stringify(form) }) ──
    await new Promise((r) => setTimeout(r, 1500))
    setFormState('success')
  }

  const inputClass =
    'w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 transition-colors'
  const labelClass = 'block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2'

  return (
    <AnimatePresence mode="wait">
      {formState === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16 px-8"
        >
          <CheckCircle2 className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h3 className="text-2xl font-black text-zinc-50 mb-3">Quote Request Received</h3>
          <p className="text-zinc-400 text-base mb-8 max-w-sm mx-auto leading-relaxed">
            We&apos;ll review your details and get back to you shortly. For urgent battery needs, call us directly.
          </p>
          <a
            href="tel:0000000000"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Call Now: 0000 000 000
          </a>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Full Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className={labelClass}>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="04XX XXX XXX"
                className={inputClass}
                required
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Vehicle Rego</label>
              <input
                type="text"
                name="rego"
                value={form.rego}
                onChange={handleChange}
                placeholder="1ABC123"
                maxLength={8}
                className={`${inputClass} tracking-widest font-semibold`}
              />
            </div>
            <div>
              <label className={labelClass}>Make & Model</label>
              <input
                type="text"
                name="vehicleMakeModel"
                value={form.vehicleMakeModel}
                onChange={handleChange}
                placeholder="e.g. Toyota Camry 2019"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Your Suburb *</label>
            <input
              type="text"
              name="suburb"
              value={form.suburb}
              onChange={handleChange}
              placeholder="e.g. Maddington"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>Battery Issue / What do you need?</label>
            <input
              type="text"
              name="batteryIssue"
              value={form.batteryIssue}
              onChange={handleChange}
              placeholder="e.g. Car won't start, needs new battery"
              className={inputClass}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Urgency *</label>
              <div className="relative">
                <select
                  name="urgency"
                  value={form.urgency}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none pr-9`}
                  required
                >
                  <option value="" disabled>
                    Select urgency
                  </option>
                  {urgencyOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Customer Type *</label>
              <div className="relative">
                <select
                  name="customerType"
                  value={form.customerType}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none pr-9`}
                  required
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  {customerTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <label className={labelClass}>Additional Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Any other details..."
              rows={3}
              className={inputClass}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-4 px-6 rounded-lg transition-colors text-base cursor-pointer disabled:cursor-not-allowed"
          >
            {formState === 'submitting' ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Get My Battery Quote
              </>
            )}
          </motion.button>

          <p className="text-xs text-zinc-600 text-center">
            We respond to all quotes within a few hours. Urgent enquiries — please call directly.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
