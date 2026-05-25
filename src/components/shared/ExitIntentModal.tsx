'use client'

import React, { useEffect, useState } from 'react'

interface ExitIntentModalProps {
  whatsappUrl: string
  destinationName?: string
  title?: string
  body?: string
}

export default function ExitIntentModal({
  whatsappUrl,
  destinationName = 'Kashmir',
  title,
  body,
}: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // 30 seconds delay before activating exit intent tracking
    const delayTimer = setTimeout(() => {
      const handleMouseLeave = (e: MouseEvent) => {
        // Trigger if mouse leaves toward the top of the viewport
        if (e.clientY < 20) {
          const hasShown = sessionStorage.getItem('ot_exit_shown')
          if (!hasShown) {
            setIsOpen(true)
            sessionStorage.setItem('ot_exit_shown', 'true')
            // Fire event
            window.dispatchEvent(new CustomEvent('exitIntentTriggered'))
          }
        }
      }

      document.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }, 30000)

    return () => clearTimeout(delayTimer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="hidden md:flex fixed inset-0 items-center justify-center bg-black/60 z-50 p-4">
      {/* Backdrop clicks close */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
      
      {/* Modal Card */}
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative z-10 shadow-2xl border border-border-soft text-center animate-slide-up">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted hover:text-brand-navy focus:outline-none"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-16 h-16 bg-kashmir-soft text-kashmir-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>

        <h3 className="text-2xl font-fraunces font-bold text-brand-navy mb-2">
          {title || `Planning a ${destinationName} trip?`}
        </h3>
        <p className="text-sm md:text-base text-muted mb-6 leading-relaxed">
          {body || `Get a free 15-minute planning call with our ${destinationName} specialist. We&apos;ll help you finalize hotels, sights, and timings with no obligation.`}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            const ev = new CustomEvent('whatsappClick', { detail: { location: 'exit_intent' } })
            window.dispatchEvent(ev)
          }}
          className="inline-flex justify-center items-center gap-3 w-full py-4 bg-brand-cta text-white hover:bg-brand-cta/90 transition-colors font-bold rounded-lg shadow-md mb-3"
        >
          Book a free call
        </a>
        <button
          onClick={() => setIsOpen(false)}
          className="text-xs text-muted hover:underline font-semibold"
        >
          No thanks, I will keep browsing
        </button>
      </div>
    </div>
  )
}
