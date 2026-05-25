"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Sikkim",
    image: "/images/meghalaya/shillong.jpg", // Using existing placeholder
    link: "/sikkim",
    tagline: "The Himalayan Kingdom",
  },
  {
    name: "Kashmir",
    image: "/images/meghalaya/waterfall.jpg", // Using existing placeholder
    link: "/kashmir",
    tagline: "Paradise on Earth",
  },
  {
    name: "Assam",
    image: "/images/meghalaya/kaziranga.jpg", // Using existing placeholder
    link: "/assam",
    tagline: "Land of the One-Horned Rhino",
  },
];

export default function RelatedDestinations() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2 font-serif text-3xl font-medium tracking-tight text-neutral-900 md:text-5xl"
            >
              Explore <span className="italic text-[#065F46]">More</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-600"
            >
              Discover other incredible destinations we offer.
            </motion.p>
          </div>
          
          <Link href="/" className="group flex items-center gap-2 font-medium text-[#065F46]">
            View All Destinations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, index) => (
            <Link key={dest.name} href={dest.link}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="mb-1 font-serif text-2xl font-medium text-white">{dest.name}</h3>
                  <p className="text-sm font-medium text-neutral-300">{dest.tagline}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
