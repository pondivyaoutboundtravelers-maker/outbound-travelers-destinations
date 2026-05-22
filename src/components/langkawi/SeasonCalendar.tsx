"use client";

import React, { useState } from "react";
import { Calendar, Sun, CloudRain } from "lucide-react";
import { langkawiData } from "@/data/langkawi";

export default function SeasonCalendar() {
  const [selectedMonth, setSelectedMonth] = useState<string>("Jan");

  const ratingColors: Record<string, string> = {
    best: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    good: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    okay: "bg-neutral-500/20 text-neutral-400 border-neutral-500/30",
  };

  const selectedData = langkawiData.months.find((m) => m.month === selectedMonth);

  return (
    <section className="py-24 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left: Info */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>Weather Guide</span>
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Best Time to Visit <span className="text-amber-500 italic font-normal">Langkawi</span>
            </h2>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Langkawi enjoys a tropical climate with dry sunny days from November to April and tropical showers peaking in September-October. Explore monthly notes here.
            </p>

            {/* Quick Season cards */}
            <div className="space-y-4 pt-4">
              {langkawiData.seasons.map((season) => (
                <div
                  key={season.id}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-4 items-center"
                >
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                    {season.id === "dry" ? <Sun className="h-5 w-5" /> : <CloudRain className="h-5 w-5" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{season.label}</h4>
                    <p className="text-neutral-400 text-xs tracking-wider">{season.months} · {season.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Months Calendar Selector */}
          <div className="lg:col-span-2 space-y-8 bg-neutral-900 border border-white/5 rounded-3xl p-8 backdrop-blur-md">
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {langkawiData.months.map((m) => (
                <button
                  key={m.month}
                  onClick={() => setSelectedMonth(m.month)}
                  className={`py-4 rounded-2xl text-xs font-bold transition-all border flex flex-col items-center justify-center gap-2 ${
                    selectedMonth === m.month
                      ? "bg-amber-500 border-amber-600 text-black shadow-lg"
                      : "bg-white/[0.02] border-white/5 text-neutral-400 hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{m.month}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full border uppercase tracking-wider font-extrabold ${
                    selectedMonth === m.month
                      ? "bg-black/10 text-black border-black/20"
                      : ratingColors[m.rating]
                  }`}>
                    {m.rating}
                  </span>
                </button>
              ))}
            </div>

            {/* Display Selected Month Notes */}
            {selectedData && (
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">{selectedData.month} weather notes</h4>
                  <span className={`text-xs px-3 py-1 rounded-full border uppercase font-bold tracking-wider ${ratingColors[selectedData.rating]}`}>
                    {selectedData.rating} month rating
                  </span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {selectedData.note}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
