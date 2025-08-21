import React from "react";
import { BadgePill } from "../common/badge-pill";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="py-15 space-y-10">
      <div className="w-full flex flex-col items-center space-y-7 px-4 text-center">
        <BadgePill>Experince</BadgePill>

        <h2 className="section-title">Intelligence Management</h2>

        <p className="max-w-[500px] section-des">
          Experience seamless stock tracking, predictive insights, and
          automation-driven efficiency.
        </p>
      </div>

      {/* cards */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExperienceCard />
      </div>
    </section>
  );
};

export default Experience;
