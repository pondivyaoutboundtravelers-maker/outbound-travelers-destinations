'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { kashmirData } from '@/lib/kashmir/data'
import { kashmirEvents } from '@/lib/kashmir/analytics'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'
import type { Package } from '@/lib/shared/types'

export default function PackageCards() {
  const [filteredPkgs, setFilteredPkgs] = useState<Package[]>([])
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1
    const filtered = kashmirData.packages.filter((pkg) => {
      if (!pkg.seasonal) return true
      if (pkg.seasonMonths) {
        return pkg.seasonMonths.includes(currentMonth)
      }
      return true
    })
    setFilteredPkgs(filtered)
  }, [])

  const handleEnquire = (pkg: Package) => {
    kashmirEvents.packageClick(pkg.id, pkg.name)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section id="packages" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Kashmir Tour Packages
      </h2>
      <p className="text-center text-muted mb-10 max-w-xl mx-auto text-sm md:text-base">
        Select a starting point for your customized itinerary. Swap hotels, adjust nights, add experiences — everything is fully tailor-made.
      </p>

      {/* Mobile Horizontal Carousel */}
      <div className="md:hidden flex flex-col">
        <div
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-6"
          onScroll={(e) => {
            const el = e.currentTarget
            const idx = Math.round(el.scrollLeft / (el.clientWidth - 32))
            setActiveSlide(idx)
          }}
        >
          {filteredPkgs.map((pkg) => (
            <div
              key={pkg.id}
              className="snap-start min-w-[280px] w-[85vw] flex-shrink-0 relative h-[400px] rounded-xl overflow-hidden shadow-md flex flex-col justify-end"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={pkg.image}
                  alt={pkg.alt}
                  fill
                  sizes="85vw"
                  className="object-cover"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Content */}
              <div className="absolute inset-0 p-5 z-20 flex flex-col justify-between text-white">
                {/* Ideal for tag */}
                <div className="self-start">
                  <span className="bg-kashmir-accent text-[9px] font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                    {pkg.idealFor.split(',')[0]}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs text-white/80 font-medium">{pkg.duration}</span>
                  <h3 className="text-xl font-fraunces font-bold leading-tight">{pkg.name}</h3>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {pkg.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold whitespace-nowrap">
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/20">
                    <div>
                      <span className="block text-[9px] text-white/70 uppercase">Starting Price</span>
                      <span className="text-sm font-bold">{pkg.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={buildWhatsAppUrl(kashmirData.whatsapp.number, pkg.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center text-white"
                        aria-label="Enquire on WhatsApp"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09 .928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
                        </svg>
                      </a>
                      <button
                        onClick={() => handleEnquire(pkg)}
                        className="px-4 py-2 bg-brand-cta text-white font-bold rounded-lg text-xs"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-1.5 mt-2">
          {filteredPkgs.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeSlide ? 'w-4 bg-kashmir-accent' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {filteredPkgs.map((pkg) => (
          <div
            key={pkg.id}
            className="relative h-[420px] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-end"
          >
            {/* Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={pkg.image}
                alt={pkg.alt}
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>

            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />

            {/* Content */}
            <div className="absolute inset-0 p-6 z-20 flex flex-col justify-between text-white">
              {/* Ideal for tag */}
              <div className="self-start">
                <span className="bg-kashmir-accent text-[9px] font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                  {pkg.idealFor}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-white/80 font-medium">{pkg.duration}</span>
                <h3 className="text-xl md:text-2xl font-fraunces font-bold leading-tight">
                  {pkg.name}
                </h3>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {pkg.highlights.map((h, i) => (
                    <span key={i} className="text-[10px] bg-white/20 px-2.5 py-0.5 rounded font-semibold whitespace-nowrap">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/20">
                  <div>
                    <span className="block text-[9px] text-white/70 uppercase">Starting Price</span>
                    <span className="text-base font-bold">{pkg.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={buildWhatsAppUrl(kashmirData.whatsapp.number, pkg.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center text-white"
                      aria-label="Enquire on WhatsApp"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09 .928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
                      </svg>
                    </a>
                    <button
                      onClick={() => handleEnquire(pkg)}
                      className="px-5 h-10 bg-brand-cta text-white font-bold rounded-lg text-sm transition-opacity hover:opacity-90"
                    >
                      Enquire Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
