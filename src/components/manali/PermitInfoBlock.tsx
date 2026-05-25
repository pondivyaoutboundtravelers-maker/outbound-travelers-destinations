'use client'

import React, { useEffect, useState } from 'react'
import { manaliData } from '@/lib/manali/data'
import { manaliEvents } from '@/lib/manali/analytics'

export default function PermitInfoBlock() {
  const [isSummerMode, setIsSummerMode] = useState<boolean>(true)

  useEffect(() => {
    manaliEvents.rohtangPermitView()
    
    // Check current month (1-indexed)
    const currentMonth = new Date().getMonth() + 1
    // May to October are months 5 to 10
    if (currentMonth >= 5 && currentMonth <= 10) {
      setIsSummerMode(true)
    } else {
      setIsSummerMode(false)
    }
  }, [])

  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="bg-[#FEF3C7] border-l-4 border-amber-500 rounded-r-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl" role="img" aria-label="mountain">🏔️</span>
            <h3 className="text-lg md:text-xl font-bold text-amber-900 font-fraunces leading-tight">
              {manaliData.permitInfo.title}
            </h3>
          </div>
          
          <p className="text-xs md:text-sm text-amber-800 font-semibold mb-4">
            {manaliData.permitInfo.subtitle}
          </p>

          {isSummerMode ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {manaliData.permitInfo.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-amber-950 font-medium">
                  <svg className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-amber-900 font-bold mt-2">
              Rohtang Pass is currently closed for the season. Solang Valley is open year-round.
            </p>
          )}
        </div>

        <button
          onClick={handleCTA}
          className="flex-shrink-0 w-full md:w-auto px-6 h-12 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition-colors text-sm"
        >
          Ask about Rohtang permits
        </button>
      </div>
    </section>
  )
}
