import React from "react";
import { BadgePill } from "../common/badge-pill";
import FaqComponents from "./faq";

const FaqSection = () => {
  return (
    <section className="relative w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 py-16 sm:py-20 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Left copy column */}
        <div className="max-w-xl md:max-w-none">
          <div className="flex md:block justify-center md:justify-start">
            <BadgePill>FAQ</BadgePill>
          </div>

          <h2 className="mt-6 text-center md:text-left text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Got questions? We've got answers.
          </h2>

          <p className="mt-6 text-center md:text-left max-w-[520px] text-sm sm:text-base text-zinc-400 leading-relaxed">
            Everything needed to know about our platform in one place—features,
            pricing, integrations, and more, all answered for you.
          </p>
        </div>

        {/* Right FAQ column */}
        <div className="md:pt-2">
          <FaqComponents />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
