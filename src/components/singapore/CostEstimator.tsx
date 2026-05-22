'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sliders, CreditCard, ChevronRight, HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react'

export default function CostEstimator() {
  const [travelers, setTravelers] = useState<number>(4)
  const [nights, setNights] = useState<number>(5)
  const [stayClass, setStayClass] = useState<string>('4star')
  
  // Excursions Addons
  const [addUss, setAddUss] = useState<boolean>(true)
  const [addSafari, setAddSafari] = useState<boolean>(true)
  const [addCruise, setAddCruise] = useState<boolean>(false)
  const [addYacht, setAddYacht] = useState<boolean>(false)

  const [totalCost, setTotalCost] = useState<number>(0)
  const [perPersonCost, setPerPersonCost] = useState<number>(0)

  useEffect(() => {
    // Advanced Fintech Formula for Singapore land+addons
    const baseLandRatePerNight = stayClass === '3star' ? 9500 : stayClass === '4star' ? 14500 : 26000
    
    // Base land package estimation
    let landCost = baseLandRatePerNight * nights
    
    // Addons rates (per person)
    let addonRates = 0
    if (addUss) addonRates += 8500
    if (addSafari) addonRates += 3800
    if (addCruise) addonRates += 38000
    if (addYacht) addonRates += 12000

    const perPersonCalculated = landCost + addonRates
    const totalCalculated = perPersonCalculated * travelers

    setPerPersonCost(perPersonCalculated)
    setTotalCost(totalCalculated)
  }, [travelers, nights, stayClass, addUss, addSafari, addCruise, addYacht])

  const handleEnquireWithEstimate = () => {
    let specialReq = `Estimated via Singapore Fintech Calculator: ${nights} Nights, stay class: ${stayClass}. Addons: `
    const addons = []
    if (addUss) addons.push('Universal Studios VIP')
    if (addSafari) addons.push('Night Safari Tram')
    if (addCruise) addons.push('Spectrum Cruise')
    if (addYacht) addons.push('Private Sunset Yacht')
    specialReq += addons.length > 0 ? addons.join(', ') : 'None'

    window.dispatchEvent(
      new CustomEvent('openLeadForm', {
        detail: {
          prefill: {
            travelers,
            nights,
            specialReq
          }
        }
      })
    )
  }

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-cream text-dark-text overflow-hidden">
      {/* Background lights overlay */}
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-teal-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-coral/5 blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-teal-primary font-inter block mb-3">
            Interactive Telemetry
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-fraunces font-bold text-dark-text leading-tight">
            Singapore Cost Estimator
          </h2>
          <p className="text-sm md:text-base text-medium-text font-inter max-w-xl mx-auto mt-3 leading-relaxed">
            Move sliders, toggle luxury accommodation tiers, and select high-fidelity excursions to calculate real-time custom estimates.
          </p>
          <div className="w-12 h-1 bg-teal-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Fintech Dashboard Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders controls column */}
          <div className="lg:col-span-7 backdrop-blur-xl bg-white/70 border border-teal-primary/10 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(13,148,136,0.05)]">
            
            {/* Sliders Header */}
            <div className="flex items-center gap-3 border-b border-teal-primary/10 pb-4">
              <Sliders className="w-5 h-5 text-coral" />
              <h3 className="text-base font-bold font-inter text-dark-text uppercase tracking-wider">
                Parameter Modulators
              </h3>
            </div>

            {/* Sliders Fields */}
            <div className="space-y-5">
              {/* Travelers */}
              <div>
                <div className="flex justify-between items-center mb-2 font-inter text-xs">
                  <label className="font-bold text-medium-text uppercase tracking-wider">Number of Travelers</label>
                  <span className="font-bold text-teal-primary bg-teal-light border border-teal-primary/20 px-2.5 py-0.5 rounded-full">
                    {travelers} {travelers === 1 ? 'traveler' : 'travelers'}
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value, 10))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
                />
              </div>

              {/* Nights */}
              <div>
                <div className="flex justify-between items-center mb-2 font-inter text-xs">
                  <label className="font-bold text-medium-text uppercase tracking-wider">Paced Duration</label>
                  <span className="font-bold text-teal-primary bg-teal-light border border-teal-primary/20 px-2.5 py-0.5 rounded-full">
                    {nights} {nights === 1 ? 'night' : 'nights'}
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="8"
                  value={nights}
                  onChange={(e) => setNights(parseInt(e.target.value, 10))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
                />
              </div>
            </div>

            {/* Accommodation Tier Selectors */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-medium-text uppercase tracking-wider font-inter">
                Luxury Stay Tier Selector
              </label>
              
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: '3star', title: '3★ Comfort' },
                  { id: '4star', title: '4★ Premium' },
                  { id: '5star', title: '5★ Flagship' }
                ].map((tier) => {
                  const isSelected = stayClass === tier.id
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setStayClass(tier.id)}
                      className={`py-3 px-2 rounded-2xl text-[11px] font-bold font-inter tracking-wider uppercase border transition-all duration-300 ${
                        isSelected
                          ? 'bg-teal-primary border-transparent text-white shadow-[0_4px_15px_rgba(13,148,136,0.3)]'
                          : 'bg-white border-teal-primary/10 text-medium-text hover:bg-teal-light/50 hover:text-teal-primary'
                      }`}
                    >
                      {tier.title}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Excursions Checkboxes Grid */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-medium-text uppercase tracking-wider font-inter">
                Add-on Premium Excursion Feeds
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* USS */}
                <button
                  onClick={() => setAddUss(!addUss)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ${
                    addUss ? 'bg-white border-teal-primary/30 shadow-[0_4px_15px_rgba(13,148,136,0.1)]' : 'bg-white/50 border-teal-primary/10 opacity-70'
                  }`}
                >
                  <span className={`text-xs font-bold font-inter ${addUss ? 'text-teal-primary' : 'text-medium-text'}`}>Universal VIP passes</span>
                  <input
                    type="checkbox"
                    checked={addUss}
                    readOnly
                    className="w-3.5 h-3.5 rounded text-teal-primary bg-white border-teal-primary/20 shrink-0 cursor-pointer pointer-events-none"
                  />
                </button>

                {/* Night Safari */}
                <button
                  onClick={() => setAddSafari(!addSafari)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ${
                    addSafari ? 'bg-white border-teal-primary/30 shadow-[0_4px_15px_rgba(13,148,136,0.1)]' : 'bg-white/50 border-teal-primary/10 opacity-70'
                  }`}
                >
                  <span className={`text-xs font-bold font-inter ${addSafari ? 'text-teal-primary' : 'text-medium-text'}`}>Night Safari Tram</span>
                  <input
                    type="checkbox"
                    checked={addSafari}
                    readOnly
                    className="w-3.5 h-3.5 rounded text-teal-primary bg-white border-teal-primary/20 shrink-0 cursor-pointer pointer-events-none"
                  />
                </button>

                {/* Cruise Combo */}
                <button
                  onClick={() => setAddCruise(!addCruise)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ${
                    addCruise ? 'bg-white border-teal-primary/30 shadow-[0_4px_15px_rgba(13,148,136,0.1)]' : 'bg-white/50 border-teal-primary/10 opacity-70'
                  }`}
                >
                  <span className={`text-xs font-bold font-inter ${addCruise ? 'text-teal-primary' : 'text-medium-text'}`}>Spectrum Cruise Cabin</span>
                  <input
                    type="checkbox"
                    checked={addCruise}
                    readOnly
                    className="w-3.5 h-3.5 rounded text-teal-primary bg-white border-teal-primary/20 shrink-0 cursor-pointer pointer-events-none"
                  />
                </button>

                {/* Yacht Sunset */}
                <button
                  onClick={() => setAddYacht(!addYacht)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ${
                    addYacht ? 'bg-white border-teal-primary/30 shadow-[0_4px_15px_rgba(13,148,136,0.1)]' : 'bg-white/50 border-teal-primary/10 opacity-70'
                  }`}
                >
                  <span className={`text-xs font-bold font-inter ${addYacht ? 'text-teal-primary' : 'text-medium-text'}`}>Private Sunset Yacht</span>
                  <input
                    type="checkbox"
                    checked={addYacht}
                    readOnly
                    className="w-3.5 h-3.5 rounded text-teal-primary bg-white border-teal-primary/20 shrink-0 cursor-pointer pointer-events-none"
                  />
                </button>

              </div>
            </div>

          </div>

          {/* Estimates Output Panel */}
          <div className="lg:col-span-5 relative group">
            
            {/* Spotlight neon active border */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-primary to-coral rounded-3xl opacity-20 blur-[2px] group-hover:opacity-40 transition-opacity pointer-events-none -z-10" />

            <div className="relative h-full backdrop-blur-xl bg-white border border-teal-primary/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-center overflow-hidden z-10 shadow-[0_20px_60px_rgba(13,148,136,0.15)]">
              
              {/* Decorative radial overlay */}
              <div className="absolute top-0 left-0 right-0 h-36 bg-[radial-gradient(circle_at_top,rgba(13,148,136,0.1),transparent_70%)] pointer-events-none -z-10" />

              <div className="space-y-6">
                
                {/* Header title */}
                <div className="flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4 text-teal-primary" />
                  <span className="text-xs uppercase font-bold tracking-widest text-teal-primary font-inter">Estimated Luxury Cost</span>
                </div>

                {/* Price tags */}
                <div className="space-y-1.5 py-4">
                  <span className="text-[10px] font-bold text-coral uppercase tracking-widest font-inter block">From Land Only</span>
                  <span className="text-4xl sm:text-5xl font-fraunces font-bold text-dark-text tracking-tight">
                    ₹{perPersonCost.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-medium-text block font-inter">per person (twin-sharing)</span>
                </div>

                {/* Telemetry total indicators */}
                <div className="bg-sky-light border border-teal-primary/10 py-3 px-5 rounded-2xl inline-block text-xs font-semibold text-medium-text font-inter">
                  Total Blueprint Cost: <span className="text-teal-primary font-bold">₹{totalCost.toLocaleString('en-IN')}</span> for {travelers} travelers
                </div>

                {/* Bullets notes */}
                <div className="space-y-2 text-left max-w-xs mx-auto text-[11px] text-medium-text font-inter font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                    Includes hotel staying & breakfast
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                    Includes all private chauffeur airport transits
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                    Visa documentation & fees fully included
                  </div>
                </div>

              </div>

              {/* Lead trigger CTA */}
              <div className="pt-8">
                <button
                  onClick={handleEnquireWithEstimate}
                  className="w-full py-4 bg-coral hover:bg-red-500 text-white font-bold rounded-2xl text-xs tracking-wider uppercase font-inter transition-all shadow-[0_8px_20px_rgba(255,107,107,0.3)] hover:shadow-[0_8px_25px_rgba(255,107,107,0.4)] border border-coral/20"
                >
                  Generate Precise Quote
                </button>
                
                <span className="text-[10px] text-medium-text block mt-3 font-inter">
                  Consultation is completely free of charge. No obligations.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
