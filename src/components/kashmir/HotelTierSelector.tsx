'use client'

import React, { useState } from 'react'
import { kashmirData } from '@/lib/kashmir/data'
import { kashmirEvents } from '@/lib/kashmir/analytics'

export default function HotelTierSelector() {
  const [selectedTier, setSelectedTier] = useState<string>('3star')

  const tiers = [
    { key: '3star', data: kashmirData.hotelTiers[0] },
    { key: '4star', data: kashmirData.hotelTiers[1] },
    { key: '5star', data: kashmirData.hotelTiers[2] },
    { key: 'houseboat', data: kashmirData.hotelTiers[3] },
  ]

  const handleSelect = (key: string) => {
    setSelectedTier(key)
    kashmirEvents.hotelTierSelect(key)
    if (key === 'houseboat') {
      kashmirEvents.houseboatView()
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Choose Your Stay: Hotels & Houseboats
      </h2>
      <p className="text-center text-muted mb-10 max-w-xl mx-auto text-sm md:text-base">
        Kashmir offers everything from heritage houseboats on Dal Lake to 5-star mountain luxury. Here are the accommodation tiers we work with.
      </p>

      {/* Cards: Stacked on Mobile, 4-col on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {tiers.map((tierObj) => {
          const isSelected = selectedTier === tierObj.key
          return (
            <div
              key={tierObj.key}
              onClick={() => handleSelect(tierObj.key)}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'border-[#1F6E3F] bg-[#E3F0E8] shadow-sm'
                  : 'border-border-soft bg-white hover:border-gray-300 hover:shadow-xs'
              }`}
            >
              <div>
                {/* Visual Label */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-brand-navy">{tierObj.data.tier}</h3>
                  <input
                    type="radio"
                    name="hotel-tier"
                    checked={isSelected}
                    onChange={() => handleSelect(tierObj.key)}
                    className="w-4 h-4 text-kashmir-accent focus:ring-kashmir-accent"
                  />
                </div>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {tierObj.data.description}
                </p>
              </div>

              <div className="border-t border-border-soft pt-4">
                <span className="block text-[10px] uppercase font-bold text-muted mb-1">
                  Starting price
                </span>
                <span className="text-base font-bold text-brand-navy">{tierObj.data.price}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
