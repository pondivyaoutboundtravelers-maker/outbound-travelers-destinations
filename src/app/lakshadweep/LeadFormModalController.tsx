'use client'

import React, { useState, useEffect } from 'react'
import LeadFormModal from '@/components/shared/LeadFormModal'
import { lakshadweepData } from '@/lib/lakshadweep/data'

export default function LeadFormModalController() {
  const [isOpen, setIsOpen] = useState(false)
  const [prefill, setPrefill] = useState<{ travelers?: number; nights?: number; notes?: string } | undefined>(undefined)

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
      config={lakshadweepData.leadForm}
      whatsapp={lakshadweepData.whatsapp}
      accentColor={lakshadweepData.theme.accentColor}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      prefill={prefill}
    />
  )
}
