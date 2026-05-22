"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { phuQuocTimeline } from "@/data/phu-quoc";
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";

export default function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 320;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-[#0a0a0a] px-6 py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* Background glow layers */}
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-teal-900/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title & Controls pane */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0F766E] uppercase block">
              Scenic Chronicles
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Atmospheric Timeline
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3.5 rounded-full border border-white/5 bg-neutral-900/20 text-neutral-400 hover:text-white hover:border-neutral-800 transition-all duration-300"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3.5 rounded-full border border-white/5 bg-neutral-900/20 text-neutral-400 hover:text-white hover:border-neutral-800 transition-all duration-300"
            >
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-6 scroll-smooth snap-x snap-mandatory pr-6"
        >
          {phuQuocTimeline.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="snap-start flex-shrink-0 w-[290px] sm:w-[320px] rounded-3xl overflow-hidden border border-white/5 bg-neutral-950 p-5 space-y-4 hover:border-teal-500/20 transition-all duration-300 shadow-xl"
            >
              {/* Picture pane */}
              <div className="relative h-[200px] w-full rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-65"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-50" />
              </div>

              {/* descriptions */}
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#0F766E]">
                  {item.note}
                </span>
                
                <h3 className="font-serif font-bold text-white text-base tracking-tight leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed text-neutral-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
