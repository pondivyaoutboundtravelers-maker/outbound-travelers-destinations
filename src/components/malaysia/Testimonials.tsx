"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { testimonials } from "../../data/malaysia";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7490]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Traveler Experiences</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Memories Shared By <span className="italic text-[#0E7490]">Our Travelers</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-light"
          >
            Hear from families, honeymoon couples, and first-time international travelers who explored Malaysia with us.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          {/* Main Slide Carousel container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-neutral-50/70 border border-neutral-200/50 rounded-3xl p-6 sm:p-10 lg:p-12 text-center shadow-md relative"
            >
              <div className="flex justify-center gap-1 text-amber-400 mb-6">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-neutral-800 leading-relaxed italic mb-8">
                &ldquo;{activeTestimonial.text}&rdquo;
              </blockquote>

              <div className="border-t border-neutral-200/60 pt-6">
                <span className="text-sm font-bold uppercase tracking-wider text-[#0E7490] bg-[#0E7490]/10 px-3.5 py-1 rounded-full mb-2 inline-block">
                  {activeTestimonial.tag}
                </span>
                <cite className="block text-base font-extrabold text-neutral-900 not-italic tracking-tight mt-2">
                  {activeTestimonial.name}
                </cite>
                <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-1">
                  {activeTestimonial.role} &bull; {activeTestimonial.location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8 sm:absolute sm:inset-y-0 sm:left-0 sm:right-0 sm:mt-0 sm:flex sm:items-center sm:justify-between sm:pointer-events-none">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-neutral-200 text-[#0E7490] hover:bg-neutral-50 shadow-md transition-all duration-300 active:scale-90 pointer-events-auto sm:-translate-x-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-neutral-200 text-[#0E7490] hover:bg-neutral-50 shadow-md transition-all duration-300 active:scale-90 pointer-events-auto sm:translate-x-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
