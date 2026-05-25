'use client'

import React, { useEffect } from 'react'
import { ladakhData } from '@/lib/ladakh/data'
import { ladakhEvents } from '@/lib/ladakh/analytics'

export default function AltitudeWarningBlock() {
  useEffect(() => {
    ladakhEvents.altitudeWarningView()
  }, [])

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto my-4">
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          {/* Warning Icon */}
          <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <div className="flex-1">
            <h2 className="text-lg md:text-xl font-bold text-amber-900 mb-4">
              {ladakhData.altitudeWarning.title}
            </h2>

            <ul className="space-y-2.5">
              {ladakhData.altitudeWarning.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-amber-800">
                  <svg
                    className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="leading-relaxed font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs md:text-sm text-amber-700 font-semibold italic">
              Our Ladakh itineraries are built with altitude safety as the first priority — not an afterthought.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
