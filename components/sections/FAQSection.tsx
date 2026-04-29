'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/faqs'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId(openId === id ? null : id)

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know about Battery Factory Direct."
            centered
          />
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={faq.id} delay={i * 0.05}>
              <div
                className={`bg-zinc-900 border rounded-xl overflow-hidden transition-colors duration-200 ${
                  openId === faq.id ? 'border-zinc-700' : 'border-zinc-800'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-zinc-100 font-semibold text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0">
                    {openId === faq.id ? (
                      <Minus className="w-4 h-4 text-red-500" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-500" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
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
