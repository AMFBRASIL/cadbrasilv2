import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { pushSpaPageView } from "@/lib/analytics";

/** Dispara page_view no GTM/gtag a cada navegação client-side (SPA). */
export function AnalyticsPageView() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    pushSpaPageView(pathname);
  }, [pathname]);

  return null;
}
