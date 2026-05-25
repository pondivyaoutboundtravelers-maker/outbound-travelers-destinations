import React from 'react'
import { shimlaData } from '@/lib/shimla/data'

export default function SEOContentBlockShimla() {
  const { h2, sections } = shimlaData.seoContent

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-cream border-t border-b border-border-soft">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-brand-navy mb-8 text-center md:text-left">
          {h2}
        </h2>
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="prose prose-sm max-w-none">
              <h3 className="text-base font-bold text-brand-navy mb-2">
                {section.h3}
              </h3>
              <p className="text-sm text-muted leading-relaxed font-inter">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
