"use client";

import React from "react";
import { motion } from "framer-motion";
import { phuQuocIntro } from "@/data/phu-quoc";
import { Quote } from "lucide-react";

export default function IntroStory() {
  const story = phuQuocIntro;

  return (
    <section id="introduction" className="relative bg-[#0a0a0a] px-6 py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* Soft elegant warm sand ambient lighting in the background */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-900/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        
        {/* Editorial Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-widest text-[#0F766E] font-bold block"
        >
          {story.eyebrow}
        </motion.div>

        {/* Storytelling Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight"
        >
          {story.heading}
        </motion.h2>

        {/* Story text */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl font-serif text-neutral-300 font-light leading-relaxed tracking-wide max-w-3xl mx-auto text-neutral-350"
        >
          “{story.text}”
        </motion.p>

        {/* Editorial Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pt-6 flex justify-center text-teal-800"
        >
          <Quote className="h-8 w-8 opacity-25" />
        </motion.div>

      </div>
    </section>
  );
}
