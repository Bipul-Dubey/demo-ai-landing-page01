import React from "react";
import { BadgePill } from "../common/badge-pill";

const PricingSection = () => {
  return (
    <section className="py-15 space-y-7">
      <div className="w-full flex flex-col items-center space-y-9 px-4 text-center">
        <BadgePill>Pricing</BadgePill>

        <h2 className="section-title">Plans for Every Business</h2>

        <p className="max-w-[500px] section-des">
          Choose the perfect plan to scale your inventory management with
          AI-driven efficiency.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
