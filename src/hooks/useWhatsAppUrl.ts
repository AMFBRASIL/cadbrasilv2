import { useRouterState } from "@tanstack/react-router";
import { useLayoutEffect, useMemo, useState } from "react";
import {
  buildWhatsAppUrl,
  captureUtmParams,
  type WhatsAppMessageOptions,
} from "@/lib/whatsapp";

export function useWhatsAppUrl(options: Omit<WhatsAppMessageOptions, "pathname"> = {}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });
  const [tick, setTick] = useState(0);

  useLayoutEffect(() => {
    const qs =
      (search && search.length > 0 ? search : null) ??
      (typeof window !== "undefined" ? window.location.search : "");
    captureUtmParams(qs || undefined);
    setTick((t) => t + 1);
  }, [search]);

  const { intent, detail, pageLabel } = options;

  return useMemo(() => {
    captureUtmParams();
    return buildWhatsAppUrl({ pathname, intent, detail, pageLabel });
  }, [pathname, intent, detail, pageLabel, tick]);
}
