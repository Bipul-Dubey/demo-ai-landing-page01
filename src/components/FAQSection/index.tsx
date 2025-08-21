import React from "react";
import { BadgePill } from "../common/badge-pill";
import FaqList from "./faq";

const FaqSection = () => {
  return (
    <section className="relative w-full">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 px-4 py-14 sm:py-16 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Left copy column */}
        <div className="max-w-xl md:max-w-none">
          <div className="flex justify-center md:block md:justify-start">
            <BadgePill>FAQ</BadgePill>
          </div>

          <h2 className="mt-6 text-center md:text-left text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            {`Got questions? We've got answers.`}
          </h2>

          <p className="mt-6 text-center md:text-left max-w-[520px] text-sm sm:text-base text-zinc-400 leading-relaxed mx-auto md:mx-0">
            Everything needed to know about our platform in one place—features,
            pricing, integrations, and more, all answered for you.
          </p>
        </div>

        {/* Right FAQ column */}
        <div className="md:pt-2">
          <FaqList />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
