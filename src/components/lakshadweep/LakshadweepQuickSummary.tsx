import React from 'react'
import { lakshadweepData } from '@/lib/lakshadweep/data'

export default function LakshadweepQuickSummary() {
  const { quickSummary } = lakshadweepData

  const stats = [
    { label: 'Ideal Duration', value: quickSummary.duration, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Best Season', value: quickSummary.bestSeason, icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
    { label: 'Starting Price', value: quickSummary.startingFrom, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Trip Types', value: quickSummary.tripTypes, icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' }
  ]

  return (
    <section className="py-12 px-4 md:px-8 border-b border-border-soft bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-border-soft">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center md:items-start text-center md:text-left ${idx !== 0 ? 'md:pl-8' : ''}`}>
              <div className="w-10 h-10 rounded-full bg-[#CFFAFE] flex items-center justify-center mb-4 md:mb-3">
                <svg className="w-5 h-5 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                </svg>
              </div>
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5 opacity-70">
                {stat.label}
              </span>
              <span className="text-sm md:text-base font-bold text-brand-navy leading-snug">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
