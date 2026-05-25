'use client'

import React, { useState, useEffect } from 'react'
import { baliEvents } from '@/lib/bali/analytics'

export default function CostEstimatorBali() {
  const [travelers, setTravelers] = useState(2)
  const [nights, setNights] = useState(6)
  const [tier, setTier] = useState<3 | 4 | 5>(4) // 3-star, 4-star, 5-star/Villa
  const [totalCost, setTotalCost] = useState(0)

  // Base costs per person per night (rough illustrative formula)
  const tierMultipliers = {
    3: 3500, // ₹3,500 pp/pn
    4: 5500, // ₹5,500 pp/pn
    5: 8500, // ₹8,500 pp/pn (Villa/5-star)
  }

  const fixedCostPerPerson = 12000 // Fixed cost for transfers, basic sightseeing, boat trips etc

  useEffect(() => {
    // Calculate cost
    const accommodationAndFood = tierMultipliers[tier] * nights * travelers
    const fixedCosts = fixedCostPerPerson * travelers
    const total = accommodationAndFood + fixedCosts

    setTotalCost(total)
  }, [travelers, nights, tier])

  // Debounced analytics tracking
  useEffect(() => {
    const handler = setTimeout(() => {
      let tierLabel = '4-Star'
      if (tier === 3) tierLabel = '3-Star'
      if (tier === 5) tierLabel = '5-Star/Villa'
      baliEvents.costEstimatorUsed(travelers, nights, tierLabel)
    }, 1500) // Wait 1.5s after last interaction to fire event

    return () => clearTimeout(handler)
  }, [travelers, nights, tier])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleCtaClick = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border-soft">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl text-brand-navy font-bold mb-3">
            Quick Cost Estimator
          </h2>
          <p className="text-muted text-sm md:text-base">
            Get a rough idea of your land package cost. Flights are not included in this estimate.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          {/* Controls */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Travelers */}
            <div>
              <div className="flex justify-between text-sm font-semibold text-brand-navy mb-2">
                <span>Travelers</span>
                <span>{travelers} {travelers === 1 ? 'Person' : 'People'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={travelers}
                onChange={(e) => setTravelers(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D97706]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1 font-medium">
                <span>1</span>
                <span>12+</span>
              </div>
            </div>

            {/* Nights */}
            <div>
              <div className="flex justify-between text-sm font-semibold text-brand-navy mb-2">
                <span>Duration</span>
                <span>{nights} Nights</span>
              </div>
              <input
                type="range"
                min="3"
                max="14"
                value={nights}
                onChange={(e) => setNights(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D97706]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1 font-medium">
                <span>3N</span>
                <span>14N</span>
              </div>
            </div>

            {/* Hotel Tier */}
            <div>
              <div className="text-sm font-semibold text-brand-navy mb-3">
                Hotel Tier
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setTier(3)}
                  className={`py-2 text-xs font-bold rounded-md transition-colors ${
                    tier === 3 ? 'bg-[#D97706] text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  3-Star
                </button>
                <button
                  onClick={() => setTier(4)}
                  className={`py-2 text-xs font-bold rounded-md transition-colors ${
                    tier === 4 ? 'bg-[#D97706] text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  4-Star
                </button>
                <button
                  onClick={() => setTier(5)}
                  className={`py-2 text-xs font-bold rounded-md transition-colors ${
                    tier === 5 ? 'bg-[#D97706] text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  5-Star / Villa
                </button>
              </div>
            </div>
          </div>

          {/* Output Display */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-border-soft h-full min-h-[220px]">
            <span className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">Estimated Total</span>
            <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-4 font-fraunces">
              {formatCurrency(totalCost)}
            </div>
            <span className="text-xs text-muted mb-6 bg-white px-3 py-1 rounded-full shadow-sm border border-border-soft">
              ≈ {formatCurrency(Math.round(totalCost / travelers))} per person
            </span>
            
            <button
              onClick={handleCtaClick}
              className="w-full py-3.5 bg-brand-navy text-white font-bold rounded-xl shadow-md hover:bg-brand-navy/90 transition-colors flex items-center justify-center gap-2"
            >
              Get Exact Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
