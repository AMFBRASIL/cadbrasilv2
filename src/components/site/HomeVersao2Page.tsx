import {
  ServiceStatusBar,
  LogosBar,
  WhatIsSicaf,
  Process,
  ReadinessCalculator,
  DocumentChecklist,
  ComparisonSection,
  Assistant,
  Benefits,
  Stats,
  Testimonials,
  StartIn2Minutes,
  FinalCTA,
} from "@/components/site/Sections";
import { Faq } from "@/components/site/Faq";
import { ContactSection } from "@/components/site/ContactSection";
import { FloatingCta } from "@/components/site/FloatingCta";
import { GovNav } from "@/components/site/gov/GovNav";
import { GovHero } from "@/components/site/gov/GovHero";
import { GovFooter } from "@/components/site/gov/GovFooter";

export function HomeVersao2Page() {
  return (
    <div className="theme-gov-compras min-h-screen bg-[#f0f7f2] pb-16 sm:pb-0">
      <GovNav />
      <main>
        <GovHero />

        <div className="bg-[#e8f3eb] border-y border-[#168821]/20">
          <ServiceStatusBar />
        </div>

        <div className="bg-white">
          <LogosBar />
          <WhatIsSicaf />
        </div>

        <div className="bg-[#f0f7f2]">
          <Process />
          <ReadinessCalculator />
        </div>

        <div className="bg-white border-y border-[#168821]/15">
          <DocumentChecklist />
          <ComparisonSection />
        </div>

        <div className="bg-[#e8f3eb]">
          <Assistant />
          <Benefits />
        </div>

        <Stats />
        <div className="bg-white">
          <Testimonials />
          <StartIn2Minutes />
        </div>
        <FinalCTA />
        <div className="bg-[#f0f7f2]">
          <Faq />
          <ContactSection />
        </div>
      </main>
      <GovFooter />
      <FloatingCta />
    </div>
  );
}
