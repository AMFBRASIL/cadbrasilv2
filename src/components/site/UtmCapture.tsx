"use client";

import { useRouterState } from "@tanstack/react-router";
import { useLayoutEffect } from "react";
import { captureUtmParams } from "@/lib/whatsapp";
import { captureTrackingParams } from "@/lib/cadastroUrl";

/**
 * Persiste UTMs + click IDs (Google/Bing/OpenAI Ads) na sessão para WhatsApp e CadastroLink.
 * Roda no root — cobre /licitacoes e demais páginas.
 */
export function UtmCapture() {
  const search = useRouterState({ select: (s) => s.location.searchStr });

  if (typeof window !== "undefined") {
    captureUtmParams();
  }

  useLayoutEffect(() => {
    const qs =
      (search && search.length > 0 ? search : null) ??
      (typeof window !== "undefined" ? window.location.search : "");
    captureTrackingParams(qs || undefined);
    captureUtmParams(qs || undefined);
  }, [search]);

  return null;
}
