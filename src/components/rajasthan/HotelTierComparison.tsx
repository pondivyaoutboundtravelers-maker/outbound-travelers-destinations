"use client";

import React from "react";
import { motion } from "framer-motion";
import { rajasthanData } from "@/data/rajasthan";
import { Check, Hotel, Sparkles, Star } from "lucide-react";

export default function HotelTierComparison() {
  const features = {
    premium: [
      "Vetted 4-star boutique heritage havelis",
      "Stunning historic central symmetric courtyards",
      "Murals, fresco walls, & authentic vintage decor",
      "Complimentary high-speed WiFi & premium services",
      "Daily elaborately styled local breakfast buffet",
      "Exceptional hospitality, security & safety scores",
    ],
    luxury: [
      "Stays at globally renowned palaces (Taj & Rambagh)",
      "VIP private suite rooms with spectacular lake/fort views",
      "24/7 dedicated private royal butler desk services",
      "Floating candlelight vintage dinner setups arranged",
      "Premium organic couples wellness therapies in palaces",
      "VIP historic car museum entry passes included",
    ],
  };

  return (
    <section className="relative bg-[#F7F3EE] px-6 py-20 md:py-32 overflow-hidden border-b border-[#D6B370]/20">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#B76E79] uppercase mb-3 block">
            Palace Tiering
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#5B2147] tracking-tight">
            Comparison of Sanctuaries
          </h2>
        </motion.div>

        {/* 2 cards comparison (ivory style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Boutique Haveli (4 star) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-white border border-[#D6B370]/30 p-8 flex flex-col justify-between hover:border-[#D6B370]/60 transition-all duration-300 shadow-md shadow-amber-900/5"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#D6B370]/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#FAF7F2] rounded-xl text-amber-600">
                    <Hotel className="h-5 w-5 animate-pulse text-[#5B2147]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#D6B370] block">Tier One</span>
                    <h3 className="text-lg font-bold font-serif text-[#5B2147]">{rajasthanData.hotelTiers[0].tier}</h3>
                  </div>
                </div>
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-[#D6B370]" />
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-[#6B4F4F] font-light leading-relaxed">
                {rajasthanData.hotelTiers[0].description}
              </p>

              <ul className="space-y-3 pt-2">
                {features.premium.map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs text-[#6B4F4F]">
                    <Check className="h-4 w-4 text-[#5B2147] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-[#D6B370]/20 pt-4 flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#D6B370]">Pricing status</span>
              <span className="text-[9px] font-bold text-[#5B2147] uppercase tracking-widest bg-[#FAF7F2] border border-[#D6B370]/30 px-3.5 py-1.5 rounded-xl">
                {rajasthanData.hotelTiers[0].price}
              </span>
            </div>
          </motion.div>

          {/* Card 2: Grand Palaces (5 star) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-white border-2 border-[#5B2147]/40 p-8 flex flex-col justify-between hover:border-[#5B2147] transition-all duration-300 shadow-lg shadow-amber-900/5 relative"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -z-10" />

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#5B2147]/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-50 border border-[#5B2147]/20 rounded-xl text-amber-500">
                    <Sparkles className="h-5 w-5 text-[#5B2147]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#5B2147] block">Tier Two</span>
                    <h3 className="text-lg font-bold font-serif text-[#5B2147]">{rajasthanData.hotelTiers[1].tier}</h3>
                  </div>
                </div>
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-[#D6B370] fill-[#D6B370]" />
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-[#6B4F4F] font-light leading-relaxed">
                {rajasthanData.hotelTiers[1].description}
              </p>

              <ul className="space-y-3 pt-2">
                {features.luxury.map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs text-[#5B2147] font-medium">
                    <Check className="h-4 w-4 text-[#5B2147] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-[#5B2147]/15 pt-4 flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#D6B370]">Pricing status</span>
              <span className="text-[9px] font-bold text-[#5B2147] uppercase tracking-widest bg-red-50 border border-[#5B2147]/30 px-3.5 py-1.5 rounded-xl">
                {rajasthanData.hotelTiers[1].price}
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
