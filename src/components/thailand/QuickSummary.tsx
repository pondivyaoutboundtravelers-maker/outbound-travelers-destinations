"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Sun, Plane, Sparkles } from "lucide-react";

export default function QuickSummary() {
  const cards = [
    {
      icon: Clock,
      label: "Ideal Duration",
      value: "6 - 8 Nights",
      desc: "Perfect for Bangkok + Phuket + Krabi",
    },
    {
      icon: Sun,
      label: "Best Time to Visit",
      value: "November - April",
      desc: "Dry season with cool breezes & clear blue seas",
    },
    {
      icon: Plane,
      label: "Flight Access",
      value: "3.5 hrs Direct",
      desc: "Daily flights from Chennai, Bangalore & Kochi",
    },
    {
      icon: Sparkles,
      label: "Trip Theme",
      value: "Honeymoon & Family",
      desc: "Ultra-luxury resorts & premium logistics",
    },
  ];

  return (
    <section className="relative bg-neutral-950 px-6 py-12 md:py-20 overflow-hidden">
      {/* Decorative blurry background circles */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Quick Snapshot
          </h2>
          <p className="text-3xl md:text-4xl font-serif font-extrabold text-white">
            International Travel Made Effortless
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl bg-neutral-900/40 border border-neutral-800 p-6 backdrop-blur-md overflow-hidden hover:border-[#0891B2]/30 hover:bg-neutral-900/60 transition-all duration-300"
              >
                {/* Neon line highlight on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#0891B2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-[#0891B2]/10 text-[#0891B2] group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest block">
                      {card.label}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {card.value}
                    </h3>
                    <p className="text-sm font-light text-neutral-400">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
