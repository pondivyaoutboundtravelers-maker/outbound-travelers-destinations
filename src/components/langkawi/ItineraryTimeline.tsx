"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, CalendarDays, Eye } from "lucide-react";
import { langkawiData } from "@/data/langkawi";

export default function ItineraryTimeline() {
  const [activeDay, setActiveDay] = useState<number>(1);

  return (
    <section className="py-24 bg-neutral-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column: Heading and Day buttons */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              The Journey Map
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
              Bespoke Day-Wise <span className="text-amber-500 italic font-normal">Itinerary</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Click on each day to reveal planned excursions, stay setups, and included meals. This outline is fully customizable to your personal preferences.
            </p>

            {/* Quick Day Tabs */}
            <div className="flex flex-wrap lg:flex-col gap-2 pt-4">
              {langkawiData.itinerary.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDay(day.day)}
                  className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-left transition-all flex items-center justify-between border ${
                    activeDay === day.day
                      ? "bg-amber-500 border-amber-600 text-black shadow-lg shadow-amber-500/20"
                      : "bg-white/[0.02] border-white/5 text-neutral-400 hover:bg-white/[0.04]"
                  }`}
                >
                  <span>Day {day.day}: {day.stay}</span>
                  {activeDay === day.day && <ChevronDown className="h-4 w-4 shrink-0 rotate-90" />}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Display Active Day Details with Animations */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {langkawiData.itinerary.map((day) => {
                if (day.day !== activeDay) return null;

                return (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-8 backdrop-blur-md"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest">
                        <CalendarDays className="h-4 w-4" />
                        <span>Day {day.day} Timeline Detail</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                        {day.title}
                      </h3>
                      <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                        {day.description}
                      </p>
                    </div>

                    {/* Highlights section */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5" />
                        <span>Key Sightseeing Included</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((h, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-semibold px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stay Location info */}
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-neutral-500 uppercase tracking-wider font-bold">Stay Setup</span>
                      <div className="flex items-center gap-1.5 text-neutral-300">
                        <MapPin className="h-3.5 w-3.5 text-amber-500" />
                        <span>{day.stay}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
