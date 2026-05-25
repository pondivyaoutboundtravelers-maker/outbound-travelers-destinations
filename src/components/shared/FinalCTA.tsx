"use client";

import React from 'react'

interface FinalCTAProps {
  accentColor: string
  headline: string
  body: string
  whatsappUrl: string
  whatsappButtonLabel?: string
  getQuoteLabel?: string
  onGetQuote?: () => void
  formEventName?: string
}

export default function FinalCTA({
  accentColor,
  headline,
  body,
  whatsappUrl,
  whatsappButtonLabel = 'WhatsApp our travel team',
  getQuoteLabel = 'Send us your details',
  onGetQuote,
  formEventName
}: FinalCTAProps) {
  const handleGetQuote = () => {
    if (onGetQuote) {
      onGetQuote()
    } else {
      window.dispatchEvent(new CustomEvent(formEventName || 'openLeadForm'))
    }
  }

  return (
    <section 
      className="w-full py-16 px-4 md:px-8 text-center text-white"
      style={{ backgroundColor: accentColor }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-fraunces font-bold mb-4 leading-tight">
          {headline}
        </h2>
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed font-inter">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 transition-colors font-bold rounded-lg shadow-md"
            style={{ color: accentColor }}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09 .928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
            </svg>
            {whatsappButtonLabel}
          </a>
          <button
            onClick={handleGetQuote}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors font-bold rounded-lg"
          >
            {getQuoteLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
