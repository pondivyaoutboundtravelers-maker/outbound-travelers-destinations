'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { keralaData } from '@/lib/kerala/data'
import { keralaEvents } from '@/lib/kerala/analytics'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'

export default function PackageCardsKerala() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handlePackageClick = (id: string, name: string) => {
    keralaEvents.packageClick(id, name)
  }

  const handleEnquire = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section id="kerala-packages" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#047857] uppercase block mb-3">
          Curated Packages
        </span>
        <h2 className="text-2xl md:text-4xl font-fraunces font-bold text-brand-navy">
          Kerala Tour Packages
        </h2>
        <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">
          Six packages. Every detail fully customisable — regions, hotel tiers, houseboat type, Ayurveda add-ons.
        </p>
      </div>

      {/* Mobile: horizontal scroll */}
      <div
        ref={scrollRef}
        className="md:hidden flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4"
      >
        {keralaData.packages.map((pkg) => {
          const waUrl = buildWhatsAppUrl(keralaData.whatsapp.number, pkg.whatsappMessage)
          return (
            <div
              key={pkg.id}
              onClick={() => handlePackageClick(pkg.id, pkg.name)}
              className={`flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-sm border ${
                pkg.featured ? 'border-[#047857] ring-1 ring-[#047857]/30' : 'border-border-soft'
              } flex flex-col relative`}
            >
              {pkg.featured && (
                <span className="absolute top-0 right-4 -translate-y-1/2 bg-[#047857] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm z-10">
                  Most Popular
                </span>
              )}
              <div className="relative w-full h-44 bg-gray-100">
                <Image
                  src={pkg.image}
                  alt={pkg.alt}
                  fill
                  sizes="288px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-block bg-white/15 text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/20 backdrop-blur-sm">
                    {pkg.tier}
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="mb-3">
                  <span className="text-[9px] font-bold text-[#047857] uppercase tracking-wider block mb-1">{pkg.duration}</span>
                  <h3 className="font-fraunces font-bold text-brand-navy text-sm leading-tight">{pkg.name}</h3>
                  <p className="text-[10px] text-muted mt-1">{pkg.idealFor.split(',')[0]}</p>
                </div>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {pkg.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[10px] text-muted">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#FAF6F0] text-[#047857] flex items-center justify-center flex-shrink-0 text-[8px] mt-0.5 font-bold">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border-soft pt-3 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-brand-navy">{pkg.price}</span>
                  <div className="flex gap-1.5">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center text-white"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
                      </svg>
                    </a>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleEnquire() }}
                      className="px-3 h-8 bg-[#047857] text-white text-[10px] font-bold rounded-lg"
                    >
                      Customise
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop: 3-col grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {keralaData.packages.map((pkg) => {
          const waUrl = buildWhatsAppUrl(keralaData.whatsapp.number, pkg.whatsappMessage)
          return (
            <div
              key={pkg.id}
              onClick={() => handlePackageClick(pkg.id, pkg.name)}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm border flex flex-col relative cursor-pointer group ${
                pkg.featured ? 'border-[#047857] ring-1 ring-[#047857]/30 shadow-md' : 'border-border-soft hover:shadow-md hover:border-[#047857]/30'
              } transition-all duration-300`}
            >
              {pkg.featured && (
                <span className="absolute top-0 right-5 -translate-y-1/2 bg-[#047857] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm z-10">
                  Most Popular
                </span>
              )}
              {/* Immersive image with gradient */}
              <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.alt}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <span className="text-[9px] font-bold text-white/80 uppercase tracking-wider">{pkg.duration}</span>
                  <span className="bg-white/15 text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/20 backdrop-blur-sm">
                    {pkg.tier}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="font-fraunces font-bold text-brand-navy text-lg leading-tight mb-1">{pkg.name}</h3>
                  <span className="text-xs text-muted">{pkg.idealFor.split(',')[0]}</span>
                </div>
                <ul className="space-y-2 mb-5 flex-1">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-4 h-4 rounded-full bg-[#FAF6F0] text-[#047857] flex items-center justify-center flex-shrink-0 text-[9px] mt-0.5 font-bold">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border-soft pt-4 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-muted block uppercase tracking-wider">Starting from</span>
                    <span className="text-base font-bold text-brand-navy">{pkg.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => { e.stopPropagation(); keralaEvents.whatsappClick('package_card', pkg.id) }}
                      className="w-10 h-10 rounded-xl bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-colors"
                      aria-label="Enquire on WhatsApp"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
                      </svg>
                    </a>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleEnquire() }}
                      className="px-4 h-10 bg-[#047857] hover:bg-[#047857]/95 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
                    >
                      Customise & Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
