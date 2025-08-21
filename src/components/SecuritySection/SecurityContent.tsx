"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ToolCard, type TToolItem } from "../common/tool-card";
import { ShieldCheck, ShieldAlert, Cloud, LockKeyhole } from "lucide-react";
import { motion, Variants } from "framer-motion";

const FEATURES_LEFT: TToolItem[] = [
  {
    title: "Role-Based Control",
    description: "Limits data access to authorized users.",
    icon: <ShieldCheck className="size-5" />,
  },
  {
    title: "Secure Cloud",
    description: "Ensures safety with backups and compliance.",
    icon: <Cloud className="size-5" />,
  },
];

const FEATURES_RIGHT: TToolItem[] = [
  {
    title: "AI Fraud Detection",
    description: "Stops suspicious transactions instantly.",
    icon: <ShieldAlert className="size-5" />,
  },
  {
    title: "End-to-End Encryption",
    description: "Keeps data secure from unauthorized access.",
    icon: <LockKeyhole className="size-5" />,
  },
];

/* Parent controller: quick one-by-one cascade across both columns */
const gridContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.09, // quick, visible stagger
    },
  },
};

/* Child animation: rise + fade */
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function SecurityContent({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2 gap-x-16 lg:gap-x-24",
        "gap-y-12 sm:gap-y-14",
        className
      )}
      variants={gridContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Left column (renders first; animates first) */}
      <div className="grid content-start gap-12 sm:gap-14">
        {FEATURES_LEFT.map((f, i) => (
          <motion.div key={`L-${i}`} variants={item}>
            <ToolCard item={f} />
          </motion.div>
        ))}
      </div>

      {/* Right column (renders after left; animates after) */}
      <div className="grid content-start gap-12 sm:gap-14">
        {FEATURES_RIGHT.map((f, i) => (
          <motion.div key={`R-${i}`} variants={item}>
            <ToolCard item={f} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
