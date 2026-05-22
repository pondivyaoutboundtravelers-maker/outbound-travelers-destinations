"use client";

import React from "react";
import { ShieldCheck, Award, Crown } from "lucide-react";
import { langkawiData } from "@/data/langkawi";

export default function HotelTierComparison() {
  const iconMap: Record<number, React.ReactNode> = {
    0: <ShieldCheck className="h-6 w-6 text-amber-500" />,
    1: <Award className="h-6 w-6 text-amber-500" />,
    2: <Crown className="h-6 w-6 text-amber-500" />,
  };

  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Resort Selection Options
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
            Curated Resort <span className="text-amber-500 italic font-normal">Tiers</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            We partner with the finest resorts across Langkawi to guarantee smooth beach access, top-tier dining, and unmatched tropical luxury.
          </p>
        </div>

        {/* 3-Column Stay Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {langkawiData.hotelTiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-white/[0.02] border border-white/5 hover:border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between space-y-8 backdrop-blur-md transition-colors group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    {iconMap[idx]}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {tier.tier}
                  </h3>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-baseline justify-between">
                <span className="text-xs text-neutral-400">Average Rate</span>
                <span className="text-base font-semibold text-amber-400">
                  {tier.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
