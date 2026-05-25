'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { lakshadweepData } from '@/lib/lakshadweep/data'
import { lakshadweepEvents } from '@/lib/lakshadweep/analytics'

export default function GalleryGridLakshadweep() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx)
    lakshadweepEvents.galleryView(idx)
  }

  const go = (dir: 1 | -1, e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIdx((prev) => {
      if (prev === null) return null
      const next = prev + dir
      if (next < 0) return lakshadweepData.gallery.length - 1
      if (next >= lakshadweepData.gallery.length) return 0
      return next
    })
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return
      if (e.key === 'Escape') setLightboxIdx(null)
      if (e.key === 'ArrowLeft') setLightboxIdx((p) => (p === null ? null : p === 0 ? lakshadweepData.gallery.length - 1 : p - 1))
      if (e.key === 'ArrowRight') setLightboxIdx((p) => (p === null ? null : p === lakshadweepData.gallery.length - 1 ? 0 : p + 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIdx])

  const mosaicSpans = [
    'md:col-span-2 row-span-1', 
    'md:col-span-1 md:row-span-2', 
    'md:col-span-1 row-span-1',    
    'md:col-span-1 row-span-1',    
    'md:col-span-1 row-span-1',    
    'md:col-span-2 row-span-1',    
    'md:col-span-1 md:row-span-2', 
    'md:col-span-1 row-span-1',    
    'md:col-span-1 row-span-1',    
    'md:col-span-2 row-span-1',    
    'md:col-span-1 row-span-1',    
    'md:col-span-1 row-span-1',    
  ]

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#06B6D4] uppercase block mb-3">
          Visual Journal
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          The Colors of Lakshadweep
        </h2>
        <p className="text-xs md:text-sm text-muted mt-2">
          From crystal clear lagoons to untouched coral reefs.
        </p>
      </div>

      {/* Mobile: 2-col grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {lakshadweepData.gallery.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer group shadow-sm"
          >
            <Image src={item.image} alt={item.alt} fill sizes="50vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Desktop: Mosaic grid */}
      <div className="hidden md:grid grid-cols-4 auto-rows-[200px] gap-3">
        {lakshadweepData.gallery.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className={`relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer group shadow-sm ${mosaicSpans[idx] ?? ''}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 1280px) 25vw, 300px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[#06B6D4]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-xs font-medium leading-snug drop-shadow-md">{item.alt.split(' ').slice(0, 5).join(' ')}…</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4" onClick={() => setLightboxIdx(null)}>
          <button onClick={() => setLightboxIdx(null)} className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center z-30" aria-label="Close">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <button onClick={(e) => go(-1, e)} className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center z-30" aria-label="Previous">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="relative w-full max-w-4xl h-[70vh] rounded-xl overflow-hidden flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image src={lakshadweepData.gallery[lightboxIdx].image} alt={lakshadweepData.gallery[lightboxIdx].alt} fill sizes="80vw" className="object-contain" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
              <p className="text-white text-xs md:text-sm font-medium">{lakshadweepData.gallery[lightboxIdx].alt}</p>
              <p className="text-white/50 text-[10px] mt-1">{lightboxIdx + 1} / {lakshadweepData.gallery.length}</p>
            </div>
          </div>
          <button onClick={(e) => go(1, e)} className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center z-30" aria-label="Next">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      )}
    </section>
  )
}
