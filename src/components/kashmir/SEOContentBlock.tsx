import React from 'react'
import { kashmirData } from '@/lib/kashmir/data'

export default function SEOContentBlock() {
  const { seoContent } = kashmirData

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-3xl mx-auto border-t border-border-soft">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold mb-8 text-center font-fraunces">
        {seoContent.h2}
      </h2>
      <div className="prose prose-slate max-w-none space-y-8">
        {seoContent.sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold font-fraunces text-brand-navy">
              {section.h3}
            </h3>
            <p className="text-sm md:text-base text-muted leading-relaxed font-inter">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
