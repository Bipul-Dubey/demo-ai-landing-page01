// components/ExperienceCard.tsx
"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

type CardProps = {
  title: string;
  desc?: string;
  className?: string;
  children?: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
};

export function GlowCard({
  title,
  desc,
  className,
  children,
  imageUrl,
  imageAlt,
}: CardProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* rotating glow ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-[1px] rounded-2xl overflow-hidden"
      >
        <div
          className="absolute -inset-[120%] animate-spin-slow bg-[conic-gradient(from_0deg,rgba(255,0,153,0.55)_0deg,rgba(99,102,241,0.55)_180deg,rgba(255,0,153,0.55)_360deg)]"
          style={{ animationDuration: "3s" }}
        />
      </div>

      <div
        className={cn(
          "relative rounded-2xl border border-white/10",
          "[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]",
          "shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] h-80"
        )}
      >
        <div className="rounded-2xl bg-[#0b0d10] text-white/90 flex flex-col h-full">
          {/* Text block */}
          <div className="p-4 sm:p-5">
            {/* Title: 1 line, ellipsis */}
            <h3 className="font-semibold text-lg truncate">{title}</h3>

            {/* Desc: 2 lines, ellipsis */}
            {desc && (
              <p className="mt-1 text-sm text-zinc-300/85 line-clamp-2">
                {desc}
              </p>
            )}

            {children && <div className="mt-3">{children}</div>}
          </div>

          {/* Media fills remaining height */}
          <div className="relative flex-1 overflow-hidden rounded-b-2xl">
            {imageUrl ? (
              <>
                <Image
                  src={imageUrl}
                  alt={imageAlt || title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 ">
                <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_15%_0%,rgba(99,102,241,0.30)_0%,rgba(99,102,241,0)_60%),radial-gradient(100%_80%_at_85%_100%,rgba(255,145,102,0.28)_0%,rgba(255,145,102,0)_60%)]" />
                <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="absolute inset-0 [mask-image:linear-gradient(to_top,black_70%,transparent)] bg-black/25" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const container = {
  hidden: { opacity: 1 }, // keep parent visible
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function ExperienceCard() {
  return (
    <section className="w-full">
      <motion.div
        className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={item} className="lg:col-span-2">
          <GlowCard
            title="Forecasting"
            desc="AI-powered demand projections with seasonality and promotions."
          />
        </motion.div>

        <motion.div variants={item} className="lg:col-span-2">
          <GlowCard
            title="Replenishment"
            desc="Automated reorder points to prevent stockouts."
          />
        </motion.div>

        <motion.div variants={item} className="lg:col-span-2">
          <GlowCard
            title="Optimization"
            desc="Reduce excess inventory while keeping service levels high."
          />
        </motion.div>

        {/* Row 2 (two halves, each 3/6) */}
        <motion.div variants={item} className="lg:col-span-3">
          <GlowCard
            title="Supplier Collaboration"
            desc="Share live plans and confirmations with vendors."
          />
        </motion.div>

        <motion.div variants={item} className="lg:col-span-3">
          <GlowCard
            title="Analytics"
            desc="Root-cause insights, ABC segmentation, and lead-time risk."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
