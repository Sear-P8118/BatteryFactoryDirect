'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'

// ── FUTURE: POST to /api/contact or email service (Resend, SendGrid) ──

type FormState = 'idle' | 'submitting' | 'success'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    // ── REPLACE WITH REAL SUBMISSION ──
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  const inputClass =
    'w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 transition-colors'
  const labelClass = 'block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2'

  return (
    <AnimatePresence mode="wait">
      {state === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-10"
        >
          <CheckCircle2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-zinc-50 mb-2">Message Sent</h3>
          <p className="text-zinc-400 text-sm">We&apos;ll be in touch shortly.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name *</label>
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
              <label className={labelClass}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="04XX XXX XXX"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label className={labelClass}>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className={labelClass}>Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Battery enquiry..."
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help?"
              rows={4}
              className={inputClass}
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={state === 'submitting'}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            {state === 'submitting' ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
