import {
  ShieldCheck, Sparkles, Headphones, Gauge, FileCheck2, Workflow,
  Bot, Download, MonitorSmartphone, RefreshCw, FolderSync, AlertTriangle,
  CheckCircle2, ArrowRight, Building2, Award, Clock, Users, Search, Lock, BadgeCheck,
} from "lucide-react";
import { useMemo, useState } from "react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { openWhatsApp } from "@/lib/whatsapp";

export function ServiceStatusBar() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm">
        <span className="inline-flex items-center gap-2 text-success font-semibold">
          <span className="h-2 w-2 rounded-full bg-success pulse-ring" /> Atendimento online agora
        </span>
        <span className="text-muted-foreground">Tempo médio de resposta: <strong className="text-foreground">3 minutos</strong></span>
        <span className="text-muted-foreground">Último SICAF regularizado: <strong className="text-foreground">há 18 minutos</strong></span>
      </div>
    </section>
  );
}

export function LogosBar() {
  return (
    <div className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs sm:text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">+15 anos no mercado</span>
        <span className="hidden sm:inline opacity-30">•</span>
        <span>Milhares de fornecedores atendidos</span>
        <span className="hidden sm:inline opacity-30">•</span>
        <span>Especialistas em licitações públicas</span>
        <span className="hidden sm:inline opacity-30">•</span>
        <span>Integrado ao Compras.gov.br</span>
      </div>
    </div>
  );
}

export function WhatIsSicaf() {
  return (
    <section id="sicaf" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            <Sparkles className="h-3.5 w-3.5" /> O que é SICAF
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-balance leading-[1.05]">
            O passaporte da sua empresa para <span className="text-brand">vender ao governo</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            O SICAF (Sistema de Cadastramento Unificado de Fornecedores) é o registro
            obrigatório para qualquer empresa que queira participar de licitações
            públicas no Brasil. Sem ele, sua empresa simplesmente não compete.
          </p>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            A CADBRASIL cuida de <span className="text-foreground font-semibold">tudo</span> —
            do cadastro inicial à renovação automática de certidões — com tecnologia,
            IA e atendimento humano especializado.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow">
              Quero ser fornecedor do governo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { i: Building2, t: "Órgãos públicos", v: "+200 mil", d: "compram via SICAF" },
            { i: Award, t: "Volume anual", v: "R$ 1 tri+", d: "em licitações no país" },
            { i: Clock, t: "Tempo médio", v: "24h", d: "para regularizar com a CADBRASIL" },
            { i: Users, t: "Clientes ativos", v: "+8.000", d: "fornecedores atendidos" },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl bg-card border border-border p-5 shadow-card hover:shadow-soft transition">
              <s.i className="h-5 w-5 text-brand" />
              <div className="mt-4 text-3xl font-display font-bold tracking-tight">{s.v}</div>
              <div className="text-xs font-semibold text-foreground mt-1">{s.t}</div>
              <div className="text-xs text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { i: MonitorSmartphone, t: "Fale com a CADBRASIL", d: "WhatsApp, formulário ou Assistente — você escolhe. Resposta em minutos." },
    { i: FileCheck2, t: "Enviamos a checklist", d: "Mostramos exatamente quais documentos precisamos. Sem burocracia." },
    { i: Bot, t: "IA analisa tudo", d: "Nossa tecnologia valida cada documento, identifica pendências e prepara o cadastro." },
    { i: ShieldCheck, t: "SICAF regularizado", d: "Você recebe o CRC, todos os níveis ativos e suporte contínuo de especialistas." },
  ];
  return (
    <section id="processo" className="py-24 sm:py-32 bg-gradient-to-b from-background to-accent/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            <Workflow className="h-3.5 w-3.5" /> Como funciona
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance">
            4 passos. Zero dor de cabeça.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um processo desenhado para quem não tem tempo a perder. Nós cuidamos da parte chata.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.t} className="relative rounded-2xl bg-card border border-border p-6 shadow-card hover:-translate-y-1 transition">
              <div className="absolute -top-3 left-6 text-[10px] font-bold tracking-widest text-brand bg-background px-2 py-0.5 rounded-full border border-border">
                PASSO {String(i + 1).padStart(2, "0")}
              </div>
              <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center text-brand-foreground shadow-glow">
                <s.i className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReadinessCalculator() {
  const [answers, setAnswers] = useState({
    cadastro: "nao",
    certidoes: "nao",
    urgencia: "7d",
    experiencia: "baixa",
    volume: "1-2",
  });

  const score = useMemo(() => {
    let base = 0;
    base += answers.cadastro === "sim" ? 25 : 0;
    base += answers.certidoes === "sim" ? 25 : 0;
    base += answers.urgencia === "24h" ? 10 : answers.urgencia === "7d" ? 20 : 25;
    base += answers.experiencia === "alta" ? 20 : answers.experiencia === "media" ? 14 : 8;
    base += answers.volume === "5+" ? 20 : answers.volume === "3-4" ? 14 : 8;
    return Math.min(100, base);
  }, [answers]);

  const readinessLabel = score >= 75 ? "Pronto para licitar" : score >= 45 ? "Precisa de ajustes" : "Risco alto sem suporte";
  const readinessHint = score >= 75
    ? "Seu cenário está avançado. Podemos acelerar o fechamento em até 24h."
    : score >= 45
      ? "Com alguns ajustes de documentação e certidões, sua empresa pode disputar editais rapidamente."
      : "Há pontos críticos no seu cadastro atual. Recomendamos diagnóstico com especialista.";

  return (
    <section className="py-24 sm:py-32 bg-accent/20">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            <Gauge className="h-3.5 w-3.5" /> Calculadora SICAF
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance">
            Descubra seu nível de prontidão em 1 minuto.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Responda 5 perguntas rápidas e veja o risco atual da sua empresa para vender ao governo.
          </p>
        </div>

        <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-card">
          <div className="grid gap-4 text-sm">
            <Question
              label="Sua empresa já possui cadastro ativo no SICAF?"
              value={answers.cadastro}
              onChange={(v) => setAnswers((s) => ({ ...s, cadastro: v }))}
              options={[{ value: "sim", label: "Sim" }, { value: "nao", label: "Não" }]}
            />
            <Question
              label="As principais certidões estão válidas hoje?"
              value={answers.certidoes}
              onChange={(v) => setAnswers((s) => ({ ...s, certidoes: v }))}
              options={[{ value: "sim", label: "Sim" }, { value: "nao", label: "Não / Não sei" }]}
            />
            <Question
              label="Qual a sua urgência para começar a licitar?"
              value={answers.urgencia}
              onChange={(v) => setAnswers((s) => ({ ...s, urgencia: v }))}
              options={[{ value: "24h", label: "Até 24h" }, { value: "7d", label: "Até 7 dias" }, { value: "30d", label: "Até 30 dias" }]}
            />
            <Question
              label="Seu time tem experiência com habilitação em licitações?"
              value={answers.experiencia}
              onChange={(v) => setAnswers((s) => ({ ...s, experiencia: v }))}
              options={[{ value: "baixa", label: "Baixa" }, { value: "media", label: "Média" }, { value: "alta", label: "Alta" }]}
            />
            <Question
              label="Quantos editais/mês pretendem disputar?"
              value={answers.volume}
              onChange={(v) => setAnswers((s) => ({ ...s, volume: v }))}
              options={[{ value: "1-2", label: "1 a 2" }, { value: "3-4", label: "3 a 4" }, { value: "5+", label: "5+" }]}
            />
          </div>

          <div className="mt-6 rounded-2xl bg-accent border border-border p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Nível de prontidão</div>
            <div className="mt-1 text-2xl font-bold">{score}%</div>
            <div className="mt-1 font-semibold text-brand">{readinessLabel}</div>
            <p className="mt-2 text-sm text-muted-foreground">{readinessHint}</p>
            <WhatsAppLink
              intent="Quero receber diagnóstico de prontidão SICAF."
              detail={`Nível de prontidão no simulador: ${score}% (${readinessLabel}).`}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-brand text-brand-foreground font-semibold"
            >
              Receber diagnóstico no WhatsApp <ArrowRight className="h-4 w-4" />
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Question({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <div className="mb-2 font-medium text-foreground">{label}</div>
      <div className="grid grid-cols-3 gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-xl border px-3 py-2 text-xs sm:text-sm transition ${
              value === opt.value
                ? "bg-brand text-brand-foreground border-brand"
                : "bg-background border-border hover:bg-accent"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </label>
  );
}

export function DocumentChecklist() {
  const docs = [
    "Contrato social atualizado",
    "Cartão CNPJ",
    "RG e CPF dos sócios",
    "Comprovante de endereço",
    "CND Federal",
    "FGTS",
    "CNDT",
    "Balanço patrimonial (quando aplicável)",
  ];

  const [checked, setChecked] = useState<boolean[]>(docs.map(() => false));
  const missing = checked.filter((x) => !x).length;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            <FileCheck2 className="h-3.5 w-3.5" /> Checklist interativo
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance">
            Veja em segundos o que falta para seu SICAF.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Marque os documentos que você já possui. Nós cuidamos de organizar o restante e acelerar a regularização.
          </p>
        </div>

        <div className="rounded-3xl bg-card border border-border p-6 shadow-card">
          <div className="space-y-2">
            {docs.map((doc, idx) => (
              <label key={doc} className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5 hover:bg-accent">
                <input
                  type="checkbox"
                  checked={checked[idx]}
                  onChange={() =>
                    setChecked((state) => state.map((v, i) => (i === idx ? !v : v)))
                  }
                  className="h-4 w-4 accent-[oklch(0.53_0.13_258)]"
                />
                <span className="text-sm">{doc}</span>
              </label>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-accent border border-border p-4">
            <div className="text-sm">
              {missing === 0 ? (
                <span className="font-semibold text-success">Checklist completa. Você está pronto para avançar.</span>
              ) : (
                <span><strong>{missing}</strong> documento(s) pendente(s). Enviamos a lista personalizada no WhatsApp.</span>
              )}
            </div>
            <WhatsAppLink
              intent="Quero minha checklist SICAF personalizada."
              detail={
                missing === 0
                  ? "Checklist interativa: todos os documentos marcados como OK."
                  : `Checklist interativa: faltam ${missing} documento(s) na lista.`
              }
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              Receber checklist personalizada <ArrowRight className="h-4 w-4" />
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  const items = [
    { i: Gauge, t: "Velocidade absurda", d: "SICAF regularizado em até 24h. Nada de esperar semanas." },
    { i: ShieldCheck, t: "Segurança jurídica", d: "Equipe que entende de licitações e protege seu CNPJ." },
    { i: Bot, t: "IA + humanos", d: "Tecnologia que valida, especialista que decide. O melhor dos dois mundos." },
    { i: RefreshCw, t: "Atualização automática", d: "Monitoramos suas certidões 24/7. Nunca mais um vencimento perdido." },
    { i: FolderSync, t: "Gestão documental", d: "Tudo organizado em um painel — acesso a qualquer momento." },
    { i: Headphones, t: "Suporte de verdade", d: "Atendimento humano via WhatsApp, telefone ou AnyDesk." },
  ];
  return (
    <section id="beneficios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            <Award className="h-3.5 w-3.5" /> Por que CADBRASIL
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance">
            Não somos despachantes. Somos engenharia para licitações.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b) => (
            <div key={b.t} className="group rounded-2xl bg-card border border-border p-7 hover:border-brand/40 hover:shadow-soft transition">
              <div className="h-12 w-12 rounded-2xl bg-accent text-brand group-hover:bg-gradient-brand group-hover:text-brand-foreground grid place-items-center transition">
                <b.i className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Assistant() {
  return (
    <section id="assistente" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-14 items-center text-brand-foreground">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold bg-white/15 text-white px-3 py-1.5 rounded-full backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Novidade 2026
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance">
            Assistente CADBRASIL — o jeito moderno de cuidar do seu SICAF.
          </h2>
          <p className="mt-5 text-lg text-white/80 leading-relaxed">
            Um aplicativo leve que se instala em minutos e conecta sua empresa diretamente
            aos nossos especialistas. IA analisa, identifica certidões vencidas e
            atualiza automaticamente — você só assiste.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Instalação simples em 1 clique",
              "Processo 100% guiado, passo a passo",
              "IA identifica certidões vencidas",
              "Atualização automática do SICAF",
              "Suporte remoto via AnyDesk integrado",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-brand font-semibold shadow-glow hover:bg-white/95 transition"
            >
              <Download className="h-4 w-4" /> Instalar Assistente Agora
            </a>
            <WhatsAppLink
              intent="Quero saber mais sobre o Assistente CADBRASIL."
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/20 backdrop-blur hover:bg-white/20 transition"
            >
              Falar com especialista
            </WhatsAppLink>
          </div>
        </div>

        {/* Mock app */}
        <div className="relative">
          <div className="rounded-3xl glass p-3 shadow-glow">
            <div className="rounded-2xl bg-[oklch(0.18_0.04_258)] text-white overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-white/10 grid place-items-center text-xs font-bold">C</div>
                  <span className="text-xs font-semibold">Assistente CADBRASIL</span>
                </div>
                <span className="text-[10px] text-emerald-300 inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" /> Conectado
                </span>
              </div>
              <div className="p-4 space-y-3 text-sm">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-start gap-3">
                  <Bot className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-white/60">Assistente</div>
                    <div>Encontrei 3 certidões para renovar. Posso iniciar agora?</div>
                  </div>
                </div>
                <div className="rounded-xl bg-emerald-400/10 border border-emerald-400/20 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-4 w-4 text-emerald-300 animate-spin" />
                    <div>
                      <div className="text-xs font-semibold">Renovando CND Federal…</div>
                      <div className="text-[11px] text-white/60">Receita Federal · 38%</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-300">38%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { l: "Concluídas", v: "12", c: "text-emerald-300" },
                    { l: "Em andamento", v: "3", c: "text-amber-300" },
                    { l: "Pendentes", v: "0", c: "text-white" },
                  ].map((x) => (
                    <div key={x.l} className="rounded-xl bg-white/5 border border-white/10 py-3">
                      <div className={`text-xl font-bold ${x.c}`}>{x.v}</div>
                      <div className="text-[10px] text-white/60">{x.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-2 glass rounded-2xl px-4 py-3 shadow-soft text-foreground animate-float">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <div className="text-xs">
                <div className="font-semibold">Alerta inteligente</div>
                <div className="text-muted-foreground">FGTS vence em 5 dias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const items = [
    { v: "+8.000", l: "fornecedores atendidos" },
    { v: "24h", l: "para regularizar" },
    { v: "+15 anos", l: "de experiência" },
    { v: "98%", l: "de satisfação" },
  ];
  return (
    <section className="py-16 border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-4xl sm:text-5xl font-display font-bold tracking-tight bg-gradient-brand bg-clip-text text-transparent">
              {s.v}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { q: "Em 18 horas tudo estava regularizado. Entramos no pregão da prefeitura no dia seguinte.", a: "Carla M.", r: "Diretora · Construtora ML · SP", kpi: "SICAF regularizado em 18h" },
    { q: "O Assistente CADBRASIL mudou tudo. Não me preocupo mais com vencimento de certidão.", a: "Roberto S.", r: "Sócio · Tech Supply · PR", kpi: "0 certidões vencidas em 9 meses" },
    { q: "Já fechei 4 contratos com órgãos públicos depois que a CADBRASIL cuidou do meu SICAF.", a: "Patrícia L.", r: "CEO · Alimentar SP · SP", kpi: "4 contratos após regularização" },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            Depoimentos
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance">
            Quem confiou na CADBRASIL, vendeu mais.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure key={t.a} className="rounded-2xl bg-card border border-border p-7 shadow-card flex flex-col">
              <div className="text-brand text-xl">★★★★★</div>
              <blockquote className="mt-4 text-foreground leading-relaxed flex-1">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-brand text-brand-foreground grid place-items-center font-bold">
                  {t.a[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.a}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
              <div className="mt-4 text-xs font-semibold text-brand bg-brand/10 rounded-lg px-3 py-2">
                {t.kpi}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  const rows = [
    { feature: "Tempo para regularização", cadbrasil: "Até 24h", semApoio: "1 a 4 semanas" },
    { feature: "Risco de desclassificação", cadbrasil: "Baixo (monitoramento ativo)", semApoio: "Alto (controle manual)" },
    { feature: "Renovação de certidões", cadbrasil: "Automática 24/7", semApoio: "Lembretes manuais" },
    { feature: "Acompanhamento", cadbrasil: "Painel + especialistas", semApoio: "Planilha/e-mail" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-accent/20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            <Search className="h-3.5 w-3.5" /> Comparativo prático
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance">
            Com CADBRASIL vs. sem suporte especializado.
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-accent/60">
              <tr className="text-left">
                <th className="p-4">Critério</th>
                <th className="p-4 text-brand">Com CADBRASIL</th>
                <th className="p-4">Sem suporte</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-t border-border">
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4 text-brand font-semibold">{row.cadbrasil}</td>
                  <td className="p-4 text-muted-foreground">{row.semApoio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function StartIn2Minutes() {
  const steps = [
    "Informe seu CNPJ e WhatsApp",
    "Receba checklist e diagnóstico inicial",
    "Envie os documentos e acompanhe no painel",
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            <Clock className="h-3.5 w-3.5" /> Comece em 2 minutos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
            Processo rápido para sair do zero e começar a licitar.
          </h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {steps.map((step, idx) => (
              <div key={step} className="rounded-2xl border border-border p-4">
                <div className="text-xs font-bold text-brand">PASSO {idx + 1}</div>
                <div className="mt-2 text-sm text-muted-foreground">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const [lead, setLead] = useState({ nome: "", whatsapp: "", cnpj: "" });

  const openLeadWhatsApp = () => {
    openWhatsApp({
      intent: "Quero iniciar cadastro ou regularização SICAF (formulário da home).",
      detail: [
        `Nome: ${lead.nome || "não informado"}`,
        `Telefone informado: ${lead.whatsapp || "não informado"}`,
        `CNPJ: ${lead.cnpj || "não informado"}`,
      ].join("\n"),
    });
  };

  const openGeneralWhatsApp = () => {
    openWhatsApp({
      intent: "Preciso de atendimento imediato sobre SICAF (CTA final da home).",
    });
  };

  return (
    <section id="cta" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-10 sm:p-16 text-brand-foreground shadow-glow">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="text-4xl sm:text-6xl font-bold leading-[1] text-balance">
              Regularize seu SICAF hoje mesmo.
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed">
              Nossa equipe especializada e nossa tecnologia inteligente ajudam você
              a participar de licitações sem dores de cabeça.
            </p>
            <div className="mt-9 grid lg:grid-cols-[1fr_auto] gap-6 items-end">
              <div className="grid sm:grid-cols-3 gap-3">
                <input
                  value={lead.nome}
                  onChange={(e) => setLead((s) => ({ ...s, nome: e.target.value }))}
                  placeholder="Seu nome"
                  className="rounded-xl px-4 py-3 bg-white text-foreground placeholder:text-muted-foreground"
                />
                <input
                  value={lead.whatsapp}
                  onChange={(e) => setLead((s) => ({ ...s, whatsapp: e.target.value }))}
                  placeholder="WhatsApp"
                  className="rounded-xl px-4 py-3 bg-white text-foreground placeholder:text-muted-foreground"
                />
                <input
                  value={lead.cnpj}
                  onChange={(e) => setLead((s) => ({ ...s, cnpj: e.target.value }))}
                  placeholder="CNPJ"
                  className="rounded-xl px-4 py-3 bg-white text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openLeadWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white text-brand font-bold shadow-soft hover:scale-[1.02] transition"
              >
                🚀 Começar Agora
              </button>
              <button
                type="button"
                onClick={openGeneralWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 border border-white/30 text-white font-bold backdrop-blur hover:bg-white/20 transition"
              >
                💬 Atendimento Imediato
              </button>
              </div>
            </div>
            <div className="mt-6 text-sm text-white/70">
              Sem letras miúdas. Sem amarras. Pague apenas pelo serviço contratado.
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                <Lock className="h-3.5 w-3.5" /> Dados protegidos (LGPD)
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                <BadgeCheck className="h-3.5 w-3.5" /> Atendimento com especialistas
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Sem compromisso na análise inicial
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
