"use client";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";
import Image from "next/image";

const LOGOS = [
  "/loremlogo/lorem",
  "/loremlogo/lorem",
  "/loremlogo/lorem",
  "/loremlogo/lorem",
  "/loremlogo/lorem",
  "/loremlogo/lorem",
  "/loremlogo/lorem",
  "/loremlogo/lorem",
  "/loremlogo/lorem",
  "/loremlogo/lorem",
];

export default function Example() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center justify-center bg-transparent space-y-4">
      <h5 className="w-full text-white/90">
        People who trust and use the product seamlessly.
      </h5>

      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent>
          {LOGOS.map((src, i) => {
            return (
              <MarqueeItem key={i} className="h-14 w-44 sm:h-20 sm:w-56 px-4">
                <Image
                  key={i}
                  height={60}
                  width={256}
                  src={`${src}${i % 2 === 0 ? 1 : 2}.svg`}
                  alt={`Logo Ipsum ${i + 1}`}
                  loading="lazy"
                  className="
                    h-full w-full object-contain
                    opacity-70 hover:opacity-100 transition-opacity
                    invert-[.85] sepia-[.05] saturate-50 hue-rotate-180
                  "
                />
              </MarqueeItem>
            );
          })}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}
