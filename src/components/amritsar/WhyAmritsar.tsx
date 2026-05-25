import React from 'react'
import { amritsarData } from '@/lib/amritsar/data'

export default function WhyAmritsar() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-[760px] mx-auto text-center md:text-left">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold font-fraunces mb-6 flex items-center justify-center md:justify-start gap-3">
        <span className="w-1.5 h-8 bg-[#A16207] inline-block rounded-full flex-shrink-0" />
        {amritsarData.whyVisit.title}
      </h2>
      
      <p className="text-base md:text-lg font-inter text-muted leading-relaxed font-medium pl-0 md:pl-5 border-l-0 md:border-l-2 md:border-l-[#A16207]/30">
        {amritsarData.whyVisit.body}
      </p>
    </section>
  )
}
