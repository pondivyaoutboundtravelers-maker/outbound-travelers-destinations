"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Check } from "lucide-react";
import { phuQuocRituals } from "@/data/phu-quoc";

export default function HoneymoonRituals() {
  const [activeIdx, setActiveIdx] = useState(0);

  const rituals = phuQuocRituals;

  return (
    <section id="rituals" className="relative bg-[#0a0a0a] px-6 py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* soft back lights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-rose-950/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: story copy & selectors */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 border border-teal-500/10 bg-teal-950/10 px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-teal-400"
            >
              <Heart className="h-3 w-3 fill-current animate-pulse text-teal-500" />
              <span>Sacred Moments Curation</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Quiet Honeymoon <br />
              <span className="bg-gradient-to-r from-teal-400 via-emerald-350 to-teal-500 bg-clip-text text-transparent italic font-normal font-serif">
                Rituals of the Shore
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-450 leading-relaxed font-light tracking-wide text-neutral-400">
              We replace loud, hurried excursions with slow-paced tropical rituals. Awaken to floating setups, dine by candlelight under coves, and cruise off-grid in peace.
            </p>

            {/* List selectors */}
            <div className="space-y-2 pt-4">
              {rituals.map((r, idx) => (
                <button
                  key={r.title}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                    activeIdx === idx
                      ? "bg-teal-950/10 border-teal-500/20 text-white"
                      : "bg-neutral-900/10 border-white/5 text-neutral-400 hover:bg-neutral-900/30 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${
                      activeIdx === idx ? "bg-[#0F766E]/20 text-teal-400" : "bg-neutral-850 text-neutral-600"
                    }`}>
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-serif font-bold text-sm tracking-tight">{r.title}</span>
                  </div>
                  <Sparkles className={`h-3.5 w-3.5 text-teal-450 shrink-0 transition-opacity ${
                    activeIdx === idx ? "opacity-100" : "opacity-0"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Sliding Showcase */}
          <div className="lg:col-span-7 h-[450px] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.97, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -8 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
              >
                <Image
                  src={rituals[activeIdx].image}
                  alt={rituals[activeIdx].title}
                  fill
                  className="object-cover opacity-75"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Dark fog fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-85" />

                {/* float detail block */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-neutral-950/80 border border-white/5 backdrop-blur-md space-y-2">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-teal-450 text-teal-400 block">
                    Exclusive Ritual
                  </span>
                  <h3 className="text-lg font-bold font-serif text-white tracking-tight">
                    {rituals[activeIdx].title}
                  </h3>
                  <p className="text-[11px] text-neutral-350 font-light leading-relaxed text-neutral-350">
                    {rituals[activeIdx].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
