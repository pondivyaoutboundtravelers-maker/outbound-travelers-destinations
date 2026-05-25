'use client'

import React, { useState } from 'react'
import { keralaData } from '@/lib/kerala/data'
import { keralaEvents } from '@/lib/kerala/analytics'

export default function HotelTierSelectorKerala() {
  const [selectedTier, setSelectedTier] = useState<string>('Premium (4★)')

  const handleSelect = (tier: string) => {
    setSelectedTier(tier)
    keralaEvents.hotelTierSelect(tier)
  }

  const active = keralaData.hotelTiers.find((t) => t.tier === selectedTier)

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20">
      <div className="bg-[#FAF6F0]/60 rounded-3xl p-6 md:p-10 border border-border-soft shadow-sm">
        <div className="text-center mb-10 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-brand-navy font-bold font-fraunces">
            Accommodation by Tier
          </h2>
          <p className="text-xs md:text-sm text-muted mt-2">
            Every hotel we book is inspected. Tier affects price — not quality of experience.
          </p>
        </div>

        {/* Tier selector buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {keralaData.hotelTiers.map((tierObj) => {
            const isSelected = tierObj.tier === selectedTier
            return (
              <button
                key={tierObj.tier}
                onClick={() => handleSelect(tierObj.tier)}
                className={`py-3.5 px-4 rounded-xl font-bold text-center text-sm transition-all border focus:outline-none ${
                  isSelected
                    ? 'bg-[#047857] text-white border-[#047857] shadow-sm'
                    : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                }`}
              >
                {tierObj.tier}
              </button>
            )
          })}
        </div>

        {/* Location-by-location breakdown */}
        {active && (
          <div className="bg-white border border-border-soft rounded-2xl overflow-hidden shadow-sm">
            <div className="p-5 md:p-6 border-b border-border-soft flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="block text-xs font-bold text-[#047857] uppercase tracking-wider mb-1">
                  {active.tier} Properties
                </span>
                <p className="text-sm text-muted font-medium leading-snug max-w-xl">
                  {active.description}
                </p>
              </div>
              <div className="flex-shrink-0 bg-[#FAF6F0] border border-[#047857]/20 rounded-xl px-4 py-3 text-center">
                <span className="block text-[9px] text-[#047857] font-bold uppercase tracking-wider mb-0.5">Est. Rate</span>
                <span className="text-sm md:text-base font-bold text-brand-navy">{active.price}</span>
              </div>
            </div>

            {/* Location grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border-soft">
              {(Object.entries(active.byLocation) as [string, string][]).map(([location, hotel]) => (
                <div key={location} className="p-4 md:p-5">
                  <span className="block text-[9px] font-bold text-muted uppercase tracking-wider mb-1 capitalize">
                    {location}
                  </span>
                  <span className="block text-sm font-bold text-brand-navy leading-snug">
                    {hotel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
            className="px-6 py-3 bg-[#047857] hover:bg-[#047857]/95 text-white font-bold rounded-xl text-sm shadow-md transition-all"
          >
            Get a quote for {selectedTier}
          </button>
        </div>
      </div>
    </section>
  )
}
