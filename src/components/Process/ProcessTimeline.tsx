"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useMemo, useRef, useState } from "react";

interface TimelineEntry {
  title: string | React.ReactNode;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  // Measures overall list height for the vertical progress beam
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Refs for each item row
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  itemRefs.current = itemRefs.current.slice(0, data.length); // keep length in sync

  useEffect(() => {
    if (listRef.current) {
      setHeight(listRef.current.getBoundingClientRect().height);
    }
  }, [data.length]);

  const [activeIndex, setActiveIndex] = useState(0);

  // Observe which item is most visible (center zone)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = itemRefs.current.findIndex((el) => el === visible.target);
        if (idx !== -1) setActiveIndex(idx);
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.15, 0.35, 0.6, 0.85],
      }
    );

    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [data.length]);

  // Beam animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const stringTitles = useMemo(
    () => data.map((d) => (typeof d.title === "string" ? d.title : "")),
    [data]
  );

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans lg:px-10"
      ref={containerRef}
    >
      {/* Timeline body */}
      <div
        ref={listRef}
        className="relative max-w-7xl mx-auto pb-20 px-4 lg:px-8"
      >
        {data.map((item, index) => (
          <div
            key={index}
            // IMPORTANT: ref callback must return void to satisfy React.Ref type
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="flex justify-start pt-10 lg:gap-10"
          >
            {/* Sticky column: only visible on large screens */}
            <div className="sticky top-40 z-40 self-start w-full max-w-xs lg:max-w-sm hidden lg:block">
              <div className="relative flex items-center">
                {/* Glow marker; fully hidden when not active */}
                <div
                  className={`absolute left-3 flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/10 shadow-[0_3px_10px_rgba(0,0,0,0.35)] transition-opacity duration-200 ${
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="pointer-events-none absolute -inset-[3px] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#ff8a3d_0%,#6aa7ff_40%,#7b5cff_70%,#ff8a3d_100%)] opacity-60 blur-[4px]" />
                  <div className="relative h-2 w-2 rounded-full border border-white/20 bg-neutral-200 dark:bg-neutral-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15),inset_0_3px_6px_rgba(255,255,255,0.10)]" />
                </div>

                {/* Sticky title; only on lg */}
                <h3
                  className={`pl-20 text-5xl font-bold transition-opacity duration-200 ${
                    activeIndex === index
                      ? "opacity-100 text-neutral-500 dark:text-neutral-500"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  {stringTitles[index] || item.title}
                </h3>
              </div>
            </div>

            {/* Right content. Title hidden on small/medium as requested */}
            <div className="relative w-full pl-16 lg:pl-4 pr-4">
              {/* If you want zero title on small devices, keep this hidden */}
              <h3 className="block lg:hidden sr-only">
                {stringTitles[index] || item.title}
              </h3>

              {item.content}
            </div>
          </div>
        ))}

        {/* Progress beam */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%]"
          />
        </div>
      </div>
    </div>
  );
};
