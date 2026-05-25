'use client'

import React, { useState } from 'react'
import { keralaData } from '@/lib/kerala/data'
import { keralaEvents } from '@/lib/kerala/analytics'

export default function ItineraryAccordionKerala() {
  const [openDay, setOpenDay] = useState<number>(1)

  const toggleDay = (day: number) => {
    const next = openDay === day ? 0 : day
    setOpenDay(next)
    if (next !== 0) keralaEvents.itineraryExpand(day)
  }

  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#047857] uppercase block mb-3">
          Daily Plan
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Suggested 5N/6D Kerala Itinerary
        </h2>
        <p className="text-xs md:text-sm text-muted mt-2 leading-relaxed">
          Based on the Honeymoon Classic circuit. Every element is adjustable — add regions, swap nights, extend to 7 days.
        </p>
      </div>

      <div className="space-y-4">
        {keralaData.itinerary.map((dayItem) => {
          const isOpen = openDay === dayItem.day
          const hasNote = 'note' in dayItem && dayItem.note

          // Badge color by day
          const badgeColor =
            dayItem.day === 2
              ? 'bg-amber-50 text-amber-700 border-amber-200'
              : dayItem.day === 4
              ? 'bg-emerald-50 text-[#047857] border-emerald-200'
              : 'bg-gray-50 text-muted border-border-soft'

          return (
            <div
              key={dayItem.day}
              className="border border-border-soft rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleDay(dayItem.day)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 flex-1 pr-4 min-w-0">
                  <span className="w-10 h-10 rounded-xl bg-[#FAF6F0] text-[#047857] font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    D{dayItem.day}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-fraunces font-bold text-brand-navy text-sm md:text-base leading-tight truncate">
                      {dayItem.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#047857]">
                        Stay: {dayItem.stay}
                      </span>
                      {hasNote && 'noteBadge' in dayItem && (
                        <span className={`inline-block text-[9px] font-bold px-2.5 py-0.5 rounded border uppercase tracking-wider ${badgeColor}`}>
                          {(dayItem as { noteBadge?: string }).noteBadge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-brand-navy flex-shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 md:px-6 md:pb-8 border-t border-border-soft pt-4">
                  {hasNote && (
                    <div className={`mb-4 rounded-xl px-4 py-3 border text-xs font-medium ${badgeColor}`}>
                      <strong className="block text-[10px] uppercase tracking-wider mb-1">
                        {'noteBadge' in dayItem ? (dayItem as { noteBadge?: string }).noteBadge : 'Note'}
                      </strong>
                      {(dayItem as { note?: string }).note}
                    </div>
                  )}
                  <p className="text-sm md:text-base text-muted leading-relaxed mb-4 font-medium">
                    {dayItem.description}
                  </p>
                  <div className="bg-[#FAF6F0] rounded-xl p-4 border border-[#047857]/10">
                    <h4 className="text-[10px] font-bold uppercase text-[#047857] tracking-wider mb-2">
                      Today&apos;s Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dayItem.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="bg-white text-[#047857] text-xs font-semibold px-3 py-1 rounded-full border border-[#047857]/15"
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
          onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
          className="px-6 py-3 bg-[#047857] hover:bg-[#047857]/95 text-white font-bold rounded-xl text-sm shadow-md transition-all"
        >
          Customise This Itinerary
        </button>
      </div>
    </section>
  )
}
