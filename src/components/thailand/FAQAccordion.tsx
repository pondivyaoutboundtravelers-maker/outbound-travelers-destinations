"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { thailandFAQs } from "@/data/thailand";

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background glow glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Got Questions?
          </h2>
          <p className="text-3xl md:text-4xl font-serif font-extrabold text-white">
            Frequently Asked Questions
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {thailandFAQs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/30 overflow-hidden hover:border-[#0891B2]/20 transition-all duration-300"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left text-white"
              >
                <div className="flex items-center gap-3.5 pr-4">
                  <HelpCircle className="h-5 w-5 text-[#0891B2] shrink-0" />
                  <span className="font-bold text-sm md:text-base tracking-tight">{faq.q}</span>
                </div>
                <ChevronDown className={`h-5 w-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                  openIdx === i ? "rotate-180 text-cyan-400" : ""
                }`} />
              </button>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 border-t border-neutral-850/50 text-xs md:text-sm text-neutral-400 leading-relaxed font-light border-t border-neutral-900/30">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
