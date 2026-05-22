"use client";

import React from "react";
import { motion } from "framer-motion";
import { phuQuocHotelTiers } from "@/data/phu-quoc";
import { Check, Hotel, Sparkles, Star } from "lucide-react";

export default function HotelTierComparison() {
  const features = {
    premium: [
      "Vetted 4-star beach resort pool properties",
      "Prime beachfront access or central locations",
      "Stunning ocean infinity pools & tropical gardens",
      "Complimentary high-speed WiFi & modern gym access",
      "Daily international breakfast spreads included",
      "Excellent hospitality, safety, & clean stay scores",
    ],
    luxury: [
      "Stays at world-famous designs (e.g. JW Marriott / Regent)",
      "VVIP beachfront pool villas with direct sand access",
      "24/7 personal dedicated butler desk support",
      "Elite floating breakfast served in private villa pool",
      "In-villa therapeutic wellness & couples massage pavilions",
      "Resort credit for Michelin-tier dining venues",
    ],
  };

  return (
    <section className="relative bg-[#0a0a0a] px-6 py-20 md:py-32 overflow-hidden border-b border-white/5">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#0F766E] uppercase mb-3 block">
            Stay Aesthetics
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Comparison of Sanctuaries
          </h2>
        </motion.div>

        {/* 2 Grid cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Premium Boutique (4 star) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-neutral-950/40 border border-white/5 p-8 flex flex-col justify-between hover:border-teal-500/10 transition-all duration-300 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-neutral-900 rounded-xl text-teal-400">
                    <Hotel className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 block">Tier One</span>
                    <h3 className="text-lg font-bold font-serif text-white">{phuQuocHotelTiers[0].tier}</h3>
                  </div>
                </div>
                <div className="flex gap-0.5 text-yellow-500">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 font-light leading-relaxed text-neutral-400">
                {phuQuocHotelTiers[0].description}
              </p>

              <ul className="space-y-3 pt-2">
                {features.premium.map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs text-neutral-300">
                    <Check className="h-4 w-4 text-[#0F766E] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Pricing status</span>
              <span className="text-[9px] font-bold text-white uppercase tracking-widest bg-neutral-900 border border-white/10 px-3.5 py-1.5 rounded-xl">
                {phuQuocHotelTiers[0].price}
              </span>
            </div>
          </motion.div>

          {/* Card 2: Ultra-Luxury Resorts (5 star) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-neutral-950/60 border border-teal-500/20 p-8 flex flex-col justify-between hover:border-[#0F766E] transition-all duration-300 shadow-2xl relative"
          >
            {/* Ambient glass light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl -z-10" />

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-teal-500/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-950/20 border border-teal-500/20 rounded-xl text-teal-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-teal-400 block">Tier Two</span>
                    <h3 className="text-lg font-bold font-serif text-white">{phuQuocHotelTiers[1].tier}</h3>
                  </div>
                </div>
                <div className="flex gap-0.5 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 font-light leading-relaxed text-neutral-400">
                {phuQuocHotelTiers[1].description}
              </p>

              <ul className="space-y-3 pt-2">
                {features.luxury.map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs text-neutral-200 font-medium">
                    <Check className="h-4 w-4 text-teal-400 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-teal-900/30 pt-4 flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Pricing status</span>
              <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest bg-teal-950/40 border border-teal-900/40 px-3.5 py-1.5 rounded-xl">
                {phuQuocHotelTiers[1].price}
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
