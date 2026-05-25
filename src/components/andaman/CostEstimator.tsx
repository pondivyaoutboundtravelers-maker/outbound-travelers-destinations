"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CostEstimator() {
  const [days, setDays] = useState(5);
  const [adults, setAdults] = useState(2);
  const [tier, setTier] = useState<"comfort" | "premium" | "luxury">("premium");

  const openLeadForm = () => {
    window.dispatchEvent(new CustomEvent("openLeadForm"));
  };

  const calculatePrice = () => {
    let base = 7500;
    if (tier === "premium") base = 12000;
    if (tier === "luxury") base = 35000;
    return base * days * adults;
  };

  const estimatedTotal = calculatePrice();

  return (
    <section className="py-24 bg-[#FFF7ED] relative overflow-hidden border-t border-stone-200/50">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0891B2]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FB923C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-[#FB923C] font-bold">
              Transparent Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917] mt-2 mb-6">
              Estimate Your Island Investment
            </h2>
            <p className="text-[#57534E] mb-8 leading-relaxed">
              Use our quick calculator to get a rough idea of the ground costs. Remember, every itinerary we build is completely custom-designed to match your exact preferences, from private yachts to specific villa categories.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-[#44403C]">
                <svg className="w-5 h-5 text-[#0891B2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Includes premium Makruzz ferry tickets
              </li>
              <li className="flex items-center gap-3 text-sm text-[#44403C]">
                <svg className="w-5 h-5 text-[#0891B2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Includes private air-conditioned vehicle transits
              </li>
              <li className="flex items-center gap-3 text-sm text-[#44403C]">
                <svg className="w-5 h-5 text-[#0891B2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Excludes flights to Port Blair
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-stone-200 rounded-[2.5rem] p-8 shadow-xl relative"
          >
            {/* Form Fields */}
            <div className="space-y-6">
              {/* Days & Adults */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#78716C] mb-2">Duration (Days)</label>
                  <input 
                    type="number" 
                    min={3} 
                    max={15} 
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full bg-[#F5F5F4] border border-stone-200 rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#0891B2] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#78716C] mb-2">Travelers</label>
                  <input 
                    type="number" 
                    min={1} 
                    max={20} 
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-[#F5F5F4] border border-stone-200 rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#0891B2] transition-colors"
                  />
                </div>
              </div>

              {/* Tier Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#78716C] mb-2">Accommodation Tier</label>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setTier("comfort")}
                    className={`py-2 rounded-xl text-sm font-bold border transition-colors ${tier === "comfort" ? "bg-[#0891B2] text-white border-[#0891B2]" : "bg-transparent text-[#57534E] border-stone-200 hover:border-[#0891B2]/40"}`}
                  >
                    Comfort
                  </button>
                  <button 
                    onClick={() => setTier("premium")}
                    className={`py-2 rounded-xl text-sm font-bold border transition-colors ${tier === "premium" ? "bg-[#0891B2] text-white border-[#0891B2]" : "bg-transparent text-[#57534E] border-stone-200 hover:border-[#0891B2]/40"}`}
                  >
                    Premium
                  </button>
                  <button 
                    onClick={() => setTier("luxury")}
                    className={`py-2 rounded-xl text-sm font-bold border transition-colors ${tier === "luxury" ? "bg-[#0891B2] text-white border-[#0891B2]" : "bg-transparent text-[#57534E] border-stone-200 hover:border-[#0891B2]/40"}`}
                  >
                    Luxury
                  </button>
                </div>
              </div>

              {/* Estimate Result */}
              <div className="bg-[#F0FDFA] border border-[#0891B2]/20 rounded-2xl p-6 text-center mt-8">
                <span className="block text-xs uppercase tracking-widest text-[#0891B2] mb-2 font-bold">Estimated Ground Cost</span>
                <div className="text-4xl font-serif text-[#1C1917] mb-2">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-[#78716C]">
                  Approx. total for {adults} adults over {days} days. Flight fares extra.
                </p>
              </div>

              {/* CTA */}
              <button 
                onClick={openLeadForm}
                className="w-full bg-[#0891B2] text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#0E7490] transition-colors mt-4 shadow-md"
              >
                Get Exact Quote
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
