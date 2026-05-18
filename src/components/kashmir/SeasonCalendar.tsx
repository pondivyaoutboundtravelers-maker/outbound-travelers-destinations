'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { kashmirData } from '@/lib/kashmir/data'
import { kashmirEvents } from '@/lib/kashmir/analytics'

export default function SeasonCalendar() {
  const [activeMonthIdx, setActiveMonthIdx] = useState<number | null>(null)

  const handleMonthClick = (idx: number, month: string) => {
    setActiveMonthIdx(activeMonthIdx === idx ? null : idx)
    kashmirEvents.seasonFilterClick(month)
  }

  const getPillStyles = (rating: 'best' | 'good' | 'okay' | 'avoid') => {
    switch (rating) {
      case 'best':
        return 'bg-green-100 text-green-800 border-green-400 font-bold'
      case 'good':
        return 'bg-amber-100 text-amber-800 border-amber-400 font-bold'
      case 'okay':
        return 'bg-gray-100 text-gray-600 border-gray-300 font-medium'
      case 'avoid':
        return 'bg-red-100 text-red-700 border-red-400 font-bold'
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Best Time to Visit Kashmir
      </h2>
      <p className="text-center text-muted mb-8 max-w-xl mx-auto text-sm md:text-base">
        Kashmir changes colors completely across the seasons. Tap a month below to see details, then browse the seasonal cards.
      </p>

      {/* 12-Month horizontal scroll calendar */}
      <div className="mb-6 overflow-x-auto no-scrollbar scroll-smooth pb-3">
        <div className="flex gap-3 min-w-max px-2 justify-start md:justify-center">
          {kashmirData.months.map((m, idx) => (
            <button
              key={m.month}
              onClick={() => handleMonthClick(idx, m.month)}
              className={`px-4 py-2 border rounded-full text-sm font-semibold transition-all focus:outline-none ${getPillStyles(
                m.rating
              )} ${activeMonthIdx === idx ? 'ring-2 ring-brand-cta scale-105' : 'scale-100'}`}
            >
              {m.month}
            </button>
          ))}
        </div>
      </div>

      {/* Active Pill Tooltip Note */}
      {activeMonthIdx !== null && (
        <div className="max-w-xl mx-auto mb-12 bg-kashmir-soft text-brand-navy border border-kashmir-accent/30 p-4 rounded-xl text-center text-sm font-medium animate-fade-in relative">
          <button
            onClick={() => setActiveMonthIdx(null)}
            className="absolute top-2 right-2 text-muted hover:text-brand-navy"
            aria-label="Close note"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {kashmirData.months[activeMonthIdx].note}
        </div>
      )}

      {/* 4 Seasonal Story Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">
        {kashmirData.seasons.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl overflow-hidden border border-border-soft shadow-xs flex flex-col hover:shadow-sm transition-shadow"
          >
            <div className="relative h-40 bg-gray-200">
              <Image
                src={s.image}
                alt={s.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="block text-[10px] text-kashmir-accent uppercase tracking-wider font-bold mb-1">
                  {s.months}
                </span>
                <h3 className="font-fraunces font-bold text-base text-brand-navy mb-2">
                  {s.label}
                </h3>
                <p className="text-xs text-muted leading-relaxed">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
