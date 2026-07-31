import { BadgeCheck, CheckCircle2, FileText, ShieldCheck } from "lucide-react";

const DOCUMENTOS = ["CND Federal", "FGTS", "CND Estadual", "CND Municipal", "CNDT Trabalhista"];

export function GovHeroDashboard() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 bg-[#FFCD07]/20 blur-3xl rounded-[2rem] opacity-40"
        aria-hidden
      />

      <div className="relative rounded-lg border-2 border-white/25 bg-white shadow-2xl overflow-hidden">
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
            <div className="col-span-6 rounded-lg border border-[#168821]/30 bg-[#168821] p-3 sm:p-4 flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-full bg-white/15 grid place-items-center">
                <BadgeCheck className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm sm:text-base font-bold text-white leading-tight">
                  Cadastro SICAF concluído
                </p>
                <p className="text-[11px] sm:text-xs text-white/85">
                  CRC disponível para emissão · empresa apta a licitar
                </p>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3 rounded-lg border border-[#168821]/20 bg-white p-3 sm:p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#168821]">
                <ShieldCheck className="h-3.5 w-3.5" /> Certidões validadas
              </div>
              <div className="mt-3 space-y-2">
                {DOCUMENTOS.map((doc) => (
                  <div key={doc} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2 text-[#0a4d2c]">
                      <FileText className="h-3.5 w-3.5 text-[#168821]/70" />
                      {doc}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#168821] font-semibold">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Válida
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-3 sm:col-span-3 rounded-lg border border-[#168821]/20 bg-white p-3">
              <div className="text-[10px] font-semibold text-[#0a4d2c]/70 uppercase tracking-wide">
                Níveis SICAF
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                {["I", "II", "III", "IV", "V", "VI"].map((n) => (
                  <div
                    key={n}
                    className="h-7 sm:h-8 rounded-md grid place-items-center text-[10px] sm:text-[11px] font-bold bg-[#168821]/15 text-[#168821] border border-[#168821]/30"
                  >
                    {n}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[10px] text-[#0a4d2c]/60">6 de 6 níveis concluídos</p>
            </div>

            <div className="col-span-3 sm:col-span-3 rounded-lg border border-[#168821]/20 bg-white p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-[#0a4d2c]/70">
                  Documentos conferidos
                </span>
                <CheckCircle2 className="h-3.5 w-3.5 text-[#168821]" />
              </div>
              <div className="mt-1 text-xl sm:text-2xl font-bold text-[#0a4d2c]">14 / 14</div>
              <div className="mt-2 h-1.5 rounded-full bg-[#e8f3eb] overflow-hidden">
                <div className="h-full w-full bg-[#168821] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
