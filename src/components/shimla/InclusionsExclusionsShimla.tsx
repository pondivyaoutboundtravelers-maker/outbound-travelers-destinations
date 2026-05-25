'use client'

import React, { useState } from 'react'
import { shimlaData } from '@/lib/shimla/data'

export default function InclusionsExclusionsShimla() {
  const [activeTab, setActiveTab] = useState<'inclusions' | 'exclusions'>('inclusions')

  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        What is Included in Your Package
      </h2>
      <p className="text-center text-muted mb-8 max-w-xl mx-auto text-sm">
        We maintain absolute transparency in what we include. Read what is covered and what are standard add-ons.
      </p>

      {/* Tabs */}
      <div className="flex border-b border-border-soft mb-8">
        <button
          onClick={() => setActiveTab('inclusions')}
          className="flex-1 py-4 text-center font-bold text-sm md:text-base border-b-2 transition-colors focus:outline-none"
          style={{
            borderColor: activeTab === 'inclusions' ? '#2F5233' : 'transparent',
            color: activeTab === 'inclusions' ? '#2F5233' : '#71717A',
          }}
        >
          Trip Inclusions
        </button>
        <button
          onClick={() => setActiveTab('exclusions')}
          className="flex-1 py-4 text-center font-bold text-sm md:text-base border-b-2 transition-colors focus:outline-none"
          style={{
            borderColor: activeTab === 'exclusions' ? '#2F5233' : 'transparent',
            color: activeTab === 'exclusions' ? '#2F5233' : '#71717A',
          }}
        >
          Exclusions / Add-ons
        </button>
      </div>

      {/* Tab Panels */}
      <div className="bg-cream rounded-2xl p-6 md:p-8 mb-8 border border-border-soft">
        {activeTab === 'inclusions' ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shimlaData.inclusions.map((item, idx) => {
              const isToyTrain = item.toLowerCase().includes('toy train')
              return (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm md:text-base text-brand-navy font-semibold">
                      {item}
                    </span>
                    {isToyTrain && (
                      <span className="inline-flex items-center gap-1.5 ml-2 text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                        🚂 UNESCO Heritage
                      </span>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shimlaData.exclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-muted font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="text-center">
        <button
          onClick={handleCTA}
          className="px-8 h-12 bg-[#2F5233] text-white hover:bg-[#2F5233]/90 transition-colors font-bold rounded-lg text-sm shadow-sm"
        >
          Enquire about package details
        </button>
      </div>
    </section>
  )
}
