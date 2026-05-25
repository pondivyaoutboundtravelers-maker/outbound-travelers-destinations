'use client'

import React from 'react'
import { baliData } from '@/lib/bali/data'
import { baliEvents } from '@/lib/bali/analytics'

export default function InclusionsExclusionsBali() {
  const handleCtaClick = () => {
    baliEvents.finalCtaClick('inclusions_quote')
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-border-soft overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Left: Inclusions */}
          <div className="w-full md:w-1/2 p-6 md:p-10 bg-gray-50/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy font-fraunces">What&apos;s Included</h3>
            </div>
            <ul className="space-y-4">
              {baliData.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm md:text-base text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Exclusions */}
          <div className="w-full md:w-1/2 p-6 md:p-10 border-t md:border-t-0 md:border-l border-border-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy font-fraunces">What&apos;s Not Included</h3>
            </div>
            <ul className="space-y-4">
              {baliData.exclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm md:text-base text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer CTA */}
        <div className="bg-brand-navy p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm md:text-base opacity-90 text-center sm:text-left">
            Need flights, insurance, or special additions? We can build them into your package.
          </p>
          <button
            onClick={handleCtaClick}
            className="whitespace-nowrap px-6 py-3 bg-white text-brand-navy hover:bg-gray-100 transition-colors font-bold rounded-lg shadow-sm text-sm"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  )
}
