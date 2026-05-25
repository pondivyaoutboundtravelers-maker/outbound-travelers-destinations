import React from 'react'
import { shimlaData } from '@/lib/shimla/data'

export default function WhyShimla() {
  const { whyVisit } = shimlaData

  const icons: Record<string, React.ReactNode> = {
    specialist: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    verified: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    southindia: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V8a.5.5 0 011 0" />
      </svg>
    ),
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-10">
        Why Shimla with Outbound Travelers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {whyVisit.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-cream rounded-xl border-l-4 border-[#2F5233] flex flex-col justify-start"
          >
            <div className="w-12 h-12 bg-[#E8EFE6] text-[#2F5233] rounded-full flex items-center justify-center mb-4">
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
