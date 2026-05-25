'use client'

import React, { useState } from 'react'
import { amritsarData } from '@/lib/amritsar/data'
import { amritsarEvents } from '@/lib/amritsar/analytics'

export default function ItineraryAccordionAmritsar() {
  const [openDay, setOpenDay] = useState<number | null>(1)

  const toggleDay = (day: number) => {
    const isNowOpen = openDay === day ? null : day
    setOpenDay(isNowOpen)
    if (isNowOpen !== null) {
      amritsarEvents.itineraryExpand(day)
    }
  }

  const handleLeadTrigger = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#A16207] uppercase block mb-3">
          Daily Plan
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Suggested 2N/3D Amritsar Itinerary
        </h2>
        <p className="text-xs md:text-sm text-muted mt-2 leading-relaxed">
          A blueprint designed to balance early morning spirituality with high-spirited border ceremonies and street food walks.
        </p>
      </div>

      <div className="space-y-4">
        {amritsarData.itinerary.map((dayItem) => {
          const isOpen = openDay === dayItem.day

          return (
            <div
              key={dayItem.day}
              className="border border-border-soft rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
            >
              {/* Accordion Trigger */}
              <button
                onClick={() => toggleDay(dayItem.day)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 flex-1 pr-4">
                  <span className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#A16207] font-bold flex items-center justify-center flex-shrink-0 text-sm md:text-base">
                    D{dayItem.day}
                  </span>
                  <div>
                    <h3 className="font-fraunces font-bold text-brand-navy text-sm md:text-base leading-tight">
                      {dayItem.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#A16207]">
                        Stay: {dayItem.stay}
                      </span>
                      {dayItem.day === 2 && (
                        <span className="inline-block bg-[#FEF3C7] text-[#A16207] text-[9px] font-bold px-2.5 py-0.5 rounded border border-[#A16207]/30">
                          Early start recommended — 4am Golden Temple is the highlight of the trip.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <span className="text-brand-navy flex-shrink-0">
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-5 pb-6 md:px-6 md:pb-8 border-t border-border-soft pt-4 animate-slide-down">
                  <p className="text-sm md:text-base text-muted leading-relaxed mb-4 font-medium">
                    {dayItem.description}
                  </p>

                  <div className="bg-[#FEF3C7]/20 rounded-xl p-4 border border-[#A16207]/10">
                    <h4 className="text-xs font-bold uppercase text-[#A16207] tracking-wider mb-2">
                      Key Highlights for Today
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dayItem.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="bg-[#FEF3C7] text-[#A16207] text-xs font-semibold px-3 py-1 rounded-full border border-[#A16207]/10"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={handleLeadTrigger}
          className="px-6 py-3 bg-[#A16207] hover:bg-[#A16207]/95 text-white font-bold rounded-xl transition-all text-sm shadow-md"
        >
          Download PDF Itinerary
        </button>
      </div>
    </section>
  )
}
