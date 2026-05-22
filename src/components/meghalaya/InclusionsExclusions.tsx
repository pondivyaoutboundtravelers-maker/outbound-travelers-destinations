"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const inclusions = [
  "Accommodation in selected category of hotels.",
  "Daily breakfast at the hotel.",
  "Exclusive AC vehicle for transfers & sightseeing.",
  "All toll taxes, parking fees, and driver allowances.",
  "Permits for restricted areas (if required).",
  "Assistance at arrival and departure points.",
  "24/7 on-ground support.",
];

const exclusions = [
  "Airfare or Train fare to/from Guwahati.",
  "Lunch and Dinner (unless specified).",
  "Entry fees to monuments, parks, and caves.",
  "Camera fees and personal expenses.",
  "Boating charges at Dawki or Umiam Lake.",
  "Any items not mentioned in the 'Inclusions' section.",
  "Travel insurance and GST.",
];

export default function InclusionsExclusions() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-3xl font-medium tracking-tight text-neutral-900 md:text-5xl"
          >
            What&apos;s <span className="italic text-[#065F46]">Included</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-neutral-600"
          >
            Transparent pricing with no hidden surprises.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Inclusions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-xl shadow-emerald-900/5 sm:p-10"
          >
            <h3 className="mb-8 flex items-center gap-3 font-serif text-2xl font-bold text-neutral-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              Inclusions
            </h3>
            <ul className="space-y-4">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Exclusions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-red-100 bg-white p-8 shadow-xl shadow-red-900/5 sm:p-10"
          >
            <h3 className="mb-8 flex items-center gap-3 font-serif text-2xl font-bold text-neutral-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-500">
                <XCircle className="h-6 w-6" />
              </span>
              Exclusions
            </h3>
            <ul className="space-y-4">
              {exclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-700">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
