'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, Clock, Hotel, Check, Award, Compass } from 'lucide-react'
import { singaporeData } from '@/lib/singapore/data'

export default function ItineraryTimeline() {
  const [activeDay, setActiveDay] = useState<number>(1)

  const activeItinerary = singaporeData.itinerary.find((day) => day.day === activeDay) || singaporeData.itinerary[0]

  const handleItineraryEnquire = () => {
    window.dispatchEvent(
      new CustomEvent('openLeadForm', {
        detail: {
          prefill: {
            nights: 4,
            specialReq: `Checking the 5-Day Classic Itinerary. Prefill on Day ${activeDay}.`
          }
        }
      })
    )
  }

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-light-blue text-dark-text overflow-hidden">
      {/* Dynamic blurred orbs */}
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-teal-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-10 w-[300px] h-[300px] bg-coral/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase font-bold tracking-widest text-teal-primary font-inter block mb-3">
            Cinematic Timelines
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-dark-text max-w-3xl mx-auto leading-tight">
            The 5-Day Future-City Flow
          </h2>
          <p className="text-sm md:text-base text-medium-text font-inter max-w-xl mx-auto mt-4 leading-relaxed">
            A meticulously calibrated, unhurried timeline balancing futuristic thrills with luxurious tropical relaxation.
          </p>
          <div className="w-12 h-1 bg-teal-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Storytelling Timeline Panel Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Vertical Timeline day selectors */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold font-inter text-medium-text mb-6 block">
              Pacing Breakdown
            </h3>
            
            <div className="relative flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {/* Connector line for large screens */}
              <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-teal-primary/20 hidden lg:block" />

              {singaporeData.itinerary.map((day) => {
                const isActive = activeDay === day.day
                return (
                  <button
                    key={day.day}
                    onClick={() => setActiveDay(day.day)}
                    className={`shrink-0 lg:shrink text-left p-4 pr-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 relative z-10 ${
                      isActive
                        ? 'bg-white border-teal-primary/40 shadow-[0_8px_20px_rgba(13,148,136,0.15)]'
                        : 'bg-white/50 border-teal-primary/5 hover:bg-white hover:border-teal-primary/20'
                    }`}
                  >
                    {/* Circle counter */}
                    <div className={`w-9 h-9 rounded-full border flex items-center justify-center font-bold text-xs font-inter shrink-0 transition-colors ${
                      isActive
                        ? 'bg-teal-light border-teal-primary text-teal-primary shadow-[0_0_12px_rgba(13,148,136,0.3)]'
                        : 'bg-white border-teal-primary/10 text-medium-text'
                    }`}>
                      D{day.day}
                    </div>

                    <div className="hidden sm:block">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-teal-primary/70 font-inter block mb-0.5">
                        Corridor phase
                      </span>
                      <h4 className={`text-sm font-bold font-inter whitespace-nowrap lg:whitespace-normal ${isActive ? 'text-dark-text' : 'text-medium-text'}`}>
                        {day.title.split(' – ')[0].split(' - ')[0]}
                      </h4>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Immersive Day Details Panel */}
          <div className="lg:col-span-8">
            <div className="relative backdrop-blur-xl bg-white border border-teal-primary/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(13,148,136,0.08)] min-h-[450px] flex flex-col justify-between overflow-hidden">
              
              {/* Background light streak */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-teal-primary/10 blur-3xl pointer-events-none" />
              <div className="absolute top-6 right-6 font-inter text-[120px] font-bold text-teal-primary/[0.03] leading-none select-none">
                0{activeDay}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 flex-1 flex flex-col justify-between relative z-10"
                >
                  <div className="space-y-4">
                    {/* Stage badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-coral/10 text-coral border border-coral/20 text-xs font-bold rounded-full font-inter uppercase">
                      Day {activeDay} Sequence
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-fraunces font-bold text-dark-text leading-tight">
                      {activeItinerary.title}
                    </h3>

                    {/* Description */}
                    <p className="text-medium-text font-inter text-sm sm:text-base leading-relaxed">
                      {activeItinerary.description}
                    </p>
                  </div>

                  {/* Bullet Highlights checklist */}
                  <div className="space-y-4 pt-6 border-t border-teal-primary/10">
                    <span className="text-[11px] font-bold text-medium-text uppercase tracking-wider font-inter block">Included premium entries:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {activeItinerary.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-teal-primary shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-dark-text font-inter font-medium">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accommodation tier */}
                  <div className="flex items-center gap-3.5 bg-sky-light/50 border border-teal-primary/10 p-4 rounded-2xl">
                    <Hotel className="w-5 h-5 text-coral shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-medium-text uppercase font-inter block">Accommodation staying</span>
                      <span className="text-xs sm:text-sm font-semibold text-dark-text font-inter">{activeItinerary.stay}</span>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Action trigger footer */}
              <div className="pt-8 mt-8 border-t border-teal-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <span className="text-xs text-medium-text font-inter">
                  We pre-book all entries, queue-skip times, and coordinate driver schedules.
                </span>
                
                <button
                  onClick={handleItineraryEnquire}
                  className="py-3.5 px-6 bg-teal-primary hover:bg-teal-accent text-white rounded-full text-xs font-bold font-inter tracking-wider uppercase transition-all shadow-[0_8px_20px_rgba(13,148,136,0.2)] hover:shadow-[0_8px_25px_rgba(13,148,136,0.3)] border border-teal-primary"
                >
                  Custom Pace This Day
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
