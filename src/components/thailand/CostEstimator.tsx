"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Users, Calendar, Hotel, Plane, PhoneCall, Sparkles } from "lucide-react";

export default function CostEstimator() {
  const [pax, setPax] = useState<number>(2);
  const [nights, setNights] = useState<number>(6);
  const [tier, setTier] = useState<"premium" | "luxury">("premium");
  const [includeFlights, setIncludeFlights] = useState<boolean>(true);
  const [estimate, setEstimate] = useState<number>(0);

  useEffect(() => {
    // Basic dynamic cost formula for Thailand
    const dailyRate = tier === "premium" ? 6400 : 14500;
    const flightRate = includeFlights ? 19500 : 0;

    let baseCost = (dailyRate * nights + flightRate) * pax;

    // Apply group discount for 4 or more travelers
    if (pax >= 4) {
      baseCost = baseCost * 0.95; // 5% discount
    }

    setEstimate(Math.round(baseCost));
  }, [pax, nights, tier, includeFlights]);

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hi Outbound Travelers! I am planning a luxury Thailand trip for ${pax} travelers for ${nights + 1} days / ${nights} nights. Option selected: ${
        tier === "premium" ? "Premium 4-Star Boutique" : "Ultra-Luxury 5-Star"
      } stay ${includeFlights ? "including Flights" : "excluding Flights"}. Please share a detailed custom itinerary and quote.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <section id="estimator" className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-10 w-90 h-90 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-90 h-90 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0891B2]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0891B2] border border-[#0891B2]/20"
          >
            <Calculator className="h-4 w-4" />
            <span>Interactive Estimator</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Trip Cost <span className="italic text-[#0891B2]">Calculator</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-neutral-400 font-light"
          >
            Estimate your Thailand land and flight bundles in real-time. Adjust sliders to customize the travel quote.
          </motion.p>
        </div>

        <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-800 bg-neutral-900/30 p-6 shadow-2xl sm:p-10 lg:p-12 backdrop-blur-md">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left Column: Sliders */}
            <div className="lg:col-span-7 space-y-8">
              {/* Slider: Travelers */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-xs text-neutral-500 font-semibold">
                    <Users className="h-4 w-4 text-[#0891B2]" />
                    <span>Number of Travelers</span>
                  </span>
                  <span className="text-[#0891B2] text-base">{pax} Adults</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={pax}
                  onChange={(e) => setPax(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#0891B2]"
                />
              </div>

              {/* Slider: Duration */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-xs text-neutral-500 font-semibold">
                    <Calendar className="h-4 w-4 text-[#0891B2]" />
                    <span>Duration (Nights)</span>
                  </span>
                  <span className="text-[#0891B2] text-base">{nights + 1} Days / {nights} Nights</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="12"
                  value={nights}
                  onChange={(e) => setNights(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#0891B2]"
                />
              </div>

              {/* Options: Accomodation & Flights */}
              <div className="grid gap-6 sm:grid-cols-2 pt-2">
                <div className="space-y-3">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-xs font-bold text-neutral-500">
                    <Hotel className="h-4 w-4 text-[#0891B2]" />
                    <span>Accommodation Tier</span>
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setTier("premium")}
                      className={`py-3.5 text-xs font-bold uppercase tracking-wider rounded-2xl border transition-all ${
                        tier === "premium"
                          ? "bg-[#0891B2] border-[#0891B2] text-white shadow-md shadow-cyan-900/10"
                          : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 text-neutral-300"
                      }`}
                    >
                      Premium (4★)
                    </button>
                    <button
                      onClick={() => setTier("luxury")}
                      className={`py-3.5 text-xs font-bold uppercase tracking-wider rounded-2xl border transition-all ${
                        tier === "luxury"
                          ? "bg-[#0891B2] border-[#0891B2] text-white shadow-md shadow-cyan-900/10"
                          : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 text-neutral-300"
                      }`}
                    >
                      Luxury (5★)
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-xs font-bold text-neutral-500">
                    <Plane className="h-4 w-4 text-[#0891B2]" />
                    <span>Flight Inclusion</span>
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setIncludeFlights(true)}
                      className={`py-3.5 text-xs font-bold uppercase tracking-wider rounded-2xl border transition-all ${
                        includeFlights
                          ? "bg-[#0891B2] border-[#0891B2] text-white shadow-md shadow-cyan-900/10"
                          : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 text-neutral-300"
                      }`}
                    >
                      Included
                    </button>
                    <button
                      onClick={() => setIncludeFlights(false)}
                      className={`py-3.5 text-xs font-bold uppercase tracking-wider rounded-2xl border transition-all ${
                        !includeFlights
                          ? "bg-[#0891B2] border-[#0891B2] text-white shadow-md shadow-cyan-900/10"
                          : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 text-neutral-300"
                      }`}
                    >
                      Land Only
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Cost Card (Glassmorphic) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden flex flex-col justify-between h-[360px]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-2">Estimated Package Cost</span>
                  <div className="text-4xl sm:text-5xl font-black text-white font-serif tracking-tight leading-none mb-3">
                    ₹{estimate.toLocaleString("en-IN")}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#0891B2] bg-[#0891B2]/10 border border-[#0891B2]/20 px-3 py-1 rounded-full">
                    <Sparkles className="h-3 w-3 text-[#0891B2]" />
                    <span>{pax >= 4 ? "5% Group Discount Applied!" : "All Taxes Included"}</span>
                  </span>
                </div>

                <div className="text-xs text-neutral-400 font-light leading-relaxed my-4 border-t border-neutral-800 pt-4">
                  Includes premium speedboat airport transfers, private catamaran cruising to Phi Phi Islands, couple aromatherapy spa sessions, and {tier === "premium" ? "Premium 4-Star Boutique stays" : "Ultra-Luxury 5-Star stays"}.
                </div>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="group w-full flex items-center justify-center gap-2 rounded-2xl py-4 text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <PhoneCall className="h-4 w-4 animate-bounce" />
                  <span>Request Live PDF Quote</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
