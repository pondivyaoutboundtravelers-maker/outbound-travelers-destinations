'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, MapPin, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { singaporeData } from '@/lib/singapore/data'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonials = singaporeData.testimonials

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-sky-light text-dark-text overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-coral/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-teal-primary/5 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-coral font-inter block mb-3">
            Guest Chronicles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-dark-text max-w-3xl mx-auto leading-tight">
            Real Stories, Rare Luxury
          </h2>
          <p className="text-sm md:text-base text-medium-text font-inter max-w-xl mx-auto mt-4 leading-relaxed">
            See how Outbound Travelers crafts stress-free, customized, and flawless Singapore adventures for modern families.
          </p>
          <div className="w-12 h-1 bg-coral mx-auto mt-6 rounded-full" />
        </div>

        {/* Testimonials Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Accents & Selector */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-teal-primary/10 rounded-full shadow-sm">
              <Award className="w-4 h-4 text-sunny-yellow" />
              <span className="text-[10px] font-bold tracking-widest text-teal-primary font-inter uppercase">
                4.9/5 Average Rating
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-fraunces font-bold text-dark-text">
              Trusted by Discerning South Indian Travelers
            </h3>
            
            <p className="text-xs sm:text-sm text-medium-text font-inter leading-relaxed max-w-md mx-auto lg:mx-0">
              From senior accessibility setups, authentic South Indian vegetarian dining schedules, to high-end yachts and private transits — we leave absolutely nothing to chance.
            </p>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white border border-teal-primary/10 shadow-sm flex items-center justify-center hover:bg-teal-light transition-all text-teal-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? 'w-8 bg-coral' : 'w-2 bg-teal-primary/20'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white border border-teal-primary/10 shadow-sm flex items-center justify-center hover:bg-teal-light transition-all text-teal-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Quote Card */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[340px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {testimonials.map((t, idx) => {
                if (idx !== activeIndex) return null

                return (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, scale: 0.95, y: 15, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15, rotateY: -10 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{ perspective: 1000 }}
                    className="absolute w-full"
                  >
                    <div className="relative bg-white border border-teal-primary/10 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(13,148,136,0.1)] overflow-hidden group hover:border-teal-primary/30 transition-all duration-500">
                      
                      {/* Premium card subtle lights */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-coral/10 blur-3xl pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-primary/10 blur-3xl pointer-events-none" />

                      {/* Giant background quote icon */}
                      <Quote className="absolute top-6 right-8 w-24 h-24 text-teal-primary/[0.03] pointer-events-none -z-10 group-hover:text-coral/[0.05] transition-colors duration-500" />

                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-sunny-yellow text-sunny-yellow" />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-sm sm:text-base md:text-lg text-dark-text font-inter italic leading-relaxed mb-8">
                        "{t.quote}"
                      </blockquote>

                      {/* Footer Details */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-teal-primary/10">
                        
                        {/* Profile Info */}
                        <div className="flex items-center gap-3">
                          {/* Fallback Premium Initial Ring */}
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-primary to-ocean-blue flex items-center justify-center text-white font-fraunces font-bold text-lg shadow-md border border-white shrink-0">
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <cite className="font-fraunces font-bold text-dark-text text-base not-italic block">
                              {t.name}
                            </cite>
                            <span className="text-[10px] font-bold text-teal-primary uppercase tracking-widest font-inter block mt-0.5">
                              {t.tripType}
                            </span>
                          </div>
                        </div>

                        {/* Location and Date */}
                        <div className="flex items-center gap-4 text-xs font-inter text-medium-text">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-coral" />
                            {t.city}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-teal-bright" />
                            {t.date}
                          </span>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
