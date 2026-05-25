import React from 'react'
import { ladakhData } from '@/lib/ladakh/data'

export default function WhyLadakh() {
  const { whyVisit } = ladakhData

  const icons: Record<string, React.ReactNode> = {
    specialist: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    verified: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    southindia: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-10">
        Why Ladakh with Outbound Travelers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {whyVisit.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-cream rounded-xl border-l-4 border-[#1F3A8A] flex flex-col justify-start"
          >
            <div className="w-12 h-12 bg-[#E0E7FF] text-[#1F3A8A] rounded-full flex items-center justify-center mb-4">
              {icons[item.icon] || (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                </svg>
              )}
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
