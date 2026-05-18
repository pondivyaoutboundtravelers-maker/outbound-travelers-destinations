'use client'

import React from 'react'
import type { Testimonial } from '@/lib/shared/types'

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  return (
    <section className="py-12 md:py-16 bg-cream px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-8">
          What Our Travelers Say
        </h2>
        
        {/* Mobile Horizontal Snap Scroll / Desktop Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:grid md:grid-cols-3 no-scrollbar pb-4 md:pb-0">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="snap-start min-w-[300px] md:min-w-0 flex-1 bg-white p-6 rounded-xl shadow-sm border border-border-soft flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm md:text-base text-brand-navy italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-border-soft pt-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-muted font-bold text-sm uppercase flex-shrink-0">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-brand-navy">{t.name}</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="text-[11px] bg-cream text-brand-navy px-2 py-0.5 rounded font-semibold">
                      {t.city}
                    </span>
                    <span className="text-[11px] bg-kashmir-soft text-kashmir-accent px-2 py-0.5 rounded font-semibold">
                      {t.tripType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
