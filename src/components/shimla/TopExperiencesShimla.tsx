'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { shimlaData } from '@/lib/shimla/data'
import { shimlaEvents } from '@/lib/shimla/analytics'
import type { Experience } from '@/lib/shared/types'

export default function TopExperiencesShimla() {
  const [filteredExps, setFilteredExps] = useState<Array<Experience>>([])
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1
    const filtered = shimlaData.experiences.filter((exp) => {
      if (!exp.seasonal) return true
      if (exp.seasonMonths) return exp.seasonMonths.includes(currentMonth)
      return true
    })
    setFilteredExps(filtered)
  }, [])

  const handleTileClick = (exp: Experience) => {
    setSelectedExp(exp)
    shimlaEvents.galleryView(shimlaData.experiences.indexOf(exp))
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Top Experiences in Shimla
      </h2>
      <p className="text-center text-muted mb-10 max-w-xl mx-auto text-sm md:text-base">
        Ride the UNESCO toy train, stroll colonial pathways, or experience heavy snowfalls — here are the Shimla highlights we weave into your plan.
      </p>

      {/* Grid: 2-col on Mobile, 3x2 on Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {filteredExps.map((exp) => (
          <div
            key={exp.id}
            onClick={() => handleTileClick(exp)}
            className="group relative h-48 md:h-64 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="absolute inset-0 w-full h-full bg-gray-200">
              <Image
                src={exp.image}
                alt={exp.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20 text-white">
              {exp.seasonal && (
                <span className="inline-block bg-[#2F5233] text-[9px] font-bold uppercase px-1.5 py-0.5 rounded mb-1 tracking-wider">
                  Snow Special
                </span>
              )}
              <h3 className="text-sm md:text-base font-bold font-fraunces leading-tight">
                {exp.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4">
          <div className="absolute inset-0" onClick={() => setSelectedExp(null)} />
          <div className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden z-10 shadow-2xl animate-slide-up">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 text-white md:text-brand-navy bg-black/40 md:bg-transparent w-8 h-8 rounded-full flex items-center justify-center z-20 focus:outline-none"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-56 md:h-64 bg-gray-200">
              <Image
                src={selectedExp.image}
                alt={selectedExp.alt}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-fraunces font-bold text-brand-navy mb-3">
                {selectedExp.title}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {selectedExp.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
