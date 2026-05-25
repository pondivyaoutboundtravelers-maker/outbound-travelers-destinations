"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrainFront, MapPin } from "lucide-react";

const nodes = [
  { id: "delhi", title: "Delhi", sub: "The Historic Capital", delay: 0 },
  { id: "agra", title: "Agra", sub: "The City of Taj", delay: 0.4 },
  { id: "jaipur", title: "Jaipur", sub: "The Pink City", delay: 0.8 }
];

export default function GoldenTriangleModule() {
  return (
    <section className="py-24 relative bg-[#111827] overflow-hidden border-t-4 border-[#7C2D12]">
      {/* Cinematic Dark Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2D1606]/40 via-[#111827] to-[#111827] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2 border border-[#D4A373]/30 bg-[#2D1606]/50 rounded-full mb-8"
        >
          <TrainFront className="w-4 h-4 text-[#D4A373]" />
          <span className="text-[#EADBC8] text-xs font-semibold uppercase tracking-[0.2em]">
            The Golden Triangle Circuit
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif text-[#F8F4EC] mb-6 tracking-tight"
        >
          A Seamless Luxury Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-[#EADBC8] font-light leading-relaxed mb-20"
        >
          Traverse the iconic route connecting India's most architecturally significant cities in premium chauffeured comfort.
        </motion.p>

        {/* The Route Map */}
        <div className="relative max-w-4xl mx-auto mt-12 pb-12">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#D4A373]/20 -translate-y-1/2 hidden md:block" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7C2D12] via-[#D4A373] to-[#7C2D12] -translate-y-1/2 origin-left hidden md:block"
          />

          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 relative">
            {nodes.map((node, i) => (
              <motion.div 
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: node.delay }}
                className="relative group bg-[#111827] px-6"
              >
                {/* Node Dot */}
                <div className="w-12 h-12 rounded-full border-2 border-[#D4A373] bg-[#2D1606] flex items-center justify-center mx-auto mb-4 relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(212,163,115,0.2)]">
                  <MapPin className="w-5 h-5 text-[#D4A373]" />
                </div>
                
                {/* Label */}
                <h3 className="text-2xl font-serif text-[#F8F4EC]">{node.title}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4A373] mt-2">{node.sub}</p>
                
                {/* Connecting vertical line on mobile */}
                {i < nodes.length - 1 && (
                  <div className="absolute top-full left-1/2 h-12 w-px bg-gradient-to-b from-[#D4A373]/50 to-transparent -translate-x-1/2 md:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
