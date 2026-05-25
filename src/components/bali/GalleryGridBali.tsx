'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { baliData } from '@/lib/bali/data'
import { baliEvents } from '@/lib/bali/analytics'

export default function GalleryGridBali() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    baliEvents.galleryView(index)
  }

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % baliData.gallery.length)
    }
  }

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + baliData.gallery.length) % baliData.gallery.length)
    }
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex])

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-8">
        Bali in Pictures
      </h2>

      {/* Grid: 2-col mobile, 4-col desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {baliData.gallery.map((g, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative h-40 md:h-52 rounded-xl overflow-hidden cursor-pointer bg-gray-200 border border-border-soft hover:shadow-md transition-shadow"
          >
            <Image
              src={g.image}
              alt={g.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.srcset = "";
                e.currentTarget.src = "/api/placeholder?text=" + encodeURIComponent(e.currentTarget.alt || "Image");
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4 select-none">
          {/* Backdrop clicks close */}
          <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

          <div className="relative max-w-4xl w-full h-[70vh] flex items-center justify-center z-10">
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none flex items-center gap-1.5 text-sm font-semibold"
            >
              <span>Close</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-0 md:-left-16 text-white hover:text-gray-300 bg-black/40 hover:bg-black/60 w-12 h-12 rounded-full flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Centered Image */}
            <div className="relative w-full h-full max-h-[60vh] max-w-3xl">
              <Image
                src={baliData.gallery[lightboxIndex].image}
                alt={baliData.gallery[lightboxIndex].alt}
                fill
                sizes="80vw"
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.srcset = "";
                  e.currentTarget.src = "/api/placeholder?text=" + encodeURIComponent(e.currentTarget.alt || "Image");
                }}
              />
            </div>

            {/* Next */}
            <button
              onClick={handleNext}
              className="absolute right-0 md:-right-16 text-white hover:text-gray-300 bg-black/40 hover:bg-black/60 w-12 h-12 rounded-full flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm font-semibold">
            {lightboxIndex + 1} / {baliData.gallery.length}
          </div>
        </div>
      )}
    </section>
  )
}
