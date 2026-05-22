'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { singaporeData } from '@/lib/singapore/data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = singaporeData.faqs

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-cream text-dark-text overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-coral/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] bg-teal-primary/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-teal-primary font-inter block mb-3">
            Inquiries Resolved
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-dark-text max-w-3xl mx-auto leading-tight">
            Frequently Asked Queries
          </h2>
          <p className="text-sm md:text-base text-medium-text font-inter max-w-xl mx-auto mt-4 leading-relaxed">
            Essential intelligence on visa protocols, multi-country combos, dietary arrangements, and pacing your ultimate Singapore excursion.
          </p>
          <div className="w-12 h-1 bg-teal-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Glassmorphic Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen 
                    ? 'bg-white border-teal-primary/30 shadow-[0_10px_30px_rgba(13,148,136,0.1)]' 
                    : 'bg-white/50 border-teal-primary/5 hover:bg-white hover:border-teal-primary/20 shadow-sm'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 font-inter select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors duration-300 ${
                      isOpen ? 'text-coral' : 'text-teal-primary'
                    }`} />
                    <span className={`text-sm sm:text-base font-semibold leading-relaxed transition-colors duration-300 ${
                      isOpen ? 'text-dark-text' : 'text-medium-text'
                    }`}>
                      {faq.q}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isOpen 
                      ? 'border-coral/30 bg-coral/10 text-coral' 
                      : 'border-teal-primary/10 bg-teal-light text-teal-primary hover:bg-teal-primary/10'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 border-t border-teal-primary/10 font-inter">
                        <p className="text-xs sm:text-sm text-medium-text leading-relaxed font-normal mt-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
