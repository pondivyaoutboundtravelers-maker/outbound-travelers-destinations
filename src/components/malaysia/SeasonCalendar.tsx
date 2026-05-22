"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Sun, CloudRain, Star } from "lucide-react";

const seasons = [
  {
    id: "peak",
    title: "Dry Season (Peak)",
    months: "November to April",
    icon: <Sun className="h-6 w-6 text-amber-500" />,
    rating: "5/5 - Perfect",
    description: "The absolute best window for beach lovers. Calm turquoise seas, minimal rainfall, and clear bright skies. Perfect for Langkawi watersports and Penang food walks.",
    highlights: ["Langkawi sunset cruises", "Outdoor theme parks in Genting", "Clear visibility for snorkeling"],
  },
  {
    id: "shoulder",
    title: "Shoulder Season",
    months: "May to July",
    icon: <Calendar className="h-6 w-6 text-cyan-500" />,
    rating: "4/5 - Excellent Value",
    description: "Great weather pattern with lower luxury hotel rates. Crowds are highly sparse, meaning you have the iconic monuments like Petronas to yourself without long queues.",
    highlights: ["Slightly cheaper flight rates", "Lesser booking delays", "Perfect for indoor shopping hubs"],
  },
  {
    id: "monsoon",
    title: "Monsoon Season",
    months: "August to October",
    icon: <CloudRain className="h-6 w-6 text-blue-500" />,
    rating: "3.5/5 - Economical Escape",
    description: "Tropical showers are typically short, rapid 1-hour afternoon bursts followed by bright warm sunshine. Sightseeing is rarely delayed or affected, and nature is extremely lush green.",
    highlights: ["Ultra-low hotel & villa pricing", "Lush rainforests & waterfalls", "High volume shopping discounts"],
  },
];

export default function SeasonCalendar() {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 border border-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <Calendar className="h-4 w-4" />
            <span>Seasonality Guide</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Best Time to <span className="italic text-[#0E7490]">Visit Malaysia</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-light"
          >
            Malaysia is a tropical paradise year-round. Select a season below to view details and recommendations.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Season Selector Tabs */}
          <div className="grid grid-cols-3 gap-2 p-1.5 bg-neutral-200/50 rounded-2xl border border-neutral-200">
            {seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => setSelectedSeason(season)}
                className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedSeason.id === season.id
                    ? "bg-[#0E7490] text-white shadow-md"
                    : "text-neutral-600 hover:text-neutral-800"
                }`}
              >
                <span className="hidden sm:inline">{season.title}</span>
                <span className="sm:hidden">{season.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Season Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSeason.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-neutral-200/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-neutral-50 rounded-2xl">
                    {selectedSeason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 leading-tight">{selectedSeason.title}</h3>
                    <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider block mt-1">{selectedSeason.months}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-amber-500 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">{selectedSeason.rating}</span>
                </div>
              </div>

              <p className="text-neutral-600 leading-relaxed font-light text-sm sm:text-base mb-8">
                {selectedSeason.description}
              </p>

              <div className="border-t border-neutral-100 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">Recommended Activities</h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  {selectedSeason.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-neutral-700 bg-neutral-50/80 p-3.5 rounded-xl border border-neutral-100">
                      <div className="h-2 w-2 shrink-0 rounded-full bg-[#0E7490]" />
                      <span className="text-xs sm:text-sm font-semibold">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
