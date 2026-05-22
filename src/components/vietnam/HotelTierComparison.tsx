"use client";

import React from "react";
import { motion } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { Check, Hotel, Sparkles, Star } from "lucide-react";

export default function HotelTierComparison() {
  const features = {
    premium: [
      "Vetted Indochina French colonial heritage hotels",
      "Stunning quiet central courtyard gardens & pools",
      "Handcrafted timber layouts & antique styling accents",
      "Complimentary high-speed WiFi & premium services",
      "Daily elaborately styled local breakfast buffet",
      "Exceptional hospitality, security & safety scores",
    ],
    luxury: [
      "Stays at flagship palaces (Capella Hanoi, InterContinental Danang)",
      "VIP private suite rooms with spectacular sea/city views",
      "24/7 dedicated private royal butler desk services",
      "Floating candlelight sunset dinners arranged",
      "Premium organic couples wellness therapies in resorts",
      "VIP fast-track airport lounge entry passes included",
    ],
  };

  return (
    <section className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      {/* Decorative Indochine screen lines */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-20">
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-[#1F5F5B]/15" />
        <div className="absolute top-0 bottom-0 right-[20%] w-px bg-[#1F5F5B]/15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <span className="text-xs font-bold tracking-widest text-[#5E8B7E] uppercase block">
            Palace Tiering
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1F5F5B] tracking-tight">
            Comparison of Sanctuaries
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#2F3E46]/70 max-w-xl mx-auto leading-relaxed">
            Select the standard of living that fits your Indochine dreams. Stay in boutique historical properties or global premium flagships.
          </p>
        </motion.div>

        {/* Double Outline luxury framed comparative grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Boutique Hotel */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[36px] bg-white border border-[#1F5F5B]/20 p-8 flex flex-col justify-between hover:border-[#1F5F5B]/40 transition-all duration-300 shadow-lg relative"
          >
            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#1F5F5B]/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#FAF7F2] border border-[#1F5F5B]/20 rounded-full text-[#1F5F5B]">
                    <Hotel className="h-5 w-5 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-[#D9A441] block">Tier One Stays</span>
                    <h3 className="text-base font-bold font-serif text-[#1F5F5B]">{vietnamData.hotelTiers[0].tier}</h3>
                  </div>
                </div>
                <div className="flex gap-0.5 text-[#D9A441] shrink-0">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#2F3E46]/85 font-light leading-relaxed text-left">
                {vietnamData.hotelTiers[0].description}
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 pt-3 text-left">
                {features.premium.map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs text-[#2F3E46]/80 font-light leading-snug">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-[#1F5F5B] border border-[#1F5F5B]/20 shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Footer */}
            <div className="mt-10 border-t border-[#1F5F5B]/10 pt-5 flex items-center justify-between">
              <span className="text-[8px] font-bold uppercase tracking-widest text-[#D9A441]">Pricing level</span>
              <span className="text-[9px] font-bold text-[#1F5F5B] uppercase tracking-widest bg-[#FAF7F2] border border-[#1F5F5B]/20 px-4 py-2 rounded-full">
                {vietnamData.hotelTiers[0].price}
              </span>
            </div>

          </motion.div>

          {/* Card 2: Grand Palaces (5 star flagship suites) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[36px] bg-white border-2 border-[#1F5F5B]/40 p-8 flex flex-col justify-between hover:border-[#1F5F5B] transition-all duration-300 shadow-2xl relative"
          >
            {/* Elegant warm velvet glow badge */}
            <div className="absolute -top-3 right-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#1F5F5B] px-3.5 py-1 text-[8px] font-bold text-white uppercase tracking-widest shadow-md">
              <Sparkles className="h-3 w-3 text-[#D9A441]" />
              <span>Highly Recommended Upgrade</span>
            </div>

            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#1F5F5B]/15 pb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-teal-50 border border-[#1F5F5B]/30 rounded-full text-[#1F5F5B]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-[#1F5F5B] block">Tier Two Stays</span>
                    <h3 className="text-base font-bold font-serif text-[#1F5F5B]">{vietnamData.hotelTiers[1].tier}</h3>
                  </div>
                </div>
                <div className="flex gap-0.5 text-[#D9A441] shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#2F3E46]/85 font-light leading-relaxed text-left">
                {vietnamData.hotelTiers[1].description}
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 pt-3 text-left">
                {features.luxury.map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs text-[#1F5F5B] font-medium leading-snug">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-[#1F5F5B] border border-[#1F5F5B]/35 shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Footer */}
            <div className="mt-10 border-t border-[#1F5F5B]/15 pt-5 flex items-center justify-between">
              <span className="text-[8px] font-bold uppercase tracking-widest text-[#D9A441]">Pricing level</span>
              <span className="text-[9px] font-bold text-[#1F5F5B] uppercase tracking-widest bg-emerald-50 border border-[#1F5F5B]/20 px-4 py-2 rounded-full">
                {vietnamData.hotelTiers[1].price}
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
