'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { keralaData } from '@/lib/kerala/data'
import { keralaEvents } from '@/lib/kerala/analytics'

type MonthStatus = 'peak' | 'shoulder' | 'wellness'

const STATUS_STYLES: Record<MonthStatus, { pill: string; badge: string; label: string }> = {
  peak: { pill: 'bg-[#047857] text-white border-[#047857]', badge: 'bg-emerald-50 text-[#047857] border-emerald-200', label: 'Best Season' },
  shoulder: { pill: 'bg-amber-500 text-white border-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200', label: 'Shoulder' },
  wellness: { pill: 'bg-teal-600 text-white border-teal-600', badge: 'bg-teal-50 text-teal-700 border-teal-200', label: 'Ayurveda Season 🌿' },
}

export default function SeasonCalendarKerala() {
  const [selectedMonth, setSelectedMonth] = useState<string>('Oct')

  const handleMonthClick = (m: string) => {
    setSelectedMonth(m)
    keralaEvents.seasonFilterClick(m)
  }

  const activeMonth = keralaData.months.find((m) => m.month === selectedMonth)
  const isPeak = ['Dec', 'Jan', 'Feb'].includes(selectedMonth)
  const isWellness = ['Jun', 'Jul', 'Aug'].includes(selectedMonth)

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#047857] uppercase block mb-3">
          Seasonality Guide
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Kerala Through the Seasons
        </h2>
        <p className="text-xs md:text-sm text-muted mt-2">
          Every season has a reason. Even the monsoon — especially the monsoon.
        </p>
      </div>

      {/* Month pills */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 mb-8">
        {keralaData.months.map((mObj) => {
          const isSelected = selectedMonth === mObj.month
          const style = STATUS_STYLES[mObj.status]
          return (
            <button
              key={mObj.month}
              onClick={() => handleMonthClick(mObj.month)}
              className={`relative flex flex-col items-center justify-center py-3 rounded-xl border-2 transition-all text-center focus:outline-none h-16 ${
                isSelected ? style.pill + ' border-opacity-100' : 'bg-white text-brand-navy border-border-soft hover:bg-gray-50'
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wider block">{mObj.month}</span>
              {/* Status dot for unselected */}
              {!isSelected && (
                <span className={`w-1.5 h-1.5 rounded-full mt-1 ${
                  mObj.status === 'peak' ? 'bg-[#047857]' : mObj.status === 'shoulder' ? 'bg-amber-500' : 'bg-teal-600'
                }`} />
              )}
              {/* Special badges */}
              {isPeak && mObj.month === selectedMonth && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full">Early</span>
              )}
            </button>
          )
        })}
      </div>

      {/* Selected month info */}
      {activeMonth && (
        <div className={`rounded-2xl p-5 md:p-6 border mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${STATUS_STYLES[activeMonth.status].badge}`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="font-bold text-brand-navy font-fraunces text-base">Kerala in {activeMonth.month}</span>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${STATUS_STYLES[activeMonth.status].badge}`}>
                {STATUS_STYLES[activeMonth.status].label}
              </span>
              {isPeak && (
                <span className="bg-red-50 text-red-700 border border-red-200 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  Book 45+ days early
                </span>
              )}
              {isWellness && (
                <span className="bg-teal-50 text-teal-700 border border-teal-200 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  Peak Ayurveda season
                </span>
              )}
            </div>
            <p className="text-sm text-muted font-medium leading-relaxed">{activeMonth.note}</p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
            className="flex-shrink-0 px-5 h-10 bg-white hover:bg-gray-50 text-[#047857] border border-[#047857]/20 font-bold rounded-xl text-xs transition-colors"
          >
            Plan for {activeMonth.month}
          </button>
        </div>
      )}

      {/* Season story cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {keralaData.seasons.map((season) => {
          const statusKey = season.id as MonthStatus
          const style = STATUS_STYLES[statusKey] ?? STATUS_STYLES['peak']
          return (
            <div key={season.id} className="bg-white border border-border-soft rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full h-44 bg-gray-100">
                <Image
                  src={season.image}
                  alt={season.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-2 ${style.badge}`}>
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
