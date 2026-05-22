import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      {/* 1. Hero Skeleton */}
      <div className="relative h-[60svh] min-h-[500px] w-full bg-neutral-900 overflow-hidden flex flex-col justify-end p-8 md:p-16">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-850/50 to-transparent -translate-x-full animate-shimmer" />

        <div className="max-w-4xl mx-auto w-full space-y-4">
          <div className="h-6 w-32 rounded-full bg-neutral-800 animate-pulse" />
          <div className="h-16 w-3/4 rounded-2xl bg-neutral-800 animate-pulse" />
          <div className="h-6 w-1/2 rounded-xl bg-neutral-800 animate-pulse" />
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-48 rounded-full bg-[#0E7490]/50 animate-pulse" />
            <div className="h-12 w-32 rounded-full bg-neutral-800 animate-pulse" />
          </div>
        </div>
      </div>

      {/* 2. Content Grid Skeleton */}
      <div className="max-w-7xl mx-auto w-full px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 space-y-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent -translate-x-full animate-shimmer" />
            <div className="h-12 w-12 rounded-2xl bg-neutral-800 animate-pulse" />
            <div className="h-6 w-2/3 rounded-lg bg-neutral-800 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-neutral-800 animate-pulse" />
              <div className="h-4 w-full rounded bg-neutral-800 animate-pulse" />
              <div className="h-4 w-5/6 rounded bg-neutral-800 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
