"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, DollarSign } from "lucide-react";

const stats = [
  {
    id: "capital",
    icon: <MapPin className="h-6 w-6 text-[#0E7490]" />,
    title: "Capital City",
    value: "Kuala Lumpur",
    subtitle: "2 Hours ahead of IST",
  },
  {
    id: "best-time",
    icon: <Calendar className="h-6 w-6 text-[#0E7490]" />,
    title: "Best Time to Visit",
    value: "Nov to April",
    subtitle: "Tropical climate year-round",
  },
  {
    id: "flight-time",
    icon: <Clock className="h-6 w-6 text-[#0E7490]" />,
    title: "Flight Duration",
    value: "Just 4 Hours",
    subtitle: "Direct flights from South India",
  },
  {
    id: "currency",
    icon: <DollarSign className="h-6 w-6 text-[#0E7490]" />,
    title: "Local Currency",
    value: "Malaysian Ringgit",
    subtitle: "1 MYR ≈ ₹18.5 INR (Economical)",
  },
];

export default function QuickSummary() {
  return (
    <section className="relative z-30 -mt-10 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/50 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-[#0E7490]/30 hover:shadow-[0_20px_40px_rgba(14,116,144,0.08)] shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
            >
              {/* Highlight background blob */}
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-cyan-50/50 transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-100/50 -z-10" />

              <div className="mb-4 inline-flex rounded-xl bg-cyan-50 p-3 text-[#0E7490] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#0E7490] group-hover:text-white">
                {stat.icon}
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                {stat.title}
              </h3>
              <p className="mt-1 text-xl font-bold text-neutral-800 sm:text-2xl tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-500">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
