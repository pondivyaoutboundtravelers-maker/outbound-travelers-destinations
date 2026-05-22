"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Tag } from "lucide-react";
import { regions } from "../../data/malaysia";

export default function RegionExplorer() {
  const [selectedId, setSelectedId] = useState(regions[0].id);

  const selectedRegion = regions.find((r) => r.id === selectedId) || regions[0];

  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 border border-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <MapPin className="h-4 w-4" />
            <span>Interactive Map</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Explore <span className="italic text-[#0E7490]">Malaysia&apos;s Regions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-neutral-600 font-light"
          >
            From soaring city lights and shopping sprees to pristine marine conservation reefs and mystical highlands, customize your journey.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Region Navigation Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {regions.map((region, index) => (
              <motion.button
                key={region.id}
                onClick={() => setSelectedId(region.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`w-full flex items-center justify-between p-5 rounded-2xl text-left border transition-all duration-300 ${
                  selectedId === region.id
                    ? "bg-[#0E7490] border-[#0E7490] text-white shadow-xl shadow-cyan-900/10"
                    : "bg-white border-neutral-200/60 hover:border-neutral-300 text-neutral-800"
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-tight tracking-tight">{region.title}</span>
                  <span className={`text-xs mt-1 ${selectedId === region.id ? "text-cyan-150 font-medium" : "text-neutral-400"}`}>
                    {region.tag}
                  </span>
                </div>
                <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${
                  selectedId === region.id ? "translate-x-1 rotate-0" : "-rotate-45 text-neutral-400"
                }`} />
              </motion.button>
            ))}
          </div>

          {/* Right Column: Dynamic Region Details View */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl"
              >
                {/* Media Container */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={selectedRegion.image}
                    alt={selectedRegion.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute left-6 top-6 rounded-full bg-black/40 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {selectedRegion.tag}
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-extrabold text-neutral-900 sm:text-3xl leading-tight">
                      {selectedRegion.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                      {selectedRegion.description}
                    </p>
                  </div>

                  <div className="border-t border-neutral-100 pt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                      <Tag className="h-4 w-4 text-[#0E7490]" />
                      <span>Key Highlights & Attractions</span>
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {selectedRegion.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-neutral-700">
                          <div className="h-2 w-2 shrink-0 rounded-full bg-[#0E7490]" />
                          <span className="text-sm font-semibold">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
