import React from 'react'
import { manaliData } from '@/lib/manali/data'

export default function WhyManali() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-10">
        Why Manali with Outbound Travelers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {manaliData.whyVisit.map((reason, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-border-soft rounded-2xl shadow-sm border-l-4 border-l-[#355C7D] flex flex-col justify-between"
          >
            <div>
              {/* Icon selector based on reasoning */}
              <div className="w-12 h-12 rounded-xl bg-[#DEE5EC] text-[#355C7D] flex items-center justify-center mb-4">
                {reason.icon === 'specialist' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )}
                {reason.icon === 'verified' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {reason.icon === 'southindia' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )}
              </div>

              <h3 className="text-lg font-bold font-fraunces text-brand-navy mb-2">
                {reason.title}
              </h3>
              
              <p className="text-sm text-muted leading-relaxed">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
