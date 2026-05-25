"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const islands = [
  {
    id: "port-blair",
    name: "Port Blair",
    subtitle: "The Historical Gateway",
    description: "Your arrival point. Rich in colonial history, featuring the Cellular Jail and vibrant local markets.",
    image: "/images/andaman/exp-jail.jpg",
    stats: { time: "1-2 Days", vibe: "Heritage & Transit" },
  },
  {
    id: "havelock",
    name: "Swaraj Dweep (Havelock)",
    subtitle: "The Tropical Crown Jewel",
    description: "Famous for the powdery white sands of Radhanagar beach and world-class scuba diving reefs.",
    image: "/images/andaman/exp-radhanagar.jpg",
    stats: { time: "3-4 Days", vibe: "Luxury & Scuba" },
  },
  {
    id: "neil",
    name: "Shaheed Dweep (Neil)",
    subtitle: "The Quiet Retreat",
    description: "A slow-paced agricultural island with stunning natural rock bridges and empty sunset beaches.",
    image: "/images/andaman/gallery-05.jpg",
    stats: { time: "1-2 Days", vibe: "Slow & Secluded" },
  },
];

export default function FloatingIslandSelector() {
  const [activeIsland, setActiveIsland] = useState(islands[1]);

  return (
    <section className="py-24 relative bg-[#FFF7ED] overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0891B2]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-bold text-[#0891B2]"
          >
            The Archipelago
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#1C1917] mt-2"
          >
            Island Hop in Luxury
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Bubbles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {islands.map((island) => {
              const isActive = activeIsland.id === island.id;
              return (
                <button
                  key={island.id}
                  onClick={() => setActiveIsland(island)}
                  className={`relative p-6 text-left rounded-3xl transition-all duration-500 overflow-hidden group border ${
                    isActive
                      ? "border-[#0891B2]/40 bg-[#F0FDFA] shadow-lg"
                      : "border-stone-200 hover:border-[#0891B2]/30 bg-white hover:shadow-md"
                  }`}
                >
                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <h3
                        className={`text-2xl font-serif transition-colors duration-300 ${
                          isActive ? "text-[#0891B2]" : "text-[#1C1917]"
                        }`}
                      >
                        {island.name}
                      </h3>
                      <p className="text-sm text-[#57534E] mt-1">
                        {island.subtitle}
                      </p>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="active-island-indicator"
                        className="w-12 h-12 rounded-full bg-[#0891B2]/15 flex items-center justify-center"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#0891B2] shadow-[0_0_15px_rgba(8,145,178,0.4)]" />
                      </motion.div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-7 h-[500px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIsland.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-stone-200 bg-white shadow-xl flex flex-col"
              >
                <div className="h-2/3 relative overflow-hidden">
                  <img
                    src={activeIsland.image}
                    alt={activeIsland.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A6E]/70 to-transparent" />
                </div>
                <div className="h-1/3 p-8 flex flex-col justify-end bg-white">
                  <p className="text-lg text-[#44403C] leading-relaxed mb-6">
                    {activeIsland.description}
                  </p>
                  <div className="flex gap-6">
                    <div>
                      <span className="block text-xs uppercase text-[#0891B2] tracking-wider mb-1">
                        Ideal Time
                      </span>
                      <span className="text-[#1C1917] font-medium">
                        {activeIsland.stats.time}
                      </span>
                    </div>
                    <div className="w-px bg-stone-200" />
                    <div>
                      <span className="block text-xs uppercase text-[#0891B2] tracking-wider mb-1">
                        Vibe
                      </span>
                      <span className="text-[#1C1917] font-medium">
                        {activeIsland.stats.vibe}
                      </span>
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
