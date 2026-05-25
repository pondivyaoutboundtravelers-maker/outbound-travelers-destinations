'use client'

import React, { useState } from 'react'
import { manaliData } from '@/lib/manali/data'

export default function InclusionsExclusionsManali() {
  const [activeTab, setActiveTab] = useState<'inclusions' | 'exclusions'>('inclusions')

  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy text-center mb-10">
        Inclusions & Exclusions
      </h2>

      {/* Tabs - Mobile only */}
      <div className="flex border-b border-border-soft mb-6 md:hidden">
        <button
          onClick={() => setActiveTab('inclusions')}
          className={`flex-1 py-3 text-center font-bold text-sm border-b-2 transition-all ${
            activeTab === 'inclusions'
              ? 'border-[#355C7D] text-[#355C7D]'
              : 'border-transparent text-muted'
          }`}
        >
          Inclusions
        </button>
        <button
          onClick={() => setActiveTab('exclusions')}
          className={`flex-1 py-3 text-center font-bold text-sm border-b-2 transition-all ${
            activeTab === 'exclusions'
              ? 'border-[#355C7D] text-[#355C7D]'
              : 'border-transparent text-muted'
          }`}
        >
          Exclusions
        </button>
      </div>

      {/* Desktop 2-column Layout */}
      <div className="hidden md:grid grid-cols-2 gap-8">
        {/* Inclusions Panel */}
        <div className="bg-white border border-border-soft rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-bold font-fraunces text-brand-navy mb-6 pb-2 border-b border-border-soft flex items-center justify-between">
            <span>What is Included</span>
            <span className="text-xs font-sans text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-200">
              Clear Transparent Pricing
            </span>
          </h3>
          <ul className="space-y-3.5">
            {manaliData.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 text-xs mt-0.5 font-bold">
                  ✓
                </span>
                <span className="text-sm md:text-base text-muted flex-1">
                  {item}
                  {item.includes('NGT permit') && (
                    <span className="inline-block ml-2 bg-amber-100 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded border border-amber-200 uppercase tracking-wider">
                      Key Permit Included
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions Panel */}
        <div className="bg-white border border-border-soft rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-bold font-fraunces text-brand-navy mb-6 pb-2 border-b border-border-soft flex items-center justify-between">
            <span>What is Excluded</span>
            <span className="text-xs font-sans text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
              Zero Hidden Charges
            </span>
          </h3>
          <ul className="space-y-3.5">
            {manaliData.exclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 text-xs mt-0.5 font-bold">
                  ×
                </span>
                <span className="text-sm md:text-base text-muted">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Tab Views */}
      <div className="md:hidden">
        {activeTab === 'inclusions' ? (
          <div className="bg-white border border-border-soft rounded-2xl p-5 shadow-sm">
            <ul className="space-y-3.5">
              {manaliData.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5 font-bold">
                    ✓
                  </span>
                  <span className="text-xs text-muted flex-1">
                    {item}
                    {item.includes('NGT permit') && (
                      <span className="inline-block ml-1.5 bg-amber-100 text-amber-800 text-[8px] font-bold px-1.5 py-0.5 rounded border border-amber-200">
                        Permit Included
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-white border border-border-soft rounded-2xl p-5 shadow-sm">
            <ul className="space-y-3.5">
              {manaliData.exclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5 font-bold">
                    ×
                  </span>
                  <span className="text-xs text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={handleCTA}
          className="px-6 py-3 bg-[#355C7D] text-white font-bold rounded-xl hover:bg-[#355C7D]/95 transition-all text-sm shadow-md"
        >
          Request Custom Manali Package
        </button>
      </div>
    </section>
  )
}
