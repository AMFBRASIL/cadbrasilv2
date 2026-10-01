import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "default",
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "compact";
  className?: string;
}) {
  const compact = variant === "compact";
  return (
    <article
      className={cn(
        "reveal group relative rounded-3xl border border-border bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-glow",
        compact ? "p-5" : "p-7",
        className,
      )}
    >
      <span
        className={cn(
          "grid place-items-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-gradient-brand group-hover:text-brand-foreground",
          compact ? "h-10 w-10" : "h-12 w-12",
        )}
        aria-hidden
      >
        <Icon className={compact ? "h-5 w-5" : "h-6 w-6"} />
      </span>
      <h3 className={cn("font-semibold leading-snug", compact ? "mt-4 text-base" : "mt-5 text-xl")}>
        {title}
      </h3>
      <p
        className={cn(
          "text-muted-foreground leading-relaxed",
          compact ? "mt-1.5 text-sm" : "mt-2.5 text-[15px]",
        )}
      >
        {description}
      </p>
    </article>
  );
}
