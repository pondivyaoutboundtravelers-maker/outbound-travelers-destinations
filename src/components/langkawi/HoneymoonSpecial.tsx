"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Heart, Ship, Home, Compass } from "lucide-react";

export default function HoneymoonSpecial() {
  const cards = [
    {
      icon: <Coffee className="h-6 w-6 text-amber-400" />,
      title: "Floating Breakfast",
      desc: "Begin your mornings with a private tray of gourmet delicacies floating in your resort's plunge pool.",
    },
    {
      icon: <Heart className="h-6 w-6 text-amber-400" />,
      title: "Couple Spa Rituals",
      desc: "Traditional Malay massage with local herbs and essential oils in a private rainforest sanctuary pavilion.",
    },
    {
      icon: <Ship className="h-6 w-6 text-amber-400" />,
      title: "Catamaran Sunset Cruise",
      desc: "A romantic sail into the sunset with saltwater jacuzzi nets, free-flowing cocktails, and fine barbecue.",
    },
    {
      icon: <Home className="h-6 w-6 text-amber-400" />,
      title: "Beachfront Villa",
      desc: "Sleep with the sound of the ocean waves. Wake up to direct private beach access and pristine views.",
    },
    {
      icon: <Compass className="h-6 w-6 text-amber-400" />,
      title: "Private Island Hopping",
      desc: "Custom speedboat tours visiting hidden bays, freshwater lakes, and remote uninhabited beaches.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-amber-500"
          >
            Signature Honeymoon Perks
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Curated Romantic <span className="text-amber-500 italic font-normal">Moments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm md:text-base leading-relaxed"
          >
            Every Langkawi honeymoon is designed from scratch, layering premium details that elevate your celebration from a simple trip to an unforgettable memory.
          </motion.p>
        </div>

        {/* Responsive Grid of Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white/[0.03] border border-white/5 hover:border-amber-500/30 rounded-3xl p-6 flex flex-col justify-between space-y-6 backdrop-blur-md transition-colors"
            >
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                {card.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-white">{card.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
