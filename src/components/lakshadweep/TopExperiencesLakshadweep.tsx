'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { lakshadweepData } from '@/lib/lakshadweep/data'
import { Experience } from '@/lib/shared/types'

export default function TopExperiencesLakshadweep() {
  const [activeExp, setActiveExp] = useState<Experience | null>(null)
  const [visibleExperiences, setVisibleExperiences] = useState<Experience[]>([])

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1
    const isTurtleSeason = [11, 12, 1, 2].includes(currentMonth)
    
    const filtered = lakshadweepData.experiences.filter(exp => {
      if (exp.seasonal && exp.seasonMonths) {
        return isTurtleSeason
      }
      return true
    })
    setVisibleExperiences(filtered)
  }, [])

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#06B6D4] uppercase block mb-3">
          Island Activities
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Top Experiences in Lakshadweep
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {visibleExperiences.map((exp) => (
          <div
            key={exp.id}
            onClick={() => setActiveExp(exp)}
            className="group relative cursor-pointer rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100 shadow-sm"
          >
            <Image
              src={exp.image}
              alt={exp.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {exp.seasonal && (
              <div className="absolute top-3 left-3 bg-amber-500 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                Nov-Feb Only
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 md:translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-fraunces font-bold text-sm md:text-lg mb-2 leading-tight">
                {exp.title}
              </h3>
              <p className="text-white/80 text-xs md:text-sm line-clamp-2 md:line-clamp-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {exp.description}
              </p>
              <span className="inline-flex items-center text-[10px] md:text-xs font-bold text-[#06B6D4] uppercase tracking-wider">
                Read More <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeExp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80" onClick={() => setActiveExp(null)}>
          <div 
            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveExp(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center z-10 hover:bg-black/70 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="relative h-64 sm:h-80 w-full">
              <Image src={activeExp.image} alt={activeExp.alt} fill className="object-cover" />
              {activeExp.seasonal && (
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Available November to February
                </div>
              )}
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-fraunces font-bold text-brand-navy mb-4">
                {activeExp.title}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed font-medium">
                {activeExp.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
