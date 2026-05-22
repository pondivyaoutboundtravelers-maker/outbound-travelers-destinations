"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, FileText, Settings, CreditCard, ShieldCheck } from "lucide-react";
import { phuQuocProcessSteps } from "@/data/phu-quoc";

export default function PlanningProcess() {
  const icons = [Send, FileText, Settings, CreditCard, ShieldCheck];

  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background glow glows */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-teal-650/5 rounded-full blur-3xl pointer-events-none bg-teal-600/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0D9488] uppercase mb-3">
            How It Works
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Five Steps to Your Phu Quoc Escape
          </p>
          <p className="text-neutral-400 font-light mt-4">
            Our high-end, zero-stress planning process takes you from initial consult to private ground guide arrival.
          </p>
        </motion.div>

        {/* 5-Step Process Roadmap */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Horizontal line for desktop progression */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-neutral-800 -translate-y-1/2 z-0 hidden lg:block" />

          {phuQuocProcessSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative flex flex-col items-center text-center space-y-4 z-10"
              >
                {/* Step Bubble with Icon */}
                <div className="relative inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-800 text-teal-400 group-hover:scale-110 group-hover:border-teal-500/40 transition-all duration-300 shadow-xl">
                  {/* Small step count badge */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-lg bg-[#0D9488] text-white font-bold text-xs">
                    {step.step}
                  </span>
                  <Icon className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-teal-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-400 font-light px-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
