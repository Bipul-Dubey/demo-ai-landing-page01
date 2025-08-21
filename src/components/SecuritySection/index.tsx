import React from "react";
import { BadgePill } from "../common/badge-pill";
import { SecurityContent } from "./SecurityContent";
import SecurityAnimate from "./SecurityAnimate";

const SecuritySection = () => {
  return (
    <section className="py-15 space-y-7">
      <div className="w-full flex flex-col items-center space-y-9 px-4 text-center">
        <BadgePill>Security</BadgePill>

        <h2 className="section-title">Supremacy of Security</h2>

        <p className="max-w-[500px] section-des">
          Advanced protection to keep your data, transactions, and business
          secure from threats and breaches.
        </p>
      </div>
      {/* content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-10 sm:py-16 md:grid-cols-2 md:gap-10 lg:gap-16 lg:py-20">
        <SecurityContent />

        <SecurityAnimate />
      </div>
    </section>
  );
};

export default SecuritySection;
