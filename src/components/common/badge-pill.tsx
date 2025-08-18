// components/ui/BadgePill.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type BadgePillProps = {
  children: React.ReactNode;
  className?: string;
  // Optional: override gradient or tone
  gradientFrom?: string; // e.g., "#f472b6"
  gradientTo?: string; // e.g., "#818cf8"
  glow?: boolean;
};

export function BadgePill({
  children,
  className,
  gradientFrom = "#f472b6", // pink-400
  gradientTo = "#818cf8", // indigo-400
  glow = true,
}: BadgePillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-full px-4",
        "bg-[rgba(23,23,30,0.7)]", // soft dark pill
        "ring-1 ring-white/10", // thin border
        glow &&
          "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_8px_30px_-10px_rgba(120,120,255,0.18)]",
        "backdrop-blur-[2px]", // subtle glass
        className
      )}
    >
      <span
        className="font-medium text-[16px] py-2 pb-2.5 leading-none tracking-tight bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        {children}
      </span>
    </span>
  );
}
