'use client'

import React, { useState } from 'react'
import type { FAQ } from '@/lib/shared/types'

interface FAQAccordionProps {
  faqs: FAQ[]
  onExpand?: (question: string) => void
  children?: React.ReactNode
}

export default function FAQAccordion({ faqs, onExpand, children }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number, question: string) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
      if (onExpand) {
        onExpand(question)
      }
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-8">
        Kashmir Travel FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={idx} className="border-b border-border-soft pb-4">
              <button
                className="w-full flex justify-between items-center text-left py-3 font-bold text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta rounded"
                onClick={() => handleToggle(idx, faq.q)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{faq.q}</span>
                <span
                  className={`ml-4 transform transition-transform duration-200 text-kashmir-accent flex-shrink-0`}
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className="overflow-hidden transition-all duration-300 max-h-0"
                style={{
                  maxHeight: isOpen ? '400px' : '0px',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="text-sm md:text-base text-muted pt-2 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      {children && <div className="mt-8 text-center">{children}</div>}
    </section>
  )
}
