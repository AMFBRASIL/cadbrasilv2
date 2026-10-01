"use client";

import { MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { LEAD_FORM_ANCHOR } from "@/components/site/cadbrasil/styles";

const PAGE_LABEL = "CADBrasil — Tecnologia e assessoria em licitações";

export function LandingFloatingCta() {
  return (
    <>
      <WhatsAppLink
        aria-label="Falar com um especialista no WhatsApp"
        intent="Quero falar com um especialista CADBrasil (botão flutuante)."
        pageLabel={PAGE_LABEL}
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 h-14 w-14 rounded-full bg-success text-success-foreground grid place-items-center shadow-glow pulse-ring hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </WhatsAppLink>

      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur border-t border-border">
        <div className="grid grid-cols-2 gap-2">
          <WhatsAppLink
            intent="Quero falar com um especialista CADBrasil (menu fixo mobile)."
            pageLabel={PAGE_LABEL}
            className="text-center px-4 py-3 rounded-xl bg-success text-success-foreground font-semibold text-sm"
          >
            WhatsApp
          </WhatsAppLink>
          <a
            href={LEAD_FORM_ANCHOR}
            className="text-center px-4 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold text-sm"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </>
  );
}
