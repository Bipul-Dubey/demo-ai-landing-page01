"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "../ui/kibo-ui/marquee";

const tiles = Array.from({ length: 8 });

export function IntegrationRight({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-[400px] sm:w-[450px] md:w-[500px]",
        className
      )}
    >
      {/* Outer purple-pink halo */}
      <div className="absolute inset-0 rounded-full">
        <div
          className="
            absolute -inset-10 rounded-full 
            bg-[radial-gradient(60%_60%_at_20%_20%,rgba(139,92,246,0.3),transparent_70%),radial-gradient(60%_60%_at_80%_80%,rgba(236,72,153,0.3),transparent_70%)]
            blur-2xl 
            animate-spin-slow
          "
        />
      </div>

      {/* Orb container */}
      <div className="relative h-full w-full grid place-items-center overflow-hidden rounded-full border-2 border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-[0_0_30px_6px_rgba(139,92,246,0.2),0_0_60px_15px_rgba(236,72,153,0.15)]">
        {/* Dotted texture mask */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_66%,transparent_100%)] [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Two marquee rows */}
        <div className="flex flex-col gap-2">
          {/* Row 1 */}
          <Marquee className="h-24 sm:h-28">
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent speed={30}>
              {tiles.map((_, i) => (
                <MarqueeItem key={i} className="h-full w-16 sm:w-20">
                  <Tile />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>

          {/* Row 2 (reverse + different speed) */}
          <Marquee className="h-24 sm:h-28">
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent speed={25} direction="right">
              {tiles.map((_, i) => (
                <MarqueeItem key={i} className="h-full w-16 sm:w-20">
                  <Tile />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

/* A single icon tile with soft glow and inner highlight */
function Tile() {
  return (
    <div className="group relative h-16 sm:h-[74px] rounded-2xl bg-[#0d0f16] border border-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      {/* subtle top highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/6 to-transparent" />
      {/* inner drop shadow like the image cards */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_rgba(0,0,0,0.45)]" />

      {/* Center icon placeholder — replace with your SVG */}
      <div className="relative z-[1] flex h-full items-center justify-center">
        <span className="h-4 w-4 rounded-md bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.65)] group-hover:shadow-[0_0_28px_rgba(167,139,250,0.9)] transition-shadow" />
      </div>
    </div>
  );
}
