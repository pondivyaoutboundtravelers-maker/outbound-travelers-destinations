import React from 'react'
import { keralaData } from '@/lib/kerala/data'

export default function WhyKerala() {
  const body = keralaData.whyVisit.body
  // Pull-quote phrase
  const pullPhrase = 'the road sometimes becomes water'
  const parts = body.split(pullPhrase)

  return (
    <section className="py-16 px-4 md:px-8 border-b border-border-soft">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-2xl md:text-3xl text-brand-navy font-bold font-fraunces mb-8 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#047857] inline-block rounded-full flex-shrink-0" />
          {keralaData.whyVisit.title}
        </h2>

        <div className="pl-5 border-l-2 border-[#047857]/30 space-y-5">
          {parts.length === 2 ? (
            <>
              <p className="text-base md:text-lg font-inter text-muted leading-relaxed font-medium">
                {parts[0]}
                <span className="text-xl md:text-2xl font-fraunces font-bold text-[#047857] italic leading-tight block my-4 pl-2 border-l-4 border-[#047857]">
                  "{pullPhrase}"
                </span>
                {parts[1]}
              </p>
            </>
          ) : (
            <p className="text-base md:text-lg font-inter text-muted leading-relaxed font-medium">
              {body}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
