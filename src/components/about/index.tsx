// components/hero.tsx
"use client";

import { cn } from "@/lib/utils";
import { BadgePill } from "../common/badge-pill";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        "bg-background text-foreground"
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 md:h-72 lg:h-80 rotate-180">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(126,87,255,0.50)_0%,rgba(216,112,255,0.30)_22%,rgba(126,87,255,0.16)_40%,rgba(0,0,0,0)_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_12%_0%,rgba(255,153,102,0.30)_0%,rgba(255,153,102,0)_55%)]" />
        <div className="absolute inset-0 opacity-[0.45] [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:12px_12px]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_40%)] bg-black/30" />
      </div>

      <div className="mx-auto max-w-5xl px-6 md:px-8 pt-24 pb-28 md:pt-28 md:pb-40 text-center space-y-6 flex flex-col items-center">
        {/* Pill */}
        <div className="flex justify-center">
          <BadgePill>About us</BadgePill>
        </div>

        <div className="w-full max-w-3xl text-center space-y-5 flex flex-col items-center">
          <TextGenerateEffect
            spanClassName="font-extrabold text-white
           text-4xl sm:text-5xl lg:text-6xl
           tracking-tight leading-[1.05]
           drop-shadow-[0_1px_0_rgba(255,255,255,0.06)] text-wrap max-w-[400px]"
            words="Revolutionizing Inventory Management with AI"
          />

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-[650px] section-des"
          >
            We empower businesses with AI-driven inventory solutions that
            streamline operations, reduce errors, and maximize efficiency.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
