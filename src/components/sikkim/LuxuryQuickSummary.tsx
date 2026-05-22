'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { sikkimData } from '@/lib/sikkim/data'

export default function LuxuryQuickSummary() {
  const stats = [
    { label: 'Ideal Duration', value: sikkimData.quickSummary.duration, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Best Seasons', value: sikkimData.quickSummary.bestSeason, icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
    { label: 'Trip Styles', value: sikkimData.quickSummary.tripTypes, icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
    { label: 'Pricing', value: sikkimData.quickSummary.startingFrom, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  ]

  return (
    <section className="py-12 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center px-4 ${idx % 2 !== 0 ? 'border-l border-slate-100 md:border-none' : 'border-none'}`}
            >
              <svg className="w-8 h-8 text-[#0F766E] mb-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
              </svg>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                {stat.label}
              </span>
              <span className="text-sm md:text-base font-semibold text-slate-800">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
