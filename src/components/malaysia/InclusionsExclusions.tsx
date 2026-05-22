"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldAlert } from "lucide-react";

const inclusions = [
  "Premium/Luxury hotel stays with daily breakfast",
  "All airport transits in private air-conditioned vehicles",
  "Genting Highlands Awana Cable Car tickets",
  "Sunway Lagoon multi-park entry tickets",
  "Sunset yacht catamaran cruise in Langkawi with BBQ",
  "Free Malaysia Arrival Card (MDAC) pre-registration",
  "24/7 dedicated support via WhatsApp during travel",
];

const exclusions = [
  "Flight tickets from India (Unless added to package)",
  "Lunches and dinners (Unless specified in itinerary)",
  "Personal expenses (Laundry, shopping, telephone, alcoholic drinks)",
  "Malaysia Tourism Tax (MYR 10 per room/night, payable at hotels)",
  "Optional public beach water sports (Jet ski, parasailing)",
  "Travel insurance (Available as a premium add-on)",
];

export default function InclusionsExclusions() {
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
            <ShieldAlert className="h-4 w-4" />
            <span>Checklist Transparency</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Inclusions & <span className="italic text-[#0E7490]">Exclusions Checklist</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-light"
          >
            No hidden charges, no surprise fees. We offer 100% transparency so you can travel without stress.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Inclusions Pane */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-emerald-100 bg-emerald-50/20 p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-emerald-800 tracking-tight mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                <Check className="h-5 w-5" />
              </div>
              <span>What is Included</span>
            </h3>
            <ul className="space-y-4">
              {inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-neutral-700 text-sm font-semibold">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Exclusions Pane */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-rose-100 bg-rose-50/20 p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-rose-800 tracking-tight mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-800">
                <X className="h-5 w-5" />
              </div>
              <span>What is Excluded</span>
            </h3>
            <ul className="space-y-4">
              {exclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-neutral-700 text-sm font-semibold">
                  <X className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
