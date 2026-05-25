'use client'

import React, { useState } from 'react'
import { lakshadweepData } from '@/lib/lakshadweep/data'

export default function InclusionsExclusionsLakshadweep() {
  const [tab, setTab] = useState<'inclusions' | 'exclusions'>('inclusions')

  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy text-center mb-10">
        Inclusions & Exclusions
      </h2>

      {/* Mobile tabs */}
      <div className="flex border-b border-border-soft mb-6 md:hidden">
        {(['inclusions', 'exclusions'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 text-center font-bold text-sm border-b-2 capitalize transition-all ${
              tab === t ? 'border-[#06B6D4] text-[#06B6D4]' : 'border-transparent text-muted'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Desktop 2-col */}
      <div className="hidden md:grid grid-cols-2 gap-8">
        {/* Inclusions */}
        <div className="bg-white border border-border-soft rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-border-soft">
            <h3 className="text-lg font-bold font-fraunces text-brand-navy">What&apos;s Included</h3>
            <span className="text-xs text-green-700 bg-green-50 px-2.5 py-1 rounded border border-green-200 font-bold">Transparent Pricing</span>
          </div>
          <ul className="space-y-3.5">
            {lakshadweepData.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 text-xs mt-0.5 font-bold">✓</span>
                <span className="text-sm text-muted flex-1 leading-normal font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className="bg-white border border-border-soft rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-border-soft">
            <h3 className="text-lg font-bold font-fraunces text-brand-navy">What&apos;s Excluded</h3>
            <span className="text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-100 font-bold">Zero Hidden Charges</span>
          </div>
          <ul className="space-y-3.5">
            {lakshadweepData.exclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 text-xs mt-0.5 font-bold">×</span>
                <span className="text-sm text-muted leading-normal font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile tab panels */}
      <div className="md:hidden">
        <div className="bg-white border border-border-soft rounded-2xl p-5 shadow-sm">
          {tab === 'inclusions' ? (
            <ul className="space-y-3">
              {lakshadweepData.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5 font-bold">✓</span>
                  <span className="text-xs text-muted flex-1 leading-normal font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-3">
              {lakshadweepData.exclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5 font-bold">×</span>
                  <span className="text-xs text-muted leading-normal font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
          className="px-6 py-3 bg-[#06B6D4] hover:bg-[#06B6D4]/95 text-white font-bold rounded-xl text-sm shadow-md transition-all"
        >
          Request a Custom Lakshadweep Quote
        </button>
      </div>
    </section>
  )
}
