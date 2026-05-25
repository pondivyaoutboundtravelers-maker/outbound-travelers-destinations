'use client'

import React, { useState } from 'react'
import { lakshadweepData } from '@/lib/lakshadweep/data'
import { lakshadweepEvents } from '@/lib/lakshadweep/analytics'

export default function ItineraryAccordionLakshadweep() {
  const [openDay, setOpenDay] = useState<number>(1)

  const toggleDay = (day: number) => {
    if (openDay !== day) {
      setOpenDay(day)
      lakshadweepEvents.itineraryExpand(day)
    } else {
      setOpenDay(0)
    }
  }

  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="text-center mb-10">
        <span className="text-[11px] font-bold tracking-widest text-[#06B6D4] uppercase block mb-3">
          Daily Flow
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Typical 5-Day Island Itinerary
        </h2>
        <p className="text-sm text-muted mt-2">
          Your actual itinerary depends on flight timings and island selection.
        </p>
      </div>

      <div className="space-y-4">
        {lakshadweepData.itinerary.map((day) => {
          const isOpen = openDay === day.day
          return (
            <div 
              key={day.day} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'border-[#06B6D4] bg-white shadow-md' : 'border-border-soft bg-white hover:border-[#06B6D4]/30 hover:bg-gray-50'
              }`}
            >
              <button
                onClick={() => toggleDay(day.day)}
                className="w-full flex items-center justify-between p-5 md:p-6 focus:outline-none"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold transition-colors ${
                    isOpen ? 'bg-[#CFFAFE] text-[#06B6D4]' : 'bg-gray-100 text-muted'
                  }`}>
                    D{day.day}
                  </div>
                  <div>
                    <h3 className={`font-bold font-fraunces text-base md:text-lg transition-colors ${
                      isOpen ? 'text-brand-navy' : 'text-brand-navy/80'
                    }`}>
                      {day.title}
                    </h3>
                  </div>
                </div>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#06B6D4]' : 'text-muted'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 md:p-6 pt-0 border-t border-gray-100 mt-2">
                  <p className="text-sm text-muted leading-relaxed font-medium mb-4">
                    {day.description}
                  </p>
                  
                  {day.day === 2 && (
                    <div className="bg-[#CFFAFE]/50 border border-[#06B6D4]/20 rounded-lg p-3 mb-4 inline-flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-wider">
                        Snorkelling included in package
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {day.highlights.map((hl, idx) => (
                      <span key={idx} className="bg-gray-100 text-muted text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        {hl}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Stay: {day.stay}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
