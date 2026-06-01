"use client";

import { useRouterState } from "@tanstack/react-router";
import { useLayoutEffect } from "react";
import { captureUtmParams } from "@/lib/whatsapp";

/** Persiste utm_term (e source/campaign) na sessão para links de WhatsApp em navegação SPA. */
export function UtmCapture() {
  const search = useRouterState({ select: (s) => s.location.searchStr });

  if (typeof window !== "undefined") {
    captureUtmParams();
  }

  useLayoutEffect(() => {
    const qs =
      (search && search.length > 0 ? search : null) ??
      (typeof window !== "undefined" ? window.location.search : "");
    captureUtmParams(qs || undefined);
  }, [search]);

  return null;
}
