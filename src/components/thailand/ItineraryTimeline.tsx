"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Coffee, Check, ArrowRight } from "lucide-react";
import { thailandItinerary } from "@/data/thailand";

export default function ItineraryTimeline() {
  const [activeDay, setActiveDay] = useState(1);

  const currentDayInfo = thailandItinerary.find((item) => item.day === activeDay) || thailandItinerary[0];

  return (
    <section id="itinerary" className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Day-Wise Timeline
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Seven Days in Paradise
          </p>
          <p className="text-neutral-400 font-light mt-4">
            A meticulously paced itinerary designed by travel experts to combine energy, islands, culture, and pure relaxation.
          </p>
        </motion.div>

        {/* Timeline Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Vertical Day Selector */}
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 lg:border-r border-neutral-850 pr-0 lg:pr-6 border-b border-neutral-900 border-r border-neutral-900/20">
            {thailandItinerary.map((item) => (
              <button
                key={item.day}
                onClick={() => setActiveDay(item.day)}
                className={`flex-shrink-0 flex items-center gap-4 text-left p-4 rounded-2xl border transition-all duration-300 w-[180px] lg:w-full ${
                  activeDay === item.day
                    ? "bg-cyan-950/20 border-[#0891B2]/50 text-white shadow-[0_0_15px_rgba(8,145,178,0.15)]"
                    : "bg-neutral-900/20 border-neutral-800 text-neutral-400 hover:bg-neutral-900/50 hover:text-white"
                }`}
              >
                <div className={`w-8 h-8 flex items-center justify-center rounded-xl font-bold text-xs ${
                  activeDay === item.day ? "bg-[#0891B2] text-white" : "bg-neutral-850 text-neutral-500"
                }`}>
                  D{item.day}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0891B2] block">
                    {item.day === 7 ? "Departure" : `Day ${item.day}`}
                  </span>
                  <h4 className="text-xs font-bold truncate tracking-tight">{item.title.split("–")[1]?.trim() || item.title}</h4>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Day Highlight Pane */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 backdrop-blur-md min-h-[380px] flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Title & Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#0891B2] tracking-widest uppercase">
                        Timeline Highlight
                      </span>
                      <h3 className="text-2xl font-serif font-extrabold text-white tracking-tight">
                        {currentDayInfo.title}
                      </h3>
                    </div>
                    
                    {/* Stay Info */}
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950/70 border border-white/10 px-4 py-1.5 text-xs text-neutral-300 font-semibold uppercase tracking-wider self-start sm:self-auto shrink-0">
                      <MapPin className="h-4 w-4 text-[#0891B2] shrink-0" />
                      <span>Stay: {currentDayInfo.stay}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 font-light leading-relaxed text-base">
                    {currentDayInfo.description}
                  </p>

                  {/* Highlights list for this day */}
                  {currentDayInfo.highlights && currentDayInfo.highlights.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                        Inclusions & Sightseeing
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentDayInfo.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex gap-2.5 items-center text-xs text-neutral-300 font-medium">
                            <div className="p-1 rounded-full bg-[#0891B2]/10 border border-[#0891B2]/20 text-[#0891B2]">
                              <Check className="h-3 w-3" />
                            </div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Navigation Buttons */}
                <div className="flex justify-between items-center pt-8 border-t border-neutral-850 mt-8 border-t border-neutral-900/50">
                  <button
                    disabled={activeDay === 1}
                    onClick={() => setActiveDay((prev) => prev - 1)}
                    className="text-xs uppercase font-bold tracking-wider text-neutral-500 hover:text-white disabled:opacity-40 transition-colors"
                  >
                    ← Previous Day
                  </button>

                  <button
                    disabled={activeDay === thailandItinerary.length}
                    onClick={() => setActiveDay((prev) => prev + 1)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-[#0891B2] hover:text-cyan-400 disabled:opacity-40 transition-colors"
                  >
                    <span>Next Day</span>
                    <ArrowRight className="h-4.5 w-4.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
