'use client'

import React from 'react'
import { amritsarData } from '@/lib/amritsar/data'
import { amritsarEvents } from '@/lib/amritsar/analytics'

export default function ComboAddonModule() {
  const handleComboClick = (comboLabel: string) => {
    amritsarEvents.comboAddonClicked(comboLabel)
  }

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="bg-[#FEF3C7]/40 border border-[#A16207]/30 rounded-3xl p-6 md:p-10 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-bold tracking-widest text-[#A16207] uppercase block mb-2">
            Multi-City Journeys
          </span>
          <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
            {amritsarData.comboModule.title}
          </h2>
          <p className="text-xs md:text-sm text-muted mt-2 leading-relaxed">
            Combine Amritsar\'s rich heritage with mountain landscapes. Save time with intelligent routing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {amritsarData.comboModule.combos.map((combo, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-soft hover:border-[#A16207]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="font-bold text-base md:text-lg text-brand-navy font-fraunces">
                    {combo.label}
                  </h3>
                  <span className="bg-[#FEF3C7] text-[#A16207] text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                    {combo.duration}
                  </span>
                </div>
                
                <p className="text-xs md:text-sm text-muted font-medium mb-6">
                  {combo.note}
                </p>
              </div>

              <a
                href={combo.href}
                onClick={() => handleComboClick(combo.label)}
                className="w-full h-11 bg-[#A16207] hover:bg-[#A16207]/95 text-white font-bold rounded-xl transition-all flex items-center justify-center text-xs gap-1.5 shadow-sm"
              >
                See this combo
                <span className="text-sm font-normal">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
