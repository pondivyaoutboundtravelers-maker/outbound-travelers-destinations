'use client'

import React, { useState, useEffect } from 'react'
import { amritsarEvents } from '@/lib/amritsar/analytics'

type TripTypeKey = 'short' | 'family' | 'pilgrimage' | 'combo'
type TierKey = 'comfort' | 'premium' | 'luxury'
type AddonKey = 'dharamshala' | 'manali' | 'kashmir' | 'none'
type MonthKey = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'

const TIER_RATES: Record<TierKey, number> = {
  comfort: 2000,
  premium: 3500,
  luxury: 6000,
}

const TRIP_NIGHTS: Record<TripTypeKey, number> = {
  short: 2,
  family: 3,
  pilgrimage: 3,
  combo: 5,
}

const ADDON_NIGHTS: Record<AddonKey, number> = {
  dharamshala: 2,
  manali: 2,
  kashmir: 5,
  none: 0,
}

const TIER_LABELS: Record<TierKey, string> = {
  comfort: 'Comfort (3★)',
  premium: 'Premium (4★)',
  luxury: 'Luxury (5★)',
}

const TRIP_LABELS: Record<TripTypeKey, string> = {
  short: 'Short Trip (2N)',
  family: 'Family Heritage (3N)',
  pilgrimage: 'Pilgrimage Special (3N)',
  combo: 'Combo Tour (5N)',
}

const ADDON_LABELS: Record<AddonKey, string> = {
  dharamshala: 'Dharamshala (+2N)',
  manali: 'Manali (+2N)',
  kashmir: 'Kashmir (+5N)',
  none: 'None',
}

const MONTHS: MonthKey[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function CostEstimatorAmritsar() {
  const [travelers, setTravelers] = useState<number>(2)
  const [tripType, setTripType] = useState<TripTypeKey>('short')
  const [tier, setTier] = useState<TierKey>('comfort')
  const [flights, setFlights] = useState<boolean>(false)
  const [selectedMonth, setSelectedMonth] = useState<MonthKey>('Oct')
  const [addon, setAddon] = useState<AddonKey>('none')

  const [estRange, setEstRange] = useState<{ min: number; max: number }>({ min: 0, max: 0 })

  useEffect(() => {
    const baseNights = TRIP_NIGHTS[tripType]
    const addonNights = ADDON_NIGHTS[addon]
    const totalNights = baseNights + addonNights

    const rate = TIER_RATES[tier]
    
    // Peak surcharge
    const isPeakMonth = ['Nov', 'Dec', 'Jan', 'Feb'].includes(selectedMonth)
    const peakMultiplier = isPeakMonth ? 1.15 : 1.0

    // Flights cost
    const flightsCost = flights ? travelers * 8000 : 0

    // Core formula: (travelers × nights × tier_rate × peak_multiplier) + flights_cost
    const totalCost = (travelers * totalNights * rate * peakMultiplier) + flightsCost

    setEstRange({
      min: Math.round(totalCost * 0.85),
      max: Math.round(totalCost * 1.15),
    })
  }, [travelers, tripType, tier, flights, selectedMonth, addon])

  const handleEstimateTrigger = () => {
    const baseNights = TRIP_NIGHTS[tripType] + ADDON_NIGHTS[addon]
    amritsarEvents.costEstimatorUsed(travelers, baseNights, TIER_LABELS[tier])
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  const isPeak = ['Nov', 'Dec', 'Jan', 'Feb'].includes(selectedMonth)

  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="bg-white border border-[#A16207]/30 rounded-3xl p-6 md:p-10 shadow-sm">
        <div className="text-center max-w-md mx-auto mb-10">
          <span className="text-[11px] font-bold tracking-widest text-[#A16207] uppercase block mb-2">
            Instant Quote
          </span>
          <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
            Amritsar Tour Budget Estimator
          </h2>
          <p className="text-xs text-muted mt-2">
            Select your preferences below to calculate an approximate price range for your land and transfer rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Controls */}
          <div className="space-y-5">
            {/* Travelers Selector */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Number of Travelers:
              </span>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 4, 6].map((count) => {
                  const label = count === 1 ? '1' : count === 2 ? '2' : count === 4 ? 'Family (4)' : 'Group (6+)'
                  return (
                    <button
                      key={count}
                      onClick={() => setTravelers(count)}
                      className={`py-2.5 px-1 rounded-xl text-xs font-bold text-center border transition-all ${
                        travelers === count
                          ? 'bg-[#A16207] text-white border-[#A16207] shadow-sm'
                          : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Trip Type Selector */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Trip Category:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(TRIP_LABELS) as TripTypeKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setTripType(key)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold text-left border transition-all ${
                      tripType === key
                        ? 'bg-[#A16207] text-white border-[#A16207]'
                        : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                    }`}
                  >
                    {TRIP_LABELS[key]}
                  </button>
                ))}
              </div>
            </div>

            {/* Hotel Tier Selector */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Stay Class:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(TIER_RATES) as TierKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setTier(key)}
                    className={`py-2.5 px-1 rounded-xl text-[11px] font-bold text-center border transition-all ${
                      tier === key
                        ? 'bg-[#A16207] text-white border-[#A16207]'
                        : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                    }`}
                  >
                    {TIER_LABELS[key].split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Month Dropdown Selector */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Month of Travel:
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value as MonthKey)}
                className="w-full h-11 px-3 border border-border-soft rounded-xl text-xs font-bold text-brand-navy focus:outline-none focus:border-[#A16207]"
              >
                {MONTHS.map((m) => (
                  <option key={m} value={m}>
                    {m} {['Nov', 'Dec', 'Jan', 'Feb'].includes(m) ? ' (Peak Season)' : ''}
                  </option>
                ))}
              </select>
              {isPeak && (
                <span className="block text-[10px] font-semibold text-[#A16207] mt-1.5 bg-[#FEF3C7] px-2 py-0.5 rounded w-fit">
                  Peak month selected: 15% season surcharge added.
                </span>
              )}
            </div>

            {/* Addon Selector */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Add-on Extension:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(ADDON_LABELS) as AddonKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setAddon(key)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold text-center border transition-all ${
                      addon === key
                        ? 'bg-[#A16207] text-white border-[#A16207]'
                        : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                    }`}
                  >
                    {ADDON_LABELS[key]}
                  </button>
                ))}
              </div>
            </div>

            {/* Flights Toggle */}
            <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-border-soft">
              <div>
                <span className="block text-xs font-bold text-brand-navy uppercase">Include Flight Booking?</span>
                <span className="text-[10px] text-muted block mt-0.5">Approx flat ₹8,000 per person from South India</span>
              </div>
              <button
                onClick={() => setFlights(!flights)}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-250 ${
                  flights ? 'bg-[#A16207]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-250 ${
                    flights ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Range Card */}
          <div className="bg-[#FEF3C7]/40 border border-[#A16207]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-bold text-[#A16207] uppercase tracking-widest block mb-2">
                Estimated Price Range
              </span>
              <div className="text-3xl md:text-4xl font-bold font-fraunces text-brand-navy leading-none">
                ₹{estRange.min.toLocaleString('en-IN')} - ₹{estRange.max.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-muted block mt-2 font-medium">
                *Estimated total rate for {travelers} traveler(s), {TRIP_NIGHTS[tripType] + ADDON_NIGHTS[addon]} nights in {TIER_LABELS[tier].split(' ')[0]}.
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <div className="bg-white/90 border border-[#A16207]/10 rounded-xl p-3 text-xs text-muted font-medium space-y-1.5 shadow-sm">
                <div className="flex justify-between">
                  <span>Selected Trip:</span>
                  <span className="font-bold text-brand-navy">{TRIP_LABELS[tripType]}</span>
                </div>
                {addon !== 'none' && (
                  <div className="flex justify-between">
                    <span>Add-on:</span>
                    <span className="font-bold text-[#A16207]">{ADDON_LABELS[addon]}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Hotel Stay Class:</span>
                  <span className="font-bold text-brand-navy">{TIER_LABELS[tier]}</span>
                </div>
                <div className="flex justify-between">
                  <span>Wagah transfers:</span>
                  <span className="font-bold text-emerald-600">Included</span>
                </div>
              </div>

              <button
                onClick={handleEstimateTrigger}
                className="w-full h-12 bg-[#A16207] hover:bg-[#A16207]/95 text-white font-bold rounded-xl transition-all shadow-md text-sm"
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
