import React from 'react'
import { amritsarData } from '@/lib/amritsar/data'

export default function AmritsarQuickSummary() {
  return (
    <section className="bg-white border-b border-border-soft">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {amritsarData.quickSummary.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 px-4 ${
                idx < amritsarData.quickSummary.length - 1 ? 'lg:border-r lg:border-border-soft' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#FEF3C7] text-[#A16207]">
                {idx === 0 && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )}
              </div>
              <div>
                <span className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-1">
                  {item.label}
                </span>
                <span className="block text-sm md:text-base font-bold text-brand-navy leading-snug">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
