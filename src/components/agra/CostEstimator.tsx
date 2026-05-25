"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator } from "lucide-react";

export default function CostEstimator() {
  const [days, setDays] = useState(3);
  const [adults, setAdults] = useState(2);
  const [tier, setTier] = useState<"premium" | "palatial">("premium");

  // Base calculation logic for Agra luxury tiers
  const dailyRatePerPerson = tier === "premium" ? 14000 : 25000;
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
    <section className="py-32 relative bg-[#F5F1E8] border-t border-[#DCE7DD]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 border border-[#C6A15B]/30 bg-[#FAFAF7]/60 rounded-full mb-8 shadow-sm"
            >
              <Calculator className="w-4 h-4 text-[#14532D]" />
              <span className="text-[#14532D] text-xs font-semibold uppercase tracking-[0.2em]">
                Transparent Planning
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#052E16] mb-8 tracking-tight leading-tight"
            >
              Curate Your <br/> <span className="text-[#C6A15B] italic font-light">Investment</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#475569] text-lg font-light leading-relaxed max-w-md"
            >
              A true luxury experience is deeply personal. Use our private planning console to model your stay, choosing between premium boutique comfort or absolute palatial grandeur with uninterrupted Taj views.
            </motion.p>
          </div>

          {/* Emerald Glassmorphic Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B3D2E] p-10 lg:p-12 shadow-[0_30px_60px_rgba(5,46,22,0.2)] relative overflow-hidden border border-[#14532D]"
          >
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A15B]/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

            <div className="space-y-10 relative z-10">
              
              {/* Duration Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs uppercase tracking-[0.15em] font-bold text-[#C6A15B]">Duration</label>
                  <span className="text-2xl font-serif text-[#FAFAF7]">{days} Days</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="7"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-[#C6A15B] h-1.5 bg-[#14532D] rounded-full appearance-none cursor-pointer"
                />
              </div>

              {/* Travelers Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs uppercase tracking-[0.15em] font-bold text-[#C6A15B]">Travelers</label>
                  <span className="text-2xl font-serif text-[#FAFAF7]">{adults} Adults</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full accent-[#C6A15B] h-1.5 bg-[#14532D] rounded-full appearance-none cursor-pointer"
                />
              </div>

              {/* Tier Selection */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em] font-bold text-[#C6A15B] block mb-4">Experience Tier</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setTier("premium")}
                    className={`py-4 px-4 border text-sm font-sans tracking-wide transition-all ${
                      tier === "premium"
                        ? "bg-[#C6A15B] text-[#052E16] border-[#C6A15B] font-semibold shadow-inner"
                        : "bg-transparent text-[#FAFAF7] border-[#14532D] hover:border-[#C6A15B]/50"
                    }`}
                  >
                    Premium Taj View
                  </button>
                  <button
                    onClick={() => setTier("palatial")}
                    className={`py-4 px-4 border text-sm font-sans tracking-wide transition-all ${
                      tier === "palatial"
                        ? "bg-[#C6A15B] text-[#052E16] border-[#C6A15B] font-semibold shadow-inner"
                        : "bg-transparent text-[#FAFAF7] border-[#14532D] hover:border-[#C6A15B]/50"
                    }`}
                  >
                    Palatial Grandeur
                  </button>
                </div>
              </div>

              {/* Total & CTA */}
              <div className="pt-10 border-t border-[#14532D] flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#DCE7DD] mb-2">Estimated Total</p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={formattedEstimate}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-4xl font-serif text-[#C6A15B]"
                    >
                      {formattedEstimate}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <button
                  onClick={openForm}
                  className="w-full sm:w-auto px-8 py-4 bg-[#FAFAF7] text-[#052E16] font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C6A15B] transition-colors whitespace-nowrap"
                >
                  Request Consultation
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
