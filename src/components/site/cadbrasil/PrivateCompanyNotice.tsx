import { Building2 } from "lucide-react";
import { privateNotice } from "@/data/cadbrasilPage";

export function PrivateCompanyNotice() {
  return (
    <aside
      aria-labelledby="aviso-empresa-privada"
      className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card"
    >
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-brand" aria-hidden />
      <div className="flex flex-col sm:flex-row gap-5">
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand"
          aria-hidden
        >
          <Building2 className="h-6 w-6" />
        </span>
        <div>
          <h2
            id="aviso-empresa-privada"
            className="text-sm font-bold uppercase tracking-[0.14em] text-foreground"
          >
            {privateNotice.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            {privateNotice.text}
          </p>
        </div>
      </div>
    </aside>
  );
}
