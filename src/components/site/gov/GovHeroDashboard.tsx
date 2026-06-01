import {
  AlertTriangle,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { GovFloatingBadge } from "@/components/site/gov/GovFloatingBadge";

export function GovHeroDashboard() {
  return (
    <div className="relative pb-8 sm:pb-4">
      <div className="absolute -inset-4 bg-[#FFCD07]/20 blur-3xl rounded-[2rem] opacity-40" aria-hidden />

      <div className="relative rounded-lg border-2 border-white/25 bg-white shadow-2xl overflow-visible">
        <div className="bg-[#071D41] px-4 py-2.5 flex items-center justify-between rounded-t-md">
          <span className="text-[10px] sm:text-xs font-mono text-white/85">
            portal.cadbrasil.com.br/sicaf
          </span>
          <span className="text-[10px] font-bold text-[#FFCD07] flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFCD07] pulse-ring" />
            Online
          </span>
        </div>

        <div className="rounded-b-lg bg-[#f0f7f2] border-t border-[#168821]/10 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#168821]/15 bg-white">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-[#168821] grid place-items-center text-white text-xs font-bold">
                C
              </div>
              <div>
                <div className="text-xs font-bold text-[#0a4d2c]">CNPJ 12.345.678/0001-90</div>
                <div className="text-[10px] text-[#0a4d2c]/65">Fornecedora Exemplo LTDA</div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-[#168821] px-2.5 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
              Regular
            </span>
          </div>

          <div className="p-3 sm:p-4 grid grid-cols-6 gap-2 sm:gap-3">
            <div className="col-span-6 sm:col-span-3 row-span-2 relative rounded-lg border border-[#168821]/20 bg-white p-3 sm:p-4 overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-bold text-[#168821]">
                <Sparkles className="h-3.5 w-3.5" /> Análise IA em andamento
              </div>
              <p className="mt-2 text-sm font-semibold text-[#0a4d2c] leading-snug">
                Verificando 14 documentos no SICAF…
              </p>
              <div className="mt-3 space-y-2">
                {[
                  { l: "CND Federal", ok: true },
                  { l: "FGTS", ok: true },
                  { l: "CND Estadual", ok: false },
                  { l: "CND Municipal", ok: true },
                ].map((r) => (
                  <div key={r.l} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2 text-[#0a4d2c]">
                      <FileText className="h-3.5 w-3.5 text-[#168821]/70" />
                      {r.l}
                    </span>
                    {r.ok ? (
                      <span className="inline-flex items-center gap-1 text-[#168821] font-semibold">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Válido
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-700 font-semibold">
                        <AlertTriangle className="h-3.5 w-3.5" /> Vence 12d
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#168821] to-transparent animate-scan top-1/2 opacity-60" />
            </div>

            <div className="col-span-3 sm:col-span-3 rounded-lg border border-[#168821]/20 bg-white p-3">
              <div className="text-[10px] font-semibold text-[#0a4d2c]/70 uppercase tracking-wide">
                Níveis SICAF
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                {["I", "II", "III", "IV", "V", "VI"].map((n, i) => (
                  <div
                    key={n}
                    className={`h-7 sm:h-8 rounded-md grid place-items-center text-[10px] sm:text-[11px] font-bold ${
                      i < 5
                        ? "bg-[#168821]/15 text-[#168821] border border-[#168821]/30"
                        : "bg-[#f0f7f2] text-[#0a4d2c]/40 border border-[#168821]/10"
                    }`}
                  >
                    {n}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[10px] text-[#0a4d2c]/60">5 de 6 níveis ativos</p>
            </div>

            <div className="col-span-3 sm:col-span-3 rounded-lg border border-[#168821]/20 bg-white p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-[#0a4d2c]/70">Regularidade fiscal</span>
                <TrendingUp className="h-3.5 w-3.5 text-[#168821]" />
              </div>
              <div className="mt-1 text-xl sm:text-2xl font-bold text-[#0a4d2c]">98%</div>
              <div className="mt-2 h-1.5 rounded-full bg-[#e8f3eb] overflow-hidden">
                <div className="h-full w-[98%] bg-[#168821] rounded-full" />
              </div>
            </div>

            <div className="col-span-6 rounded-lg border border-amber-500/35 bg-amber-50 p-2.5 sm:p-3 flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-amber-500/20 grid place-items-center shrink-0">
                <AlertTriangle className="h-4 w-4 text-amber-700" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#0a4d2c]">1 pendência detectada</p>
                <p className="text-[10px] sm:text-[11px] text-[#0a4d2c]/70 truncate">
                  CND Estadual vence em 12 dias — renovação pela CADBRASIL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GovFloatingBadge
        icon={ShieldCheck}
        title="CRC emitido"
        subtitle="há 2 minutos"
        className="absolute -left-2 sm:-left-6 bottom-16 sm:bottom-20 z-10 max-w-[200px] hidden sm:flex"
      />

      <GovFloatingBadge
        icon={CheckCircle2}
        title="CND Federal validada"
        subtitle="há 8 minutos"
        variant="info"
        animationDelay="0.8s"
        className="absolute -right-2 sm:-right-6 bottom-8 sm:bottom-12 z-10 max-w-[210px] hidden sm:flex"
      />
    </div>
  );
}
