"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";
import { thailandExperiences } from "@/data/thailand";

export default function TopExperiences() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="experiences" className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background glow lines */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            High-End Highlights
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Ten Unmissable Thai Experiences
          </p>
          <p className="text-neutral-400 font-light mt-4">
            Curated micro-adventures that elevate your trip from standard sightseeing to a highly customized cinema experience.
          </p>
        </motion.div>

        {/* 10 experiences grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {thailandExperiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              onHoverStart={() => setHoveredIdx(i)}
              onHoverEnd={() => setHoveredIdx(null)}
              className="group relative h-[300px] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col justify-end p-6 hover:border-[#0891B2]/30 transition-all duration-300"
            >
              {/* Image with zoom on hover */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 opacity-60 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              </div>

              {/* Tag / Icon indicator */}
              <div className="absolute top-4 left-4 z-10 p-2 rounded-xl bg-neutral-900/60 border border-white/10 backdrop-blur-md text-[#0891B2]">
                <Sparkles className="h-4 w-4" />
              </div>

              {/* Text details */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-1 text-neutral-400">
                  <MapPin className="h-3.5 w-3.5 text-[#0891B2]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Experience</span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {exp.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
