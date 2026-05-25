'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ladakhData } from '@/lib/ladakh/data'
import { ladakhEvents } from '@/lib/ladakh/analytics'

export default function GalleryGridLadakh() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index)
    ladakhEvents.galleryView(index)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev === null || prev === 0 ? ladakhData.gallery.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev === null || prev === ladakhData.gallery.length - 1 ? 0 : prev + 1))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === null || prev === 0 ? ladakhData.gallery.length - 1 : prev - 1))
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === null || prev === ladakhData.gallery.length - 1 ? 0 : prev + 1))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex])

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Photos from Ladakh
      </h2>
      <p className="text-center text-muted mb-10 max-w-xl mx-auto text-sm md:text-base">
        Actual landscapes, historic monasteries, and camp stays from our previous trips to the Roof of the World.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ladakhData.gallery.map((img, idx) => (
          <div
            key={idx}
            onClick={() => handleOpenLightbox(idx)}
            className="group relative h-40 md:h-48 rounded-xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm"
          >
            <Image
              src={img.image}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-103 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
              <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[120] bg-black/90 flex items-center justify-center p-4">
          {/* Backdrop Click Close */}
          <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center z-30 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center z-30 focus:outline-none"
            aria-label="Previous Image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center z-30 focus:outline-none"
            aria-label="Next Image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Containment */}
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center z-20">
            <div className="relative w-full h-full max-h-[70vh]">
              <Image
                src={ladakhData.gallery[lightboxIndex].image}
                alt={ladakhData.gallery[lightboxIndex].alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
                priority
              />
            </div>
            <p className="text-white text-center mt-4 text-xs md:text-sm font-semibold tracking-wide">
              {ladakhData.gallery[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
