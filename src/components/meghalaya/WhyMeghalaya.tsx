"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Unspoiled Nature",
    description: "Explore lush green valleys, crystal clear rivers, and stunning waterfalls untouched by commercial tourism.",
  },
  {
    title: "Rich Indigenous Culture",
    description: "Immerse yourself in the warm hospitality and unique traditions of the Khasi, Jaintia, and Garo tribes.",
  },
  {
    title: "Living Architecture",
    description: "Walk across the incredible living root bridges, a testament to harmony between humans and nature.",
  },
  {
    title: "Adventure Awaits",
    description: "From caving in Mawsmai to boating in Dawki, Meghalaya offers endless thrills for the adventurous soul.",
  },
];

export default function WhyMeghalaya() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 font-serif text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl"
            >
              Why Journey to <span className="italic text-[#065F46]">Meghalaya?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8 max-w-lg text-lg text-neutral-600"
            >
              Meghalaya, the &quot;Abode of Clouds,&quot; is a hidden gem in Northeast India. It&apos;s a destination for those who seek the extraordinary, far away from crowded tourist trails.
            </motion.p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#065F46]" />
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-neutral-900">{reason.title}</h3>
                    <p className="text-neutral-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Abstract/Visual representation */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#065F46] to-emerald-300 opacity-20" />
              <img
                src="/images/meghalaya/shillong.jpg"
                alt="Meghalaya Culture"
                className="h-full w-full object-cover"
              />
              
              {/* Glassmorphism Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/40 p-6 backdrop-blur-md">
                <p className="font-serif text-2xl font-medium text-neutral-900">
                  &quot;The most beautiful place I have ever visited in India.&quot;
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[#065F46]">
                  - Conde Nast Traveler
                </p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-emerald-100 blur-3xl" />
            <div className="absolute -top-8 -left-8 -z-10 h-64 w-64 rounded-full bg-teal-50 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
