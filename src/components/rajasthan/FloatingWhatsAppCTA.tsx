"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Sparkles } from "lucide-react";

export default function FloatingWhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Outbound Travelers! I am visiting the Rajasthan tour page and want to inquire about custom palace circuits."
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={handleWhatsApp}
            className="relative group flex items-center gap-3.5 bg-white hover:bg-[#5B2147] border border-[#D6B370]/40 text-[#5B2147] hover:text-white px-5 py-4 rounded-full shadow-lg transition-all duration-300 active:scale-95"
          >
            {/* pulse highlight */}
            <div className="absolute inset-0 rounded-full border border-[#D6B370]/20 animate-ping opacity-60 pointer-events-none" />

            <MessageSquare className="h-5 w-5 fill-current shrink-0 text-[#5B2147] group-hover:text-white transition-colors" />

            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-[7px] uppercase font-bold tracking-widest text-[#D6B370] group-hover:text-white/80">
                Royal Concierge
              </span>
              <span className="text-[10px] font-bold tracking-wide mt-0.5">
                Online Chat
              </span>
            </div>
            
            <div className="p-1 rounded-full bg-[#FAF7F2] text-[#5B2147] group-hover:bg-red-800/40 shrink-0 border border-[#D6B370]/15">
              <Sparkles className="h-3 w-3 animate-pulse text-[#5B2147] group-hover:text-white" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
