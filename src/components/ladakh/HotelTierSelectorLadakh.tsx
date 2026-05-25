'use client'

import React, { useState } from 'react'
import { ladakhData } from '@/lib/ladakh/data'
import { ladakhEvents } from '@/lib/ladakh/analytics'

const TIER_KEYS = ['guesthouse', '3star', '4star', 'luxury-camp'] as const
type TierKey = typeof TIER_KEYS[number]

export default function HotelTierSelectorLadakh() {
  const [selectedTier, setSelectedTier] = useState<TierKey>('3star')

  const tiers = ladakhData.hotelTiers.map((data, i) => ({
    key: TIER_KEYS[i],
    data,
  }))

  const handleSelect = (key: TierKey) => {
    setSelectedTier(key)
    ladakhEvents.hotelTierSelect(key)
    if (key === 'luxury-camp') {
      ladakhEvents.luxuryCampView()
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Choose Your Stay: Hotels & Luxury Camps
      </h2>
      <p className="text-center text-muted mb-10 max-w-xl mx-auto text-sm md:text-base">
        From authentic Ladakhi guesthouses to heated glamping tents under the Milky Way at Pangong — here are the accommodation tiers we work with.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tiers.map((tierObj) => {
          const isSelected = selectedTier === tierObj.key
          return (
            <div
              key={tierObj.key}
              onClick={() => handleSelect(tierObj.key)}
              className="p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between"
              style={{
                borderColor: isSelected ? '#1F3A8A' : '#E5E7EB',
                backgroundColor: isSelected ? '#E0E7FF' : '#FFFFFF',
                boxShadow: isSelected ? '0 1px 4px rgba(31,58,138,0.12)' : undefined,
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-brand-navy">{tierObj.data.tier}</h3>
                  <input
                    type="radio"
                    name="hotel-tier-ladakh"
                    checked={isSelected}
                    onChange={() => handleSelect(tierObj.key)}
                    className="w-4 h-4 mt-1"
                    style={{ accentColor: '#1F3A8A' }}
                    aria-label={`Select ${tierObj.data.tier}`}
                  />
                </div>
                <p className="text-sm text-muted leading-relaxed mb-6">{tierObj.data.description}</p>
              </div>
              <div className="border-t border-border-soft pt-4">
                <span className="block text-[10px] uppercase font-bold text-muted mb-1">Starting price</span>
                <span className="text-base font-bold text-brand-navy">{tierObj.data.price}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
