"use client";

import React from "react";
import { motion } from "framer-motion";
import { Anchor, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function WhyPhuQuoc() {
  const points = [
    {
      icon: Heart,
      title: "The Ultimate Bali Alternative",
      desc: "Skip the heavy commercial scooter noise and crowded beach clubs of Kuta or Seminyak. Phu Quoc delivers absolute, quiet island luxury and clean, pristine white sands.",
    },
    {
      icon: Anchor,
      title: "Gulf of Thailand Serenity",
      desc: "Protected waters mean calm, crystal-clear turquoise lagoons and white sands, unlike high-surf currents in general ocean zones.",
    },
    {
      icon: Sparkles,
      title: "Architectural Marvel Stays",
      desc: "Stay in world-famous beachfront designs, including the Bill Bensley university-themed JW Marriott Emerald Bay or ultra-luxe Regent private pool villas.",
    },
    {
      icon: ShieldCheck,
      title: "First-Mover Travel Pride",
      desc: "Be the first couple in your social circle to discover Vietnam's hidden honeymoon secret before general commercial tour companies overexpose its coves.",
    },
  ];

  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background glow glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-650/5 rounded-full blur-3xl bg-teal-600/5" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-650/5 rounded-full blur-3xl bg-emerald-600/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0D9488] uppercase mb-3">
            Why Phu Quoc
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Quiet Luxury. Vetted Romance.
          </p>
          <p className="text-neutral-400 font-light mt-4 leading-relaxed">
            Your peers fly to standard, crowded spots. We craft your honeymoon around a pristine tropical economic zone offering total seclusion, incredible food cetering, and highly safe private transits.
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
                className="group flex gap-6 p-6 rounded-3xl bg-neutral-900/30 border border-neutral-800 hover:border-teal-500/20 hover:bg-neutral-900/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-teal-950/20 text-teal-400 border border-teal-500/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-teal-400 transition-colors duration-300">
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
