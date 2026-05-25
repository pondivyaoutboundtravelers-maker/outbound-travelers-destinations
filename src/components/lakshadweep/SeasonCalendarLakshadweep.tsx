'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { lakshadweepData } from '@/lib/lakshadweep/data'
import { lakshadweepEvents } from '@/lib/lakshadweep/analytics'

type MonthStatus = 'best' | 'good' | 'avoid'

const STATUS_STYLES: Record<MonthStatus, { pill: string; badge: string; label: string }> = {
  best: { pill: 'bg-[#06B6D4] text-white border-[#06B6D4]', badge: 'bg-cyan-50 text-[#06B6D4] border-cyan-200', label: 'Prime Season' },
  good: { pill: 'bg-amber-500 text-white border-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200', label: 'Shoulder Season' },
  avoid: { pill: 'bg-red-600 text-white border-red-600', badge: 'bg-red-50 text-red-700 border-red-200', label: 'Islands Closed' },
}

export default function SeasonCalendarLakshadweep() {
  const [selectedMonth, setSelectedMonth] = useState<string>('Nov')

  const handleMonthClick = (m: string) => {
    setSelectedMonth(m)
    lakshadweepEvents.seasonFilterClick(m)
  }

  const activeMonth = lakshadweepData.months.find((m) => m.month === selectedMonth)
  const isAvoid = activeMonth?.rating === 'avoid'

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-[11px] font-bold tracking-widest text-[#06B6D4] uppercase block mb-3">
          Seasonality Guide
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          When to Visit Lakshadweep
        </h2>
      </div>

      {/* Monsoon Closure Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 flex items-center justify-center gap-3 max-w-3xl mx-auto shadow-sm">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span className="text-sm font-bold text-red-800">
          ⚠️ Lakshadweep is closed June–September. Plan only within the October–May window.
        </span>
      </div>

      {/* Month pills */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 mb-8">
        {lakshadweepData.months.map((mObj) => {
          const isSelected = selectedMonth === mObj.month
          const style = STATUS_STYLES[mObj.rating as MonthStatus]
          const isClosed = mObj.rating === 'avoid'
          return (
            <button
              key={mObj.month}
              onClick={() => handleMonthClick(mObj.month)}
              className={`relative flex flex-col items-center justify-center py-3 rounded-xl border-2 transition-all text-center h-16 ${
                isSelected 
                  ? style.pill + ' border-opacity-100' 
                  : isClosed 
                    ? 'bg-red-50 text-red-800 border-red-100 hover:bg-red-100 opacity-60' 
                    : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
              }`}
            >
              {isClosed && !isSelected && (
                <svg className="w-3 h-3 absolute top-1 right-1 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm3 11a2 2 0 110-4 2 2 0 010 4z"/></svg>
              )}
              <span className="text-xs font-bold uppercase tracking-wider block">{mObj.month}</span>
              {!isSelected && !isClosed && (
                <span className={`w-1.5 h-1.5 rounded-full mt-1 ${mObj.rating === 'best' ? 'bg-[#06B6D4]' : 'bg-amber-500'}`} />
              )}
            </button>
          )
        })}
      </div>

      {/* Selected month info */}
      {activeMonth && (
        <div className={`rounded-2xl p-5 md:p-6 border mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${STATUS_STYLES[activeMonth.rating as MonthStatus].badge}`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="font-bold text-brand-navy font-fraunces text-base">Lakshadweep in {activeMonth.month}</span>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${STATUS_STYLES[activeMonth.rating as MonthStatus].badge}`}>
                {STATUS_STYLES[activeMonth.rating as MonthStatus].label}
              </span>
            </div>
            <p className="text-sm text-muted font-medium leading-relaxed">{activeMonth.note}</p>
          </div>
          {!isAvoid && (
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
              className="flex-shrink-0 px-5 h-10 bg-white hover:bg-gray-50 text-[#06B6D4] border border-[#06B6D4]/20 font-bold rounded-xl text-xs transition-colors"
            >
              Plan for {activeMonth.month}
            </button>
          )}
        </div>
      )}

      {/* Season story cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {lakshadweepData.seasons.map((season) => {
          const isMonsoon = season.id === 'closed'
          return (
            <div key={season.id} className={`bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
              isMonsoon ? 'border-red-200' : 'border-border-soft'
            }`}>
              <div className="relative w-full h-44 bg-gray-100">
                <Image
                  src={season.image}
                  alt={season.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className={`object-cover ${isMonsoon ? 'grayscale opacity-80' : ''}`}
                />
                {isMonsoon && (
                  <div className="absolute inset-0 bg-red-900/40 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm3 11a2 2 0 110-4 2 2 0 010 4z"/></svg>
                      Closed
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-2 ${
                  isMonsoon ? 'bg-red-50 text-red-700 border-red-200' : 'bg-cyan-50 text-[#06B6D4] border-cyan-200'
                }`}>
                  {season.months}
                </span>
                <h3 className="font-fraunces font-bold text-brand-navy text-base mb-2">{season.label}</h3>
                <p className="text-xs text-muted leading-relaxed">{season.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
