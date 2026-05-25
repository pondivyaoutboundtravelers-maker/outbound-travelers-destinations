"use client";

import React from "react";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

export default function OldDelhiFoodWalk() {
  return (
    <section className="py-32 relative bg-[#2D1606] overflow-hidden">
      {/* Lantern Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B45309]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7C2D12]/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/delhi/texture-paper.png')] pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Imagery Side */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] relative overflow-hidden rounded-t-full shadow-[0_0_50px_rgba(180,83,9,0.2)]"
          >
            <img 
              src="/images/delhi/food-walk.jpg" 
              alt="Old Delhi Street Food Walk" 
              className="w-full h-full object-cover filter contrast-125 saturate-110"
            />
            {/* Inner lantern gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D1606] via-transparent to-transparent" />
          </motion.div>
          
          {/* Floating spice/lantern particle simulation */}
          <motion.div
            animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-8 w-16 h-16 bg-[#D4A373]/30 rounded-full blur-xl"
          />
        </div>

        {/* Text Side */}
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 border border-[#B45309]/40 bg-[#111827]/40 backdrop-blur-md rounded-full"
          >
            <Utensils className="w-4 h-4 text-[#D4A373]" />
            <span className="text-[#EADBC8] text-xs font-semibold uppercase tracking-[0.2em]">
              Sensory Exploration
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-[#F8F4EC] leading-tight tracking-tight"
          >
            The Culinary Labyrinth <br/>
            <span className="italic text-[#D4A373] font-light">of Old Delhi</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-[#EADBC8] font-light leading-relaxed text-lg border-l border-[#B45309]/50 pl-6"
          >
            <p>
              Navigate the narrow, chaotic, and intensely vibrant lanes of Chandni Chowk from the safety and comfort of our curated tasting tour.
            </p>
            <p>
              Guided by a local culinary historian, sample centuries-old recipes—from slow-cooked Nihari and fire-roasted kebabs to delicate, silver-leafed sweets—all vetted for impeccable hygiene and premium quality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
