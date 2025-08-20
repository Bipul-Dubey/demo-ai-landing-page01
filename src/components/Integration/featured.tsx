"use client";

import React from "react";
import { cn } from "@/lib/utils"; // optional if you use cn()
import { Sparkles, Database, Book, Monitor } from "lucide-react";

type IntegrationItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

interface IntegrationToolsProps {
  items: IntegrationItem[];
}

const Tools: React.FC<IntegrationToolsProps> = ({ items }) => {
  return (
    <section className="w-full py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col text-left space-y-4">
            {/* Icon container with glow effect */}
            <div
              className={cn(
                "relative flex h-16 w-16 items-center justify-center rounded-full isolate",
                // dark glass core
                "bg-[#0e0f14] border border-white/20",
                // depth
                "shadow-[0_10px_28px_rgba(0,0,0,0.5)]"
              )}
            >
              {/* PURPLE/BLUE side blooms */}
              <div
                className="pointer-events-none absolute inset-0 rounded-full
                  bg-[radial-gradient(70%_70%_at_82%_22%,rgba(99,102,241,0.55),transparent_60%),radial-gradient(65%_65%_at_18%_72%,rgba(168,85,247,0.45),transparent_65%)]
                  blur-[8px] opacity-90"
              />

              {/* cool blue rim aura */}
              <div
                className="pointer-events-none absolute -inset-[5px] rounded-full
                  bg-[radial-gradient(75%_75%_at_60%_40%,rgba(96,165,250,0.25),transparent_65%)]
                  blur-[10px] opacity-80"
              />

              {/* glossy top reflection */}
              <div
                className="pointer-events-none absolute inset-0 rounded-full
                  bg-gradient-to-b from-white/14 via-transparent to-transparent"
              />

              {/* small specular highlight (top-left) */}
              <div
                className="pointer-events-none absolute -top-0.5 -left-0.5 h-9 w-9 rounded-full
                  bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.1)_55%,transparent_60%)]
                  blur-[8px] opacity-70"
              />

              {/* inner vignette for depth */}
              <div
                className="pointer-events-none absolute inset-0 rounded-full
                  shadow-[inset_0_0_60px_rgba(0,0,0,0.55),inset_0_-24px_40px_rgba(0,0,0,0.35)]"
              />

              {/* faint inner rim line */}
              <div
                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15
                  [mask:radial-gradient(circle_at_center,transparent_56%,black_57%)]"
              />

              {/* Icon */}
              <span className="relative z-10 text-xl text-white drop-shadow-[0_0_10px_rgba(167,139,250,0.8)]">
                {item.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Featured() {
  const items = [
    {
      icon: <Sparkles />,
      title: "AI Chatbot & CRM",
      description: "Connect with AI chatbots to improve engagement.",
    },
    {
      icon: <Database />,
      title: "ERP System Integration",
      description: "Sync inventory with enterprise resource (ERP) systems.",
    },
    {
      icon: <Book />,
      title: "Supplier & Procurement",
      description: "Seamlessly connect with for automated restocking.",
    },
    {
      icon: <Monitor />,
      title: "POS Integration",
      description: "Sync inventory with POS for real-time updates.",
    },
  ];

  return <Tools items={items} />;
}
