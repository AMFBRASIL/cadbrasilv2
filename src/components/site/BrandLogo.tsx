import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  showIcon?: boolean;
  className?: string;
  asLink?: boolean;
};

export function BrandWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline tracking-tight", className)}>
      <span>CAD</span>
      <span className="mx-1.5 font-normal text-muted-foreground/75 select-none" aria-hidden>
        |
      </span>
      <span className="text-brand">BRASIL</span>
    </span>
  );
}

export function BrandLogo({ showIcon = true, className, asLink = false }: BrandLogoProps) {
  const content = (
    <>
      {showIcon && (
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow text-sm font-bold"
          aria-hidden
        >
          C
        </span>
      )}
      <BrandWordmark />
    </>
  );

  const classes = cn("flex items-center gap-2 font-display font-bold text-lg", className);

  if (asLink) {
    return (
      <Link to="/" className={classes} aria-label="CADBRASIL — início">
        {content}
      </Link>
    );
  }

  return <span className={classes}>{content}</span>;
}
