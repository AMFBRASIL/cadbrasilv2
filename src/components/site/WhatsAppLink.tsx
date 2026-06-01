"use client";

import type { ComponentProps, MouseEvent } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useWhatsAppUrl } from "@/hooks/useWhatsAppUrl";
import {
  isModifiedClick,
  openWhatsApp,
  type WhatsAppMessageOptions,
} from "@/lib/whatsapp";

type WhatsAppLinkProps = ComponentProps<"a"> &
  Omit<WhatsAppMessageOptions, "pathname">;

export function WhatsAppLink({
  intent,
  detail,
  pageLabel,
  utmTerm,
  utmSource,
  utmCampaign,
  href: hrefProp,
  onClick,
  target = "_blank",
  rel = "noreferrer",
  children,
  ...rest
}: WhatsAppLinkProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const dynamicHref = useWhatsAppUrl({ intent, detail, pageLabel, utmTerm, utmSource, utmCampaign });
  const href = hrefProp ?? dynamicHref;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || isModifiedClick(event)) return;

    event.preventDefault();
    openWhatsApp({
      pathname,
      intent,
      detail,
      pageLabel,
      utmTerm,
      utmSource,
      utmCampaign,
    });
  };

  return (
    <a href={href} target={target} rel={rel} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
