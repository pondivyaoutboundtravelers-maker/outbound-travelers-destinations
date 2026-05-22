"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-xl mx-auto space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex p-4 bg-neutral-900 border border-neutral-800 rounded-full text-cyan-400"
        >
          <Compass className="h-16 w-16 animate-pulse" />
        </motion.div>

        <div className="space-y-3">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight"
          >
            Destination Not Found
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 font-light leading-relaxed"
          >
            We couldn't find the custom packages for this specific paradise yet. Our ground team is always exploring new luxury routes.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-cyan-600/20 active:scale-95"
          >
            <Home className="h-4 w-4" />
            <span>Go back Home</span>
          </Link>
          <a
            href="https://wa.me/919876543210?text=Hi%20Outbound%20Travelers%2C%20I%20am%20looking%20for%20custom%20tour%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300 active:scale-95"
          >
            <Phone className="h-4 w-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
