'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sikkimData } from '@/lib/sikkim/data'

export default function ScenicItineraryTimeline() {
  const [openDay, setOpenDay] = useState<number>(1)

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0F766E] font-bold tracking-widest uppercase text-xs">The Journey</span>
          <h2 className="text-3xl md:text-5xl font-fraunces font-bold mt-3 text-slate-900">
            A Week in the Himalayas
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            This is our signature 7-day Gangtok to Darjeeling route. Every day is paced for luxury and immersion.
          </p>
        </div>

        <div className="relative border-l border-[#CCFBF1] ml-4 md:ml-8">
          {sikkimData.itinerary.map((dayItem, idx) => {
            const isOpen = openDay === dayItem.day
            return (
              <div key={dayItem.day} className="mb-8 relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-[-16px] top-1 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center font-bold text-xs transition-colors duration-300 ${
                    isOpen ? 'bg-[#0F766E] text-white' : 'bg-[#CCFBF1] text-[#0F766E]'
                  }`}
                >
                  {dayItem.day}
                </div>

                <div 
                  onClick={() => setOpenDay(isOpen ? 0 : dayItem.day)}
                  className="cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className={`text-xl font-fraunces font-bold transition-colors ${isOpen ? 'text-[#0F766E]' : 'text-slate-800 group-hover:text-[#0F766E]'}`}>
                      {dayItem.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Stay: {dayItem.stay}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-6">
                          <p className="text-slate-600 leading-relaxed mb-4">
                            {dayItem.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {dayItem.highlights.map((h, i) => (
                              <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-[#0F766E] transition-colors"
          >
            Customize this itinerary
          </button>
        </div>
      </div>
    </section>
  )
}
