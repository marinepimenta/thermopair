import AboutGreenSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/AboutGreenSection";
import AreasWeServeSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/AreasWeServeSection";
import BadgesStrip from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/BadgesStrip";
import CtaGridSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/CtaGridSection";
import FaqSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/FaqSection";
import FeaturesHandSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/FeaturesHandSection";
import HeroSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/HeroSection";
import QuoteFormSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/QuoteFormSection";
import ServiceCards from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/ServiceCards";
import ServicesIntroSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/ServicesIntroSection";
import SiteFooter from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/SiteFooter";
import SiteHeader from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/SiteHeader";
import StatsSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/StatsSection";
import TestimonialsSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/TestimonialsSection";

export default function Home() {
  return (
    <div className="blive-page flex min-h-full flex-col overflow-x-clip">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <QuoteFormSection />
        <BadgesStrip />
        <AboutGreenSection />
        <FeaturesHandSection />
        <AreasWeServeSection />
        <TestimonialsSection />
        <ServicesIntroSection />
        <ServiceCards />
        <StatsSection />
        <CtaGridSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
