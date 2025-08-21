import Experience from "@/components/Experience";
import FaqSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Integration from "@/components/Integration";
import PricingSection from "@/components/PricingSection";
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
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
