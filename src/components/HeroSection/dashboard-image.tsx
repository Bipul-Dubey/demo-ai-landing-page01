import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const DashboardImage = ({
  src,
  alt = "Dashboard",
}: {
  src: string;
  alt?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full aspect-[16/7] rounded-2xl bg-neutral-950",
        "shadow-[0_-10px_10px_-10px_rgba(255,255,255,0.5)]",
        "rounded-2xl"
      )}
    >
      {/* Left half shadow */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 
               shadow-[0_-60px_180px_-10px_rgba(249,115,22,0.5)] rounded-tl-2xl"
      />

      {/* Right half shadow */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 
               shadow-[0_-60px_180px_-10px_rgba(139,92,246,0.7)] rounded-tr-2xl"
      />

      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover rounded-2xl"
      />
    </div>
  );
};

export default DashboardImage;

{
  /* <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover rounded-2xl"
      /> */
}
