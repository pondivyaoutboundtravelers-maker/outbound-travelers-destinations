'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { manaliData } from '@/lib/manali/data'
import { manaliEvents } from '@/lib/manali/analytics'

export default function GalleryGridManali() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const handleOpen = (idx: number) => {
    setLightboxIndex(idx)
    manaliEvents.galleryView(idx)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? manaliData.gallery.length - 1 : (prev ?? 0) - 1))
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === manaliData.gallery.length - 1 ? 0 : (prev ?? 0) + 1))
    }
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? manaliData.gallery.length - 1 : (prev ?? 0) - 1))
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === manaliData.gallery.length - 1 ? 0 : (prev ?? 0) + 1))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex])

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Manali through the Lens
      </h2>
      <p className="text-center text-muted mb-10 max-w-xl mx-auto text-sm md:text-base">
        A glimpse of the scenic beauty, adventure, and accommodation awaiting you in the Kullu Valley.
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {manaliData.gallery.map((item, idx) => {
          // Apply some varying row/col spans for dynamic mosaic effect on desktop
          const spanClass =
            idx === 0
              ? 'md:col-span-2 md:row-span-2'
              : idx === 5
              ? 'md:col-span-2'
              : idx === 11
              ? 'md:col-span-2'
              : ''

          return (
            <div
              key={idx}
              onClick={() => handleOpen(idx)}
              className={`relative h-40 md:h-56 bg-gray-100 rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow ${spanClass}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-xs md:text-sm bg-[#355C7D]/85 px-4 py-2 rounded-xl backdrop-blur-sm">
                  View Large
                </span>
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
              src={manaliData.gallery[lightboxIndex].image}
              alt={manaliData.gallery[lightboxIndex].alt}
              fill
              sizes="80vw"
              className="object-contain"
            />
            {/* Alt Caption Strip */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 to-transparent text-white text-center">
              <p className="text-xs md:text-sm font-medium">
                {manaliData.gallery[lightboxIndex].alt}
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
