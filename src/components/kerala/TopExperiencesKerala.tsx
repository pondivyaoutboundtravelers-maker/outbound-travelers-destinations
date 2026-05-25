'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { keralaData } from '@/lib/kerala/data'
import { keralaEvents } from '@/lib/kerala/analytics'

export default function TopExperiencesKerala() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const handleClick = (idx: number) => {
    setSelectedIdx(idx)
    keralaEvents.galleryView(idx)
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#047857] uppercase block mb-3">
          Eight Experiences
        </span>
        <h2 className="text-2xl md:text-4xl font-fraunces font-bold text-brand-navy">
          What Kerala Feels Like
        </h2>
        <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">
          Each experience is distinct — the backwaters are nothing like the hills, and neither is anything like the spice country.
        </p>
      </div>

      {/* PackageCardImmersive layout — large image, text overlay */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {keralaData.topExperiences.map((exp, idx) => (
          <div
            key={exp.id}
            onClick={() => handleClick(idx)}
            className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Image
              src={exp.image}
              alt={exp.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            {/* Immersive overlay — always visible bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent z-10" />
            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <span className="block text-[9px] font-bold uppercase tracking-widest text-[#047857] mb-1">
                0{idx + 1}
              </span>
              <h3 className="text-sm md:text-base font-fraunces font-bold text-white leading-snug">
                {exp.title}
              </h3>
              <p className="text-[10px] md:text-xs text-white/70 mt-0.5 font-medium">
                {exp.subtitle}
              </p>
            </div>
            {/* Hover chip */}
            <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="bg-[#047857] text-white text-[9px] font-bold px-2 py-1 rounded-full">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden z-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-64 bg-gray-200">
              <Image
                src={keralaData.topExperiences[selectedIdx].image}
                alt={keralaData.topExperiences[selectedIdx].alt}
                fill
                sizes="500px"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold text-[#047857] uppercase tracking-wider block mb-1">
                Experience 0{selectedIdx + 1}
              </span>
              <h3 className="text-xl font-fraunces font-bold text-brand-navy mb-2">
                {keralaData.topExperiences[selectedIdx].title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {keralaData.topExperiences[selectedIdx].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
