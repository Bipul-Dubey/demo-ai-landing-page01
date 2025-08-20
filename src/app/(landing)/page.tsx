import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Integration from "@/components/Integration";
import ProcessSection from "@/components/Process";
import ReviewSection from "@/components/ReviewSection";
import SecuritySection from "@/components/SecuritySection";
import TrustedPartner from "@/components/TrustedPartner";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustedPartner />
      <Experience />
      <ProcessSection />
      <Integration />
      <ReviewSection />
      <SecuritySection />
    </div>
  );
};

export default HomePage;
