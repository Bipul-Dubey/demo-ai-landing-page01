"use client";
import React from "react";
import SideAwareButton from "../ui/side-aware-button";
import DotBackground from "../ui/dot-background";
import DashboardImage from "./dashboard-image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const easeOut = "easeOut";

const HeroSection = () => {
  return (
    <div className="md:py-16 py-10 relative min-h-screen flex flex-col items-center justify-center text-white space-y-10">
      <DotBackground />

      <div
        className="absolute inset-0 
               bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_50%)] 
               blur-3xl"
      />

      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center space-x-3 border-accent-foreground/40 border backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg"
      >
        <span
          className="h-2.5 w-2.5 rounded-full bg-[#2ee66b] shadow-[0_0_8px_rgba(46,230,107,0.85)] animation-pulse-online"
          aria-hidden="true"
        />
        <span className="text-sm font-semibold tracking-wide">
          New update v.1.2.0 is live
        </span>
      </motion.div>

      <div className="w-full max-w-3xl text-center space-y-5 flex flex-col items-center">
        <TextGenerateEffect
          spanClassName="font-extrabold text-white
           text-5xl sm:text-6xl lg:text-7xl
           tracking-tight leading-[1.05]
           drop-shadow-[0_1px_0_rgba(255,255,255,0.06)] text-wrap max-w-[400px]"
          words="AI–Powered Super Smart Inventory"
        />

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: easeOut }}
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-[650px] section-des"
        >
          Leverage AI‑powered forecasts to prevent stockouts, reduce excess, and
          maximize efficiency.
        </motion.p>
      </div>

      <motion.div
        className="mt-6 flex items-center justify-center gap-4"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.18, ease: easeOut }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <SideAwareButton>GET STARTED</SideAwareButton>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.28, ease: easeOut }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <SideAwareButton>TRY FREE NOW</SideAwareButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-15"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <DashboardImage src="/dashboard.png" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
