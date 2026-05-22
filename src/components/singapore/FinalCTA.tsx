'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Calendar, Sparkles, Send, MapPin, Compass } from 'lucide-react'
import { singaporeData } from '@/lib/singapore/data'

export default function FinalCTA() {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(
      new CustomEvent('openLeadForm', {
        detail: {
          prefill: {
            tripType: 'Family',
            specialReq: 'Requested from final CTA panel.'
          }
        }
      })
    )
  }

  const handleWhatsApp = () => {
    const waUrl = `https://wa.me/${singaporeData.whatsapp.number}?text=${encodeURIComponent(
      singaporeData.whatsapp.finalCtaMessage
    )}`
    window.open(waUrl, '_blank')
  }

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-cream via-sky-light to-light-blue text-dark-text overflow-hidden">
      
      {/* Dynamic Glowing Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-primary/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-coral/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Floating Elements (Tropical Nodes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-[10%] hidden md:flex items-center gap-2.5 px-4 py-2 bg-white/80 border border-teal-primary/10 rounded-full text-xs font-inter text-medium-text shadow-sm backdrop-blur-md"
        >
          <MapPin className="w-3.5 h-3.5 text-coral animate-pulse" />
          <span>Gardens by the Bay Cloud Dome</span>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-32 right-[10%] hidden md:flex items-center gap-2.5 px-4 py-2 bg-white/80 border border-teal-primary/10 rounded-full text-xs font-inter text-medium-text shadow-sm backdrop-blur-md z-20"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-bright" />
          <span>Spectrum Cruise Combo Stays</span>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-teal-primary/10 text-teal-primary text-xs font-bold font-inter rounded-full uppercase tracking-wider mb-8 shadow-sm"
        >
          <Compass className="w-4 h-4 text-coral" />
          Gateway to the Future
        </motion.div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-dark-text max-w-4xl mx-auto leading-tight mb-8">
          Your Next-Gen Journey <br className="hidden sm:inline" />
          Starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-ocean-blue">With One Click</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm md:text-base text-medium-text font-inter max-w-xl mx-auto mb-12 leading-relaxed">
          Skip standardized tours. Allow our veteran destination designers to architect an effortlessly smooth, 100% personalized Singapore escape for your family today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Main CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOpenLeadForm}
            className="w-full sm:w-auto py-4 px-8 bg-teal-primary hover:bg-teal-accent text-white rounded-full text-sm font-bold font-inter tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(13,148,136,0.3)] hover:shadow-[0_8px_30px_rgba(13,148,136,0.4)] border border-teal-primary/20 transition-all"
          >
            Request Custom Quotation
            <Send className="w-4 h-4" />
          </motion.button>

          {/* WhatsApp CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="w-full sm:w-auto py-4 px-8 bg-white hover:bg-emerald/5 text-emerald rounded-full text-sm font-bold font-inter tracking-wider uppercase flex items-center justify-center gap-2 border border-emerald/20 transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-current text-emerald" />
            WhatsApp Tour Architect
          </motion.button>
        </div>

        {/* Micro-Social Proof */}
        <div className="mt-16 pt-8 border-t border-teal-primary/10 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-xs font-inter text-medium-text">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald rounded-full animate-ping" />
            <span>5 Specialists active on WhatsApp right now</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span>Response time &lt; 2 hours guaranteed</span>
          <span className="hidden sm:inline">•</span>
          <span>TAFI &amp; IATA Accredited Member</span>
        </div>

      </div>

      {/* Skyline Architectural Skyline silhouette drawing along the very bottom of the CTA section */}
      <div className="absolute bottom-0 left-0 w-full h-16 opacity-10 pointer-events-none overflow-hidden z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-full text-teal-primary">
          <path d="M0 120V90H30V70H50V90H80V50H110V90H140V120H0Z" fill="currentColor"/>
          <path d="M140 120V80H160V60H190V80H230V120H140Z" fill="currentColor"/>
          <path d="M230 120V70H250V40H280V70H320V120H230Z" fill="currentColor"/>
          {/* Marina Bay Sands Silhouette */}
          <path d="M360 120V30C410 32 460 32 510 30V120H360Z" fill="currentColor"/>
          <path d="M375 120V45H415V120H375ZM425 120V45H465V120H425ZM475 120V45H515V120H475Z" fill="currentColor"/>
          {/* Wheel / Flyer */}
          <circle cx="600" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
          <line x1="600" y1="50" x2="600" y2="120" stroke="currentColor" strokeWidth="2"/>
          <line x1="600" y1="50" x2="570" y2="100" stroke="currentColor" strokeWidth="1"/>
          <line x1="600" y1="50" x2="630" y2="100" stroke="currentColor" strokeWidth="1"/>
          {/* Supertrees */}
          <path d="M720 120V80H700L720 60L740 80H720Z" fill="currentColor"/>
          <path d="M780 120V70H760L780 45L800 70H780Z" fill="currentColor"/>
          <path d="M840 120V90H820L840 75L860 90H840Z" fill="currentColor"/>
          {/* Normal buildings */}
          <path d="M900 120V60H930V40H950V60H980V120H900Z" fill="currentColor"/>
          <path d="M980 120V80H1010V50H1030V80H1060V120H980Z" fill="currentColor"/>
          <path d="M1060 120V40H1100V10H1120V40H1160V120H1060Z" fill="currentColor"/>
          <path d="M1160 120V80H1190V60H1210V80H1240V120H1160Z" fill="currentColor"/>
          <path d="M1240 120V95H1270V75H1290V95H1320V120H1240Z" fill="currentColor"/>
          <path d="M1320 120V50H1350V30H1370V50H1400V120H1320Z" fill="currentColor"/>
          <path d="M1400 120V90H1440V120H1400Z" fill="currentColor"/>
        </svg>
      </div>

    </section>
  )
}
