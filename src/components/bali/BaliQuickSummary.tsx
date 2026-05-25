import React from 'react'
import { baliData } from '@/lib/bali/data'

export default function BaliQuickSummary() {
  const { duration, bestSeason, startingFrom, tripTypes } = baliData.quickSummary

  return (
    <section className="bg-white border-y border-border-soft">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x-0 md:divide-x divide-border-soft">
          {/* Duration */}
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center mb-3 text-[#D97706]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-[10px] text-muted uppercase font-bold tracking-wider mb-1">Duration</span>
            <span className="text-sm font-semibold text-brand-navy">{duration}</span>
          </div>

          {/* Best Season */}
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center mb-3 text-[#D97706]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <span className="text-[10px] text-muted uppercase font-bold tracking-wider mb-1">Best Season</span>
            <span className="text-sm font-semibold text-brand-navy">{bestSeason}</span>
          </div>

          {/* Starting From */}
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center mb-3 text-[#D97706]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-[10px] text-muted uppercase font-bold tracking-wider mb-1">Starting From</span>
            <span className="text-sm font-semibold text-brand-navy">{startingFrom}</span>
          </div>

          {/* Trip Types */}
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center mb-3 text-[#D97706]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-[10px] text-muted uppercase font-bold tracking-wider mb-1">Trip Types</span>
            <span className="text-sm font-semibold text-brand-navy">{tripTypes}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
