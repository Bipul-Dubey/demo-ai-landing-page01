import React from "react";
import SideAwareButton from "../ui/side-aware-button";
import DotBackground from "../ui/dot-background";
import DashboardImage from "./dashboard-image";

const HeroSection = () => {
  return (
    <div className="md:py-16 py-10 relative min-h-screen flex flex-col items-center justify-center text-white space-y-10">
      <DotBackground />

      {/* Bright Light Core */}
      <div
        className="absolute inset-0 
               bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_50%)] 
               blur-3xl"
      />

      {/* tags */}
      <div className="flex items-center space-x-3 border-accent-foreground/40 border backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg">
        <span
          className="h-2.5 w-2.5 rounded-full bg-[#2ee66b]
         shadow-[0_0_8px_rgba(46,230,107,0.85)]
         animation-pulse-online"
          aria-hidden="true"
        ></span>

        <span className="text-sm font-semibold tracking-wide">
          New update v.1.2.0 is live
        </span>
      </div>

      <div className="px-3 max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        <h1
          className="font-extrabold text-white
           text-5xl sm:text-6xl lg:text-7xl
           tracking-tight leading-[1.05]
           drop-shadow-[0_1px_0_rgba(255,255,255,0.06)]"
        >
          <span className="block">AI–Powered Super</span>
          <span className="block">Smart Inventory</span>
        </h1>

        <p className="max-w-[610px] section-des">
          Leverage AI‑powered forecasts to prevent stockouts, reduce excess, and
          maximize efficiency.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <SideAwareButton>GET STARTED</SideAwareButton>
        <SideAwareButton>TRY FREE NOW</SideAwareButton>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-15">
        <DashboardImage src="/dashboard.png" />
      </div>
    </div>
  );
};

export default HeroSection;
