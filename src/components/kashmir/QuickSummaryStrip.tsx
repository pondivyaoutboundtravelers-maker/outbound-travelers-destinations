import React from 'react'
import { kashmirData } from '@/lib/kashmir/data'

export default function QuickSummaryStrip() {
  const { duration, bestSeason, startingFrom, tripTypes } = kashmirData.quickSummary

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-white border-b border-border-soft">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {summaryItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 px-4 ${
                idx < summaryItems.length - 1 ? 'md:border-r md:border-border-soft' : ''
              }`}
            >
              <div className="w-10 h-10 bg-kashmir-soft text-kashmir-accent rounded-full flex items-center justify-center flex-shrink-0">
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
