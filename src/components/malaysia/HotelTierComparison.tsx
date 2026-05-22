"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Hotel } from "lucide-react";
import { hotelTiers } from "../../data/malaysia";

export default function HotelTierComparison() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 border border-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <Hotel className="h-4 w-4" />
            <span>Accommodation Standard</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Premium vs Luxury <span className="italic text-[#0E7490]">Hotel Tiers</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-light"
          >
            We curate hotels based on strict standards: prime location, customer reviews, cleanliness, and premium breakfast selections.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {hotelTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative overflow-hidden rounded-3xl border bg-white p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 ${
                tier.recommended ? "border-[#0E7490] ring-1 ring-[#0E7490]/25" : "border-neutral-200/60"
              }`}
            >
              {tier.recommended && (
                <div className="absolute right-6 top-6 rounded-full bg-[#0E7490] px-3.5 py-1 text-2xs font-extrabold uppercase tracking-wider text-white">
                  Highly Recommended
                </div>
              )}

              <div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: tier.stars }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>

                <h3 className="font-serif text-2xl font-black text-neutral-900 tracking-tight leading-none mb-2">
                  {tier.name}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-4">
                  {tier.priceRange}
                </span>
                <p className="text-sm sm:text-base text-neutral-500 leading-relaxed font-light mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-4 border-t border-neutral-100 pt-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-700 text-sm font-semibold">
                      <Check className="h-4 w-4 text-[#0E7490] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <button
                  onClick={() => {
                    document.getElementById("estimator")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                    tier.recommended
                      ? "bg-[#0E7490] text-white hover:bg-cyan-850 shadow-md shadow-cyan-900/10"
                      : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200"
                  }`}
                >
                  Select {tier.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
