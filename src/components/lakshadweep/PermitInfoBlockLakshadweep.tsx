'use client'

import React, { useEffect } from 'react'
import { lakshadweepData } from '@/lib/lakshadweep/data'
import { lakshadweepEvents } from '@/lib/lakshadweep/analytics'

export default function PermitInfoBlockLakshadweep() {
  useEffect(() => {
    lakshadweepEvents.permitInfoView()
  }, [])

  const { permitInfo, whatsapp } = lakshadweepData
  const whatsappUrl = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent('Hi Outbound Travelers, I need help with Lakshadweep Entry Permits and planning. Please share details.')}`

  const openForm = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-8 px-4 md:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="bg-white border-2 border-[#06B6D4] rounded-3xl p-6 md:p-10 shadow-lg relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#CFFAFE] rounded-bl-full opacity-50 -z-10" />

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy mb-2">
            {permitInfo.title}
          </h2>
          <p className="text-sm md:text-base text-muted font-medium">
            {permitInfo.subtitle}
          </p>
        </div>

        <ul className="space-y-4 mb-8">
          {permitInfo.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CFFAFE] flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm text-brand-navy font-medium leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>

        {permitInfo.urgencyNote && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-8 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-sm text-amber-900 font-medium">
              {permitInfo.urgencyNote}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-4 bg-[#06B6D4] hover:bg-[#06B6D4]/90 text-white font-bold rounded-xl text-center text-sm md:text-base shadow-md transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
            </svg>
            Start permit process — WhatsApp us
          </a>
          <button
            onClick={openForm}
            className="flex-1 px-6 py-4 bg-gray-100 hover:bg-gray-200 text-brand-navy font-bold rounded-xl text-center text-sm md:text-base transition-all"
          >
            Get a quote first
          </button>
        </div>
      </div>
    </section>
  )
}
