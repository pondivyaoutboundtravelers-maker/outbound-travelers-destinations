"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Hotel, Star, Check } from "lucide-react";
import { thailandHotelTiers } from "@/data/thailand";

export default function HotelTierComparison() {
  const features = {
    premium: [
      "Select 4-star boutique design properties",
      "Rooftop infinity pools & sunset decks",
      "Complimentary high-speed WiFi & gym",
      "Daily international breakfast buffet",
      "Excellent city-center or beachside locations",
      "Highly rated hospitality & cleanliness",
    ],
    luxury: [
      "World-famous 5-star beachfront resorts (e.g. Sri Panwa, Banyan Tree)",
      "Private pool villas with direct beach access",
      "24/7 dedicated private butler service",
      "Premium floating breakfast in private pool",
      "In-villa wellness treatments & couples spas",
      "Michelin-starred resort dining collections",
    ],
  };

  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background soft glows */}
      <div className="absolute top-1/3 left-10 w-90 h-90 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Stay Curations
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Premium vs Ultra-Luxury
          </p>
          <p className="text-neutral-400 font-light mt-4">
            We only work with handpicked, highly-rated properties that we have personally vetted for safety, cleanliness, and premium aesthetics.
          </p>
        </motion.div>

        {/* 2 Card layout for comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Premium Boutique */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-neutral-900/30 border border-neutral-800 p-8 flex flex-col justify-between hover:border-[#0891B2]/30 transition-all duration-300 shadow-xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-3 text-neutral-350 text-white">
                  <div className="p-2.5 bg-neutral-800 rounded-xl text-cyan-400">
                    <Hotel className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Tier One</span>
                    <h3 className="text-xl font-bold font-serif">Premium Boutique</h3>
                  </div>
                </div>
                <div className="flex gap-0.5 text-yellow-500">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-sm font-light text-neutral-400 leading-relaxed">
                {thailandHotelTiers[0].description}
              </p>

              <ul className="space-y-3 pt-2">
                {features.premium.map((feature, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs text-neutral-300">
                    <Check className="h-4 w-4 text-[#0891B2] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-neutral-850 pt-4 flex items-center justify-between border-t border-neutral-900/50">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Pricing Option</span>
              <span className="text-base font-bold text-white uppercase tracking-wider bg-neutral-850 px-3.5 py-1.5 rounded-xl border border-neutral-800">
                {thailandHotelTiers[0].price}
              </span>
            </div>
          </motion.div>

          {/* Card 2: Ultra-Luxury Resorts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-neutral-900/40 border border-[#0891B2]/30 p-8 flex flex-col justify-between hover:border-[#0891B2] transition-all duration-300 shadow-2xl"
          >
            {/* Spotlight blur inside luxury card */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0891B2]/10 rounded-full blur-3xl -z-10" />

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#0891B2]/20 pb-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="p-2.5 bg-[#0891B2]/10 border border-[#0891B2]/20 rounded-xl text-cyan-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-450 text-cyan-400">Tier Two</span>
                    <h3 className="text-xl font-bold font-serif">Ultra-Luxury Resorts</h3>
                  </div>
                </div>
                <div className="flex gap-0.5 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-sm font-light text-neutral-405 text-neutral-405 text-neutral-400 leading-relaxed">
                {thailandHotelTiers[1].description}
              </p>

              <ul className="space-y-3 pt-2">
                {features.luxury.map((feature, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs text-neutral-250 text-neutral-250 text-neutral-200 font-medium">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-cyan-900/40 pt-4 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Pricing Option</span>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/40 border border-cyan-850 px-3.5 py-1.5 rounded-xl border border-cyan-900/50">
                {thailandHotelTiers[1].price}
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
