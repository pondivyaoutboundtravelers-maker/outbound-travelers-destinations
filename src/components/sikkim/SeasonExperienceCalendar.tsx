'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { sikkimData } from '@/lib/sikkim/data'

export default function SeasonExperienceCalendar() {
  const [activeMonthIdx, setActiveMonthIdx] = useState<number | null>(null)
  const [activeSeason, setActiveSeason] = useState(sikkimData.seasons[0])

  const handleMonthClick = (idx: number, month: string) => {
    setActiveMonthIdx(idx === activeMonthIdx ? null : idx)
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0F766E] font-bold tracking-widest uppercase text-xs">When To Go</span>
          <h2 className="text-3xl md:text-5xl font-fraunces font-bold mt-3 text-slate-900">
            Sikkim Through the Year
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Seasons Interactive Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSeason.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeSeason.image}
                  alt={activeSeason.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-[#0F766E]/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    {activeSeason.months}
                  </span>
                  <h3 className="text-3xl font-fraunces font-bold text-white mb-3">
                    {activeSeason.label}
                  </h3>
                  <p className="text-slate-200">
                    {activeSeason.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Season Selectors */}
            <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
              {sikkimData.seasons.map((season) => (
                <button
                  key={season.id}
                  onClick={() => setActiveSeason(season)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all ${
                    activeSeason.id === season.id
                      ? 'bg-white text-[#0F766E] shadow-lg'
                      : 'bg-black/30 text-white hover:bg-black/50 border border-white/20'
                  }`}
                >
                  {season.label}
                </button>
              ))}
            </div>
          </div>

          {/* Month Grid */}
          <div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {sikkimData.months.map((m, idx) => {
                const isActive = activeMonthIdx === idx
                let bgClass = 'bg-white'
                let textClass = 'text-slate-600'
                let borderClass = 'border-slate-200'

                if (m.rating === 'best') {
                  bgClass = 'bg-[#E5F5F4]'
                  textClass = 'text-[#0F766E]'
                  borderClass = 'border-[#CCFBF1]'
                } else if (m.rating === 'okay') {
                  bgClass = 'bg-slate-50'
                  textClass = 'text-slate-400'
                }

                return (
                  <div key={idx} className="relative">
                    <button
                      onClick={() => handleMonthClick(idx, m.month)}
                      className={`w-full py-4 rounded-xl border transition-all ${bgClass} ${textClass} ${borderClass} hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F766E]`}
                    >
                      <span className="block font-bold text-lg">{m.month}</span>
                      <span className="text-[10px] uppercase tracking-wider mt-1 block opacity-80">
                        {m.rating}
                      </span>
                    </button>

                    {/* Popover Note */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute z-20 top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-4 bg-slate-900 text-white rounded-lg shadow-xl text-sm"
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45" />
                          <p className="relative z-10">{m.note}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
            
            {/* Legend */}
            <div className="flex gap-6 justify-center mt-12 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#E5F5F4] border border-[#CCFBF1]" />
                <span>Best time</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white border border-slate-200" />
                <span>Good time</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-50 border border-slate-200" />
                <span>Off-season / Monsoon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
