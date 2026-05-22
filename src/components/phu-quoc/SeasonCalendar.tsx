"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, CloudRain, Star } from "lucide-react";

export default function SeasonCalendar() {
  const months = [
    { name: "January", rating: "best", note: "Peak dry skies, calm emerald waters, cool breezes" },
    { name: "February", rating: "best", note: "Absolute beach perfection, clear snorkeling visibility" },
    { name: "March", rating: "best", note: "Warm tropical days, gorgeous beach resort sunsets" },
    { name: "April", rating: "good", note: "Warm weather, quiet beaches, amazing villa deals" },
    { name: "May", rating: "good", note: "Excellent booking rates, calm seas, warm weather" },
    { name: "June", rating: "okay", note: "Refreshing afternoon showers, lush tropical greenery" },
    { name: "July", rating: "okay", note: "Great resort value, low tourist crowd sizes" },
    { name: "August", rating: "okay", note: "Warm tropical rainfall spells, empty resorts" },
    { name: "September", rating: "okay", note: "Lush island landscapes, refreshing spa weather" },
    { name: "October", rating: "good", note: "Monsoon fading, fresh cool winds, excellent rates" },
    { name: "November", rating: "best", note: "Dry season starts, pleasant weather, active tours" },
    { name: "December", rating: "best", note: "Perfect clear skies, festive holidays atmosphere" },
  ];

  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background glow circle */}
      <div className="absolute top-1/4 left-1/4 w-90 h-90 bg-teal-650/5 rounded-full blur-3xl pointer-events-none bg-teal-600/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0D9488] uppercase mb-3">
            Season Calendar
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            When to Experience Phu Quoc
          </p>
          <p className="text-neutral-400 font-light mt-4">
            A comprehensive, year-round breakdown of local weather, marine conditions, and seasonal pricing models to help you pick the perfect dates.
          </p>
        </motion.div>

        {/* 12 Months Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {months.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl bg-neutral-900/30 border border-neutral-800 p-5 hover:border-teal-500/20 hover:bg-neutral-900/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="font-bold text-white text-base tracking-tight group-hover:text-teal-400 transition-colors">
                  {m.name}
                </h3>
                
                {/* Rating Badge */}
                {m.rating === "best" ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-450 bg-emerald-950/20 border border-emerald-900/40 py-1 px-2.5 rounded-full text-emerald-400">
                    <Star className="h-3 w-3 fill-current shrink-0" />
                    <span>Best</span>
                  </span>
                ) : m.rating === "good" ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-teal-450 bg-teal-950/20 border border-teal-900/40 py-1 px-2.5 rounded-full text-teal-400 animate-pulse text-teal-400">
                    <Sun className="h-3 w-3 shrink-0" />
                    <span>Good</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-neutral-450 bg-neutral-850 border border-neutral-800 py-1 px-2.5 rounded-full text-neutral-400">
                    <CloudRain className="h-3 w-3 shrink-0" />
                    <span>Okay</span>
                  </span>
                )}
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                {m.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
