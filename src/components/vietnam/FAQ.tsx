"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = vietnamData.faq;

  return (
    <section id="faq" className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#5E8B7E] uppercase block">
            Clear Logistics
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1F5F5B] tracking-tight">
            Essential Inquiries
          </h2>
        </div>

        {/* Minimalist Borderless Accordion List (Totally unique compared to Rajasthan boxes) */}
        <div className="divide-y divide-[#1F5F5B]/15">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 text-left transition-colors duration-300">
                
                {/* Trigger Button */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-[#1F5F5B] gap-4 py-2 hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="h-4.5 w-4.5 text-[#5E8B7E] shrink-0" />
                    <span className="font-serif font-bold text-sm sm:text-base tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron down indicator */}
                  <div className={`p-1.5 rounded-full border border-[#1F5F5B]/15 bg-white text-[#1F5F5B] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-xs sm:text-sm text-[#2F3E46]/80 font-light leading-relaxed tracking-wide pt-4 pb-2 pl-8">
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
