"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { rajasthanData } from "@/data/rajasthan";
import { Calendar } from "lucide-react";

export default function AtmosphericSeasons() {
  return (
    <section className="relative bg-[#F7F3EE] px-6 py-20 md:py-32 overflow-hidden border-b border-[#D6B370]/20">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-[#B76E79] uppercase mb-3 block">
            Atmospheric Seasons
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#5B2147] tracking-tight">
            The Rhythms of the Land
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-light text-[#6B4F4F]">
            Rajasthan shifts through distinct characters. Find the historic seasonal climate that aligns with your style of retreat.
          </p>
        </motion.div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rajasthanData.seasonCalendar.map((season: any, idx: number) => (
            <motion.div
              key={season.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-end h-[420px] rounded-3xl overflow-hidden border border-[#D6B370]/30 bg-white p-6 hover:border-[#5B2147]/30 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {/* background cover */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={season.image}
                  alt={season.title}
                  fill
                  className="object-cover scale-[1.03] group-hover:scale-100 opacity-90 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B2147] via-[#5B2147]/25 to-transparent opacity-85" />
              </div>

              {/* date stamp floater */}
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-[#D6B370]/30 px-3 py-1 text-[9px] font-bold text-[#5B2147] backdrop-blur-md">
                <Calendar className="h-3.5 w-3.5 text-[#B76E79]" />
                <span>{season.months}</span>
              </div>

              {/* descriptions */}
              <div className="relative z-10 space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#D6B370]">
                  {season.vibe}
                </span>

                <h3 className="text-xl font-bold font-serif text-white tracking-tight leading-snug">
                  {season.title}
                </h3>

                <p className="text-[11px] text-neutral-200 font-light leading-relaxed">
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
