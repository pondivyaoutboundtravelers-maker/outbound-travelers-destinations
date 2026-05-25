'use client'

import React, { useState, useEffect } from 'react'
import { keralaEvents } from '@/lib/kerala/analytics'

type TripTypeKey = 'Honeymoon' | 'Family' | 'Wellness' | 'Luxury' | 'Backwater-Beach'
type TierKey = 'Comfort' | 'Premium' | 'Luxury'
type HouseboatKey = 'Standard 1BHK' | 'Premium 2BHK' | 'Luxury'
type MonthKey = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'

const TIER_RATES: Record<TierKey, number> = { Comfort: 2500, Premium: 4000, Luxury: 7000 }
const HOUSEBOAT_SURCHARGE: Record<HouseboatKey, number> = { 'Standard 1BHK': 0, 'Premium 2BHK': 2000, Luxury: 5000 }
const TRIP_NIGHTS: Record<TripTypeKey, number> = { Honeymoon: 5, Family: 6, Wellness: 7, Luxury: 6, 'Backwater-Beach': 4 }
const PEAK_MONTHS: MonthKey[] = ['Dec', 'Jan', 'Feb']
const MONTHS: MonthKey[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const ALL_CITIES = ['Kochi', 'Munnar', 'Thekkady', 'Alleppey', 'Kumarakom', 'Kovalam', 'Varkala', 'Wayanad']

export default function CostEstimatorKerala() {
  const [travelers, setTravelers] = useState<number>(2)
  const [tripType, setTripType] = useState<TripTypeKey>('Honeymoon')
  const [tier, setTier] = useState<TierKey>('Premium')
  const [houseboat, setHouseboat] = useState<HouseboatKey>('Standard 1BHK')
  const [wellness, setWellness] = useState<boolean>(false)
  const [flights, setFlights] = useState<boolean>(false)
  const [month, setMonth] = useState<MonthKey>('Oct')
  const [selectedCities, setSelectedCities] = useState<string[]>(['Munnar', 'Alleppey', 'Kovalam'])
  const [range, setRange] = useState({ min: 0, max: 0 })

  const toggleCity = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    )
  }

  useEffect(() => {
    const nights = TRIP_NIGHTS[tripType]
    const rate = TIER_RATES[tier]
    const isPeak = PEAK_MONTHS.includes(month)
    const peakMultiplier = isPeak ? 1.2 : 1.0
    const wellnessCost = wellness ? travelers * 8000 : 0
    const flightsCost = flights ? travelers * 5000 : 0
    const hbSurcharge = HOUSEBOAT_SURCHARGE[houseboat]
    const base = travelers * nights * rate * peakMultiplier + hbSurcharge + wellnessCost + flightsCost
    setRange({ min: Math.round(base * 0.85), max: Math.round(base * 1.15) })
  }, [travelers, tripType, tier, houseboat, wellness, flights, month])

  useEffect(() => {
    keralaEvents.costEstimatorUsed(travelers, TRIP_NIGHTS[tripType], tier)
  }, [travelers, tripType, tier])

  const isPeak = PEAK_MONTHS.includes(month)

  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-20">
      <div className="bg-white border border-[#047857]/25 rounded-3xl p-6 md:p-10 shadow-sm">
        <div className="text-center max-w-md mx-auto mb-10">
          <span className="text-[11px] font-bold tracking-widest text-[#047857] uppercase block mb-2">
            Instant Estimate
          </span>
          <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
            Kerala Trip Budget Calculator
          </h2>
          <p className="text-xs text-muted mt-2">
            Kerala-specific — includes houseboat tier, city mix, and wellness add-ons.
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
                      travelers === n ? 'bg-[#047857] text-white border-[#047857]' : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
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
              <div className="grid grid-cols-2 gap-2">
                {(['Honeymoon', 'Family', 'Wellness', 'Luxury', 'Backwater-Beach'] as TripTypeKey[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTripType(t)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border text-left transition-all ${
                      tripType === t ? 'bg-[#047857] text-white border-[#047857]' : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                    }`}
                  >
                    {t} <span className="opacity-70">({TRIP_NIGHTS[t]}N)</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hotel Tier */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Hotel Tier</span>
              <div className="grid grid-cols-3 gap-2">
                {(['Comfort', 'Premium', 'Luxury'] as TierKey[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTier(t)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      tier === t ? 'bg-[#047857] text-white border-[#047857]' : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Houseboat Tier — Kerala-unique */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Houseboat Tier
                <span className="ml-1.5 text-[#047857] normal-case font-normal">(Kerala-specific)</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {(['Standard 1BHK', 'Premium 2BHK', 'Luxury'] as HouseboatKey[]).map((h) => (
                  <button
                    key={h}
                    onClick={() => setHouseboat(h)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold border text-center transition-all ${
                      houseboat === h ? 'bg-[#047857] text-white border-[#047857]' : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>

            {/* Cities — Kerala-unique multi-select */}
            <div>
              <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Cities / Regions
              </span>
              <div className="flex flex-wrap gap-2">
                {ALL_CITIES.map((city) => (
                  <button
                    key={city}
                    onClick={() => toggleCity(city)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                      selectedCities.includes(city)
                        ? 'bg-[#047857] text-white border-[#047857]'
                        : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Month */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                Travel Month
              </label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value as MonthKey)}
                className="w-full h-11 px-3 border border-border-soft rounded-xl text-xs font-bold text-brand-navy focus:outline-none focus:border-[#047857]"
              >
                {MONTHS.map((m) => (
                  <option key={m} value={m}>
                    {m}{PEAK_MONTHS.includes(m) ? ' (Peak — +20%)' : ''}
                  </option>
                ))}
              </select>
              {isPeak && (
                <span className="block text-[10px] font-semibold text-[#047857] mt-1.5 bg-[#FAF6F0] px-2 py-0.5 rounded w-fit border border-[#047857]/20">
                  Peak month — 20% season surcharge applied
                </span>
              )}
            </div>

            {/* Toggles */}
            <div className="space-y-3">
              {[
                { label: 'Wellness / Ayurveda Add-on', sub: '+₹8,000 per person', value: wellness, set: setWellness },
                { label: 'Include Flights', sub: '+₹5,000 per person from South India', value: flights, set: setFlights },
              ].map(({ label, sub, value, set }) => (
                <div key={label} className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-border-soft">
                  <div>
                    <span className="block text-xs font-bold text-brand-navy">{label}</span>
                    <span className="text-[10px] text-muted">{sub}</span>
                  </div>
                  <button
                    onClick={() => set(!value)}
                    className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-200 ${value ? 'bg-[#047857]' : 'bg-gray-300'}`}
                  >
                    <div className={`bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-200 ${value ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-[#FAF6F0] border border-[#047857]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-bold text-[#047857] uppercase tracking-widest block mb-2">
                Estimated Total Range
              </span>
              <div className="text-3xl md:text-4xl font-bold font-fraunces text-brand-navy leading-none mb-2">
                ₹{range.min.toLocaleString('en-IN')} – ₹{range.max.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-muted font-medium">
                *For {travelers} traveler(s) · {TRIP_NIGHTS[tripType]} nights · {tier} tier
              </span>
            </div>

            <div className="mt-8 space-y-3">
              <div className="bg-white/90 border border-[#047857]/10 rounded-xl p-3 text-xs text-muted space-y-1.5 shadow-sm">
                <div className="flex justify-between">
                  <span>Trip type:</span>
                  <span className="font-bold text-brand-navy">{tripType} ({TRIP_NIGHTS[tripType]}N)</span>
                </div>
                <div className="flex justify-between">
                  <span>Houseboat:</span>
                  <span className="font-bold text-brand-navy">{houseboat}</span>
                </div>
                <div className="flex justify-between">
                  <span>Regions:</span>
                  <span className="font-bold text-brand-navy text-right">{selectedCities.slice(0, 3).join(', ')}{selectedCities.length > 3 ? '…' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span>Houseboat meals:</span>
                  <span className="font-bold text-emerald-600">Included</span>
                </div>
              </div>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
                className="w-full h-12 bg-[#047857] hover:bg-[#047857]/95 text-white font-bold rounded-xl text-sm shadow-md transition-all"
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
