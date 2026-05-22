'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { sikkimData } from '@/lib/sikkim/data'

export default function MountainGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = 'auto'
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % sikkimData.gallery.length)
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + sikkimData.gallery.length) % sikkimData.gallery.length)
    }
  }

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#CCFBF1] font-bold tracking-widest uppercase text-xs">Visuals</span>
          <h2 className="text-3xl md:text-5xl font-fraunces font-bold mt-3 text-white">
            Scenes from Sikkim
          </h2>
        </div>

        {/* Masonry-ish Grid (using CSS Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          {sikkimData.gallery.map((item, idx) => {
            // Make some items span 2 rows or columns for a masonry feel
            let spanClass = 'col-span-1 row-span-1'
            if (idx === 0) spanClass = 'col-span-2 row-span-2'
            if (idx === 3) spanClass = 'col-span-2 row-span-1'
            if (idx === 4) spanClass = 'col-span-1 row-span-2'
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${spanClass}`}
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md">
            <div className="absolute inset-0" onClick={closeLightbox} />
            
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-12 z-50 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-8 h-8 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.div 
              key={lightboxIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl h-[70vh] md:h-[85vh] mx-4 pointer-events-none"
            >
              <Image
                src={sikkimData.gallery[lightboxIndex].image}
                alt={sikkimData.gallery[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute bottom-[-40px] left-0 right-0 text-center text-slate-400 text-sm tracking-wide">
                {sikkimData.gallery[lightboxIndex].alt}
              </div>
            </motion.div>

            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-12 z-50 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-8 h-8 pl-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
