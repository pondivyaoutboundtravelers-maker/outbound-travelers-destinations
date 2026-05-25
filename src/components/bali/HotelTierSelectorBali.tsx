'use client'

import React, { useState } from 'react'
import { baliData } from '@/lib/bali/data'
import { baliEvents } from '@/lib/bali/analytics'
import type { HotelTier } from '@/lib/shared/types'

export default function HotelTierSelectorBali() {
  const [activeTier, setActiveTier] = useState<HotelTier>(baliData.hotelTiers[1])

  const handleTierClick = (tier: HotelTier) => {
    setActiveTier(tier)
    baliEvents.hotelTierSelect(tier.tier)
    if (tier.tier.toLowerCase().includes('villa')) {
      baliEvents.villaView()
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
          Accommodation Tiers
        </h2>
        <p className="text-center text-muted mb-10 text-sm md:text-base">
          From comfortable guesthouses to private pool villas, choose the standard that fits your style.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Selectors */}
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            {baliData.hotelTiers.map((t) => (
              <button
                key={t.tier}
                onClick={() => handleTierClick(t)}
                className={`text-left p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                  activeTier.tier === t.tier
                    ? 'border-[#D97706] bg-white shadow-sm'
                    : 'border-transparent bg-gray-200/50 hover:bg-gray-200 text-muted'
                }`}
              >
                <div className={`font-bold ${activeTier.tier === t.tier ? 'text-brand-navy' : 'text-gray-600'}`}>
                  {t.tier}
                </div>
                <div className={`text-xs mt-1 ${activeTier.tier === t.tier ? 'text-[#D97706] font-semibold' : 'text-gray-500'}`}>
                  {t.price}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Description Panel */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border-soft h-full flex flex-col justify-center min-h-[200px] animate-fade-in relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D97706]" />
              
              <h3 className="text-xl md:text-2xl font-fraunces font-bold text-brand-navy mb-4">
                {activeTier.tier}
              </h3>
              <p className="text-muted leading-relaxed md:text-lg font-inter">
                {activeTier.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
