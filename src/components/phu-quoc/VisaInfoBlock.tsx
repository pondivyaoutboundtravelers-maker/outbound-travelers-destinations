"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, FileText, Check, Compass } from "lucide-react";

export default function VisaInfoBlock() {
  const steps = [
    {
      icon: ShieldCheck,
      title: "Zero Visa Fees. Zero Hassle.",
      desc: "Fly straight to Phu Quoc Airport without paying any visa fees or submitting physical embassy documents.",
    },
    {
      icon: Calendar,
      title: "30 Days of Tropical Play",
      desc: "Enjoy up to a full month of stay across beachfront resorts, cable cars, and offshore islands on tourism entries.",
    },
    {
      icon: FileText,
      title: "Minimal Entry Paperwork",
      desc: "Requires only a passport with 6 months validity, a confirmed return ticket, and simple hotel vouchers.",
    },
  ];

  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background soft lighting glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Storytelling copy */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-950/20 px-4 py-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest"
            >
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-ping" />
              <span>Official Vietnam Policy</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight"
            >
              Visa-Free Island. <br />
              No Consulate Visits. <br />
              <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500 bg-clip-text text-transparent italic font-normal">
                Just Pack and Escape.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 font-light leading-relaxed text-base"
            >
              Unlike Vietnam's mainland which requires online e-visas or pre-arranged landing documents, Phu Quoc Island is **100% visa-free** for Indian citizens for stays up to 30 days. Enjoy a seamless tropical arrival without expensive agency rates or lengthy immigration queues.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 text-xs tracking-wider uppercase font-bold text-neutral-350"
            >
              <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2">
                <Check className="h-4 w-4 text-[#0D9488]" />
                <span>VietJet / Direct / 1-Stop Transit</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2">
                <Check className="h-4 w-4 text-[#0D9488]" />
                <span>30-Day Exemption</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key requirements inside card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 backdrop-blur-md overflow-hidden"
            >
              {/* Soft teal glow within card */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-teal-650/10 rounded-full blur-3xl -z-10 bg-teal-600/10" />

              <div className="flex items-center gap-3 mb-8 border-b border-neutral-850 pb-4 border-b border-neutral-900/50">
                <Compass className="h-5 w-5 text-[#0D9488] shrink-0" />
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
                      <div className="flex-shrink-0 p-3 bg-teal-950/20 border border-teal-500/20 rounded-2xl text-teal-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-white text-base tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-neutral-450 font-light text-sm leading-relaxed text-neutral-400">
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
