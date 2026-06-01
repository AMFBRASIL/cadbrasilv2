import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type GovFloatingBadgeProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
  variant?: "success" | "info" | "warning";
  animationDelay?: string;
};

export function GovFloatingBadge({
  icon: Icon,
  title,
  subtitle,
  className,
  variant = "success",
  animationDelay = "0s",
}: GovFloatingBadgeProps) {
  const iconBg = {
    success: "bg-[#168821]/15 text-[#168821]",
    info: "bg-[#071D41]/10 text-[#071D41]",
    warning: "bg-amber-500/15 text-amber-700",
  }[variant];

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-xl border border-white/90 bg-white px-3 py-2.5 shadow-xl shadow-black/15 animate-float",
        className,
      )}
      style={{ animationDelay }}
    >
      <div className={cn("h-9 w-9 shrink-0 rounded-lg grid place-items-center", iconBg)}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] sm:text-xs font-bold text-[#0a4d2c] leading-tight">{title}</div>
        <div className="text-[10px] text-[#0a4d2c]/65">{subtitle}</div>
      </div>
    </div>
  );
}
