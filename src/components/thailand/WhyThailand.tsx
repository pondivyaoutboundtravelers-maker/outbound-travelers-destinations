"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, ShieldCheck, Zap, Users } from "lucide-react";

export default function WhyThailand() {
  const points = [
    {
      icon: Zap,
      title: "Bangkok Energy meets Island Serenity",
      desc: "Experience high-energy rooftop bars, boutique city shopping, and within an hour, glide onto the secluded white sands of Phuket or Krabi.",
    },
    {
      icon: Coffee,
      title: "South Indian Food Arrangements",
      desc: "No meal stress. We pre-arrange delicious authentic South Indian breakfasts and secure top-tier vegetarian/Jain restaurants across your trip.",
    },
    {
      icon: Users,
      title: "Honeymoon & Family Specialists",
      desc: "Whether you want a private sunrise catamaran, baby-friendly transfers, or slow-paced senior routes — we customize every single detail.",
    },
    {
      icon: ShieldCheck,
      title: "Outbound Vetted Ground Care",
      desc: "Our English-speaking guides and executive vans are pre-booked. Have direct, live 24/7 WhatsApp support throughout your entire journey.",
    },
  ];

  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Dynamic light glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Why Outbound Travelers
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            The Thailand Tour Package You Deserve
          </p>
          <p className="text-neutral-400 font-light mt-4 leading-relaxed">
            Your friends rave about Thailand, but they probably had to stand in long immigration lines, deal with generic group tour busses, and search endlessly for decent meals. We ensure you get the absolute luxury version of Southeast Asia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex gap-6 p-6 rounded-3xl bg-neutral-900/30 border border-neutral-800 hover:border-[#0891B2]/20 hover:bg-neutral-900/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-[#0891B2]/10 text-[#0891B2] group-hover:scale-115 transition-transform duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#0891B2] transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-450 font-light text-neutral-400">
                    {point.desc}
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
