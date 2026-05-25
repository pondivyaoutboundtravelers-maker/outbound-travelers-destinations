'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { shimlaData } from '@/lib/shimla/data'
import { shimlaEvents } from '@/lib/shimla/analytics'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'
import type { Package } from '@/lib/shared/types'

export default function PackageCardsShimla() {
  const [filteredPackages, setFilteredPackages] = useState<Array<Package>>([])
  const [activeSlide, setActiveSlide] = useState<number>(0)

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1
    const filtered = shimlaData.packages.filter((pkg) => {
      if (!pkg.seasonal) return true
      if (pkg.seasonMonths) return pkg.seasonMonths.includes(currentMonth)
      return true
    })
    setFilteredPackages(filtered)
  }, [])

  const handleEnquire = (pkg: Package) => {
    shimlaEvents.packageClick(pkg.id, pkg.name)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  if (filteredPackages.length === 0) {
    return null
  }

  return (
    <section id="shimla-packages" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
        Shimla Tour Packages
      </h2>
      <p className="text-center text-muted mb-10 max-w-xl mx-auto text-sm md:text-base">
        Explore our curated collection of Shimla tour packages, fully customizable to your specific requirements.
      </p>

      {/* Mobile Horizontal Carousel */}
      <div className="md:hidden">
        <div
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-6"
          onScroll={(e) => {
            const el = e.currentTarget
            const idx = Math.round(el.scrollLeft / (el.clientWidth * 0.85 + 16))
            setActiveSlide(idx)
          }}
        >
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="snap-start min-w-[85vw] flex-shrink-0 bg-white border border-border-soft rounded-2xl overflow-hidden shadow-sm flex flex-col h-[480px]"
            >
              {/* Top Image */}
              <div className="relative w-full h-[180px] bg-gray-200">
                <Image src={pkg.image} alt={pkg.alt} fill sizes="85vw" className="object-cover" />
                {pkg.seasonal && (
                  <span className="absolute top-3 left-3 bg-[#2F5233] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded tracking-wider z-20">
                    Winter Special
                  </span>
                )}
              </div>

              {/* Bottom Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[10px] font-bold text-[#2F5233] bg-[#E8EFE6] px-2.5 py-0.5 rounded-full mb-2">
                    {pkg.idealFor.split(',')[0].trim()}
                  </span>
                  <div className="text-xs text-muted font-medium mb-1">{pkg.duration}</div>
                  <h3 className="text-lg font-fraunces font-bold text-brand-navy leading-tight mb-3">
                    {pkg.name}
                  </h3>
                  
                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-4">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F5233] flex-shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border-soft pt-3 flex justify-between items-center">
                  <div>
                    <span className="block text-[9px] text-muted uppercase">Starting Price</span>
                    <span className="text-sm font-bold text-brand-navy">{pkg.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={buildWhatsAppUrl(shimlaData.whatsapp.number, pkg.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center text-white"
                      aria-label="Enquire on WhatsApp"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
                      </svg>
                    </a>
                    <button
                      onClick={() => handleEnquire(pkg)}
                      className="px-4 py-2 text-white font-bold rounded-lg text-xs bg-[#2F5233] hover:bg-[#2F5233]/90 transition-colors"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-2">
          {filteredPackages.map((_, i) => (
            <div
              key={i}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === activeSlide ? '16px' : '8px',
                backgroundColor: i === activeSlide ? '#2F5233' : '#D1D5DB',
              }}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white border border-border-soft rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-[480px]"
          >
            {/* Top Image */}
            <div className="relative w-full h-[200px] bg-gray-200">
              <Image src={pkg.image} alt={pkg.alt} fill sizes="33vw" className="object-cover" />
              {pkg.seasonal && (
                <span className="absolute top-4 left-4 bg-[#2F5233] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded tracking-wider z-20">
                  Winter Special
                </span>
              )}
            </div>

            {/* Bottom Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[10px] font-bold text-[#2F5233] bg-[#E8EFE6] px-2.5 py-0.5 rounded-full mb-3">
                  {pkg.idealFor}
                </span>
                <div className="text-xs text-muted font-medium mb-1">{pkg.duration}</div>
                <h3 className="text-xl font-fraunces font-bold text-brand-navy leading-tight mb-4">
                  {pkg.name}
                </h3>
                
                {/* Highlights Bullet List */}
                <ul className="space-y-1.5 mb-4">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F5233] flex-shrink-0" />
                      <span className="line-clamp-1">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border-soft pt-4 flex justify-between items-center">
                <div>
                  <span className="block text-[9px] text-muted uppercase">Starting Price</span>
                  <span className="text-base font-bold text-brand-navy">{pkg.price}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={buildWhatsAppUrl(shimlaData.whatsapp.number, pkg.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center text-white"
                    aria-label="Enquire on WhatsApp"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
                    </svg>
                  </a>
                  <button
                    onClick={() => handleEnquire(pkg)}
                    className="px-5 h-10 text-white font-bold rounded-lg text-sm bg-[#2F5233] hover:bg-[#2F5233]/90 transition-colors"
                  >
                    Enquire Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
