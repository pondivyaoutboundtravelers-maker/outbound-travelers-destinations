"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { phuQuocSeasons } from "@/data/phu-quoc";
import { Sparkles, Calendar } from "lucide-react";

export default function AtmosphericCalendar() {
  return (
    <section className="relative bg-[#0a0a0a] px-6 py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* Background glow layers */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-teal-900/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-[#0F766E] uppercase mb-3 block">
            Atmospheric Calendar
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            The Rhythm of the Seasons
          </h2>
          <p className="text-neutral-405 mt-4 text-xs sm:text-sm font-light text-neutral-400">
            Phu Quoc shifts through distinct characters. Find the aesthetic season that aligns with your style of retreat.
          </p>
        </motion.div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phuQuocSeasons.map((season, idx) => (
            <motion.div
              key={season.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-end h-[420px] rounded-3xl overflow-hidden border border-white/5 bg-neutral-950 p-6 hover:border-teal-500/20 transition-all duration-300 shadow-2xl"
            >
              {/* background cover */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={season.image}
                  alt={season.title}
                  fill
                  className="object-cover scale-102 group-hover:scale-100 opacity-45 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
              </div>

              {/* date stamp floater */}
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-neutral-950/80 border border-white/10 px-3 py-1 text-[9px] font-bold text-neutral-300 backdrop-blur-md">
                <Calendar className="h-3.5 w-3.5 text-teal-400" />
                <span>{season.months}</span>
              </div>

              {/* descriptions */}
              <div className="relative z-10 space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#0F766E]">
                  {season.vibe}
                </span>

                <h3 className="text-xl font-bold font-serif text-white tracking-tight leading-snug">
                  {season.title}
                </h3>

                <p className="text-[11px] text-neutral-400 font-light leading-relaxed text-neutral-400">
                  {season.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
