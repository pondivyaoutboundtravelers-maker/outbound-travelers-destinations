import React from 'react'
import { baliData } from '@/lib/bali/data'

export default function SEOContentBlockBali() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50 border-t border-border-soft">
      <div className="max-w-[760px] mx-auto prose prose-sm md:prose-base prose-slate text-muted">
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy mb-6 text-center">
          {baliData.seoContent.h2}
        </h2>

        <div className="space-y-8">
          {baliData.seoContent.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-3">
                {section.h3}
              </h3>
              <p className="leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
