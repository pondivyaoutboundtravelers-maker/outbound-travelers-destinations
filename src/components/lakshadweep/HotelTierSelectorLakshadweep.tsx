'use client'

import React, { useState } from 'react'
import { lakshadweepData } from '@/lib/lakshadweep/data'
import { lakshadweepEvents } from '@/lib/lakshadweep/analytics'

export default function HotelTierSelectorLakshadweep() {
  const [selectedTier, setSelectedTier] = useState<string>('Bangaram Island Resort')

  const handleSelect = (tier: string) => {
    setSelectedTier(tier)
    lakshadweepEvents.hotelTierSelect(tier)
    if (tier === 'Bangaram Island Resort') {
      lakshadweepEvents.bangaramResortView()
    }
  }

  const active = lakshadweepData.hotelTiers.find((t) => t.tier === selectedTier)

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20">
      <div className="bg-[#CFFAFE]/40 rounded-3xl p-6 md:p-10 border border-[#06B6D4]/20 shadow-sm">
        <div className="text-center mb-10 max-w-xl mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#06B6D4] uppercase block mb-3">
            Island Accommodation
          </span>
          <h2 className="text-2xl md:text-3xl text-brand-navy font-bold font-fraunces">
            Stay in Lakshadweep
          </h2>
          <p className="text-xs md:text-sm text-muted mt-2">
            There are no 5-star standard chain hotels in Lakshadweep. Accommodation is extremely limited, eco-focused, and regulated.
          </p>
        </div>

        {/* Tier selector buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {lakshadweepData.hotelTiers.map((tierObj) => {
            const isSelected = tierObj.tier === selectedTier
            return (
              <button
                key={tierObj.tier}
                onClick={() => handleSelect(tierObj.tier)}
                className={`py-3.5 px-4 rounded-xl font-bold text-center text-sm transition-all border focus:outline-none ${
                  isSelected
                    ? 'bg-[#06B6D4] text-white border-[#06B6D4] shadow-sm'
                    : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                }`}
              >
                {tierObj.tier}
              </button>
            )
          })}
        </div>

        {/* Description box */}
        {active && (
          <div className="bg-white border border-border-soft rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between shadow-sm">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-brand-navy font-fraunces mb-2">
                {active.tier}
              </h3>
              <p className="text-sm text-muted leading-relaxed font-medium mb-4">
                {active.description}
              </p>
              
              <div className="bg-amber-50 text-amber-800 text-xs px-3 py-2 rounded-lg border border-amber-200 inline-block font-medium">
                <span className="font-bold mr-1">What this means:</span> 
                {active.tier.includes('SPORTS') ? 'Basic rooms, spectacular locations, great for budget/groups.' :
                 active.tier.includes('Bangaram') ? 'Premium, totally exclusive, private beach.' :
                 active.tier.includes('Agatti') ? 'Good middle-ground, decent amenities.' :
                 'Eco tents, shared facilities, pure nature.'}
              </div>
            </div>
            <div className="flex-shrink-0 bg-[#CFFAFE]/50 border border-[#06B6D4]/20 rounded-xl p-5 text-center w-full md:w-auto">
              <span className="block text-[10px] text-[#06B6D4] font-bold uppercase tracking-wider mb-1">Indicative Rate</span>
              <span className="text-lg md:text-xl font-bold text-brand-navy block mb-3">{active.price}</span>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
                className="w-full px-5 py-2.5 bg-[#06B6D4] hover:bg-[#06B6D4]/90 text-white font-bold rounded-lg text-xs transition-colors"
              >
                Check Availability
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
