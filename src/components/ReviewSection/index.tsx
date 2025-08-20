import React from "react";
import ReviewCarousel from "./ReviewCarousel";
import { BadgePill } from "../common/badge-pill";

const ReviewSection = () => {
  return (
    <section className="py-15 space-y-7">
      <div className="w-full flex flex-col items-center space-y-9 px-4">
        <BadgePill>Review</BadgePill>

        <h2 className="section-title">What Our Clients Say</h2>

        <p className="max-w-[500px] section-des">
          Smart inventory, real results. See how Cawar improves efficiency and
          prevents stock issues.
        </p>
      </div>
      <ReviewCarousel />
    </section>
  );
};

export default ReviewSection;
