'use client'

import React, { useState } from 'react'
import { amritsarData } from '@/lib/amritsar/data'
import { amritsarEvents } from '@/lib/amritsar/analytics'

export default function HotelTierSelectorAmritsar() {
  const [selectedTier, setSelectedTier] = useState<string>('Comfort (3★)')

  const handleSelect = (tier: string) => {
    setSelectedTier(tier)
    amritsarEvents.hotelTierSelect(tier)
  }

  const activeDetails = amritsarData.hotelTiers.find((t) => t.tier === selectedTier)

  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-20 bg-gray-50/50 rounded-3xl my-12">
      <div className="text-center mb-10 max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-brand-navy font-bold font-fraunces">
          Amritsar Accommodations
        </h2>
        <p className="text-xs md:text-sm text-muted mt-2">
          From budget-friendly comfort near the Golden Temple walkway to top luxury properties.
        </p>
      </div>

      {/* Selector Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {amritsarData.hotelTiers.map((tierObj) => {
          const isSelected = tierObj.tier === selectedTier
          return (
            <button
              key={tierObj.tier}
              onClick={() => handleSelect(tierObj.tier)}
              className={`py-3.5 px-4 rounded-xl font-bold text-center text-sm transition-all focus:outline-none border ${
                isSelected
                  ? 'bg-[#FEF3C7] text-[#A16207] border-[#A16207] shadow-sm'
                  : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
              }`}
            >
              {tierObj.tier}
            </button>
          )
        })}
      </div>

      {/* Selected Tier Detail Panel */}
      {activeDetails && (
        <div className="bg-white border border-border-soft rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base md:text-lg font-bold font-fraunces text-brand-navy">
                {activeDetails.tier} Properties
              </span>
              <span className="bg-[#FEF3C7] text-[#A16207] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border border-[#A16207]/20">
                Example: {activeDetails.amritsarExample}
              </span>
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              {activeDetails.description}
            </p>
          </div>
          
          <div className="flex-shrink-0 bg-[#FEF3C7]/40 border border-[#A16207]/20 rounded-2xl p-4 md:p-6 text-center w-full md:w-auto">
            <span className="block text-[10px] text-[#A16207] font-bold uppercase tracking-wider mb-1">
              Estimated Rate
            </span>
            <span className="text-lg md:text-xl font-bold text-brand-navy block">
              {activeDetails.price}
            </span>
            <span className="text-[10px] text-muted block mt-1">including breakfast</span>
          </div>
        </div>
      )}
    </section>
  )
}
