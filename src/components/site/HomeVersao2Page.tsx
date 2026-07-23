import {
  ServiceStatusBar,
  LogosBar,
  WhatIsSicaf,
  Process,
  ComparisonSection,
  Assistant,
  Testimonials,
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
        </div>

        <div className="bg-white border-y border-[#168821]/15">
          <ComparisonSection />
        </div>

        <div className="bg-white">
          <Testimonials />
        </div>

        <div className="bg-[#e8f3eb]">
          <Assistant />
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
