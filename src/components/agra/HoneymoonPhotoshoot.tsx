"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function HoneymoonPhotoshoot() {
  return (
    <section className="py-24 relative bg-[#0B3D2E] overflow-hidden">
      {/* Background gradients and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E] via-[#052E16] to-[#052E16]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14532D] rounded-full blur-[120px] mix-blend-screen opacity-50" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#C6A15B]/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Photoshoot Collage */}
          <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
            {/* Primary Frame */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute z-20 w-[65%] aspect-[3/4] bg-[#FAFAF7] p-3 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-2"
            >
              <div className="w-full h-full overflow-hidden">
                <img src="/images/agra/honeymoon.jpg" alt="Honeymoon Couple Taj Mahal" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
              <p className="absolute bottom-4 left-0 w-full text-center font-serif text-[#052E16] italic text-sm">Sunrise at the Taj</p>
            </motion.div>
            
            {/* Secondary Frame */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 6 }}
              whileInView={{ opacity: 1, x: 0, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute z-10 w-[55%] aspect-square bg-[#F5F1E8] p-2 pb-10 shadow-2xl right-0 top-10 transform rotate-6"
            >
              <div className="w-full h-full overflow-hidden">
                <img src="/images/agra/marble.jpg" alt="Taj Details" className="w-full h-full object-cover filter sepia-[0.3]" />
              </div>
            </motion.div>
            
            {/* Tertiary Frame */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute z-10 w-[45%] aspect-[4/3] bg-[#FAFAF7] p-2 pb-8 shadow-2xl left-0 bottom-10 transform -rotate-8"
            >
              <div className="w-full h-full overflow-hidden">
                <img src="/images/agra/agra-fort.jpg" alt="Agra Fort Archways" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 border border-[#C6A15B]/30 bg-[#FAFAF7]/5 backdrop-blur-md rounded-full shadow-lg mb-8"
            >
              <Camera className="w-4 h-4 text-[#C6A15B]" />
              <span className="text-[#FAFAF7] text-xs font-semibold uppercase tracking-[0.2em]">
                Exclusive Photography
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FAFAF7] mb-6 tracking-tight leading-tight"
            >
              Capture the <br/> <span className="italic text-[#C6A15B] font-light">Eternity of Love</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-[#DCE7DD] font-light leading-relaxed text-lg"
            >
              <p>
                Our flagship Agra experience includes a vetted, professional editorial photoshoot. Avoid the selfie crowds and allow our masters of light to capture your romance against the world's greatest monument to love.
              </p>
              <p>
                From the flawless symmetry of the central pools to the hidden red sandstone arches, we secure the perfect angles during the serene dawn hour.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
