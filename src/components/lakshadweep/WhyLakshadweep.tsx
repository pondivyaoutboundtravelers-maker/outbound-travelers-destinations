import React from 'react'
import { lakshadweepData } from '@/lib/lakshadweep/data'

export default function WhyLakshadweep() {
  const { whyVisit } = lakshadweepData

  const getIcon = (iconStr: string) => {
    switch (iconStr) {
      case 'specialist':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      case 'verified':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      case 'southindia':
      default:
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    }
  }

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Why Lakshadweep with Outbound Travelers
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {whyVisit.map((item, idx) => (
          <div key={idx} className="bg-white border border-border-soft p-6 md:p-8 rounded-2xl shadow-sm border-l-4 border-l-[#06B6D4]">
            <div className="w-12 h-12 bg-[#CFFAFE] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {getIcon(item.icon)}
              </svg>
            </div>
            <h3 className="font-bold text-brand-navy text-lg mb-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
