'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { manaliData } from '@/lib/manali/data'
import { manaliEvents } from '@/lib/manali/analytics'

export default function SeasonCalendarManali() {
  const [selectedMonth, setSelectedMonth] = useState<string>('May')

  const handleMonthClick = (m: string) => {
    setSelectedMonth(m)
    manaliEvents.seasonFilterClick(m)
  }

  const activeMonthInfo = manaliData.months.find((item) => item.month === selectedMonth)

  // Function to determine if Rohtang is open for a given month abbreviation
  const isRohtangOpen = (m: string): boolean => {
    const openMonths = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
    return openMonths.includes(m)
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-10">
        <span className="text-[11px] font-bold tracking-widest text-[#355C7D] uppercase block mb-2">
          When to Visit Manali
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Seasonal Weather & Pass Openings Calendar
        </h2>
        <p className="text-sm md:text-base text-muted mt-2 max-w-xl mx-auto">
          Manali undergoes dramatic changes every season. Pick your month to see what activities are open.
        </p>
      </div>

      {/* 12 Months Horizontal/Grid selection */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 mb-8">
        {manaliData.months.map((mObj) => {
          const isSelected = selectedMonth === mObj.month
          const open = isRohtangOpen(mObj.month)

          return (
            <button
              key={mObj.month}
              onClick={() => handleMonthClick(mObj.month)}
              className={`relative py-3 px-2 rounded-xl text-center transition-all focus:outline-none flex flex-col justify-between items-center h-20 border ${
                isSelected
                  ? 'bg-[#355C7D] text-white border-[#355C7D] shadow-sm'
                  : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wider block">
                {mObj.month}
              </span>
              
              {/* Rohtang Pass Badge */}
              <span
                className={`text-[8px] font-bold py-0.5 px-1.5 rounded tracking-wide ${
                  open
                    ? isSelected
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-50 text-emerald-700'
                    : isSelected
                    ? 'bg-amber-700 text-white'
                    : 'bg-amber-50 text-amber-800'
                }`}
              >
                {open ? '🏔️ Open' : '❄️ Closed'}
              </span>
            </button>
          )
        })}
      </div>

      {/* Selected Month Note Panel */}
      {activeMonthInfo && (
        <div className="bg-[#DEE5EC]/30 border border-border-soft rounded-2xl p-6 mb-12 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <span className="text-base font-bold font-fraunces text-brand-navy">
                Manali in {activeMonthInfo.month}
              </span>
              <span className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded tracking-wider ${
                activeMonthInfo.rating === 'best'
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}>
                {activeMonthInfo.rating === 'best' ? 'Best Season' : 'Good Season'}
              </span>
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed font-medium">
              {activeMonthInfo.note}
            </p>
          </div>
          
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
            className="flex-shrink-0 px-5 h-11 bg-white hover:bg-gray-50 text-[#355C7D] border border-border-soft font-bold rounded-xl text-xs transition-colors"
          >
            Plan for {activeMonthInfo.month}
          </button>
        </div>
      )}

      {/* Seasonal Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {manaliData.seasons.map((season) => (
          <div
            key={season.id}
            className="bg-white border border-border-soft rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <div className="relative w-full h-[150px] bg-gray-100">
              <Image
                src={season.image}
                alt={season.label}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#355C7D] bg-[#DEE5EC] px-2.5 py-0.5 rounded-full block w-fit mb-2">
                  {season.months}
                </span>
                <h3 className="text-base font-bold font-fraunces text-brand-navy mb-2">
                  {season.label}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {season.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
