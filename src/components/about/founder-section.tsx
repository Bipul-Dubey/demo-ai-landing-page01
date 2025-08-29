// app/(site)/founder-section.tsx
"use client";

import FounderMedia from "./founder-media";
import FounderText from "./founder-text";

export default function FounderSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:gap-16 md:grid-cols-2">
          <div>
            <FounderText />
          </div>

          <div className="md:justify-self-end w-full md:min-h-[320px] lg:h-[420px]">
            <FounderMedia
              as="video"
              alt="Founder speaking in factory"
              src="https://cdn.pixabay.com/video/2024/02/07/199623-910995789_large.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
