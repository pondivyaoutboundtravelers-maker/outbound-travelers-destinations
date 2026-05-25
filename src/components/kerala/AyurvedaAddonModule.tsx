'use client'

import React from 'react'
import { keralaData } from '@/lib/kerala/data'
import { keralaEvents } from '@/lib/kerala/analytics'

export default function AyurvedaAddonModule() {
  const handleAddonClick = (addonName: string) => {
    keralaEvents.wellnessAddonSelected(addonName)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#047857] uppercase block mb-3">
          Wellness Add-ons
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Ayurveda in Kerala — add it to any package
        </h2>
        <p className="text-sm text-muted mt-3 leading-relaxed">
          We only partner with licensed centres. Every session is with certified therapists, not hotel spa rebrands.
        </p>
      </div>

      {/* 3 Addon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {keralaData.wellnessAddons.map((addon, idx) => {
          const isPanchakarma = idx === 2
          return (
            <div
              key={addon.name}
              className={`bg-white border rounded-2xl p-6 flex flex-col shadow-sm ${
                isPanchakarma ? 'border-amber-200' : 'border-border-soft hover:border-[#047857]/30 hover:shadow-md'
              } transition-all`}
            >
              {isPanchakarma && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-4 flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-[10px] font-bold text-amber-700 leading-snug">
                    Requires pre-booking and medical consultation — confirm at enquiry stage.
                  </p>
                </div>
              )}

              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#047857] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-fraunces font-bold text-brand-navy text-base leading-tight">{addon.name}</h3>
                  {'note' in addon && addon.note && (
                    <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                      {addon.note}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{addon.description}</p>

              <div className="border-t border-border-soft pt-4 flex items-center justify-between gap-3">
                <span className="font-bold text-[#047857] text-sm">{addon.priceFrom}</span>
                <button
                  onClick={() => handleAddonClick(addon.name)}
                  className="px-4 h-9 bg-[#047857] hover:bg-[#047857]/95 text-white font-bold rounded-xl text-xs transition-colors"
                >
                  Add to my package
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Vet Trust Note */}
      <div className="bg-[#FAF6F0] border border-[#047857]/20 rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#047857] text-white flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="font-fraunces font-bold text-brand-navy text-base mb-2">
              How we vet Ayurveda centres
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              We visit every centre we list. Therapists must be certified under Kerala Ayurveda standards. We do not list hotel spa add-ons as Ayurveda.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
