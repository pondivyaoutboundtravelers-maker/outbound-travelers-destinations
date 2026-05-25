import React from 'react'
import { manaliData } from '@/lib/manali/data'

export default function SEOContentBlockManali() {
  const { h2, sections } = manaliData.seoContent

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 border-t border-border-soft bg-gray-50/30">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-xl md:text-2xl font-bold font-fraunces text-brand-navy mb-8 leading-snug">
          {h2}
        </h2>
        
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-base font-bold font-fraunces text-brand-navy">
                {section.h3}
              </h3>
              <p className="text-xs md:text-sm text-muted leading-relaxed font-medium">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
