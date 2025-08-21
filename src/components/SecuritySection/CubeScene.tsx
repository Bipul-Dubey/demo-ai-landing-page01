"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CubeScene({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Global halo to the right side area */}
      <div className="pointer-events-none absolute -inset-12 -z-10 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(50%_50%_at_30%_80%,rgba(236,72,153,0.16),transparent_60%)] blur-2xl" />

      {/* Floating small cubes */}
      <FloatingSmallCube
        className="absolute left-[12%] -top-2 sm:left-[28%] sm:-top-6"
        delay={0}
        size="sm"
      />
      <FloatingSmallCube
        className="absolute right-[6%] top-3 sm:right-[14%] sm:top-10"
        delay={0.4}
        size="sm"
      />
      <FloatingSmallCube
        className="absolute left-[20%] bottom-2 sm:left-[28%] sm:bottom-6"
        delay={0.8}
        size="sm"
      />
      <FloatingSmallCube
        className="absolute right-[10%] bottom-0 sm:right-[14%] sm:bottom-3"
        delay={1.1}
        size="sm"
      />

      {/* Main hero cube container */}
      <div className="relative mx-auto w-[320px] sm:w-[460px] md:w-[600px] lg:w-[720px]">
        <HeroCube />
      </div>
    </div>
  );
}

/* ---------- Hero cube ---------- */

function HeroCube() {
  return (
    <div className="relative aspect-[1/1]">
      {/* Outer pink/violet glow ring around big cube */}
      <div className="pointer-events-none absolute -inset-10 rounded-xl bg-[radial-gradient(60%_60%_at_70%_30%,rgba(168,85,247,0.35),transparent_65%),radial-gradient(60%_60%_at_30%_80%,rgba(236,72,153,0.3),transparent_65%)] blur-2xl" />

      {/* Ground glow */}
      <div className="pointer-events-none absolute left-1/2 top-[76%] h-[90px] w-[68%] -translate-x-1/2 rounded-[80px] bg-[radial-gradient(55%_50%_at_50%_50%,rgba(236,72,153,0.35),transparent_70%)] blur-2xl" />

      <div className="absolute inset-0 grid place-items-center">
        <div className="relative h-[78%] w-[78%]">
          {/* Top face */}
          <div
            className="
              absolute left-1/2 top-0 h-[42%] w-[62%] -translate-x-1/2
              origin-bottom -skew-x-12
              rounded-xl
              bg-[linear-gradient(180deg,rgba(99,102,241,0.95),rgba(236,72,153,0.92))]
              shadow-[0_40px_120px_rgba(139,92,246,0.35)]
            "
          >
            {/* top glyph (clock shield) */}
            <div className="absolute inset-0 grid place-items-center">
              <span className="h-9 w-9 rounded-full border-2 border-white/70 opacity-80" />
            </div>
          </div>

          {/* Left face */}
          <div
            className="
              absolute left-[6%] top-[30%] h-[60%] w-[46%]
              origin-right -skew-y-6
              rounded-xl border border-white/10
              bg-[linear-gradient(195deg,#141620,#0d0f16)]
              shadow-[inset_0_-80px_140px_rgba(99,102,241,0.28),0_30px_80px_rgba(0,0,0,0.6)]
            "
          >
            {/* shield glyph */}
            <div className="absolute inset-0 grid place-items-center">
              <span className="h-11 w-9 rounded-md border-2 border-white/40 opacity-70" />
            </div>
          </div>

          {/* Right face */}
          <div
            className="
              absolute right-[6%] top-[30%] h-[60%] w-[46%]
              origin-left skew-y-6
              rounded-xl border border-white/10
              bg-[linear-gradient(165deg,#141620,#0d0f16)]
              shadow-[inset_0_-80px_140px_rgba(236,72,153,0.32),0_30px_80px_rgba(0,0,0,0.6)]
            "
          >
            {/* check glyph */}
            <div className="absolute inset-0 grid place-items-center">
              <span className="h-11 w-9 rounded-md border-2 border-white/40 opacity-70" />
            </div>
          </div>

          {/* Luminous edge (center seam) */}
          <div className="pointer-events-none absolute left-1/2 top-[28%] h-[62%] w-[3px] -translate-x-1/2 bg-gradient-to-b from-white/85 via-fuchsia-200/80 to-transparent blur-[1px]" />
          {/* Subtle rim */}
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Small floating cubes ---------- */

function FloatingSmallCube({
  className,
  delay = 0,
  size = "sm",
}: {
  className?: string;
  delay?: number;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-12 w-12 sm:h-14 sm:w-14" : "h-16 w-16";
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ y: 0, opacity: 0.9 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3.6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <div className={cn("relative", dim)}>
        {/* glow */}
        <div className="absolute -inset-2 rounded-md bg-[radial-gradient(60%_60%_at_70%_30%,rgba(168,85,247,0.5),transparent_60%),radial-gradient(60%_60%_at_30%_70%,rgba(236,72,153,0.45),transparent_60%)] blur-md" />
        {/* cube body */}
        <div className="relative h-full w-full rounded-md border border-white/12 bg-gradient-to-br from-[#181a23] to-[#0f1017] shadow-[0_14px_30px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* top tint */}
          <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-violet-500/70 via-fuchsia-400/60 to-pink-500/70 mix-blend-screen opacity-75" />
          {/* tiny edge line */}
          <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-white/10" />
        </div>
      </div>
    </motion.div>
  );
}
