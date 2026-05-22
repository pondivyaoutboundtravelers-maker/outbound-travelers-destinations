import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-900/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#0E7490]/10 blur-3xl" />

      <div className="max-w-xl mx-auto space-y-8">
        {/* Animated Compass Icon */}
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-950/50 border border-cyan-800/30 text-cyan-400 animate-bounce-slow">
          <Compass className="h-10 w-10 animate-spin-slow" />
        </div>

        <div className="space-y-3">
          <h1 className="font-serif text-5xl font-extrabold tracking-tight sm:text-6xl text-white">
            Lost in <span className="text-[#0E7490] italic font-normal">Transit?</span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            The destination you are looking for is not in our registry. We apologize for the inconvenience!
          </p>
        </div>

        {/* Suggest active routes */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
            Popular Active Destinations
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Kashmir", href: "/kashmir" },
              { name: "Sikkim", href: "/sikkim" },
              { name: "Meghalaya", href: "/meghalaya" },
              { name: "Malaysia", href: "/malaysia" },
            ].map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-[#0E7490] border border-white/5 transition-all text-sm font-semibold group"
              >
                <span>{dest.name}</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-950 px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-lg"
          >
            <Home className="h-4 w-4" />
            <span>Go Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
