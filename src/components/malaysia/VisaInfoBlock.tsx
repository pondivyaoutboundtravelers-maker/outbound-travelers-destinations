"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Info, FileText, CheckCircle2 } from "lucide-react";

export default function VisaInfoBlock() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
      <div className="absolute left-10 bottom-0 -z-10 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 border border-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Smooth Entry Policy</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Hassle-Free <span className="italic text-[#0E7490]">Visa-Free Entry</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed"
          >
            Indian passport holders can visit Malaysia with **Zero Visa Fee** and **Zero Pre-Application** for up to 30 days. Perfect for quick family plans and last-minute honeymoons.
          </motion.p>
        </div>

        <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-200/60 bg-white p-6 shadow-xl sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left: Interactive MDAC Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-[#0E7490]">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">1. Register Online (MDAC)</h3>
                  <p className="mt-1 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    You only need to submit the **Malaysia Digital Arrival Card (MDAC)** online within 3 days before your departure. This is 100% free and approved instantly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-[#0E7490]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">2. Immigration Checklist</h3>
                  <p className="mt-1 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    At immigration counter in Kuala Lumpur, simply present:
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-neutral-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0E7490] shrink-0" />
                      <span>Passport (6mo+ validity)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0E7490] shrink-0" />
                      <span>MDAC Confirmed PDF</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0E7490] shrink-0" />
                      <span>Confirmed Return Ticket</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0E7490] shrink-0" />
                      <span>Confirmed Hotel Voucher</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Immersive Callout Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-[#0E7490] to-cyan-600 p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-4 -translate-y-4 bg-white/10 rounded-full blur-xl" />
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 shrink-0 text-cyan-200 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold tracking-tight">Our Chauffeurs Guide You</h4>
                    <p className="mt-2 text-xs sm:text-sm text-cyan-50/90 leading-relaxed">
                      Outbound Travelers handles your MDAC registrations. Our 24/7 airport assistant is available on WhatsApp if you have any questions at immigration.
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider text-cyan-200">
                      <span>Visa Fees</span>
                      <span className="text-white text-sm bg-white/15 px-2.5 py-0.5 rounded-full">₹0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
