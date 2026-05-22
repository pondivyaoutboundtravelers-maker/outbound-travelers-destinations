"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Sun, CloudRain, Star } from "lucide-react";
import { thailandSeasonRatings } from "@/data/thailand";

export default function SeasonCalendar() {
  const months = [
    { name: "January", rating: "best", note: "Cool dry air, crystal clear turquoise waters" },
    { name: "February", rating: "best", note: "Peak romantic sunshine, perfect snorkeling skies" },
    { name: "March", rating: "good", note: "Warm days, lively beach clubs & island parties" },
    { name: "April", rating: "good", note: "Songkran water festival energy, warm ocean breezes" },
    { name: "May", rating: "good", note: "Calmer crowd sizes, massive resort villa discounts" },
    { name: "June", rating: "okay", note: "Refreshing tropical afternoon showers, lush hills" },
    { name: "July", rating: "okay", note: "Excellent booking rates, ideal luxury spa weather" },
    { name: "August", rating: "okay", note: "Warm tropical rainfall spells, empty beaches" },
    { name: "September", rating: "okay", note: "Northern waterfalls & mountain trails are spectacular" },
    { name: "October", rating: "good", note: "Monsoon fading, fresh landscapes, low hotel pricing" },
    { name: "November", rating: "best", note: "Dry season starts, pleasant weather, active tours" },
    { name: "December", rating: "best", note: "Perfect skies, vibrant holiday & festive energy" },
  ];

  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background soft lighting */}
      <div className="absolute top-1/4 left-1/4 w-90 h-90 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Season Calendar
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            When to Experience Thailand
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
              className="group relative rounded-2xl bg-neutral-900/30 border border-neutral-800 p-5 hover:border-[#0891B2]/20 hover:bg-neutral-900/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="font-bold text-white text-base tracking-tight group-hover:text-[#0891B2] transition-colors">
                  {m.name}
                </h3>
                
                {/* Rating Badge */}
                {m.rating === "best" ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-450 bg-emerald-950/20 border border-emerald-900/40 py-1 px-2.5 rounded-full text-emerald-400">
                    <Star className="h-3 w-3 fill-current shrink-0" />
                    <span>Best</span>
                  </span>
                ) : m.rating === "good" ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-cyan-450 bg-cyan-950/20 border border-cyan-900/40 py-1 px-2.5 rounded-full text-cyan-400">
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

              <p className="text-xs text-neutral-450 leading-relaxed font-light text-neutral-400">
                {m.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
