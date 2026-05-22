"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "Premium",
    description: "Comfortable 4-star boutique hotels with excellent amenities.",
    price: "₹4,500 - ₹6,500",
    features: [
      "Well-appointed AC rooms",
      "Complimentary breakfast",
      "City center or scenic locations",
      "In-house multi-cuisine restaurant",
      "Standard room amenities",
    ],
    recommended: false,
  },
  {
    name: "Luxury",
    description: "Exclusive 5-star resorts offering world-class hospitality.",
    price: "₹8,500 - ₹15,000+",
    features: [
      "Spacious suites with views",
      "Curated dining experiences",
      "Spa and wellness center",
      "Private balconies",
      "Personalized concierge service",
    ],
    recommended: true,
  },
];

export default function HotelTierComparison() {
  return (
    <section className="bg-neutral-900 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-3xl font-medium tracking-tight text-white md:text-5xl"
          >
            Where You&apos;ll <span className="italic text-emerald-400">Stay</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-neutral-400"
          >
            Choose the level of comfort that suits your style. We partner exclusively with the best properties in Meghalaya.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col rounded-3xl border p-8 md:p-10 ${
                tier.recommended
                  ? "border-emerald-500/50 bg-emerald-950/20 shadow-2xl shadow-emerald-900/20"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Highly Recommended
                </div>
              )}

              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-white">{tier.name}</h3>
                <div className="flex text-emerald-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  {tier.name === "Luxury" && <Star className="h-5 w-5 fill-current" />}
                </div>
              </div>

              <p className="mb-6 text-sm text-neutral-400">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-3xl font-bold text-white">{tier.price}</span>
                <span className="text-sm text-neutral-500"> / night</span>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300">
                    <Check className={`mt-0.5 h-5 w-5 shrink-0 ${tier.recommended ? "text-emerald-400" : "text-neutral-500"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-xl py-4 text-sm font-semibold transition-all ${
                  tier.recommended
                    ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg hover:shadow-emerald-600/25"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                View {tier.name} Properties
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
