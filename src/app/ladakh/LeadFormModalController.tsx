'use client'

import React, { useState, useEffect } from 'react'
import LeadFormModal from '@/components/shared/LeadFormModal'
import { ladakhData } from '@/lib/ladakh/data'

export default function LeadFormModalController() {
  const [isOpen, setIsOpen] = useState(false)
  const [prefill, setPrefill] = useState<{ travelers?: number; nights?: number } | undefined>(undefined)

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent
      if (customEvent.detail?.prefill) {
        setPrefill(customEvent.detail.prefill)
      } else {
        setPrefill(undefined)
      }
      setIsOpen(true)
    }

    window.addEventListener('openLeadForm', handleOpen)
    return () => window.removeEventListener('openLeadForm', handleOpen)
  }, [])

  return (
    <LeadFormModal
      config={ladakhData.leadForm}
      whatsapp={ladakhData.whatsapp}
      accentColor={ladakhData.theme.accentColor}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      prefill={prefill}
    />
  )
}
