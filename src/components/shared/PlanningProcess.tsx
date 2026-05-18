import React from 'react'
import type { ProcessStep } from '@/lib/shared/types'

export default function PlanningProcess({ steps, accentColor }: { steps: ProcessStep[], accentColor: string }) {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold mb-8">How We Plan Your Trip</h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 relative">
        {/* Connecting line on desktop */}
        <div 
          className="hidden md:block absolute top-6 left-12 right-12 h-[2px] z-0" 
          style={{ backgroundColor: accentColor, opacity: 0.2 }}
        />
        
        {steps.map((step) => (
          <div key={step.step} className="flex-1 flex flex-row md:flex-col items-start md:items-start relative z-10 gap-4">
            <div 
              className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center font-bold text-white text-lg"
              style={{ backgroundColor: accentColor }}
            >
              {step.step}
            </div>
            <div>
              <h3 className="text-base font-bold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
