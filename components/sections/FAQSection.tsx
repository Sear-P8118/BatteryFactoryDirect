'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/faqs'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)
  const toggle = (id: string) => setOpenId(openId === id ? null : id)

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-zinc-200">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <AnimatedSection className="mb-12 text-center">
          <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">Common Questions</h2>
          <p className="text-zinc-500 text-lg mt-4">Everything you need to know about Battery Factory Direct.</p>
        </AnimatedSection>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <AnimatedSection key={faq.id} delay={i * 0.04}>
              <div className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                openId === faq.id ? 'border-zinc-300 bg-white' : 'border-zinc-200 bg-zinc-50'
              }`}>
                <button onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer">
                  <span className="text-zinc-900 font-semibold text-sm md:text-base leading-snug">{faq.question}</span>
                  <span className="flex-shrink-0">
                    {openId === faq.id
                      ? <Minus className="w-4 h-4 text-red-600" />
                      : <Plus className="w-4 h-4 text-zinc-400" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div className="px-6 pb-5 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
