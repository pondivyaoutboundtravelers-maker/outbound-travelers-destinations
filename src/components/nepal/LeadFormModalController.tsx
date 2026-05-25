'use client'
import React, { useState, useEffect } from 'react'
import LeadFormModal from '@/components/shared/LeadFormModal'
import { nepalData } from '@/lib/nepal/data'
export default function LeadFormModalController() {
  const [isOpen, setIsOpen] = useState(false)
  const [prefill, setPrefill] = useState<any>(undefined)
  useEffect(() => {
    const h = (e: Event) => { setPrefill((e as CustomEvent).detail?.prefill || undefined); setIsOpen(true) }
    window.addEventListener('openLeadForm', h); return () => window.removeEventListener('openLeadForm', h)
  }, [])
  return <LeadFormModal config={nepalData.leadForm} whatsapp={nepalData.whatsapp} accentColor={nepalData.theme.accentColor} isOpen={isOpen} onClose={() => setIsOpen(false)} prefill={prefill} />
}
