"use client";

import React from "react";
import { motion } from "framer-motion";
import { dubaiData } from "@/lib/dubai/data";
import { Truck, Footprints, Tent, Flame } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  truck: <Truck className="w-5 h-5" />, footprints: <Footprints className="w-5 h-5" />,
  tent: <Tent className="w-5 h-5" />, flame: <Flame className="w-5 h-5" />,
};

export default function DesertSafariCinematic() {
  const safari = dubaiData.desertSafari;

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050816 0%, #1C1006 30%, #2D1606 50%, #1C1006 70%, #050816 100%)' }}>
      {/* Arabic geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CA8A04' fill-opacity='0.5'%3E%3Cpath d='M24 4l4 8h-8l4-8zm0 32l-4-8h8l-4 8zm-16-16l8 4v-8l-8 4zm32 0l-8-4v8l8-4z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '48px 48px' }} />

      {/* Animated sand particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div key={i}
          animate={{ x: [-20, 40, -20], y: [0, -10, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 8 + i * 3, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
          className="absolute rounded-full pointer-events-none"
          style={{ top: `${20 + i * 15}%`, left: `${10 + i * 20}%`, width: `${15 + i * 5}vw`, height: `${8 + i * 3}vw`, background: 'radial-gradient(ellipse, rgba(245,230,200,0.06), transparent)', filter: `blur(${30 + i * 10}px)` }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FB923C] font-bold">Arabian Desert Odyssey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">{safari.headline}</h2>
          <p className="text-[#E7D3B3] text-base mt-4 max-w-2xl mx-auto">{safari.subheadline}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Desert image */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative min-h-[400px] rounded-sm overflow-hidden shadow-2xl">
            <img src="/images/dubai/desert.jpg" alt="Arabian desert dunes at sunset" className="w-full h-full object-cover absolute inset-0 brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-[#050816]/70 backdrop-blur-md text-[#FB923C] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#FB923C]/20">
              ✦ Premium Safari Upgrade Available
            </div>
          </motion.div>

          {/* Right: Stacked experience cards */}
          <div className="lg:col-span-6 space-y-4">
            {safari.experiences.map((exp, idx) => (
              <motion.div key={exp.id} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="p-5 bg-[#0F172A]/50 backdrop-blur-xl border border-[#CA8A04]/10 rounded-sm shadow-xl hover:border-[#FB923C]/30 transition-all duration-300 group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FB923C]/10 flex items-center justify-center text-[#FB923C] flex-shrink-0 group-hover:bg-[#FB923C]/20 transition-colors">
                  {iconMap[exp.icon] || <Flame className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="text-[#FAF7F2] font-semibold text-sm">{exp.title}</h4>
                  <p className="text-[#E7D3B3]/70 text-xs mt-1 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bedouin quote */}
        <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center">
          <p className="text-xl sm:text-2xl font-serif italic text-[#FB923C]/80 max-w-2xl mx-auto">{safari.quote}</p>
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(3)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#FB923C]/30" />)}
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
