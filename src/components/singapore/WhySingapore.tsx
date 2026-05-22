'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldAlert, Compass, Globe, Sparkles, Check, CheckCircle2, ChevronRight } from 'lucide-react'
import { singaporeData } from '@/lib/singapore/data'

export default function WhySingapore() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  // Motion variants
  const revealVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.15 } }
  } as const

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  } as const


  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-sky-light text-dark-text overflow-hidden">
      {/* Dynamic glow overlays */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-teal-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-coral/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase font-bold tracking-widest text-teal-primary font-inter block mb-3">
            Why Singapore Just Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-dark-text max-w-3xl mx-auto leading-tight">
            An Uncompromising Playground Designed for First-Time Luxury
          </h2>
          <div className="w-12 h-1 bg-coral mx-auto mt-6 rounded-full" />
        </div>

        {/* Editorial Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Storytelling Selectors */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold font-inter text-medium-text mb-6 block">
              Tap to reveal destination highlights
            </h3>
            
            <div className="space-y-3">
              {singaporeData.whyVisit.map((item, idx) => {
                const isActive = activeIndex === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                      isActive
                        ? 'bg-white border-teal-primary/30 shadow-[0_10px_30px_rgba(13,148,136,0.1)]'
                        : 'bg-white/50 border-teal-primary/5 hover:bg-white hover:border-teal-primary/20 shadow-sm'
                    }`}
                  >
                    {/* Glowing highlight indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-teal-primary" />
                    )}

                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold font-inter text-sm transition-colors ${
                        isActive
                          ? 'bg-teal-light border-teal-primary/20 text-teal-primary'
                          : 'bg-white border-teal-primary/10 text-medium-text group-hover:text-teal-primary'
                      }`}>
                        {idx + 1}
                      </div>
                      
                      <div>
                        <h4 className={`text-base font-bold font-inter transition-colors ${
                          isActive ? 'text-dark-text' : 'text-medium-text group-hover:text-dark-text'
                        }`}>
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                      isActive ? 'text-teal-primary translate-x-1' : 'text-medium-text group-hover:text-teal-primary'
                    }`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Immersive Luxury Visual Block & Details */}
          <div className="lg:col-span-7 h-full flex flex-col justify-center">
            <div className="relative min-h-[380px] sm:min-h-[420px] backdrop-blur-xl bg-white border border-teal-primary/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(13,148,136,0.08)] overflow-hidden flex flex-col justify-between">
              
              {/* Corner Grid Highlights */}
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-coral/10 blur-xl pointer-events-none" />
              <div className="absolute top-6 right-6 font-inter text-[80px] font-bold text-teal-primary/[0.03] leading-none select-none">
                0{activeIndex + 1}
              </div>

              {/* Dynamic Storytelling Panel Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={revealVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-coral/10 text-coral border border-coral/20 text-xs font-bold rounded-full font-inter uppercase">
                      Premium Advantage
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-fraunces font-bold text-dark-text">
                      {singaporeData.whyVisit[activeIndex].title}
                    </h3>
                    <p className="text-medium-text font-inter text-sm sm:text-base leading-relaxed">
                      {singaporeData.whyVisit[activeIndex].description}
                    </p>
                  </div>

                  {/* Bullet Highlights specific to active section */}
                  <div className="pt-6 border-t border-teal-primary/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeIndex === 0 && (
                      <>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Step-free access & lift links</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Spacious MRT priority cabins</span>
                        </div>
                      </>
                    )}
                    {activeIndex === 1 && (
                      <>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Tamil guides & airport check assistance</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Tamil signage in metros & roads</span>
                        </div>
                      </>
                    )}
                    {activeIndex === 2 && (
                      <>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Little India veg restaurant lists</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Michelin-recommended veg hubs</span>
                        </div>
                      </>
                    )}
                    {activeIndex === 3 && (
                      <>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">24/7 security with digital backup</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Zero-crime tourist pathways</span>
                        </div>
                      </>
                    )}
                    {activeIndex === 4 && (
                      <>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Private sky observation decks</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Exclusive yacht sunsets</span>
                        </div>
                      </>
                    )}
                    {activeIndex === 5 && (
                      <>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Expedited e-visa processing</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-bright shrink-0" />
                          <span className="text-xs text-medium-text font-inter">Direct flights under 4 hours</span>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Interactive Trigger CTA */}
              <div className="pt-6 mt-6 border-t border-teal-primary/10 flex items-center justify-between gap-4">
                <span className="text-xs text-medium-text font-inter">
                  Want this level of premium comfort?
                </span>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
                  className="py-2.5 px-5 bg-teal-primary/5 hover:bg-teal-primary/10 text-teal-primary rounded-full text-xs font-bold font-inter tracking-wider uppercase border border-teal-primary/20 transition-colors"
                >
                  Schedule A Call
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
