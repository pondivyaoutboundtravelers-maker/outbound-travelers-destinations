"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, Flame } from "lucide-react";
import { rajasthanData } from "@/data/rajasthan";

export default function RoyalExperiences() {
  const [activeIdx, setActiveIdx] = useState(0);

  const list = rajasthanData.topExperiences;

  return (
    <section className="relative bg-[#F7F3EE] px-6 py-20 md:py-32 overflow-hidden border-b border-[#D6B370]/20">
      
      {/* Background soft glow glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#5B2147]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: text selection list */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 border border-[#D6B370]/30 bg-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#5B2147] shadow-sm"
            >
              <Flame className="h-3 w-3 animate-pulse text-[#D6B370]" />
              <span>Imperial Circuit Revelations</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#5B2147] tracking-tight leading-tight">
              Royal Experiences <br />
              <span className="text-[#B76E79] italic font-normal font-serif">
                Of The Darbar
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#6B4F4F] leading-relaxed font-light tracking-wide">
              We bypass tourist shortcuts. These are immersive private curated sessions designed around heritage arts, custom fort walks, and sunset camel caravans.
            </p>

            {/* List triggers (styled as light ivory panels) */}
            <div className="space-y-2 pt-4">
              {list.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                    activeIdx === idx
                      ? "bg-white border-[#5B2147]/40 text-[#5B2147] shadow-md"
                      : "bg-white/40 border-[#D6B370]/15 text-[#6B4F4F] hover:bg-white hover:text-[#5B2147]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${
                      activeIdx === idx ? "bg-red-50 text-[#5B2147]" : "bg-neutral-100 text-neutral-450"
                    }`}>
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-serif font-bold text-sm tracking-tight">{item.title}</span>
                  </div>
                  <Sparkles className={`h-3.5 w-3.5 text-amber-500 shrink-0 transition-opacity ${
                    activeIdx === idx ? "opacity-100" : "opacity-0"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Sliding Showcase in ivory white borders */}
          <div className="lg:col-span-7 h-[450px] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.97, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -8 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full rounded-[36px] overflow-hidden border-4 border-white shadow-xl shadow-amber-900/5"
              >
                <Image
                  src={list[activeIdx].image}
                  alt={list[activeIdx].title}
                  fill
                  className="object-cover opacity-95"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Gold film gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B2147] via-transparent to-transparent opacity-75" />

                {/* floating details block */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 border border-[#D6B370]/25 backdrop-blur-md space-y-2 shadow-lg">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-[#B76E79] block">
                    Exclusive Activity
                  </span>
                  <h3 className="text-lg font-bold font-serif text-[#5B2147] tracking-tight">
                    {list[activeIdx].title}
                  </h3>
                  <p className="text-[11px] text-[#6B4F4F] font-light leading-relaxed">
                    {list[activeIdx].description}
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
