import React from "react";
import { BadgePill } from "../common/badge-pill";

const Integrity = () => {
  return (
    <section className="py-15 space-y-10">
      <div className="w-full flex flex-col items-center space-y-7 px-4 text-center">
        <BadgePill>Experince</BadgePill>

        <h2 className="section-title">Driven by Integrity</h2>

        <p className="max-w-[500px] section-des">
          Committed to transparency, innovation, and impact, we empower
          businesses with smart solutions for growth.
        </p>
      </div>
    </section>
  );
};

export default Integrity;
