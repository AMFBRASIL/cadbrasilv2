"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { megaMenuColumns, megaMenuFooter, megaMenuTopLinks } from "@/data/megaMenu";
import { cn } from "@/lib/utils";

type MegaMenuTone = "default" | "gov";

const topLinkByTone: Record<MegaMenuTone, string> = {
  default:
    "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition",
  gov: "px-2 py-2 text-[13px] xl:text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition whitespace-nowrap bg-transparent",
};

const triggerByTone: Record<MegaMenuTone, string> = {
  default:
    "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition bg-transparent h-auto data-[state=open]:bg-accent data-[state=open]:text-foreground",
  gov: "px-2 py-2 text-[13px] xl:text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition whitespace-nowrap bg-transparent h-auto data-[state=open]:bg-white/15 data-[state=open]:text-white",
};

function MegaPanel() {
  return (
    <div className="w-[min(94vw,56rem)] p-5 sm:p-6">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-5">
        {megaMenuColumns.map((col) => (
          <div key={col.id}>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">{col.label}</p>
            <ul className="space-y-1">
              {col.items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.to}
                        className="group flex gap-3 rounded-xl p-2.5 transition hover:bg-accent"
                      >
                        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition group-hover:border-brand/30 group-hover:text-brand">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                          <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{megaMenuFooter.text}</p>
        <Link
          to={megaMenuFooter.cta.to}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand hover:underline"
        >
          {megaMenuFooter.cta.label} →
        </Link>
      </div>
    </div>
  );
}

export function MegaMenuDesktop({ tone = "default" }: { tone?: MegaMenuTone }) {
  const topClass = topLinkByTone[tone];
  const triggerClass = triggerByTone[tone];

  return (
    <NavigationMenu
      className="hidden lg:flex flex-1 justify-center"
      centerViewport
      viewportClassName="border-border/80"
    >
      <NavigationMenuList className="gap-0.5 space-x-0">
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClass}>Recursos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaPanel />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {megaMenuTopLinks.map((l) => (
          <NavigationMenuItem key={l.label}>
            {l.to ? (
              <NavigationMenuLink asChild>
                <Link to={l.to} className={topClass}>
                  {l.label}
                </Link>
              </NavigationMenuLink>
            ) : (
              <a href={l.href} className={topClass}>
                {l.label}
              </a>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MegaMenuMobile({
  onNavigate,
  tone = "default",
}: {
  onNavigate?: () => void;
  tone?: MegaMenuTone;
}) {
  const [open, setOpen] = useState(true);
  const isGov = tone === "gov";

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold",
          isGov ? "text-white hover:bg-white/10" : "hover:bg-accent",
        )}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Recursos
        <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} aria-hidden />
      </button>

      {open && (
        <div
          className={cn(
            "mb-2 space-y-4 border-l-2 pl-3",
            isGov ? "border-[#FFCD07]/50" : "border-brand/20",
          )}
        >
          {megaMenuColumns.map((col) => (
            <div key={col.id}>
              <p
                className={cn(
                  "mb-1.5 px-2 text-[10px] font-bold uppercase tracking-[0.14em]",
                  isGov ? "text-[#FFCD07]" : "text-brand",
                )}
              >
                {col.label}
              </p>
              <ul className="space-y-0.5">
                {col.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={onNavigate}
                        className={cn(
                          "flex items-start gap-2.5 rounded-lg px-2 py-2.5",
                          isGov ? "text-white/95 hover:bg-white/10" : "hover:bg-accent",
                        )}
                      >
                        <Icon
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            isGov ? "text-white/60" : "text-muted-foreground",
                          )}
                          aria-hidden
                        />
                        <span>
                          <span className="block text-sm font-medium">{item.title}</span>
                          <span
                            className={cn(
                              "block text-xs",
                              isGov ? "text-white/55" : "text-muted-foreground",
                            )}
                          >
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}

      {megaMenuTopLinks.map((l) =>
        l.to ? (
          <Link
            key={l.label}
            to={l.to}
            onClick={onNavigate}
            className={cn(
              "rounded-lg px-3 py-3 text-sm font-medium",
              isGov ? "text-white/95 hover:bg-white/10" : "hover:bg-accent",
            )}
          >
            {l.label}
          </Link>
        ) : (
          <a
            key={l.label}
            href={l.href}
            onClick={onNavigate}
            className={cn(
              "rounded-lg px-3 py-3 text-sm font-medium",
              isGov ? "text-white/95 hover:bg-white/10" : "hover:bg-accent",
            )}
          >
            {l.label}
          </a>
        ),
      )}
    </div>
  );
}
