"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Calendar, Check, Compass } from "lucide-react";

export default function VisaInfoBlock() {
  const steps = [
    {
      icon: ShieldCheck,
      title: "Zero Fees, Zero Stamped Visas",
      desc: "Fly straight to Bangkok or Phuket without paying any visa fees or submitting embassy documents.",
    },
    {
      icon: Calendar,
      title: "60 Days of Unrestricted Play",
      desc: "Enjoy up to two months of travel across islands, shopping districts, and mountains on a standard tourism entry.",
    },
    {
      icon: FileText,
      title: "Minimal Paperwork",
      desc: "Only requires a passport with 6 months validity, confirmed return flight tickets, and basic hotel confirmations.",
    },
  ];

  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Rich storytelling copy */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/20 px-4 py-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Official 2026 Policy Update</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight"
            >
              No Visas. <br />
              No Hassle. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent italic font-normal">
                Just Pack and Fly.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 font-light leading-relaxed text-base"
            >
              Thailand is officially visa-free for Indian passport holders for stays up to 60 days. Forget the weeks of passport submissions, expensive agency fees, or long visa lines at immigration counters. We set up all your hotel and flight vouchers to align perfectly with immigration standards, giving you a smooth, stress-free entry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 text-xs tracking-wider uppercase font-bold text-neutral-300"
            >
              <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2">
                <Check className="h-4 w-4 text-[#0891B2]" />
                <span>IndiGo / Thai Airways Direct</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2">
                <Check className="h-4 w-4 text-[#0891B2]" />
                <span>60-Day Stay Allowed</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Steps to visa-free travel inside premium luxury container */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 backdrop-blur-md overflow-hidden"
            >
              {/* Decorative radial blur in card */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#0891B2]/10 rounded-full blur-3xl -z-10" />

              <div className="flex items-center gap-3 mb-8 border-b border-neutral-800 pb-4">
                <Compass className="h-5 w-5 text-[#0891B2] shrink-0" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  How Entry Works
                </h3>
              </div>

              <div className="space-y-8">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="flex-shrink-0 p-3 bg-[#0891B2]/10 border border-[#0891B2]/20 rounded-2xl text-[#0891B2]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-white text-base tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-neutral-400 font-light text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
