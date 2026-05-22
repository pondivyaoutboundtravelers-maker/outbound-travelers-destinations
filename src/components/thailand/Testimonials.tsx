"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, Heart, ArrowLeft, ArrowRight } from "lucide-react";
import { thailandTestimonials } from "@/data/thailand";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((prevIdx) => (prevIdx === 0 ? thailandTestimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setActiveIdx((prevIdx) => (prevIdx === thailandTestimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = thailandTestimonials[activeIdx];

  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Soft romantic backglows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-rose-950/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Guest Testimonials
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Loved by Outbound Guests
          </p>
          <p className="text-neutral-400 font-light mt-4">
            Hear directly from honeymooners and families from Coimbatore, Bangalore, and Chennai who trusted us with their Southeast Asian memories.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 md:p-12 backdrop-blur-md space-y-6"
            >
              {/* Giant Quote Icon */}
              <Quote className="absolute top-6 right-8 h-12 w-12 text-white/5 pointer-events-none" />

              <div className="flex gap-1 text-yellow-500">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="text-lg md:text-xl font-serif italic text-white leading-relaxed">
                "{current.quote}"
              </p>

              <div className="flex justify-between items-center pt-6 border-t border-neutral-850 border-t border-neutral-900/50">
                <div className="flex items-center gap-4">
                  {/* Photo Placeholder/Avatar */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-800 bg-neutral-850 shrink-0 flex items-center justify-center text-white">
                    <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base tracking-tight">{current.name}</h4>
                    <span className="text-xs text-neutral-400 font-medium">
                      {current.tripType} · {current.city} · {current.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3.5 rounded-xl border border-neutral-850 bg-neutral-900/40 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-300 active:scale-95 border-neutral-900"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="p-3.5 rounded-xl border border-neutral-850 bg-neutral-900/40 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-300 active:scale-95 border-neutral-900"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
