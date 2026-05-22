"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Calendar as CalendarIcon, Map, Calculator } from "lucide-react";

export default function CostEstimatorUI() {
  const [pax, setPax] = useState<number>(2);
  const [days, setDays] = useState<number>(5);
  const [tier, setTier] = useState<"premium" | "luxury">("premium");

  // Basic estimation logic
  const baseRate = tier === "premium" ? 5000 : 10000;
  const transportRate = 3500; // per day for vehicle
  const activitiesRate = 1500; // per person per day

  const accommodationCost = (baseRate * days) * Math.ceil(pax / 2);
  const transportTotal = transportRate * days;
  const activitiesTotal = activitiesRate * pax * days;
  
  const totalCost = accommodationCost + transportTotal + activitiesTotal;
  const perPersonCost = Math.round(totalCost / pax);

  return (
    <section className="bg-neutral-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-3xl font-medium tracking-tight text-neutral-900 md:text-5xl"
          >
            Trip <span className="italic text-[#065F46]">Estimator</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-neutral-600"
          >
            Get a rough idea of your travel investment before you speak with our experts.
          </motion.p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl bg-white p-6 shadow-xl lg:flex-row lg:p-10">
          {/* Inputs */}
          <div className="flex-1 space-y-8 lg:border-r lg:border-neutral-100 lg:pr-10">
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-700">
                <Users className="h-4 w-4 text-[#065F46]" /> Number of Travelers
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={pax}
                  onChange={(e) => setPax(parseInt(e.target.value))}
                  className="h-2 w-full appearance-none rounded-full bg-neutral-200 accent-[#065F46]"
                />
                <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-100 font-bold text-[#065F46]">
                  {pax}
                </span>
              </div>
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-700">
                <CalendarIcon className="h-4 w-4 text-[#065F46]" /> Duration (Days)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="3"
                  max="14"
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value))}
                  className="h-2 w-full appearance-none rounded-full bg-neutral-200 accent-[#065F46]"
                />
                <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-100 font-bold text-[#065F46]">
                  {days}
                </span>
              </div>
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-700">
                <Map className="h-4 w-4 text-[#065F46]" /> Hotel Tier
              </label>
              <div className="flex rounded-lg bg-neutral-100 p-1">
                <button
                  onClick={() => setTier("premium")}
                  className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
                    tier === "premium" ? "bg-white text-[#065F46] shadow-sm" : "text-neutral-500 hover:text-neutral-700"
                  }`}
                >
                  Premium (4-Star)
                </button>
                <button
                  onClick={() => setTier("luxury")}
                  className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
                    tier === "luxury" ? "bg-white text-[#065F46] shadow-sm" : "text-neutral-500 hover:text-neutral-700"
                  }`}
                >
                  Luxury (5-Star)
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 rounded-2xl bg-neutral-900 p-8 text-white">
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Calculator className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium">Estimated Cost</h3>
                <p className="text-sm text-neutral-400">Excludes flights & major meals</p>
              </div>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex justify-between text-sm text-neutral-300">
                <span>Hotels & Breakfast</span>
                <span>₹{accommodationCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-neutral-300">
                <span>Private Transport</span>
                <span>₹{transportTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-neutral-300">
                <span>Activities & Guides</span>
                <span>₹{activitiesTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-1 text-sm text-neutral-400">Total Estimate</div>
              <div className="font-serif text-4xl font-bold text-emerald-400">
                ₹{totalCost.toLocaleString()}
              </div>
              <div className="mt-2 text-sm text-neutral-400">
                That&apos;s approx <span className="font-semibold text-white">₹{perPersonCost.toLocaleString()}</span> per person
              </div>
            </div>

            <button className="mt-8 w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white transition-colors hover:bg-emerald-500">
              Request Detailed Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
