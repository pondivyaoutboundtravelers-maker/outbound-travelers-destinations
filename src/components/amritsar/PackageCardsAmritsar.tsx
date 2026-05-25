'use client'

import React from 'react'
import { amritsarData } from '@/lib/amritsar/data'
import { amritsarEvents } from '@/lib/amritsar/analytics'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'
import type { Package } from '@/lib/shared/types'

export default function PackageCardsAmritsar() {
  const handleEnquire = (pkg: Package) => {
    amritsarEvents.packageClick(pkg.id, pkg.name)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section id="amritsar-packages" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-[11px] font-bold tracking-widest text-[#A16207] uppercase block mb-3">
          Custom Plans
        </span>
        <h2 className="text-2xl md:text-4xl font-fraunces font-bold text-brand-navy">
          Amritsar Tour Packages
        </h2>
        <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">
          Select one of our curated packages. Every detail is fully customisable to your arrival times and flight budgets.
        </p>
      </div>

      {/* Stacked Single Column on Mobile, 2-Col Grid on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {amritsarData.packages.map((pkg) => {
          const isFeatured = pkg.id === 'amritsar-short-trip'
          const waUrl = buildWhatsAppUrl(amritsarData.whatsapp.number, pkg.whatsappMessage)

          return (
            <div
              key={pkg.id}
              className={`bg-white border rounded-2xl p-6 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                isFeatured
                  ? 'border-[#A16207] shadow-md relative ring-1 ring-[#A16207]/30'
                  : 'border-border-soft hover:shadow-sm'
              }`}
            >
              {isFeatured && (
                <span className="absolute top-0 right-6 -translate-y-1/2 bg-[#A16207] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Recommended Choice
                </span>
              )}

              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="block text-xs font-bold text-[#A16207] uppercase tracking-wider mb-1">
                      {pkg.duration} Package
                    </span>
                    <h3 className="text-xl md:text-2xl font-fraunces font-bold text-brand-navy leading-tight">
                      {pkg.name}
                    </h3>
                  </div>
                  <span className="text-xs bg-[#FEF3C7] text-[#A16207] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    {pkg.idealFor.split(',')[0]}
                  </span>
                </div>

                <div className="text-xs text-muted font-medium mb-6 flex items-center gap-4">
                  <span>Stay Class: <strong className="text-brand-navy">{pkg.tier}</strong></span>
                </div>

                {/* Highlights List */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                    Package Highlights:
                  </h4>
                  <ul className="space-y-3">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#FEF3C7] text-[#A16207] flex items-center justify-center flex-shrink-0 text-xs mt-0.5 font-bold">
                          ✓
                        </span>
                        <span className="text-xs md:text-sm text-muted leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & CTA Section */}
              <div className="border-t border-border-soft pt-6 mt-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left w-full sm:w-auto">
                  <span className="block text-[10px] text-muted uppercase tracking-wider">Starting Rate</span>
                  <span className="text-lg md:text-xl font-bold text-brand-navy">{pkg.price}</span>
                </div>

                <div className="flex gap-2 w-full sm:w-auto justify-end">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => amritsarEvents.packageClick(pkg.id, pkg.name)}
                    className="w-11 h-11 rounded-xl bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-colors"
                    aria-label="Enquire on WhatsApp"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
                    </svg>
                  </a>
                  <button
                    onClick={() => handleEnquire(pkg as unknown as Package)}
                    className="px-6 h-11 bg-[#A16207] hover:bg-[#A16207]/95 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center shadow-sm"
                  >
                    Customise & Quote
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
