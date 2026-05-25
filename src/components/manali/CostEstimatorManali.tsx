'use client'

import React, { useState, useEffect } from 'react'
import { manaliEvents } from '@/lib/manali/analytics'

type TierKey = '3star' | '4star' | '5star' | 'RiversideCottage'

const RATES: Record<TierKey, number> = {
  '3star': 2200,
  '4star': 3200,
  '5star': 4800,
  'RiversideCottage': 3800,
}

const TIER_LABELS: Record<TierKey, string> = {
  '3star': '3★ Comfort',
  '4star': '4★ Premium',
  '5star': '5★ Luxury',
  'RiversideCottage': 'Riverside Cottage',
}

export default function CostEstimatorManali() {
  const [travelers, setTravelers] = useState<number>(2)
  const [nights, setNights] = useState<number>(5)
  const [selectedTier, setSelectedTier] = useState<TierKey>('3star')
  const [estimate, setEstimate] = useState<number>(0)

  useEffect(() => {
    // Calculated estimation logic: (Nights * Rate) * (Math.ceil(Travelers / 2)) + (Travelers * 4000 fixed transfer/permit cost)
    const baseRate = RATES[selectedTier]
    const roomsCount = Math.ceil(travelers / 2)
    const totalRoomCost = baseRate * nights * roomsCount
    const transferCost = travelers * 4500 // covers Chandigarh/Volvo + permits + transfers
    setEstimate(totalRoomCost + transferCost)
  }, [travelers, nights, selectedTier])

  const handleTierChange = (tier: TierKey) => {
    setSelectedTier(tier)
    manaliEvents.costEstimatorUsed(travelers, nights, TIER_LABELS[tier])
  }

  const handleLeadFormTrigger = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="bg-white border border-border-soft rounded-3xl p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy text-center mb-2">
          Manali Land Cost Estimator
        </h2>
        <p className="text-center text-muted text-xs md:text-sm mb-8 max-w-md mx-auto">
          Get a baseline cost for your Manali plan. Excludes flights/trains. GST is included.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Travelers Selector */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Number of Travelers: {travelers}
              </label>
              <input
                type="range"
                min="1"
                max="12"
                value={travelers}
                onChange={(e) => setTravelers(parseInt(e.target.value))}
                className="w-full h-2 bg-[#DEE5EC] rounded-lg appearance-none cursor-pointer accent-[#355C7D]"
              />
              <div className="flex justify-between text-xs text-muted mt-1 font-semibold">
                <span>1 Traveler</span>
                <span>12 Travelers</span>
              </div>
            </div>

            {/* Nights Selector */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Number of Nights: {nights}
              </label>
              <input
                type="range"
                min="3"
                max="10"
                value={nights}
                onChange={(e) => setNights(parseInt(e.target.value))}
                className="w-full h-2 bg-[#DEE5EC] rounded-lg appearance-none cursor-pointer accent-[#355C7D]"
              />
              <div className="flex justify-between text-xs text-muted mt-1 font-semibold">
                <span>3 Nights</span>
                <span>10 Nights</span>
              </div>
            </div>

            {/* Stay Tier Selection */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">
                Stay Category:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(RATES) as TierKey[]).map((tierKey) => {
                  const isSelected = selectedTier === tierKey
                  return (
                    <button
                      key={tierKey}
                      onClick={() => handleTierChange(tierKey)}
                      className={`py-3 px-3 rounded-xl text-xs font-bold text-center border transition-all ${
                        isSelected
                          ? 'bg-[#355C7D] text-white border-[#355C7D] shadow-sm'
                          : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                      }`}
                    >
                      {TIER_LABELS[tierKey]}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Estimates Display Card */}
          <div className="bg-[#DEE5EC]/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full border border-border-soft">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-bold text-[#355C7D] uppercase tracking-widest block mb-2">
                Your Land Cost Estimate
              </span>
              <div className="text-3xl md:text-4xl font-bold font-fraunces text-brand-navy leading-none">
                ₹{estimate.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-muted block mt-2">
                *Approximate total budget for {travelers} travelers, {nights} nights in {TIER_LABELS[selectedTier]}.
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <div className="bg-white/60 rounded-xl p-3 text-xs text-muted font-medium space-y-1">
                <div className="flex justify-between">
                  <span>Room Count:</span>
                  <span className="font-bold text-brand-navy">{Math.ceil(travelers / 2)} Double Room(s)</span>
                </div>
                <div className="flex justify-between">
                  <span>NGT Permit Booking:</span>
                  <span className="font-bold text-green-600">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Private Car transfers:</span>
                  <span className="font-bold text-brand-navy">Included</span>
                </div>
              </div>

              <button
                onClick={handleLeadFormTrigger}
                className="w-full h-12 bg-[#355C7D] hover:bg-[#355C7D]/95 text-white font-bold rounded-xl transition-all shadow-md text-sm"
              >
                Get Exact Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
