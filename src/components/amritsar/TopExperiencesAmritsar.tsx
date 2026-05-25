'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { amritsarData } from '@/lib/amritsar/data'
import { amritsarEvents } from '@/lib/amritsar/analytics'
import type { Experience } from '@/lib/shared/types'

export default function TopExperiencesAmritsar() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)

  const handleTileClick = (exp: Experience, idx: number) => {
    setSelectedExp(exp)
    amritsarEvents.galleryView(idx)
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-[11px] font-bold tracking-widest text-[#A16207] uppercase block mb-3">
          Curated Highlights
        </span>
        <h2 className="text-2xl md:text-4xl font-fraunces font-bold text-brand-navy">
          Top Experiences in Amritsar
        </h2>
        <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">
          From quiet reflection beside the sarovar pool to energetic beats at Wagah, these experiences anchor your tour.
        </p>
      </div>

      {/* Editorial Alternating Layout for Desktop, Stacked for Mobile */}
      <div className="space-y-12 md:space-y-24">
        {amritsarData.topExperiences.map((exp, idx) => {
          const isEven = idx % 2 === 0
          return (
            <div
              key={exp.id}
              onClick={() => handleTileClick(exp as unknown as Experience, idx)}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 cursor-pointer group ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image Side */}
              <div className="relative w-full md:w-[50%] h-[240px] md:h-[350px] overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-[50%] flex flex-col justify-center px-2">
                <span className="text-[11px] font-bold text-[#A16207] uppercase tracking-wider block mb-2">
                  Experience 0{idx + 1}
                </span>
                <h3 className="text-xl md:text-3xl font-fraunces font-bold text-brand-navy mb-3 transition-colors group-hover:text-[#A16207]">
                  {exp.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed mb-4">
                  {exp.subtitle}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A16207] hover:underline">
                  Read details
                  <span>→</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Detail Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-4">
          <div className="absolute inset-0" onClick={() => setSelectedExp(null)} />
          <div className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden z-10 shadow-2xl animate-slide-up border border-border-soft">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/60 w-8 h-8 rounded-full flex items-center justify-center z-20 focus:outline-none"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h3 className="text-xl md:text-2xl font-fraunces font-bold text-brand-navy mb-2">
                {selectedExp.title}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {selectedExp.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
