"use client";

import { cn } from "@/lib/utils";
import { BadgePill } from "../common/badge-pill";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function FounderText() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <BadgePill>Founder</BadgePill>
      </div>

      <TextGenerateEffect
        spanClassName="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground
                 drop-shadow-[0_1px_0_rgba(255,255,255,0.06)] text-wrap max-w-[400px]"
        words="A Message from Our Founders"
      />

      <p className="mt-6 text-foreground/70 leading-relaxed text-base md:text-lg">
        At Cawar, we believe in harnessing AI to simplify inventory management
        and drive business growth. Our mission is to empower businesses with
        intelligent automation, ensuring efficiency, accuracy, and scalability.
        We are committed to innovation, security, and seamless integration,
        helping teams stay ahead in a fast‑evolving market. Thank you for
        trusting us on this journey—we’re excited to shape the future of
        inventory management together!
      </p>
    </div>
  );
}
