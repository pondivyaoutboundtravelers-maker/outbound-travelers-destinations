"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlaneTakeoff, Heart, Coffee, Shield } from "lucide-react";

const reasons = [
  {
    icon: <PlaneTakeoff className="h-6 w-6" />,
    title: "Direct & Quick Flights",
    description: "Only 4 hours from Chennai, Bangalore, and Kochi. Flights are highly frequent and budget-friendly, ideal for families and children.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Premium Honeymoon Vibes",
    description: "From luxury beachfront resorts with private sunset pools in Langkawi to scenic sunset yacht charters on crystal clear bays.",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Vegetarian & Indian Food Friendly",
    description: "Highly rich local Indian heritage makes authentic South and North Indian meals readily accessible throughout Kuala Lumpur and Penang.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Extreme Safety & Hospitality",
    description: "Malaysia ranks among the safest nations in Southeast Asia. The locals are exceptionally warm, helpful, and speak fluent English.",
  },
];

export default function WhyMalaysia() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1 bg-[#0E7490]/10 text-[#0E7490] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <span>The Perfect Gateway</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl leading-tight"
            >
              Why Malaysia is the <br className="hidden sm:block" />
              Ultimate <span className="italic text-[#0E7490]">First Abroad Trip</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed font-light"
            >
              Skip the long flight times, endless visa paperwork, and high costs. Malaysia delivers luxury beach resorts, massive amusement theme parks, and rich culture at an incredibly economical rate.
            </motion.p>
          </div>

          {/* Right Column: Grid of Reasons */}
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-neutral-100 bg-neutral-50/50 p-6 transition-all duration-300 hover:bg-white hover:border-[#0E7490]/25 hover:shadow-xl group"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-[#0E7490] transition-colors duration-300 group-hover:bg-[#0E7490] group-hover:text-white">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 tracking-tight group-hover:text-[#0E7490] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
