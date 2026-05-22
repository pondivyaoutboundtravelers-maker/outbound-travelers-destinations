"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Compass, CheckCircle } from "lucide-react";
import { thailandHoneymoonStories } from "@/data/thailand";

export default function HoneymoonSpecial() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const stories = thailandHoneymoonStories;

  return (
    <section id="honeymoon" className="relative bg-neutral-950 px-6 py-20 md:py-28 overflow-hidden border-t border-neutral-900">
      {/* Cinematic romantic sunset overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-[#0C4A6E]/5 to-neutral-950 z-0 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-rose-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intimate Storytelling & Options list */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-950/20 px-4 py-1.5 text-xs font-bold text-rose-350 uppercase tracking-widest text-rose-400"
            >
              <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500 animate-pulse" />
              <span>Newlyweds & Anniversary Romance</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight"
            >
              Bespoke Romance in the <br />
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 bg-clip-text text-transparent italic font-normal">
                Andaman Sunset
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-405 text-neutral-400 font-light leading-relaxed text-sm md:text-base"
            >
              Skip the generic tourism routines. We craft an intimate, cinematic honeymoon escape that includes private catamaran cruises to silent coves, organic couples aromatherapy spa sessions, and sunset beachfront dining under the stars.
            </motion.p>

            {/* Interactive Stories List */}
            <div className="space-y-3 pt-4">
              {stories.map((story, i) => (
                <button
                  key={story.title}
                  onClick={() => setActiveStoryIdx(i)}
                  className={`w-full text-left flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                    activeStoryIdx === i
                      ? "bg-rose-950/20 border-rose-500/30 text-white"
                      : "bg-neutral-900/30 border-neutral-800 text-neutral-400 hover:bg-neutral-900/50 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${
                      activeStoryIdx === i ? "bg-rose-500/20 text-rose-400" : "bg-neutral-800 text-neutral-500"
                    }`}>
                      <CheckCircle className="h-4 w-4 shrink-0" />
                    </div>
                    <span className="font-bold text-sm tracking-tight">{story.title}</span>
                  </div>
                  <Sparkles className={`h-4 w-4 shrink-0 transition-opacity ${
                    activeStoryIdx === i ? "opacity-100 text-rose-400" : "opacity-0"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Visual Showcase with Glassmorphism Overlay */}
          <div className="lg:col-span-7 h-[500px] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStoryIdx}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-rose-900/20 shadow-2xl"
              >
                {/* Story Image */}
                <Image
                  src={stories[activeStoryIdx].image}
                  alt={stories[activeStoryIdx].title}
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Soft sunset lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                {/* Floating dynamic description card (Glassmorphic) */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md space-y-2">
                  <div className="flex items-center gap-2 text-rose-400">
                    <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                    <span className="text-xs font-bold uppercase tracking-wider">Honeymoon Essential</span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white tracking-tight">
                    {stories[activeStoryIdx].title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {stories[activeStoryIdx].description}
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
