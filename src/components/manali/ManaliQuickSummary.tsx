import React from 'react'
import { manaliData } from '@/lib/manali/data'

export default function ManaliQuickSummary() {
  const { duration, bestSeason, startingFrom, tripTypes } = manaliData.quickSummary

  const summaryItems = [
    {
      label: 'Ideal Duration',
      value: duration,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Best Time to Visit',
      value: bestSeason,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Starting Price',
      value: startingFrom,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Trip Styles',
      value: tripTypes,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-white border-b border-border-soft">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {summaryItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 px-4 ${
                idx < summaryItems.length - 1 ? 'lg:border-r lg:border-border-soft' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#DEE5EC] text-[#355C7D]">
                {item.icon}
              </div>
              <div>
                <span className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-1">
                  {item.label}
                </span>
                <span className="block text-sm md:text-base font-bold text-brand-navy leading-snug">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
