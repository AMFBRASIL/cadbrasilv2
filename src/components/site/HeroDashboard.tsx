import { CheckCircle2, FileText, ShieldCheck, AlertTriangle, Sparkles, TrendingUp } from "lucide-react";

export function HeroDashboard() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-[2.5rem]" aria-hidden />

      <div className="relative rounded-3xl glass shadow-glow p-3 sm:p-4">
        {/* window header */}
        <div className="flex items-center justify-between px-2 pb-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <div className="text-[10px] sm:text-xs font-mono text-muted-foreground">
            painel.cadbrasil.com.br/sicaf
          </div>
          <div className="w-10" />
        </div>

        <div className="rounded-2xl bg-background border border-border overflow-hidden">
          {/* top bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-brand grid place-items-center text-brand-foreground text-xs font-bold">C</div>
              <div>
                <div className="text-xs font-semibold">CNPJ 12.345.678/0001-90</div>
                <div className="text-[10px] text-muted-foreground">Fornecedora Exemplo LTDA</div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-success bg-success/10 px-2.5 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-success pulse-ring" /> Regular
            </span>
          </div>

          <div className="p-4 grid grid-cols-6 gap-3">
            {/* IA scan card */}
            <div className="col-span-6 sm:col-span-3 row-span-2 relative rounded-xl border border-border bg-gradient-to-br from-card to-accent p-4 overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand">
                <Sparkles className="h-3.5 w-3.5" /> Análise IA em andamento
              </div>
              <div className="mt-3 text-sm font-display font-semibold leading-tight">
                Verificando 14 documentos no SICAF…
              </div>
              <div className="mt-4 space-y-2">
                {[
                  { l: "CND Federal", ok: true },
                  { l: "FGTS", ok: true },
                  { l: "CND Estadual", ok: false },
                  { l: "CND Municipal", ok: true },
                ].map((r) => (
                  <div key={r.l} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2">
                      <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                      {r.l}
                    </span>
                    {r.ok ? (
                      <span className="inline-flex items-center gap-1 text-success font-semibold">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Válido
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-600 font-semibold">
                        <AlertTriangle className="h-3.5 w-3.5" /> Vence 12d
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent animate-scan top-1/2" />
            </div>

            {/* Niveis SICAF */}
            <div className="col-span-3 sm:col-span-3 rounded-xl border border-border bg-card p-4">
              <div className="text-[11px] text-muted-foreground font-medium">Níveis SICAF</div>
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                {["I", "II", "III", "IV", "V", "VI"].map((n, i) => (
                  <div
                    key={n}
                    className={`h-8 rounded-md grid place-items-center text-[11px] font-bold ${
                      i < 5
                        ? "bg-success/15 text-success border border-success/30"
                        : "bg-muted text-muted-foreground border border-border"
                    }`}
                  >
                    {n}
                  </div>
                ))}
              </div>
              <div className="mt-2 text-[10px] text-muted-foreground">5 de 6 níveis ativos</div>
            </div>

            {/* Pontuação */}
            <div className="col-span-3 sm:col-span-3 rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] text-muted-foreground font-medium">Regularidade fiscal</div>
                <TrendingUp className="h-3.5 w-3.5 text-success" />
              </div>
              <div className="mt-1 text-2xl font-display font-bold">98%</div>
              <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[98%] bg-gradient-success" />
              </div>
            </div>

            {/* Alerts */}
            <div className="col-span-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-3 flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-amber-500/15 grid place-items-center">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold">1 pendência detectada automaticamente</div>
                <div className="text-[11px] text-muted-foreground">CND Estadual vence em 12 dias — renovação iniciada pela CADBRASIL.</div>
              </div>
              <button className="text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-foreground text-background">
                Ver detalhes
              </button>
            </div>
          </div>
        </div>

        {/* floating badge */}
        <div className="absolute -left-4 sm:-left-8 bottom-10 hidden sm:flex items-center gap-2 glass rounded-2xl shadow-soft px-3 py-2 animate-float">
          <div className="h-8 w-8 rounded-lg bg-success/15 grid place-items-center">
            <ShieldCheck className="h-4 w-4 text-success" />
          </div>
          <div>
            <div className="text-[11px] font-semibold leading-tight">CRC emitido</div>
            <div className="text-[10px] text-muted-foreground">há 2 minutos</div>
          </div>
        </div>
      </div>
    </div>
  );
}
