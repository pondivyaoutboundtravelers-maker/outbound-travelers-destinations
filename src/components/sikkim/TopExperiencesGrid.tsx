'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { sikkimData } from '@/lib/sikkim/data'
import type { Experience } from '@/lib/shared/types'

export default function TopExperiencesGrid() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-[#0F766E] font-bold tracking-widest uppercase text-xs">Curated Highlights</span>
            <h2 className="text-3xl md:text-5xl font-fraunces font-bold mt-3 text-slate-900 leading-tight">
              Cinematic Landscapes, Up Close
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
            From frozen alpine lakes to colonial tea estates, these are the moments we weave into your bespoke Sikkim itinerary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sikkimData.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedExp(exp)}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                {exp.seasonal && (
                  <span className="self-start bg-[#0F766E]/90 text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-3 backdrop-blur-sm border border-[#CCFBF1]/30">
                    Seasonal
                  </span>
                )}
                <h3 className="text-2xl font-fraunces font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {exp.title}
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <p className="text-white/80 text-sm line-clamp-2 mt-2">
                    {exp.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-[#CCFBF1] text-xs font-bold uppercase tracking-wider">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 z-30 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
              >
                ×
              </button>
              <div className="relative h-[300px] w-full">
                <Image
                  src={selectedExp.image}
                  alt={selectedExp.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-fraunces font-bold text-white pr-6">
                  {selectedExp.title}
                </h3>
              </div>
              <div className="p-8">
                {selectedExp.seasonal && (
                  <div className="mb-4 inline-block bg-[#E5F5F4] text-[#0F766E] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Seasonal Experience (Mar-May typically)
                  </div>
                )}
                <p className="text-slate-600 text-lg leading-relaxed">
                  {selectedExp.description}
                </p>
                <button 
                  onClick={() => {
                    setSelectedExp(null)
                    window.dispatchEvent(new CustomEvent('openLeadForm'))
                  }}
                  className="mt-8 w-full py-4 bg-[#0F766E] text-white font-bold rounded-xl hover:bg-[#0d6059] transition-colors"
                >
                  Add this to my itinerary
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
