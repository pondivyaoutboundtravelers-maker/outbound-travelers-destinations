'use client'

import React, { useState } from 'react'
import { kashmirData } from '@/lib/kashmir/data'

export default function InclusionsExclusions() {
  const [activeTab, setActiveTab] = useState<'inclusions' | 'exclusions'>('inclusions')

  const handleEnquireCustom = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-8">
        What&apos;s Included & Not Included
      </h2>

      {/* Mobile Tab Toggles */}
      <div className="md:hidden flex border-b border-border-soft mb-6">
        <button
          onClick={() => setActiveTab('inclusions')}
          className={`flex-1 py-3 text-center text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'inclusions'
              ? 'border-kashmir-accent text-kashmir-accent'
              : 'border-transparent text-muted'
          }`}
        >
          Included
        </button>
        <button
          onClick={() => setActiveTab('exclusions')}
          className={`flex-1 py-3 text-center text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'exclusions'
              ? 'border-kashmir-accent text-kashmir-accent'
              : 'border-transparent text-muted'
          }`}
        >
          Not included
        </button>
      </div>

      {/* Grid: Side by Side on Desktop / Toggleable on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Inclusions */}
        <div className={`${activeTab === 'inclusions' ? 'block' : 'hidden'} md:block bg-white border border-border-soft rounded-2xl p-6 shadow-xs`}>
          <h3 className="text-lg font-bold text-[#1E8E5C] flex items-center gap-2 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Inclusions
          </h3>
          <ul className="space-y-3">
            {kashmirData.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-navy">
                <svg className="w-5 h-5 text-[#1E8E5C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className={`${activeTab === 'exclusions' ? 'block' : 'hidden'} md:block bg-white border border-border-soft rounded-2xl p-6 shadow-xs`}>
          <h3 className="text-lg font-bold text-red-700 flex items-center gap-2 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Exclusions
          </h3>
          <ul className="space-y-3">
            {kashmirData.exclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-navy">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleEnquireCustom}
          className="px-6 h-12 bg-transparent border-2 border-kashmir-accent text-kashmir-accent hover:bg-kashmir-soft transition-colors font-bold rounded-lg text-sm"
        >
          Customize what&apos;s included
        </button>
      </div>
    </section>
  )
}
