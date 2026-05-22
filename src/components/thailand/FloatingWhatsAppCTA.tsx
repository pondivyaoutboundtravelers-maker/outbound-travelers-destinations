"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

export default function FloatingWhatsAppCTA() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show the greeting bubble after a 4-second delay
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    const text = encodeURIComponent(
      "Hi Outbound Travelers! I am looking at your premium Thailand Tour Packages. Could you help me plan my customized trip?"
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="pointer-events-auto max-w-[280px] bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-2xl relative flex items-start gap-3"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowBubble(false)}
              className="absolute top-2 right-2 text-neutral-500 hover:text-white transition-colors"
            >
              <X className="h-3 w-3" />
            </button>

            {/* Bubble Message */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0891B2]">
                Conciege Online
              </span>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Hi there! Need a fast custom itinerary or pricing for Thailand? Let's chat on WhatsApp.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={handleOpen}
        className="pointer-events-auto relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
        <MessageSquare className="h-6 w-6 fill-current" />
      </motion.button>
    </div>
  );
}
