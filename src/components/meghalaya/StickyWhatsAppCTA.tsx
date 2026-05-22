"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function StickyWhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
  const message = "Hi, I am interested in the Meghalaya Tour Packages. Can you share more details?";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10"
        >
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
            
            {/* Ping animation effect */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"></span>

            {/* Tooltip on hover */}
            <span className="absolute right-full top-1/2 mr-4 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 shadow-md opacity-0 transition-opacity group-hover:opacity-100 hidden md:block">
              Chat with Expert
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
