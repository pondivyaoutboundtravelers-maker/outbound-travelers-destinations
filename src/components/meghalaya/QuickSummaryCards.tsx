"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Mountain, Star } from "lucide-react";

const summaryData = [
  {
    id: 1,
    icon: <MapPin className="h-6 w-6 text-[#065F46]" />,
    title: "Capital",
    value: "Shillong",
    subtitle: "Scotland of the East",
  },
  {
    id: 2,
    icon: <Calendar className="h-6 w-6 text-[#065F46]" />,
    title: "Best Time",
    value: "Oct to May",
    subtitle: "Monsoons for waterfalls",
  },
  {
    id: 3,
    icon: <Mountain className="h-6 w-6 text-[#065F46]" />,
    title: "Altitude",
    value: "1,525 m",
    subtitle: "Shillong Plateau",
  },
  {
    id: 4,
    icon: <Star className="h-6 w-6 text-[#065F46]" />,
    title: "Famous For",
    value: "Living Root Bridges",
    subtitle: "Cleanest Village, Waterfalls",
  },
];

export default function QuickSummaryCards() {
  return (
    <section className="relative z-20 -mt-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summaryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/80 p-3 shadow-sm transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-neutral-300">
                {item.title}
              </h3>
              <p className="mb-1 text-xl font-semibold text-white sm:text-2xl">
                {item.value}
              </p>
              <p className="text-sm text-neutral-400">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
