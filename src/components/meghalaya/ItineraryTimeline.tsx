"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, Utensils, Bed } from "lucide-react";
import { sampleItinerary } from "../../data/meghalaya";

export default function ItineraryTimeline() {
  const [expandedDay, setExpandedDay] = useState<number>(1);

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-3xl font-medium tracking-tight text-neutral-900 md:text-5xl"
          >
            A Glimpse of your <span className="italic text-[#065F46]">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-neutral-600"
          >
            Our signature 5-day itinerary designed for the perfect balance of exploration and relaxation.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute bottom-0 left-[27px] top-4 w-[2px] bg-neutral-200 md:left-[39px]" />

          <div className="space-y-6">
            {sampleItinerary.map((day, index) => {
              const isExpanded = expandedDay === day.day;

              return (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16 md:pl-24"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-4 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white md:left-6 md:h-10 md:w-10 transition-colors duration-300 ${
                      isExpanded ? "bg-[#065F46]" : "bg-neutral-300"
                    }`}
                  >
                    <span className="text-xs font-bold text-white md:text-sm">{day.day}</span>
                  </div>

                  <div
                    className={`cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isExpanded
                        ? "border-[#065F46]/30 bg-emerald-50/30 shadow-lg shadow-emerald-900/5"
                        : "border-neutral-200 bg-white hover:border-neutral-300"
                    }`}
                    onClick={() => setExpandedDay(isExpanded ? 0 : day.day)}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between p-5 md:p-6">
                      <h3
                        className={`font-serif text-lg font-semibold md:text-xl ${
                          isExpanded ? "text-[#065F46]" : "text-neutral-800"
                        }`}
                      >
                        {day.title}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border-t border-neutral-100 p-5 md:p-6 md:pt-4">
                            <ul className="mb-6 space-y-3">
                              {day.activities.map((activity, i) => (
                                <li key={i} className="flex gap-3 text-neutral-700">
                                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                  <span className="leading-relaxed">{activity}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-4 border-t border-neutral-100 pt-4">
                              <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-neutral-600 shadow-sm border border-neutral-100">
                                <Utensils className="h-4 w-4 text-emerald-600" />
                                <span>{day.meals.join(", ")}</span>
                              </div>
                              {day.stay !== "N/A" && (
                                <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-neutral-600 shadow-sm border border-neutral-100">
                                  <Bed className="h-4 w-4 text-emerald-600" />
                                  <span>{day.stay}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
