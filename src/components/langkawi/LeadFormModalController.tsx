'use client'

import React, { useState, useEffect } from 'react'
import LeadFormModal from '@/components/shared/LeadFormModal'
import { langkawiData } from '@/data/langkawi'

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
      setIsOpen(isOpen => !isOpen)
    }

    window.addEventListener('openLeadForm', handleOpen)
    return () => window.removeEventListener('openLeadForm', handleOpen)
  }, [])

  return (
    <LeadFormModal
      config={langkawiData.leadForm}
      whatsapp={langkawiData.whatsapp}
      accentColor={langkawiData.theme.accentColor}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      prefill={prefill}
    />
  )
}
