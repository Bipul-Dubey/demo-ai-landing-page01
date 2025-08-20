import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BadgePill } from "../common/badge-pill";
import { Check } from "lucide-react";

const bullets = [
  "Unicommerce Integration",
  "Logistics Partner Integration",
  "Customer Care Tools Integration",
  "Accounting & Finance Integration",
];

export function IntegrationLeft({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-10", className)}>
      <div>
        <BadgePill>Integration</BadgePill>
      </div>

      <h2 className="section-title">Seamless Integrations</h2>

      <p className="section-des text-left!">
        Connect with Unicommerce, logistics, and customer care tools to
        streamline your operations.
      </p>

      <ul className="mt-6 space-y-4">
        {bullets.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="mt-0.5 h-5 w-5 fill-transparent stroke-[url(#gradient)]" />

            <svg width="0" height="0">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="orange" />
                  <stop offset="100%" stopColor="blue" />
                </linearGradient>
              </defs>
            </svg>

            <span className="section-des text-base!">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
