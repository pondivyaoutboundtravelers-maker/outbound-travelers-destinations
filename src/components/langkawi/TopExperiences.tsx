"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { langkawiData } from "@/data/langkawi";

export default function TopExperiences() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Archipelago Exploration
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
            Uniquely Langkawi <span className="text-amber-500 italic font-normal">Experiences</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            From stepping onto high altitude sky walks to cruising through limestone mangrove rivers, Langkawi packs an array of tropical memories.
          </p>
        </div>

        {/* 3-Column Experience Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {langkawiData.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-96 rounded-3xl overflow-hidden bg-neutral-950 border border-white/5 flex flex-col justify-end p-6 cursor-pointer"
            >
              {/* background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              </div>

              {/* Text content */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  {exp.seasonal && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/20 font-bold uppercase tracking-wider">
                      Seasonal
                    </span>
                  )}
                </div>
                <p className="text-neutral-300 text-xs leading-relaxed max-w-sm">
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
