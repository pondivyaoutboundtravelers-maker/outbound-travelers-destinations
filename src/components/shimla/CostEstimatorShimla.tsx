'use client'

import React, { useState, useEffect } from 'react'
import { shimlaEvents } from '@/lib/shimla/analytics'

type TierKey = '3star' | '4star' | '5star' | 'heritage'

const RATES: Record<TierKey, number> = {
  '3star': 2000,
  '4star': 3000,
  '5star': 4500,
  heritage: 3500,
}

const TIER_LABELS: Record<TierKey, string> = {
  '3star': '3★ Comfort',
  '4star': '4★ Premium',
  '5star': '5★ Luxury',
  heritage: 'Heritage Villa',
}

export default function CostEstimatorShimla() {
  const [travelers, setTravelers] = useState<number>(4)
  const [nights, setNights] = useState<number>(5)
  const [tier, setTier] = useState<TierKey>('3star')
  const [totalCost, setTotalCost] = useState(0)
  const [perPersonCost, setPerPersonCost] = useState(0)

  useEffect(() => {
    const rate = RATES[tier]
    const calculated = nights * travelers * rate
    setTotalCost(calculated)
    setPerPersonCost(calculated / travelers)
  }, [travelers, nights, tier])

  const handleSliderChange = (type: 'travelers' | 'nights', val: number) => {
    if (type === 'travelers') setTravelers(val)
    if (type === 'nights') setNights(val)
    shimlaEvents.costEstimatorUsed(travelers, nights, tier)
  }

  const handleTierChange = (newTier: TierKey) => {
    setTier(newTier)
    shimlaEvents.costEstimatorUsed(travelers, nights, newTier)
  }

  const handleEnquireWithEstimate = () => {
    shimlaEvents.finalCtaClick('Cost Estimator Estimate')
    window.dispatchEvent(
      new CustomEvent('openLeadForm', {
        detail: { prefill: { travelers, nights } },
      })
    )
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto bg-cream rounded-3xl my-8 md:my-12">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Estimate Your Shimla Trip Cost
      </h2>
      <p className="text-center text-muted mb-10 max-w-xl mx-auto text-sm">
        Select your preferences to estimate your land cost. Final price will vary depending on seasons and toy train bookings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Controls */}
        <div className="space-y-6">
          {/* Travelers */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-brand-navy">Number of Travelers</label>
              <span className="text-sm font-bold text-[#2F5233] bg-[#E8EFE6] px-2.5 py-0.5 rounded">
                {travelers} {travelers === 1 ? 'person' : 'people'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={travelers}
              onChange={(e) => handleSliderChange('travelers', parseInt(e.target.value, 10))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{ accentColor: '#2F5233' }}
            />
          </div>

          {/* Nights */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-brand-navy">Nights</label>
              <span className="text-sm font-bold text-[#2F5233] bg-[#E8EFE6] px-2.5 py-0.5 rounded">
                {nights} {nights === 1 ? 'night' : 'nights'}
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="10"
              value={nights}
              onChange={(e) => handleSliderChange('nights', parseInt(e.target.value, 10))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{ accentColor: '#2F5233' }}
            />
          </div>

          {/* Tier */}
          <div>
            <label className="block text-sm font-bold text-brand-navy mb-3">Accommodation Type</label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(TIER_LABELS) as TierKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleTierChange(key)}
                  className="py-2 px-3 rounded-lg text-xs font-bold border transition-colors"
                  style={{
                    color: tier === key ? '#FFFFFF' : '#2F5233',
                    borderColor: tier === key ? 'transparent' : '#E5E7EB',
                    backgroundColor: tier === key ? '#2F5233' : '#FFFFFF',
                  }}
                >
                  {TIER_LABELS[key]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="bg-white p-6 rounded-2xl border border-border-soft text-center shadow-sm">
          <div className="mb-6">
            <span className="text-xs uppercase font-bold text-muted block mb-1">Estimated Cost</span>
            <span className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
              From ₹{perPersonCost.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-muted block mt-1">per person (land-only, excl. flights)</span>
          </div>
          <div className="bg-cream py-2 px-4 rounded-lg inline-block text-xs font-semibold text-brand-navy mb-6">
            Total estimate: ₹{totalCost.toLocaleString('en-IN')} for {travelers} travelers
          </div>
          <button
            onClick={handleEnquireWithEstimate}
            className="w-full py-3.5 bg-brand-cta text-white font-bold rounded-lg text-sm hover:bg-brand-cta/90 transition-colors shadow-sm"
          >
            Get exact quote with this estimate
          </button>
        </div>
      </div>
    </section>
  )
}
