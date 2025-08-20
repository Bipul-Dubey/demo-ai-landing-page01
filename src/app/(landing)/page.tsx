import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Integration from "@/components/Integration";
import ProcessSection from "@/components/Process";
import TrustedPartner from "@/components/TrustedPartner";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustedPartner />
      <Experience />
      <ProcessSection />
      <Integration />
    </div>
  );
};

export default HomePage;
