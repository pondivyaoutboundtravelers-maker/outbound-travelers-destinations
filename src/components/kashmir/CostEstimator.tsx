'use client'

import React, { useState, useEffect } from 'react'
import { kashmirEvents } from '@/lib/kashmir/analytics'

export default function CostEstimator() {
  const [travelers, setTravelers] = useState<number>(4)
  const [nights, setNights] = useState<number>(6)
  const [tier, setTier] = useState<string>('4star')

  const [totalCost, setTotalCost] = useState(0)
  const [perPersonCost, setPerPersonCost] = useState(0)

  useEffect(() => {
    const rate = tier === '3star' ? 2500 : tier === '4star' ? 3500 : 5000
    const calculated = nights * travelers * rate
    setTotalCost(calculated)
    setPerPersonCost(calculated / travelers)
  }, [travelers, nights, tier])

  const handleSliderChange = (type: 'travelers' | 'nights', val: number) => {
    if (type === 'travelers') setTravelers(val)
    if (type === 'nights') setNights(val)
    kashmirEvents.costEstimatorUsed(travelers, nights, tier)
  }

  const handleTierChange = (newTier: string) => {
    setTier(newTier)
    kashmirEvents.costEstimatorUsed(travelers, nights, newTier)
  }

  const handleEnquireWithEstimate = () => {
    kashmirEvents.finalCtaClick('Cost Estimator Estimate')
    window.dispatchEvent(
      new CustomEvent('openLeadForm', {
        detail: { prefill: { travelers, nights } },
      })
    )
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto bg-cream rounded-3xl my-8 md:my-12">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Estimate Your Kashmir Trip Cost
      </h2>
      <p className="text-center text-muted mb-10 max-w-xl mx-auto text-sm">
        Move the sliders to see an estimate. The exact quote depends on your travel dates, flight pricing, and the experiences you add.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Sliders Control */}
        <div className="space-y-6">
          {/* Travelers */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-brand-navy">Number of Travelers</label>
              <span className="text-sm font-bold text-kashmir-accent bg-kashmir-soft px-2.5 py-0.5 rounded">
                {travelers} {travelers === 1 ? 'person' : 'people'}
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="10"
              value={travelers}
              onChange={(e) => handleSliderChange('travelers', parseInt(e.target.value, 10))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1F6E3F]"
            />
          </div>

          {/* Nights */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-brand-navy">Nights</label>
              <span className="text-sm font-bold text-kashmir-accent bg-kashmir-soft px-2.5 py-0.5 rounded">
                {nights} {nights === 1 ? 'night' : 'nights'}
              </span>
            </div>
            <input
              type="range"
              min="4"
              max="10"
              value={nights}
              onChange={(e) => handleSliderChange('nights', parseInt(e.target.value, 10))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1F6E3F]"
            />
          </div>

          {/* Hotel Tier */}
          <div>
            <label className="block text-sm font-bold text-brand-navy mb-3">Hotel Class</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: '3star', lbl: '3★ Comfort' },
                { val: '4star', lbl: '4★ Premium' },
                { val: '5star', lbl: '5★ Luxury' },
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => handleTierChange(item.val)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors ${
                    tier === item.val
                      ? 'text-white border-transparent'
                      : 'text-brand-navy bg-white border-border-soft hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: tier === item.val ? '#1F6E3F' : undefined,
                  }}
                >
                  {item.lbl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Display Output */}
        <div className="bg-white p-6 rounded-2xl border border-border-soft text-center shadow-sm">
          <div className="mb-6">
            <span className="text-xs uppercase font-bold text-muted block mb-1">Estimated Cost</span>
            <span className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
              From ₹{perPersonCost.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-muted block mt-1">per person (land-only)</span>
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
