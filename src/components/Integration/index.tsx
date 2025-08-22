import * as React from "react";
import { IntegrationLeft } from "./IntegrationPoint";
// import { IntegrationRight } from "./IntegrationTools";
import Featured from "./featured";

const Integration: React.FC = () => {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-15 md:gap-14 px-4 py-16 md:py-24">
        <IntegrationLeft />
        {/* <IntegrationRight className="justify-self-center md:justify-self-end" /> */}
      </div>

      <Featured />
    </section>
  );
};

export default Integration;
