"use client";

import * as React from "react";
import {
  MotionConfig,
  AnimatePresence,
  motion,
  type Transition,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./CarouselCard";

export type Item = {
  id: number;
  title: string;
  body: string;
};

const ITEMS: Item[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
  body: "Short description of the testimonial/feature. Keep it to two lines for consistency.",
}));

const CAROUSEL_EASE = [0.32, 0.72, 0, 1] as const;
const DUR = 0.7;

export default function ReviewCarousel({ className }: { className?: string }) {
  const [index, setIndex] = React.useState(0); // first visible item
  const [dir, setDir] = React.useState<1 | -1>(1);
  const [byUser, setByUser] = React.useState(false);

  const visible = useVisibleCount(); // responsive count
  const total = ITEMS.length;

  // measure card width
  const slideRef = React.useRef<HTMLDivElement | null>(null);
  const [slideWidth, setSlideWidth] = React.useState(0);

  React.useEffect(() => {
    if (!slideRef.current) return;
    const el = slideRef.current;
    const ro = new ResizeObserver(() => {
      setSlideWidth(el.getBoundingClientRect().width);
    });
    ro.observe(el);
    setSlideWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, [visible]);

  // bounds (max start index so last group fully fits)
  const maxIndex = total - visible;

  const next = () => {
    setByUser(true);
    setDir(1);
    setIndex((i) => Math.min(i + 1, maxIndex));
  };

  const prev = () => {
    setByUser(true);
    setDir(-1);
    setIndex((i) => Math.max(i - 1, 0));
  };

  const trackX = -(index * slideWidth);

  // visible cards
  const windowIndices = React.useMemo(
    () => Array.from({ length: visible }, (_, k) => index + k),
    [index, visible]
  );

  const enteringIndexNext = index + visible - 1;
  const enteringIndexPrev = index;
  const enteringIndex = dir === 1 ? enteringIndexNext : enteringIndexPrev;

  const cornerEnter = (d: 1 | -1) =>
    byUser
      ? {
          opacity: 0,
          x: d === 1 ? 60 : -60,
          y: 100,
          scale: 0.95,
          rotate: d === 1 ? 6 : -6,
        }
      : { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 };

  const cornerCenter = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: CAROUSEL_EASE } as Transition,
  };

  return (
    <MotionConfig transition={{ duration: DUR, ease: CAROUSEL_EASE }}>
      <section
        className={cn(
          "relative mx-auto max-w-7xl px-4 py-10 text-white",
          className
        )}
      >
        {/* Controls */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            className={cn(
              "grid size-9 place-items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md transition-colors",
              index === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-white/10"
            )}
          >
            <ChevronLeft className="size-5" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="Next"
            className={cn(
              "grid size-9 place-items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md transition-colors",
              index >= maxIndex
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-white/10"
            )}
          >
            <ChevronRight className="size-5" />
          </motion.button>
        </div>

        {/* Viewport */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex flex-nowrap"
            style={{ willChange: "transform" }}
            animate={{ x: trackX }}
          >
            {ITEMS.map((it, i) => {
              const visibleNow = windowIndices.includes(i);
              const isEntering = i === enteringIndex;

              return (
                <div
                  key={it.id}
                  ref={i === index ? slideRef : null}
                  className="
                    px-3 sm:px-3.5
                    shrink-0
                    basis-full
                    sm:basis-1/2
                    md:basis-1/3
                  "
                  aria-hidden={!visibleNow}
                >
                  <div className="relative h-full">
                    <AnimatePresence initial={false} mode="popLayout">
                      <motion.div
                        key={
                          isEntering
                            ? `enter-${it.id}-${index}-${dir}`
                            : `static-${it.id}-${index}`
                        }
                        initial={
                          isEntering
                            ? cornerEnter(dir)
                            : { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
                        }
                        animate={cornerCenter}
                        className="h-full"
                      >
                        <Card data={it} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

/* Responsive visible count */
function useVisibleCount() {
  const get = () => {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w >= 768) return 3;
    if (w >= 640) return 2;
    return 1;
  };
  const [n, setN] = React.useState(get);
  React.useEffect(() => {
    const onR = () => setN(get());
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);
  return n;
}
