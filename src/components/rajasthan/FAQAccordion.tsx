"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rajasthanData } from "@/data/rajasthan";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = rajasthanData.faq;

  return (
    <section id="faq" className="relative bg-[#F7F3EE] px-6 py-20 md:py-32 overflow-hidden border-b border-[#D6B370]/20">
      
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#B76E79] uppercase mb-3 block">
            Clear Logistics
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#5B2147] tracking-tight">
            Essential Inquiries
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#D6B370]/30 bg-white hover:border-[#D6B370]/60 transition-all duration-300 overflow-hidden shadow-sm"
              >
                {/* trigger */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between p-5 sm:p-6 text-[#5B2147] gap-4 bg-white"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-4.5 w-4.5 text-[#B76E79] shrink-0" />
                    <span className="font-serif font-bold text-sm sm:text-base tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-[#FAF7F2] border border-[#D6B370]/20 text-[#5B2147] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}>
                    {isOpen ? <Minus className="h-3.5 w-3.5 text-[#B76E79]" /> : <Plus className="h-3.5 w-3.5 text-[#B76E79]" />}
                  </div>
                </button>

                {/* content panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-[#6B4F4F] font-light leading-relaxed tracking-wide border-t border-[#D6B370]/20 pt-4 bg-[#FAF7F2]/30">
                        {faq.answer}
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
