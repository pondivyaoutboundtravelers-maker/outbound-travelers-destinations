"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { phuQuocFAQs } from "@/data/phu-quoc";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = phuQuocFAQs;

  return (
    <section id="faq" className="relative bg-[#0a0a0a] px-6 py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* soft lighting background */}
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal-900/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#0F766E] uppercase mb-3 block">
            Clear Logistics
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Essential Inquiries
          </h2>
        </motion.div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-neutral-950/20 hover:border-teal-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* trigger */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between p-5 sm:p-6 text-white gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-4.5 w-4.5 text-[#0F766E] shrink-0" />
                    <span className="font-serif font-bold text-sm sm:text-base tracking-tight leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}>
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </div>
                </button>

                {/* content panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed tracking-wide border-t border-white/5 pt-4 text-neutral-450">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
