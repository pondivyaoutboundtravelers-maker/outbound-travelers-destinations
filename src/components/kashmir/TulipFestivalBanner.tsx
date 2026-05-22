'use client'

import React, { useState, useEffect } from 'react'

export default function TulipFestivalBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Show only in March (3) and April (4)
    const currentMonth = new Date().getMonth() + 1 // 1-indexed
    if (currentMonth === 3 || currentMonth === 4) {
      setShow(true)
    }
  }, [])

  if (!show) return null

  const handleBookNow = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <div className="bg-emerald-700 text-white py-2.5 px-4 text-center text-xs md:text-sm font-semibold flex items-center justify-center gap-3">
      <span>🌷 Tulip Festival Season — Kashmir&apos;s most spectacular bloom. Limited packages available.</span>
      <button 
        onClick={handleBookNow}
        className="underline hover:text-emerald-100 font-bold focus:outline-none"
      >
        Book Now
      </button>
    </div>
  )
}
