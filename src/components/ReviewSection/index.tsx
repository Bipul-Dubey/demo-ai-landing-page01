"use client";
import React from "react";
import ReviewCarousel from "./ReviewCarousel";
import { BadgePill } from "../common/badge-pill";
import { useInView } from "framer-motion";

const ReviewSection = () => {
  const viewRef = React.useRef<HTMLDivElement | null>(null);

  const isInView = useInView(viewRef, {
    margin: "-100px 0px 0px 0px",
    once: true,
    amount: "some",
  });

  return (
    <section className="py-15 space-y-7" ref={viewRef}>
      <div className="w-full flex flex-col items-center space-y-9 px-4">
        <BadgePill>Review</BadgePill>

        <h2 className="section-title">What Our Clients Say</h2>

        <p className="max-w-[500px] section-des">
          Smart inventory, real results. See how Cawar improves efficiency and
          prevents stock issues.
        </p>
      </div>
      {isInView && <ReviewCarousel />}
    </section>
  );
};

export default ReviewSection;
