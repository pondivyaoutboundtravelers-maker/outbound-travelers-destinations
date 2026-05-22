"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Users, Calendar, Hotel, Plane, PhoneCall } from "lucide-react";

export default function CostEstimator() {
  const [pax, setPax] = useState<number>(2);
  const [days, setDays] = useState<number>(6);
  const [tier, setTier] = useState<"premium" | "luxury">("premium");
  const [includeFlights, setIncludeFlights] = useState<boolean>(true);
  const [estimate, setEstimate] = useState<number>(0);

  useEffect(() => {
    // Basic dynamic cost formula
    const dailyRate = tier === "premium" ? 5800 : 12500;
    const flightRate = includeFlights ? 18500 : 0;

    let baseCost = (dailyRate * days + flightRate) * pax;

    // Apply group discount for 5 or more travelers
    if (pax >= 5) {
      baseCost = baseCost * 0.95; // 5% discount
    }

    setEstimate(Math.round(baseCost));
  }, [pax, days, tier, includeFlights]);

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hi Outbound Travelers! I am planning a Malaysia trip for ${pax} travelers for ${days} days, selecting the ${
        tier === "premium" ? "Premium 4-Star" : "Luxury 5-Star"
      } package ${includeFlights ? "including Flights" : "excluding Flights"}. Could you please send me a detailed custom itinerary and quote?`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <section id="estimator" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7490]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <Calculator className="h-4 w-4" />
            <span>Interactive Calculator</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Malaysia Custom <span className="italic text-[#0E7490]">Cost Estimator</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-light"
          >
            Estimate your land and flight packages in real-time. Adjust sliders to match your preferred travel plan.
          </motion.p>
        </div>

        <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-200/60 bg-neutral-50/50 p-6 shadow-xl sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left: Dynamic Sliders and Controls */}
            <div className="lg:col-span-7 space-y-8">
              {/* Sliders: Pax Count */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-neutral-800">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-xs text-neutral-400">
                    <Users className="h-4 w-4 text-[#0E7490]" />
                    <span>Number of Travelers</span>
                  </span>
                  <span className="text-[#0E7490] text-base">{pax} Adults</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={pax}
                  onChange={(e) => setPax(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#0E7490]"
                />
              </div>

              {/* Sliders: Duration */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-neutral-800">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-xs text-neutral-400">
                    <Calendar className="h-4 w-4 text-[#0E7490]" />
                    <span>Duration (Nights)</span>
                  </span>
                  <span className="text-[#0E7490] text-base">{days} Days / {days - 1} Nights</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="14"
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#0E7490]"
                />
              </div>

              {/* Sliders: Stays & Flight inclusion */}
              <div className="grid gap-6 sm:grid-cols-2 pt-2">
                <div className="space-y-3">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-xs font-bold text-neutral-400">
                    <Hotel className="h-4 w-4 text-[#0E7490]" />
                    <span>Accommodation Tier</span>
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setTier("premium")}
                      className={`py-3.5 text-xs font-bold uppercase tracking-wider rounded-2xl border transition-all ${
                        tier === "premium"
                          ? "bg-[#0E7490] border-[#0E7490] text-white shadow-md shadow-cyan-900/10"
                          : "bg-white border-neutral-200 hover:border-neutral-350 text-neutral-800"
                      }`}
                    >
                      Premium (4★)
                    </button>
                    <button
                      onClick={() => setTier("luxury")}
                      className={`py-3.5 text-xs font-bold uppercase tracking-wider rounded-2xl border transition-all ${
                        tier === "luxury"
                          ? "bg-[#0E7490] border-[#0E7490] text-white shadow-md shadow-cyan-900/10"
                          : "bg-white border-neutral-200 hover:border-neutral-350 text-neutral-800"
                      }`}
                    >
                      Luxury (5★)
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-xs font-bold text-neutral-400">
                    <Plane className="h-4 w-4 text-[#0E7490]" />
                    <span>Flight Inclusion</span>
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setIncludeFlights(true)}
                      className={`py-3.5 text-xs font-bold uppercase tracking-wider rounded-2xl border transition-all ${
                        includeFlights
                          ? "bg-[#0E7490] border-[#0E7490] text-white shadow-md shadow-cyan-900/10"
                          : "bg-white border-neutral-200 hover:border-neutral-350 text-neutral-800"
                      }`}
                    >
                      Included
                    </button>
                    <button
                      onClick={() => setIncludeFlights(false)}
                      className={`py-3.5 text-xs font-bold uppercase tracking-wider rounded-2xl border transition-all ${
                        !includeFlights
                          ? "bg-[#0E7490] border-[#0E7490] text-white shadow-md shadow-cyan-900/10"
                          : "bg-white border-neutral-200 hover:border-neutral-350 text-neutral-800"
                      }`}
                    >
                      Land Only
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Immersive Quote Display Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-neutral-200/80 p-6 sm:p-8 text-center shadow-lg relative overflow-hidden flex flex-col justify-between h-[360px]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">Estimated Package Cost</span>
                  <div className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-none mb-2">
                    ₹{estimate.toLocaleString("en-IN")}
                  </div>
                  <span className="text-2xs font-extrabold uppercase tracking-widest text-[#0E7490] bg-[#0E7490]/10 px-3 py-1 rounded-full">
                    {pax >= 5 ? "5% Group Discount Applied!" : "All Taxes Included"}
                  </span>
                </div>

                <div className="text-xs text-neutral-500 font-medium leading-relaxed my-4 border-t border-neutral-100 pt-4">
                  Includes airport transfers, daily sightseeing, theme park entry passes, local breakfast, internal transits, and {tier === "premium" ? "Premium 4-Star stays" : "Ultra Luxury 5-Star stays"}.
                </div>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="group w-full flex items-center justify-center gap-2 rounded-full py-4 text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/15 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
