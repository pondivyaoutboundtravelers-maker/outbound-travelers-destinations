"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const eras = [
  {
    id: "mughal",
    title: "Mughal Grandeur",
    years: "1526 – 1857",
    desc: "An era of unparalleled architectural symmetry, red sandstone forts, intricate marble lattice work, and sprawling charbagh gardens.",
    image: "/images/delhi/humayuns-tomb.jpg",
  },
  {
    id: "colonial",
    title: "Colonial Legacy",
    years: "1911 – 1947",
    desc: "The shift of the capital brought sweeping Lutyens' avenues, monumental parliament houses, and vast green roundabouts.",
    image: "/images/delhi/india-gate.jpg",
  },
  {
    id: "modern",
    title: "Modern Metropolis",
    years: "1947 – Present",
    desc: "A chaotic yet poetic collision of ancient ruins standing in the shadows of contemporary glass skyscrapers and diplomatic enclaves.",
    image: "/images/delhi/hero.jpg",
  }
];

export default function EmpiresTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a horizontal scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="py-32 relative bg-[#F8F4EC] border-b border-[#D4A373]/20 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("/images/delhi/texture-paper.png")' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.2em] text-[#B45309] font-bold"
            >
              Delhi Through Time
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-[#111827] mt-4 tracking-tight"
            >
              A Living Museum of Empires
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md text-[#7C2D12] text-sm md:text-base font-light border-l border-[#D4A373] pl-6"
          >
            Experience the architectural evolution of a city that was built, destroyed, and rebuilt seven times.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eras.map((era, index) => (
            <motion.div
              key={era.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative flex flex-col h-full bg-[#EADBC8]/30 border border-[#D4A373]/30 p-1 transition-all hover:bg-[#EADBC8]/60"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={era.image} 
                  alt={era.title} 
                  className="w-full h-full object-cover filter sepia-[0.2] grayscale-[0.2] transition-transform duration-1000 group-hover:scale-110 group-hover:sepia-0 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
                
                {/* Year Badge */}
                <div className="absolute bottom-6 left-6 text-[#F8F4EC]">
                  <p className="text-sm font-sans tracking-[0.2em] text-[#D4A373] mb-1">{era.years}</p>
                  <h3 className="text-3xl font-serif">{era.title}</h3>
                </div>
              </div>
              
              {/* Description */}
              <div className="p-8">
                <p className="text-[#111827] font-light leading-relaxed text-sm">
                  {era.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
