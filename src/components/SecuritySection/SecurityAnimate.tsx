"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DotBackground from "../ui/dot-background";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  largeSrc?: string;
  smallSrc?: string;
};

export default function SecurityAnimate({
  className,
  largeSrc = "/3d_globe.avif",
  smallSrc = "/3d_small_globe.avif",
}: Props) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* dotted overlay */}
      <DotBackground />

      <div className="relative w-full h-[500px] overflow-visible">
        <div className="absolute inset-0 mx-auto grid place-items-center">
          <div className="relative h-full w-[92%] sm:w-[90%] max-w-[820px]">
            {/* Big cube */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                h-[400px] w-[340px] md:h-[550px] md:w-[600px]"
            >
              <Image
                src={largeSrc}
                alt="Security cube"
                priority
                fill
                className="select-none pointer-events-none object-contain"
              />
            </div>

            {/* Floating small cubes (fixed 80x80) */}
            <FloatingSmall
              smallSrc={smallSrc}
              className="absolute top-[1%] left-[2%] h-[90px] w-[90px]"
              delay={0}
            />
            <FloatingSmall
              smallSrc={smallSrc}
              className="absolute bottom-[3%] left-[4%] h-[90px] w-[90px]"
              delay={0.45}
            />
            <FloatingSmall
              smallSrc={smallSrc}
              className="absolute top-[5%] right-[2%] h-[90px] w-[90px]"
              delay={0.9}
            />
            <FloatingSmall
              smallSrc={smallSrc}
              className="absolute bottom-[5%] right-[5%] h-[90px] w-[90px]"
              delay={1.2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingSmall({
  className,
  delay = 0,
  smallSrc,
}: {
  className?: string;
  delay?: number;
  smallSrc: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <Image
        src={smallSrc}
        alt="Floating security cube"
        width={80}
        height={80}
        className="select-none pointer-events-none w-full h-full"
      />
    </motion.div>
  );
}
