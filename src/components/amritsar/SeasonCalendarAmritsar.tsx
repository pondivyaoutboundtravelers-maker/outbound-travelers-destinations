'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { amritsarData } from '@/lib/amritsar/data'
import { amritsarEvents } from '@/lib/amritsar/analytics'

export default function SeasonCalendarAmritsar() {
  const [selectedMonth, setSelectedMonth] = useState<string>('Oct')

  const handleMonthClick = (m: string) => {
    setSelectedMonth(m)
    amritsarEvents.seasonFilterClick(m)
  }

  const activeMonthInfo = amritsarData.months.find((item) => item.month === selectedMonth)

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#A16207] uppercase block mb-3">
          Seasonality Guide
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Amritsar Seasonal Calendar
        </h2>
        <p className="text-xs md:text-sm text-muted mt-2">
          Amritsar sees pleasant winter winds and warm summers. Pick a month below to see details.
        </p>
      </div>

      {/* 12 Months Selection pills */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 mb-8">
        {amritsarData.months.map((mObj) => {
          const isSelected = selectedMonth === mObj.month
          const isPeakSeason = ['Nov', 'Dec', 'Jan', 'Feb'].includes(mObj.month)

          return (
            <button
              key={mObj.month}
              onClick={() => handleMonthClick(mObj.month)}
              className={`relative py-3 px-2 rounded-xl text-center transition-all focus:outline-none flex flex-col justify-between items-center h-20 border ${
                isSelected
                  ? 'bg-[#A16207] text-white border-[#A16207] shadow-sm'
                  : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wider block">
                {mObj.month}
              </span>
              
              <span
                className={`text-[8px] font-bold py-0.5 px-1.5 rounded tracking-wide ${
                  mObj.status === 'peak'
                    ? isSelected
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-50 text-emerald-700'
                    : mObj.status === 'shoulder'
                    ? isSelected
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-50 text-amber-700'
                    : isSelected
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-50 text-gray-700'
                }`}
              >
                {mObj.status === 'peak' ? 'Peak' : mObj.status === 'shoulder' ? 'Shoulder' : 'Off-Peak'}
              </span>

              {isPeakSeason && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#A16207] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                  Peak
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Selected Month Note Panel */}
      {activeMonthInfo && (
        <div className="bg-[#FEF3C7]/20 border border-[#A16207]/20 rounded-2xl p-6 mb-12 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <span className="text-base font-bold font-fraunces text-brand-navy">
                Amritsar in {activeMonthInfo.month}
              </span>
              <span className={`inline-block text-[10px] font-bold uppercase px-2.5 py-0.5 rounded tracking-wider ${
                activeMonthInfo.status === 'peak'
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : activeMonthInfo.status === 'shoulder'
                  ? 'bg-amber-100 text-amber-800 border border-amber-200'
                  : 'bg-gray-150 text-gray-700 border border-gray-250'
              }`}>
                {activeMonthInfo.status === 'peak' ? 'Best Season' : activeMonthInfo.status === 'shoulder' ? 'Shoulder' : 'Off-Peak'}
              </span>
              {['Nov', 'Dec', 'Jan', 'Feb'].includes(activeMonthInfo.month) && (
                <span className="inline-block bg-[#FEF3C7] text-[#A16207] text-[9px] font-bold px-2 py-0.5 rounded border border-[#A16207]/20 uppercase tracking-wider">
                  Peak — book early
                </span>
              )}
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed font-medium">
              {activeMonthInfo.note}
            </p>
          </div>
          
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
            className="flex-shrink-0 px-5 h-11 bg-white hover:bg-gray-50 text-[#A16207] border border-[#A16207]/20 font-bold rounded-xl text-xs transition-colors"
          >
            Plan for {activeMonthInfo.month}
          </button>
        </div>
      )}

      {/* Seasonal Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {amritsarData.seasons.map((season) => (
          <div
            key={season.id}
            className="bg-white border border-border-soft rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <div className="relative w-full h-[160px] bg-gray-100">
              <Image
                src={season.image}
                alt={season.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#A16207] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full block w-fit mb-2">
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
