"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator } from "lucide-react";

export default function CostEstimator() {
  const [days, setDays] = useState(4);
  const [adults, setAdults] = useState(2);
  const [tier, setTier] = useState<"heritage" | "luxury">("heritage");

  // Base calculation logic
  const dailyRatePerPerson = tier === "heritage" ? 5500 : 12000;
  const totalEstimate = days * adults * dailyRatePerPerson;
  const formattedEstimate = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(totalEstimate);

  const openForm = () => {
    window.dispatchEvent(
      new CustomEvent("openLeadForm", {
        detail: {
          prefill: `Interested in a ${days}-day ${tier} stay for ${adults} adults. Estimated at ${formattedEstimate}.`,
        },
      })
    );
  };

  return (
    <section className="py-24 relative bg-[#EADBC8] border-y border-[#D4A373]/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & Appeal */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 border border-[#B45309]/30 bg-[#F8F4EC]/50 rounded-full mb-6"
            >
              <Calculator className="w-4 h-4 text-[#7C2D12]" />
              <span className="text-[#7C2D12] text-xs font-semibold uppercase tracking-[0.2em]">
                Transparent Planning
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-[#111827] mb-6 tracking-tight"
            >
              Design Your <br/> Investment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#111827]/80 font-light leading-relaxed max-w-md"
            >
              Every Outbound journey is unique. Use our planning console to model your stay, whether you prefer curated boutique havelis or global 5-star palatial luxury.
            </motion.p>
          </div>

          {/* Right: Glassmorphic Calculator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#F8F4EC]/80 backdrop-blur-xl border border-[#D4A373]/40 p-8 rounded-sm shadow-[0_10px_40px_rgba(124,45,18,0.1)] relative overflow-hidden"
          >
            {/* Accent geometry */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A373]/10 rounded-bl-full pointer-events-none" />

            {/* Inputs */}
            <div className="space-y-8 relative z-10">
              
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs uppercase tracking-[0.1em] font-bold text-[#B45309]">Duration</label>
                  <span className="text-xl font-serif text-[#111827]">{days} Days</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-[#7C2D12] h-1 bg-[#EADBC8] rounded-full appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs uppercase tracking-[0.1em] font-bold text-[#B45309]">Travelers</label>
                  <span className="text-xl font-serif text-[#111827]">{adults} Adults</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full accent-[#7C2D12] h-1 bg-[#EADBC8] rounded-full appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.1em] font-bold text-[#B45309] block mb-3">Accommodation Tier</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setTier("heritage")}
                    className={`py-3 px-4 border text-sm font-medium transition-all ${
                      tier === "heritage"
                        ? "bg-[#7C2D12] text-[#F8F4EC] border-[#7C2D12]"
                        : "bg-white text-[#111827] border-[#D4A373]/40 hover:bg-[#EADBC8]/50"
                    }`}
                  >
                    Boutique Heritage
                  </button>
                  <button
                    onClick={() => setTier("luxury")}
                    className={`py-3 px-4 border text-sm font-medium transition-all ${
                      tier === "luxury"
                        ? "bg-[#7C2D12] text-[#F8F4EC] border-[#7C2D12]"
                        : "bg-white text-[#111827] border-[#D4A373]/40 hover:bg-[#EADBC8]/50"
                    }`}
                  >
                    5-Star Palatial
                  </button>
                </div>
              </div>

              <div className="pt-8 border-t border-[#D4A373]/40">
                <p className="text-xs uppercase tracking-[0.1em] text-[#111827]/60 mb-1">Estimated Investment</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={formattedEstimate}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-4xl font-serif text-[#7C2D12] mb-6"
                  >
                    {formattedEstimate}
                  </motion.div>
                </AnimatePresence>
                <button
                  onClick={openForm}
                  className="w-full py-4 bg-[#111827] text-[#F8F4EC] font-sans text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#2D1606] transition-colors"
                >
                  Request Formal Quote
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
