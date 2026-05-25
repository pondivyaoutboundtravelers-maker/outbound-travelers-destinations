import React from 'react'
import { baliData } from '@/lib/bali/data'

export default function WhyBali() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-10">
        Why Bali with Outbound Travelers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {baliData.whyVisit.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-border-soft shadow-sm border-l-4 border-l-[#D97706] hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-brand-navy mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
