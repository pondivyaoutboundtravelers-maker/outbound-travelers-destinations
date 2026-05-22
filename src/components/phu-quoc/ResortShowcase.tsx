"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { phuQuocResorts } from "@/data/phu-quoc";
import { Hotel, Sparkles } from "lucide-react";

export default function ResortShowcase() {
  return (
    <section id="resorts" className="relative bg-[#0a0a0a] px-6 py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* Background glow glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-teal-900/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title pane */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-[#0F766E] uppercase mb-3 block">
            Aman & Six Senses Standard
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Vetted Resort Showcases
          </h2>
          <p className="text-neutral-405 mt-4 text-xs sm:text-sm font-light text-neutral-400">
            We bypass standard commercial blocks. These are architectural sanctuaries sitting directly on private, undisturbed waters.
          </p>
        </motion.div>

        {/* 3 Luxury cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phuQuocResorts.map((resort, idx) => (
            <motion.div
              key={resort.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-end h-[500px] rounded-3xl overflow-hidden border border-white/5 bg-neutral-950 p-6 hover:border-teal-500/20 transition-all duration-300 shadow-2xl"
            >
              {/* background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={resort.image}
                  alt={resort.name}
                  fill
                  className="object-cover scale-102 group-hover:scale-100 opacity-55 transition-transform duration-[6s]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
              </div>

              {/* Floating details icon */}
              <div className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-neutral-900/80 border border-white/10 backdrop-blur-md text-teal-400">
                <Hotel className="h-4.5 w-4.5 shrink-0" />
              </div>

              {/* story text */}
              <div className="relative z-10 space-y-3">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#0F766E]">
                  {resort.tagline}
                </span>

                <h3 className="text-xl font-bold font-serif text-white tracking-tight leading-snug">
                  {resort.name}
                </h3>

                <p className="text-[11px] text-neutral-400 font-light leading-relaxed text-neutral-400">
                  {resort.desc}
                </p>

                <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[9px] font-bold text-teal-400 uppercase tracking-wider">
                  <Sparkles className="h-3 w-3 shrink-0 animate-pulse" />
                  <span>Highlight: {resort.accent}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
