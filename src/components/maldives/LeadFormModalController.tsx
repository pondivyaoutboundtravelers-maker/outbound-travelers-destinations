'use client'
import React, { useState, useEffect } from 'react'
import LeadFormModal from '@/components/shared/LeadFormModal'
import { maldivesData } from '@/lib/maldives/data'

export default function LeadFormModalController() {
  const [isOpen, setIsOpen] = useState(false)
  const [prefill, setPrefill] = useState<any>(undefined)
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const ce = e as CustomEvent
      setPrefill(ce.detail?.prefill || undefined)
      setIsOpen(true)
    }
    window.addEventListener('openLeadForm', handleOpen)
    return () => window.removeEventListener('openLeadForm', handleOpen)
  }, [])
  return <LeadFormModal config={maldivesData.leadForm} whatsapp={maldivesData.whatsapp} accentColor={maldivesData.theme.accentColor} isOpen={isOpen} onClose={() => setIsOpen(false)} prefill={prefill} />
}
