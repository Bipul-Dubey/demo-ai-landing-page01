import React from "react";
import { BadgePill } from "../common/badge-pill";
import Pricings from "./pricing";

const PricingSection = () => {
  return (
    <section className="py-15 space-y-7">
      <div className="w-full flex flex-col items-center space-y-9 px-4 text-center">
        <BadgePill>Pricing</BadgePill>

        <h2 className="section-title">Plans and Pricing</h2>

        <p className="max-w-[500px] section-des">
          Receive unlimited credits when you pay yearly, and save on your plan.
        </p>
      </div>

      <div className="px-4">
        <Pricings />
      </div>
    </section>
  );
};

export default PricingSection;
