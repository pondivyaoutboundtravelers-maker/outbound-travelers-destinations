"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Compass } from "lucide-react";
import { thailandInclusions, thailandExclusions } from "@/data/thailand";

export default function InclusionsExclusions() {
  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-90 h-90 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Inclusions Checklist
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Absolute Transparency
          </p>
          <p className="text-neutral-400 font-light mt-4">
            No hidden taxes. No unexpected local fees. Here is a clear, absolute breakdown of what is fully covered in our package quotes.
          </p>
        </motion.div>

        {/* Double Pane Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Pane 1: Inclusions (Teal accent checkmarks) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-neutral-900/30 border border-neutral-800 p-8 hover:border-[#0891B2]/20 hover:bg-neutral-900/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4 mb-6">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
              <h3 className="text-xl font-bold font-serif text-white tracking-tight">
                What is Included
              </h3>
            </div>

            <ul className="space-y-4">
              {thailandInclusions.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-neutral-300 font-light leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pane 2: Exclusions (Red/neutral crossmarks) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-neutral-900/30 border border-neutral-800 p-8 hover:border-red-950/20 hover:bg-neutral-900/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4 mb-6">
              <XCircle className="h-6 w-6 text-red-400 shrink-0" />
              <h3 className="text-xl font-bold font-serif text-white tracking-tight">
                What is Excluded
              </h3>
            </div>

            <ul className="space-y-4">
              {thailandExclusions.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-neutral-400 font-light leading-relaxed">
                  <XCircle className="h-5 w-5 text-red-500/60 shrink-0 mt-0.5" />
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
