// components/founder-media.tsx
"use client";

type MediaProps = {
  src: string;
  alt?: string;
  as?: "img" | "video" | "iframe";
  className?: string; // optional passthrough
};

export default function FounderMedia({
  src,
  alt = "Founder video",
  as = "video",
  className = "",
}: MediaProps) {
  return (
    <div className={`relative isolate h-full ${className}`}>
      {/* Bezel / device frame */}
      <div className="rounded-3xl h-full ring-1 ring-white/10 bg-black/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] p-2 md:p-3">
        <div className="rounded-2xl h-full overflow-hidden ring-1 ring-white/10 bg-black">
          {/* Fill the frame completely */}
          <div className="h-full w-full flex">
            {as === "img" && (
              <img src={src} alt={alt} className="h-full w-full object-cover" />
            )}
            {as === "video" && (
              <video
                src={src}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            )}
            {as === "iframe" && (
              <iframe
                src={src}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={alt}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
