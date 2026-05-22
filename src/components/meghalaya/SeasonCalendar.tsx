"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudRain, Sun, Snowflake } from "lucide-react";

const seasons = [
  {
    id: "summer",
    name: "Summer (Mar - May)",
    icon: <Sun className="h-6 w-6" />,
    description: "Pleasant weather, ideal for sightseeing and adventure activities. Average temperature 15°C to 25°C.",
    highlights: ["Clear skies", "Comfortable trekking", "Festivals"],
    bgClass: "bg-orange-50",
    textClass: "text-orange-600",
    borderClass: "border-orange-200",
  },
  {
    id: "monsoon",
    name: "Monsoon (Jun - Sep)",
    icon: <CloudRain className="h-6 w-6" />,
    description: "Experience the magic of the 'Abode of Clouds'. Lush greenery and roaring waterfalls.",
    highlights: ["Spectacular waterfalls", "Misty landscapes", "Romantic ambiance"],
    bgClass: "bg-blue-50",
    textClass: "text-blue-600",
    borderClass: "border-blue-200",
  },
  {
    id: "winter",
    name: "Winter (Oct - Feb)",
    icon: <Snowflake className="h-6 w-6" />,
    description: "Chilly and clear. Perfect for exploring root bridges and caves without the rain.",
    highlights: ["Cherry blossoms (Nov)", "Clear views", "Pleasant days"],
    bgClass: "bg-teal-50",
    textClass: "text-teal-600",
    borderClass: "border-teal-200",
  },
];

export default function SeasonCalendar() {
  const [activeSeason, setActiveSeason] = useState(seasons[0].id);

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-3xl font-medium tracking-tight text-neutral-900 md:text-5xl"
          >
            When to <span className="italic text-[#065F46]">Visit</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-neutral-600"
          >
            Meghalaya transforms with the seasons. Choose the time that aligns with your travel desires.
          </motion.p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Season Selector Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => setActiveSeason(season.id)}
                className={`flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                  activeSeason === season.id
                    ? `${season.bgClass} ${season.textClass} ${season.borderClass} border shadow-sm`
                    : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"
                }`}
              >
                {season.icon}
                {season.name}
              </button>
            ))}
          </div>

          {/* Season Details */}
          <div className="relative min-h-[250px] overflow-hidden rounded-3xl border border-neutral-100 bg-white p-8 shadow-xl sm:p-12">
            <AnimatePresence mode="wait">
              {seasons.map(
                (season) =>
                  activeSeason === season.id && (
                    <motion.div
                      key={season.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-8 md:flex-row md:items-center"
                    >
                      <div className="flex-1">
                        <h3 className={`mb-4 font-serif text-3xl font-bold ${season.textClass}`}>
                          {season.name.split(" ")[0]}
                        </h3>
                        <p className="mb-6 text-lg leading-relaxed text-neutral-600">
                          {season.description}
                        </p>
                        <ul className="space-y-3">
                          {season.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-neutral-700">
                              <div className={`h-2 w-2 rounded-full ${season.bgClass.replace("50", "400")}`} />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Visual Graphic Representation */}
                      <div className="hidden flex-1 justify-center md:flex">
                        <div className={`flex h-48 w-48 items-center justify-center rounded-full ${season.bgClass}`}>
                          <div className={season.textClass}>
                            {React.cloneElement(season.icon as React.ReactElement, { className: "w-24 h-24" })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
