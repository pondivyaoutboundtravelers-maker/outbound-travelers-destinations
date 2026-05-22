"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { Calendar, Compass } from "lucide-react";

export default function SeasonalVietnamExperience() {
  return (
    <section className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <span className="text-xs font-bold tracking-widest text-[#5E8B7E] uppercase block">
            Atmospheric Seasons
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1F5F5B] tracking-tight">
            The Rhythms of the Land
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#2F3E46]/70 max-w-xl mx-auto leading-relaxed">
            Vietnam carries diverse microclimates. Find the historic seasonal shift that aligns with your dream pace.
          </p>
        </motion.div>

        {/* Staggered Vertical Postcard Panels (Totally distinct and unique) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {vietnamData.seasonCalendar.map((season: any, idx: number) => {
            const isStaggered = idx === 1; // Middle item pushes down slightly for premium layout
            return (
              <motion.div
                key={season.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col justify-end h-[450px] rounded-[36px] overflow-hidden border border-[#1F5F5B]/15 bg-white p-6 hover:border-[#1F5F5B]/30 transition-all duration-300 shadow-lg ${
                  isStaggered ? "lg:mt-8" : ""
                }`}
              >
                {/* Background Cover Visual */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={season.image}
                    alt={season.title}
                    fill
                    className="object-cover scale-[1.03] group-hover:scale-100 opacity-95 transition-all duration-[6s]"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F5F5B] via-[#1F5F5B]/30 to-transparent opacity-85" />
                </div>

                {/* Calendar flotator stamp */}
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-[#1F5F5B]/15 px-3.5 py-1 text-[9px] font-bold text-[#1F5F5B] backdrop-blur-md shadow-sm">
                  <Calendar className="h-3.5 w-3.5 text-[#D9A441]" />
                  <span>{season.months}</span>
                </div>

                {/* Descriptions */}
                <div className="relative z-10 space-y-2 text-left">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#D9A441] block">
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
