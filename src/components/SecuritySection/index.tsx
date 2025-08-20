import React from "react";
import { BadgePill } from "../common/badge-pill";

const SecuritySection = () => {
  return (
    <section className="py-15 space-y-7">
      <div className="w-full flex flex-col items-center space-y-9 px-4">
        <BadgePill>Security</BadgePill>

        <h2 className="section-title">Supremacy of Security</h2>

        <p className="max-w-[500px] section-des">
          Advanced protection to keep your data, transactions, and business
          secure from threats and breaches.
        </p>
      </div>
      {/* content */}
    </section>
  );
};

export default SecuritySection;
