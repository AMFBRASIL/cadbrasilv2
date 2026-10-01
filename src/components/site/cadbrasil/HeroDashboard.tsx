import { BellRing, CheckCircle2, FileSearch, FolderCheck, Radar, Sparkles } from "lucide-react";

const rows = [
  { icon: FolderCheck, label: "Documentos organizados", value: "12 de 14", tone: "text-success" },
  { icon: BellRing, label: "Vencimentos nos próximos 30 dias", value: "3 alertas", tone: "text-amber-500" },
  { icon: Radar, label: "Oportunidades compatíveis", value: "37 novas", tone: "text-[oklch(0.82_0.1_250)]" },
] as const;

/** Ilustração do painel CADBrasil — conteúdo decorativo, sem dados reais. */
export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-25 blur-3xl" />
      <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-5 sm:p-6 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-brand text-brand-foreground text-xs font-bold">
              C
            </span>
            Painel do fornecedor
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-[11px] font-semibold text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> Ao vivo
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {rows.map(({ icon: Icon, label, value, tone }) => (
            <div
              key={label}
              className="flex items-center justify-between gap-3 rounded-2xl bg-white/[0.06] border border-white/10 px-4 py-3"
            >
              <div className="flex items-center gap-3 text-sm text-white/85">
                <Icon className={`h-4 w-4 ${tone}`} />
                {label}
              </div>
              <span className="text-sm font-semibold text-white whitespace-nowrap">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[oklch(0.82_0.08_250)]">
            <Sparkles className="h-3.5 w-3.5" /> Análise de edital com IA
          </div>
          <div className="mt-3 flex items-start gap-3">
            <FileSearch className="mt-0.5 h-5 w-5 shrink-0 text-white/80" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-white">Pregão eletrônico · Material de escritório</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[82%] rounded-full bg-gradient-brand" />
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/75">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Requisitos mapeados
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Prazos destacados
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Documentos listados
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Riscos sinalizados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-4 hidden sm:flex animate-float items-center gap-2 rounded-2xl border border-white/15 bg-[oklch(0.26_0.08_260)] px-4 py-3 text-xs font-medium text-white shadow-xl">
        <BellRing className="h-4 w-4 text-amber-400" /> Alerta: prazo do edital em 5 dias
      </div>
    </div>
  );
}
