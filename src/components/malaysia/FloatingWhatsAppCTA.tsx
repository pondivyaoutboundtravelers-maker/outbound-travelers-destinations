"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";

export default function FloatingWhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hi Outbound Travelers! I am visiting your Malaysia landing page and would love to plan a customized trip. Could you please share some luxury/premium package details?"
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <>
      {/* 1. Desktop Floating WhatsApp Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 hidden md:block"
          >
            <button
              onClick={handleWhatsAppClick}
              className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-emerald-700"
            >
              {/* Ping Animation Indicator */}
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 -z-10" />

              {/* Tooltip */}
              <span className="absolute right-16 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl backdrop-blur-md pointer-events-none whitespace-nowrap shadow-lg">
                Chat with 24/7 Ground Team
              </span>

              <MessageSquare className="h-6 w-6 fill-current" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Mobile Bottom Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md p-3.5 flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.06)]">
        <button
          onClick={() => {
            window.location.href = "tel:+919876543210";
          }}
          className="flex-1 flex items-center justify-center gap-2 border border-neutral-300 rounded-full py-3.5 text-xs font-extrabold uppercase tracking-wider text-neutral-700 bg-white"
        >
          <Phone className="h-4.5 w-4.5 text-neutral-500" />
          <span>Call Desk</span>
        </button>

        <button
          onClick={handleWhatsAppClick}
          className="flex-[2] flex items-center justify-center gap-2 rounded-full py-3.5 text-xs font-extrabold uppercase tracking-wider bg-emerald-600 text-white shadow-md shadow-emerald-950/15"
        >
          <MessageSquare className="h-4.5 w-4.5 fill-current" />
          <span>Plan on WhatsApp</span>
        </button>
      </div>
    </>
  );
}
