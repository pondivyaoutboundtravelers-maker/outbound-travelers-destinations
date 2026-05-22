"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Map, FileCheck, ShieldAlert, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <Send className="h-6 w-6" />,
    title: "1. Quick Inquiry",
    description: "Share your travel dates, traveler count, and desired stays through our quick online cost estimator.",
  },
  {
    step: "02",
    icon: <Map className="h-6 w-6" />,
    title: "2. Custom Plan",
    description: "Our destination experts design a detailed custom PDF itinerary and quote, sent to your WhatsApp in 2 hours.",
  },
  {
    step: "03",
    icon: <ShieldAlert className="h-6 w-6" />,
    title: "3. Safe Booking",
    description: "Approve the customized plan and pay a secure booking advance. Flights and luxury hotels are locked in instantly.",
  },
  {
    step: "04",
    icon: <FileCheck className="h-6 w-6" />,
    title: "4. Visa & Checklist",
    description: "We handle your MDAC visa-free registration and provide a comprehensive pre-departure travel checklist.",
  },
  {
    step: "05",
    icon: <Sparkles className="h-6 w-6" />,
    title: "5. Fly & Explore",
    description: "Board your flight with confidence! Our 24/7 on-ground transport team is connected with you via WhatsApp.",
  },
];

export default function PlanningProcess() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7490]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <Sparkles className="h-4 w-4" />
            <span>5-Step Workflow</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            How We Plan Your <span className="italic text-[#0E7490]">Malaysia Escapes</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-light"
          >
            From your very first click to touching back down in India, we manage everything professionally.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 relative">
          {/* Connector line for large screens */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[1.5px] bg-neutral-250/70 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-50/50 border border-neutral-200/50 rounded-3xl p-6 text-center hover:bg-white hover:border-[#0E7490]/20 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-neutral-200 text-[#0E7490] transition-colors duration-300 group-hover:bg-[#0E7490] group-hover:text-white shadow-sm">
                {step.icon}
              </div>
              <span className="text-2xs font-extrabold tracking-widest text-neutral-400 block mb-1">STEP {step.step}</span>
              <h3 className="text-base font-bold text-neutral-900 tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
