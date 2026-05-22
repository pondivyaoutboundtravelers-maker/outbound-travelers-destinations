import React from 'react'
import { singaporeData } from '@/lib/singapore/data'

export default function SEOContentBlock() {
  const { seoContent } = singaporeData

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#0D0D11] text-white border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white font-fraunces font-bold mb-10 text-center leading-tight">
          {seoContent.h2}
        </h2>
        <div className="space-y-8 font-inter">
          {seoContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-3 p-6 sm:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold font-fraunces text-red-500">
                {section.h3}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed font-normal">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
