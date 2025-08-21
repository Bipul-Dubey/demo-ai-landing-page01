"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ToolCard, type TToolItem } from "../common/tool-card";
import { ShieldCheck, ShieldAlert, Cloud, LockKeyhole } from "lucide-react";

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

export function SecurityContent({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2 gap-x-16 lg:gap-x-24",
        "gap-y-12 sm:gap-y-14",
        className
      )}
    >
      <div className="grid content-start gap-12 sm:gap-14">
        {FEATURES_LEFT.map((f, i) => (
          <ToolCard key={`L-${i}`} item={f} />
        ))}
      </div>

      <div className="grid content-start gap-12 sm:gap-14">
        {FEATURES_RIGHT.map((f, i) => (
          <ToolCard key={`R-${i}`} item={f} />
        ))}
      </div>
    </div>
  );
}
