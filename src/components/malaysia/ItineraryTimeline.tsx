"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Coffee, Moon, CheckSquare, Clock } from "lucide-react";
import { sampleItinerary } from "../../data/malaysia";

export default function ItineraryTimeline() {
  const [openDay, setOpenDay] = useState<number>(1);

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? 0 : day);
  };

  return (
    <section id="itinerary" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7490]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <Clock className="h-4 w-4" />
            <span>Classic Route Blueprint</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Interactive <span className="italic text-[#0E7490]">Day-Wise Timeline</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-light"
          >
            This 6-Day tour outlines our most popular Malaysia signature classic itinerary. Expand each day for travel breakdowns.
          </motion.p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {sampleItinerary.map((dayItem, index) => {
            const isOpen = openDay === dayItem.day;

            return (
              <motion.div
                key={dayItem.day}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-neutral-50/50 border-[#0E7490]/30 shadow-xl"
                    : "bg-white border-neutral-200 hover:border-neutral-350 hover:bg-neutral-50/20"
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleDay(dayItem.day)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex gap-4 items-center">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-serif text-base font-extrabold transition-colors duration-300 ${
                      isOpen ? "bg-[#0E7490] text-white" : "bg-neutral-100 text-[#0E7490]"
                    }`}>
                      D{dayItem.day}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0E7490] mb-0.5 block">
                        Day {dayItem.day} Schedule
                      </span>
                      <h3 className="font-serif text-lg font-bold text-neutral-900 sm:text-xl tracking-tight leading-snug">
                        {dayItem.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#0E7490]" : ""
                  }`} />
                </button>

                {/* Collapsible Area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 border-t border-neutral-100/70 pt-6 space-y-6">
                        {/* Day Activities Checklist */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                            <CheckSquare className="h-4 w-4 text-[#0E7490]" />
                            <span>Planned Activities & Sightseeing</span>
                          </h4>
                          <ul className="grid gap-3 text-neutral-700">
                            {dayItem.activities.map((activity, actIdx) => (
                              <li key={actIdx} className="flex gap-3 text-sm sm:text-base font-medium">
                                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E7490] mt-2" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Stay & Meal details bar */}
                        <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-neutral-150/50">
                          <div className="flex gap-3 items-start">
                            <Moon className="h-5 w-5 text-[#0E7490] shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Night Accommodation</span>
                              <p className="text-sm font-semibold text-neutral-800 mt-0.5">{dayItem.stay}</p>
                            </div>
                          </div>

                          <div className="flex gap-3 items-start">
                            <Coffee className="h-5 w-5 text-[#0E7490] shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Meals Provided</span>
                              <p className="text-sm font-semibold text-neutral-800 mt-0.5">{dayItem.meals.join(" + ")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
