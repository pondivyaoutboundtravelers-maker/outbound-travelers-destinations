"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../../data/meghalaya";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-neutral-900 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Heading */}
          <div className="flex flex-col justify-center lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 font-serif text-4xl font-medium tracking-tight md:text-5xl">
                Traveler <span className="italic text-emerald-400">Stories</span>
              </h2>
              <p className="mb-8 text-lg text-neutral-400">
                Don&apos;t just take our word for it. Read about the unforgettable experiences of those who have traveled with us.
              </p>
              
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-neutral-900"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-neutral-900"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="relative lg:col-span-3">
            <div className="absolute -left-4 -top-8 text-emerald-500/20 md:-left-8 md:-top-12">
              <Quote className="h-24 w-24 md:h-32 md:w-32" />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-12"
              >
                <div className="mb-6 flex gap-1 text-emerald-400">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                
                <p className="mb-8 font-serif text-xl leading-relaxed sm:text-2xl md:text-3xl">
                  &quot;{currentTestimonial.text}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{currentTestimonial.name}</h4>
                    <p className="text-sm text-neutral-400">{currentTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
