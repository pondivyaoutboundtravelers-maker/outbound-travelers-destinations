'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ladakhData } from '@/lib/ladakh/data'
import { ladakhEvents } from '@/lib/ladakh/analytics'

export default function SeasonCalendarLadakh() {
  const [selectedMonth, setSelectedMonth] = useState<string>('')
  const [hoveredMonth, setHoveredMonth] = useState<string | null>(null)

  const handleMonthClick = (month: string) => {
    setSelectedMonth(prev => prev === month ? '' : month)
    ladakhEvents.seasonFilterClick(month)
  }

  const getMonthColorClass = (rating: 'best' | 'good' | 'okay' | 'avoid') => {
    switch (rating) {
      case 'best':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300'
      case 'good':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'okay':
        return 'bg-amber-100 text-amber-800 border-amber-300'
      case 'avoid':
        return 'bg-rose-100 text-rose-800 border-rose-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Best Time to Visit Ladakh
      </h2>
      <p className="text-center text-muted mb-10 max-w-xl mx-auto text-sm md:text-base">
        Because of heavy winter snowfall, the mountain highways to Leh are closed for most of the year. Plan your travel window carefully.
      </p>

      {/* Month Pills Container */}
      <div className="mb-12">
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted text-center mb-6">
          Interactive Month Guide (Click for road & safety alerts)
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {ladakhData.months.map((m) => {
            const isSelected = selectedMonth === m.month
            const isAvoid = m.rating === 'avoid'
            const colorClasses = getMonthColorClass(m.rating)

            return (
              <div
                key={m.month}
                className="relative"
                onMouseEnter={() => setHoveredMonth(m.month)}
                onMouseLeave={() => setHoveredMonth(null)}
              >
                <button
                  onClick={() => handleMonthClick(m.month)}
                  className={`px-4 py-2.5 rounded-full border text-xs md:text-sm font-bold transition-all ${colorClasses} ${
                    isSelected ? 'ring-2 ring-offset-2 ring-[#1F3A8A] scale-105' : 'hover:scale-102'
                  }`}
                >
                  {m.month}
                  <span className="block text-[8px] opacity-75 uppercase font-semibold mt-0.5">
                    {m.rating}
                  </span>
                </button>

                {/* Tooltip on Hover or Select */}
                {(hoveredMonth === m.month || isSelected) && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 p-3 bg-brand-navy text-white text-xs rounded-xl shadow-xl z-30 text-center animate-fade-in pointer-events-none">
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-brand-navy" />
                    <span className="block font-bold uppercase tracking-wider mb-1 text-[9px]">
                      {m.month} — Status: {m.rating}
                    </span>
                    <span className="block leading-relaxed">{m.note}</span>
                    {isAvoid && (
                      <span className="block mt-1.5 text-rose-300 font-bold text-[9px] uppercase tracking-wide">
                        ⚠️ Road Closure / Inaccessible
                      </span>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Season Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ladakhData.seasons.map((season) => (
          <div key={season.id} className="bg-white rounded-2xl border border-border-soft overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-44 bg-gray-200">
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
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-brand-navy text-base">{season.label}</h4>
                  <span className="text-xs font-bold text-[#1F3A8A] bg-[#E0E7FF] px-2.5 py-0.5 rounded-full">
                    {season.months}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted leading-relaxed mb-4">
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
