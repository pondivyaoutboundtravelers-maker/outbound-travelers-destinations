'use client'

import React, { useState, useEffect } from 'react'
import { lakshadweepEvents } from '@/lib/lakshadweep/analytics'

type TripTypeKey = 'Honeymoon' | 'Family' | 'Snorkelling' | 'Luxury' | 'Adventure'
type TierKey = 'SPORTS Cottages' | 'Thinnakara Camp' | 'Agatti Beach Resort' | 'Bangaram Resort'
type MonthKey = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Oct' | 'Nov' | 'Dec' // Exclude monsoon

const TIER_RATES: Record<TierKey, number> = { 
  'SPORTS Cottages': 3500, 
  'Thinnakara Camp': 4500, 
  'Agatti Beach Resort': 5000, 
  'Bangaram Resort': 8000 
}
const TRIP_NIGHTS: Record<TripTypeKey, number> = { Honeymoon: 5, Family: 4, Snorkelling: 4, Luxury: 6, Adventure: 5 }
const MONTHS: MonthKey[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Oct', 'Nov', 'Dec']
const PEAK_MONTHS: MonthKey[] = ['Dec', 'Jan', 'Feb', 'Mar']

export default function CostEstimatorLakshadweep() {
  const [travelers, setTravelers] = useState<number>(2)
  const [tripType, setTripType] = useState<TripTypeKey>('Honeymoon')
  const [tier, setTier] = useState<TierKey>('Bangaram Resort')
  const [scuba, setScuba] = useState<boolean>(false)
  const [flights, setFlights] = useState<boolean>(true) // Usually true for Lakshadweep
  const [month, setMonth] = useState<MonthKey>('Nov')
  const [range, setRange] = useState({ min: 0, max: 0 })

  useEffect(() => {
    const nights = TRIP_NIGHTS[tripType]
    const rate = TIER_RATES[tier]
    const isPeak = PEAK_MONTHS.includes(month)
    const peakMultiplier = isPeak ? 1.2 : 1.0
    
    // Base cost: Accommodation + Meals (usually full board in Lakshadweep)
    let accCost = travelers * nights * rate * peakMultiplier
    
    // Add fixed permit costs approx 4000 per person
    const permitCost = travelers * 4000
    
    // Add flights approx 12000 return Kochi-Agatti
    const flightsCost = flights ? travelers * 12000 : 0
    
    // Scuba approx 3500 per dive, let's assume 2 dives per person
    const scubaCost = scuba ? travelers * 7000 : 0
    
    const base = accCost + permitCost + flightsCost + scubaCost
    setRange({ min: Math.round(base * 0.9), max: Math.round(base * 1.1) })
  }, [travelers, tripType, tier, scuba, flights, month])

  useEffect(() => {
    lakshadweepEvents.costEstimatorUsed(travelers, TRIP_NIGHTS[tripType], tier)
  }, [travelers, tripType, tier])

  const isPeak = PEAK_MONTHS.includes(month)

  const handleQuoteClick = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-20">
      <div className="bg-white border border-[#06B6D4]/25 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
        {/* Decor */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#CFFAFE] rounded-full opacity-50 -z-10 blur-2xl" />

        <div className="text-center max-w-md mx-auto mb-10">
          <span className="text-[11px] font-bold tracking-widest text-[#06B6D4] uppercase block mb-2">
            Instant Estimate
          </span>
          <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
            Lakshadweep Trip Budget Calculator
          </h2>
          <p className="text-xs text-muted mt-2">
            Includes estimated permit costs. Accommodation is strictly limited.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Controls */}
          <div className="space-y-6">
            {/* Travelers */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Travelers</span>
              <div className="grid grid-cols-4 gap-2">
                {([1, 2, 4, 6] as const).map((n) => (
                  <button
                    key={n}
                    onClick={() => setTravelers(n)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      travelers === n ? 'bg-[#06B6D4] text-white border-[#06B6D4]' : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                    }`}
                  >
                    {n === 1 ? 'Solo' : n === 2 ? 'Couple' : n === 4 ? 'Family' : 'Group'}
                  </button>
                ))}
              </div>
            </div>

            {/* Trip Type */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Trip Type</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(['Honeymoon', 'Family', 'Snorkelling', 'Luxury', 'Adventure'] as TripTypeKey[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTripType(t)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                      tripType === t ? 'bg-[#06B6D4] text-white border-[#06B6D4]' : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                    }`}
                  >
                    {t} <span className="opacity-70 text-[10px] block">({TRIP_NIGHTS[t]}N)</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Accommodation Tier */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Island Accommodation</span>
              <div className="grid grid-cols-2 gap-2">
                {(['SPORTS Cottages', 'Thinnakara Camp', 'Agatti Beach Resort', 'Bangaram Resort'] as TierKey[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTier(t)}
                    className={`py-2.5 px-2 rounded-xl text-[11px] sm:text-xs font-bold border text-center transition-all ${
                      tier === t ? 'bg-[#06B6D4] text-white border-[#06B6D4]' : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Month */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Travel Month (Monsoon Closed)
              </label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value as MonthKey)}
                className="w-full h-11 px-3 border border-border-soft rounded-xl text-xs font-bold text-brand-navy focus:outline-none focus:border-[#06B6D4]"
              >
                {MONTHS.map((m) => (
                  <option key={m} value={m}>
                    {m}{PEAK_MONTHS.includes(m) ? ' (Peak Demand)' : ''}
                  </option>
                ))}
              </select>
              {isPeak && (
                <span className="block text-[10px] font-semibold text-[#06B6D4] mt-1.5 bg-[#CFFAFE]/50 px-2 py-0.5 rounded w-fit border border-[#06B6D4]/20">
                  Peak month — book 60+ days early
                </span>
              )}
            </div>

            {/* Toggles */}
            <div className="space-y-3">
              {[
                { label: 'Kochi-Agatti Return Flights', sub: '+₹12,000 per person (approx)', value: flights, set: setFlights },
                { label: 'Add Scuba Diving', sub: '+₹7,000 per person (2 dives)', value: scuba, set: setScuba },
              ].map(({ label, sub, value, set }) => (
                <div key={label} className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-border-soft">
                  <div>
                    <span className="block text-xs font-bold text-brand-navy">{label}</span>
                    <span className="text-[10px] text-muted">{sub}</span>
                  </div>
                  <button
                    onClick={() => set(!value)}
                    className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-200 ${value ? 'bg-[#06B6D4]' : 'bg-gray-300'}`}
                  >
                    <div className={`bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-200 ${value ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-[#CFFAFE]/30 border border-[#06B6D4]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full relative">
            <div>
              <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest block mb-2">
                Estimated Total Range
              </span>
              <div className="text-3xl md:text-4xl font-bold font-fraunces text-brand-navy leading-none mb-2">
                ₹{range.min.toLocaleString('en-IN')} – ₹{range.max.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-muted font-medium">
                *For {travelers} traveler(s) · {TRIP_NIGHTS[tripType]} nights · {tier}
              </span>
            </div>

            <div className="mt-8 space-y-3">
              <div className="bg-white/90 border border-[#06B6D4]/10 rounded-xl p-3 text-xs text-muted space-y-1.5 shadow-sm">
                <div className="flex justify-between">
                  <span>Entry Permits:</span>
                  <span className="font-bold text-brand-navy">Estimated</span>
                </div>
                <div className="flex justify-between">
                  <span>Meals:</span>
                  <span className="font-bold text-brand-navy">Full Board</span>
                </div>
                <div className="flex justify-between">
                  <span>Flights:</span>
                  <span className="font-bold text-brand-navy">{flights ? 'Included' : 'Excluded'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className="font-bold text-amber-600">Checking Required</span>
                </div>
              </div>
              
              <div className="pt-2">
                <p className="text-[10px] text-amber-700 font-bold mb-2 text-center bg-amber-50 py-1 rounded border border-amber-200">
                  Accommodation is extremely limited.
                </p>
                <button
                  onClick={handleQuoteClick}
                  className="w-full h-12 bg-[#06B6D4] hover:bg-[#06B6D4]/95 text-white font-bold rounded-xl text-sm shadow-md transition-all"
                >
                  Get exact quote & check dates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
