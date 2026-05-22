"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, FileText, CreditCard, PlaneTakeoff } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery Call",
    description: "Speak with our Northeast experts to discuss your travel style and preferences.",
    icon: <PhoneCall className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Custom Itinerary",
    description: "We craft a personalized day-by-day plan with handpicked hotels and experiences.",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Secure Booking",
    description: "Confirm your trip with a secure deposit. We handle all reservations and permits.",
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Travel with Ease",
    description: "Arrive in Guwahati. Your private chauffeur and 24/7 concierge await you.",
    icon: <PlaneTakeoff className="h-6 w-6" />,
  },
];

export default function PlanningProcess() {
  return (
    <section className="bg-neutral-900 py-20 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-3xl font-medium tracking-tight md:text-5xl"
          >
            How We <span className="italic text-emerald-400">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-neutral-400"
          >
            A seamless, stress-free planning process from your first inquiry to your journey back home.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Connecting Line (Desktop) */}
          <div className="hidden absolute left-[10%] right-[10%] top-12 h-[2px] bg-white/10 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg lg:-top-4">
                  Step {step.id}
                </div>

                {/* Icon Circle */}
                <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-950/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] backdrop-blur-sm transition-transform hover:scale-110 z-10">
                  <div className="text-emerald-400">{step.icon}</div>
                </div>

                <h3 className="mb-3 font-serif text-xl font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
