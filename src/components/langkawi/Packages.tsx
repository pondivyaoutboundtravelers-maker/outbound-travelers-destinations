"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, CheckCircle2, MessageCircle } from "lucide-react";
import { langkawiData } from "@/data/langkawi";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";

export default function Packages() {
  return (
    <section id="packages-section" className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Premium Stays & Cruises Included
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
            Curated Langkawi <span className="text-amber-500 italic font-normal">Packages</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            All tours include premium beachfront/rainforest lodging, private transfers, and curated excursions. Pricing is fully customizable to your dates and options.
          </p>
        </div>

        {/* Dynamic Package Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {langkawiData.packages.map((pkg, idx) => {
            const waUrl = buildWhatsAppUrl(langkawiData.whatsapp.number, pkg.whatsappMessage);

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white/[0.02] border border-white/5 hover:border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md transition-colors"
              >
                {/* Header Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-amber-400">
                    {pkg.duration}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-neutral-400 pt-1">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-amber-500" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5 text-amber-500" />
                          <span>{pkg.idealFor}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights Checklist */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Highlights Included
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 text-xs text-neutral-300">
                        {pkg.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-amber-500/80 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Section */}
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-neutral-400">Starting Price</span>
                      <span className="text-lg font-bold text-amber-400">{pkg.price}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => window.dispatchEvent(new CustomEvent("openLeadForm"))}
                        className="py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors font-bold text-xs uppercase tracking-wider text-center"
                      >
                        Customize It
                      </button>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 rounded-full border border-amber-500/30 hover:bg-amber-500/10 text-amber-400 transition-all font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="h-4 w-4 fill-current" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
