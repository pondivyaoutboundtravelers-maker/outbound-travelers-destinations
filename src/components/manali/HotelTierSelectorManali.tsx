'use client'

import React, { useState } from 'react'
import { manaliData } from '@/lib/manali/data'
import { manaliEvents } from '@/lib/manali/analytics'

export default function HotelTierSelectorManali() {
  const [selectedTier, setSelectedTier] = useState<string>('3★ Comfort')

  const handleSelect = (tier: string) => {
    setSelectedTier(tier)
    manaliEvents.hotelTierSelect(tier)
    if (tier === 'Riverside Cottage') {
      manaliEvents.riversideCottageView()
    }
  }

  const activeDetails = manaliData.hotelTiers.find((t) => t.tier === selectedTier)

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-20 bg-gray-50/50 rounded-3xl my-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl text-brand-navy font-bold">
          Manali Accommodation Tiers
        </h2>
        <p className="text-sm md:text-base text-muted mt-2 max-w-xl mx-auto">
          We handpick hotels with proper winter heating, sweeping peak views, and clean, modern bathrooms.
        </p>
      </div>

      {/* Selector Pills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {manaliData.hotelTiers.map((tierObj) => {
          const isSelected = tierObj.tier === selectedTier
          return (
            <button
              key={tierObj.tier}
              onClick={() => handleSelect(tierObj.tier)}
              className={`py-3.5 px-4 rounded-xl font-bold text-center text-sm transition-all focus:outline-none ${
                isSelected
                  ? 'bg-[#355C7D] text-white shadow-md'
                  : 'bg-white text-brand-navy border border-border-soft hover:bg-gray-50'
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
              <span className="text-lg font-bold font-fraunces text-brand-navy">
                {activeDetails.tier} Stays
              </span>
              {activeDetails.tier === 'Riverside Cottage' && (
                <span className="bg-[#355C7D] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  Highly Recommended
                </span>
              )}
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              {activeDetails.description}
            </p>
          </div>
          <div className="flex-shrink-0 bg-[#DEE5EC] rounded-2xl p-4 md:p-6 text-center w-full md:w-auto">
            <span className="block text-[10px] text-[#355C7D] font-bold uppercase tracking-wider mb-1">
              Estimated Rate
            </span>
            <span className="text-xl md:text-2xl font-bold text-brand-navy block">
              {activeDetails.price}
            </span>
            <span className="text-[10px] text-muted block mt-1">including breakfast & dinner</span>
          </div>
        </div>
      )}
    </section>
  )
}
