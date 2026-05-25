'use client'

import React, { useState } from 'react'
import { baliData } from '@/lib/bali/data'
import { baliEvents } from '@/lib/bali/analytics'

export default function ItineraryAccordionBali() {
  const [openDay, setOpenDay] = useState<number | null>(1)

  const toggleDay = (dayNum: number) => {
    if (openDay === dayNum) {
      setOpenDay(null)
    } else {
      setOpenDay(dayNum)
      baliEvents.itineraryExpand(dayNum)
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        A Typical 7-Day Bali Route
      </h2>
      <p className="text-center text-muted mb-10 text-sm md:text-base">
        This is our most popular pacing for first-timers. Fully adjustable for your flights and preferences.
      </p>

      <div className="space-y-4">
        {baliData.itinerary.map((day) => {
          const isOpen = openDay === day.day
          return (
            <div
              key={day.day}
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                isOpen ? 'border-[#D97706] bg-white shadow-sm' : 'border-border-soft bg-white hover:bg-gray-50'
              }`}
            >
              {/* Header Button */}
              <button
                onClick={() => toggleDay(day.day)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    isOpen ? 'bg-[#D97706] text-white' : 'bg-gray-100 text-brand-navy'
                  }`}>
                    D{day.day}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-base md:text-lg leading-tight">
                      {day.title}
                    </h3>
                    <span className="text-xs text-muted mt-1 block">Stay: {day.stay}</span>
                  </div>
                </div>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D97706]' : 'text-gray-400'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Expandable Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 md:p-5 pt-0 border-t border-border-soft/50 ml-14 md:ml-16">
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {day.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {day.highlights.map((h, i) => (
                      <span key={i} className="inline-block bg-[#FEF3C7] text-[#D97706] text-xs px-2.5 py-1 rounded font-medium">
                        {h}
                      </span>
                    ))}
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
