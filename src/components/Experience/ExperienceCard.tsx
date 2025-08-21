// components/ExperienceCard.tsx
"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

type CardProps = {
  title: string;
  desc?: string;
  className?: string;
  children?: React.ReactNode;
};

function GlowCard({ title, desc, className, children }: CardProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* rotating glow ring */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute -inset-[1px] rounded-2xl
          overflow-hidden
        "
      >
        <div
          className="
            absolute -inset-[120%] animate-spin-slow
            bg-[conic-gradient(from_0deg,rgba(255,0,153,0.55)_0deg,rgba(99,102,241,0.55)_180deg,rgba(255,0,153,0.55)_360deg)]            "
          style={{ animationDuration: "3s" }}
        />
      </div>

      {/* card body with mask to show only a thin border */}
      <div
        className="
          relative rounded-2xl p-5 sm:p-6
          bg-[#0b0d10]
          text-white/90
          shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]
          [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
          [mask-composite:exclude]
          border border-white/10  h-80
        "
        style={{ padding: "1px" }}
      >
        <div className="rounded-2xl p-4 sm:p-5">
          <h3 className="font-semibold text-lg">{title}</h3>
          {desc && <p className="mt-1 text-sm text-zinc-300/85">{desc}</p>}
          {children && <div className="mt-3">{children}</div>}
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
