'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { amritsarData } from '@/lib/amritsar/data'
import { amritsarEvents } from '@/lib/amritsar/analytics'

export default function GalleryAmritsar() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const handleOpen = (idx: number) => {
    setLightboxIndex(idx)
    amritsarEvents.galleryView(idx)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? amritsarData.gallery.length - 1 : (prev ?? 0) - 1))
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === amritsarData.gallery.length - 1 ? 0 : (prev ?? 0) + 1))
    }
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? amritsarData.gallery.length - 1 : (prev ?? 0) - 1))
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === amritsarData.gallery.length - 1 ? 0 : (prev ?? 0) + 1))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex])

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-[11px] font-bold tracking-widest text-[#A16207] uppercase block mb-3">
          Visual Journal
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Amritsar through the Lens
        </h2>
        <p className="text-xs md:text-sm text-muted mt-2">
          An editorial lookbook capturing the sacred waters, ceremonies, and legendary culinary culture of Amritsar.
        </p>
      </div>

      {/* Alternating magazine style layout */}
      <div className="space-y-12">
        {amritsarData.gallery.map((item, idx) => {
          const isEven = idx % 2 === 0
          return (
            <div
              key={idx}
              onClick={() => handleOpen(idx)}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 cursor-pointer group ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image Side */}
              <div className="relative w-full md:w-[65%] h-[250px] md:h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-md">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-xs bg-[#A16207]/90 px-4 py-2 rounded-xl">
                    Open Lightbox
                  </span>
                </div>
              </div>

              {/* Caption Side */}
              <div className="w-full md:w-[35%] text-center md:text-left">
                <span className="text-[10px] font-bold text-[#A16207] uppercase tracking-wider block mb-2">
                  Frame 0{idx + 1}
                </span>
                <p className="text-base md:text-lg font-fraunces font-bold text-brand-navy leading-snug">
                  {item.alt}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-white/80 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full focus:outline-none z-[130]"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-white hover:text-white/80 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full focus:outline-none z-[130]"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Large Image */}
          <div className="relative w-full max-w-4xl h-[70vh] bg-black rounded-xl overflow-hidden flex items-center justify-center">
            <Image
              src={amritsarData.gallery[lightboxIndex].image}
              alt={amritsarData.gallery[lightboxIndex].alt}
              fill
              sizes="80vw"
              className="object-contain"
            />
            {/* Alt Caption Strip */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 to-transparent text-white text-center">
              <p className="text-xs md:text-sm font-medium">
                {amritsarData.gallery[lightboxIndex].alt}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-white hover:text-white/80 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full focus:outline-none z-[130]"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
