import AboutGreenSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/AboutGreenSection";
import AreasWeServeSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/AreasWeServeSection";
import BadgesStrip from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/BadgesStrip";
import CtaGridSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/CtaGridSection";
import FaqSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/FaqSection";
import FeaturesHandSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/FeaturesHandSection";
import HeroSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/HeroSection";
import QuoteFormSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/QuoteFormSection";
import Reveal from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/Reveal";
import SectionMorph from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/SectionMorph";
import ServiceCards from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/ServiceCards";
import ServicesIntroSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/ServicesIntroSection";
import SiteFooter from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/SiteFooter";
import SiteHeader from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/SiteHeader";
import StatsSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/StatsSection";
import TestimonialsSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/TestimonialsSection";

/**
 * Narrativa visual da home, em bandas alternadas:
 *
 *   dark  → hero · depoimentos
 *   light → formulário · selos
 *   dark  → sobre · diferenciais
 *   light → áreas
 *   dark  → serviços · cards · números
 *   light → CTA · FAQ
 *   dark  → rodapé
 *
 * Os depoimentos vêm logo após a hero, ainda na banda escura: a prova social
 * aparece antes de qualquer pedido de contato, e o par hero+reviews lê como
 * uma única abertura escura.
 *
 * Cada troca de banda passa por um <SectionMorph>, que sobe por cima da seção
 * anterior com raio elíptico e achata durante o scroll — a mudança acontece
 * como transformação, não como corte.
 */
export default function Home() {
  return (
    <div className="thermo-page flex min-h-full flex-col overflow-x-clip">
      <Reveal />
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />

        {/* Continua na banda escura da hero — sem morph entre as duas. */}
        <div className="band-dark">
          <TestimonialsSection />
        </div>

        <SectionMorph to="light" />
        <div className="band-light">
          <QuoteFormSection />
          <BadgesStrip />
        </div>

        <SectionMorph to="dark" />
        <div className="band-dark">
          <AboutGreenSection />
          <FeaturesHandSection />
        </div>

        <SectionMorph to="light" />
        <div className="band-light">
          <AreasWeServeSection />
        </div>

        <SectionMorph to="dark" />
        <div className="band-dark">
          <ServicesIntroSection />
          <ServiceCards />
          <StatsSection />
        </div>

        <SectionMorph to="light" />
        <div className="band-light">
          <CtaGridSection />
          <FaqSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
