import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileCheck2,
  ListTree,
  ShieldCheck,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import {
  documentosSicaf,
  errosComuns,
  guiaFaqs,
  guiaToc,
  niveisSicaf,
  passosOficiais,
  relatedGuides,
  usefulLinks,
} from "@/data/guiaCadastroSicaf";
import { PageShell, PageHero, InlineCta, CADASTRO_URL, WHATSAPP_URL } from "@/components/site/PageShell";

const PUBLISHED = "2026-01-15";
const MODIFIED = "2026-05-27";

export function GuiaCadastroSicafPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Início", to: "/" },
        { label: "Guia Cadastro SICAF" },
      ]}
    >
      <PageHero
        eyebrow="Guia · Licitações e SICAF · 2026"
        title="Cadastro SICAF:"
        highlight="passo a passo completo"
        description="Tutorial definitivo para credenciar sua empresa no SICAF: documentos, níveis de habilitação, certificado digital, prazos, renovação e como acelerar com tecnologia CADBRASIL."
        primaryCta={{ label: "Fazer Cadastro SICAF", href: CADASTRO_URL, external: true }}
        secondaryCta={{ label: "Falar com Especialista", href: WHATSAPP_URL, external: true }}
      />

      <div className="mx-auto max-w-7xl px-4 pb-8">
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span>Publicado: {PUBLISHED}</span>
          <span aria-hidden>·</span>
          <span>Atualizado: {MODIFIED}</span>
          <span aria-hidden>·</span>
          <span>Tempo de leitura: ~12 min</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[240px_1fr] gap-10 items-start pb-16">
        <nav
          aria-label="Índice do guia"
          className="lg:sticky lg:top-28 rounded-2xl border border-border bg-card p-5 shadow-card hidden lg:block"
        >
          <div className="flex items-center gap-2 text-sm font-semibold mb-4">
            <ListTree className="h-4 w-4 text-brand" /> Neste guia
          </div>
          <ol className="space-y-2 text-sm">
            {guiaToc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-muted-foreground hover:text-brand transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="min-w-0">
          <section id="o-que-e" className="scroll-mt-28 mb-16">
            <h2 className="text-3xl font-bold mb-4">O que é o SICAF</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O <strong className="text-foreground">SICAF (Sistema de Cadastramento Unificado de Fornecedores)</strong>{" "}
              é o cadastro nacional que centraliza a habilitação de empresas que desejam vender para o Governo Federal.
              Ele integra o ecossistema do{" "}
              <a href="https://www.gov.br/compras" target="_blank" rel="noreferrer" className="text-brand underline underline-offset-4">
                Compras.gov.br
              </a>{" "}
              e é adotado por centenas de órgãos estaduais e municipais.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Em termos práticos: sem SICAF ativo e <strong className="text-foreground">regular</strong>, sua empresa não
              participa de pregões, dispensas e contratos administrativos que exijam habilitação unificada.
            </p>
          </section>

          <section id="obrigatoriedade" className="scroll-mt-28 mb-16">
            <h2 className="text-3xl font-bold mb-4">O SICAF é obrigatório?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: "Licitações federais", d: "Obrigatório para fornecedores do Executivo Federal.", ok: true },
                { t: "Estados e municípios", d: "Muitos aceitam ou exigem consulta ao SICAF na habilitação.", ok: true },
                { t: "Dispensa e inexigibilidade", d: "Também exigem regularidade cadastral do fornecedor.", ok: true },
                { t: "Contratos já firmados", d: "Irregularidade pode impedir pagamento e renovações.", ok: false },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl border border-border bg-card p-5">
                  <CheckCircle2 className={`h-5 w-5 mb-2 ${item.ok ? "text-success" : "text-brand"}`} />
                  <h3 className="font-semibold">{item.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="passo-a-passo" className="scroll-mt-28 mb-16">
            <h2 className="text-3xl font-bold mb-2">Passo a passo oficial do cadastro SICAF</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Fluxo completo no portal do governo. Use este roteiro como referência técnica — ou deixe a CADBRASIL executar
              cada etapa com validação por IA e especialistas.
            </p>
            <ol className="space-y-4">
              {passosOficiais.map((step) => (
                <li
                  key={step.n}
                  className="rounded-2xl border border-border bg-card p-6 grid sm:grid-cols-[auto_1fr_auto] gap-4 items-start"
                >
                  <span className="text-xs font-bold tracking-widest text-brand bg-brand/10 px-2 py-1 rounded-full">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{step.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap sm:text-right flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {step.time}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section id="niveis" className="scroll-mt-28 mb-16 py-12 -mx-4 px-4 sm:mx-0 sm:px-0 rounded-3xl bg-accent/30">
            <h2 className="text-3xl font-bold mb-4">Níveis de cadastramento (I a VI)</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Cada edital pode exigir um conjunto diferente de níveis. Cadastrar só o Nível I é um dos erros mais comuns.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {niveisSicaf.map((n) => (
                <div key={n.n} className="rounded-2xl bg-card border border-border p-5">
                  <div className="h-10 w-10 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center font-bold">
                    {n.n}
                  </div>
                  <h3 className="mt-4 font-semibold">{n.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="documentos" className="scroll-mt-28 mb-16">
            <h2 className="text-3xl font-bold mb-4">Documentos para cadastro SICAF</h2>
            <p className="text-muted-foreground mb-6">
              Checklist técnico por tipo de exigência. A lista exata varia conforme porte, objeto e níveis que você pretende habilitar.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-accent/60 text-left">
                  <tr>
                    <th className="p-4 font-semibold">Documento</th>
                    <th className="p-4 font-semibold">Níveis</th>
                    <th className="p-4 font-semibold">Validade típica</th>
                  </tr>
                </thead>
                <tbody>
                  {documentosSicaf.map((row) => (
                    <tr key={row.doc} className="border-t border-border">
                      <td className="p-4 font-medium">{row.doc}</td>
                      <td className="p-4 text-muted-foreground">{row.niveis}</td>
                      <td className="p-4 text-muted-foreground">{row.prazo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="certificado-digital" className="scroll-mt-28 mb-16">
            <h2 className="text-3xl font-bold mb-4">Certificado digital e-CNPJ</h2>
            <p className="text-muted-foreground leading-relaxed">
              O certificado digital <strong className="text-foreground">e-CNPJ (A1 ou A3)</strong> é requisito de acesso ao
              Compras.gov.br. Sem ele, não é possível credenciar, assinar declarações nem manter o cadastro atualizado.
              Modelos A1 (arquivo no computador) costumam ser mais práticos para equipes remotas; A3 (token/cartão) é comum em
              empresas com política de segurança mais rígida.
            </p>
          </section>

          <section id="custos-prazos" className="scroll-mt-28 mb-16 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold mb-3">Custos</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /> Credenciamento oficial: gratuito</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /> Certificado digital: pago à AC credenciada</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /> Regularização fiscal: conforme débitos</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /> Assessoria especializada: sob consulta</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold mb-3">Prazos</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Clock className="h-4 w-4 text-brand shrink-0 mt-0.5" /> DIY sem pendências: 1 a 4 semanas</li>
                <li className="flex gap-2"><Clock className="h-4 w-4 text-brand shrink-0 mt-0.5" /> Com CADBRASIL: até 24 horas*</li>
                <li className="flex gap-2"><Clock className="h-4 w-4 text-brand shrink-0 mt-0.5" /> Renovação de certidões: contínua</li>
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">* Com documentação completa e sem bloqueios fiscais complexos.</p>
            </div>
          </section>

          <section id="renovacao" className="scroll-mt-28 mb-16">
            <h2 className="text-3xl font-bold mb-4">Renovação e atualização do SICAF</h2>
            <p className="text-muted-foreground leading-relaxed">
              O cadastro não “vence” como um único bloco — as <strong className="text-foreground">certidões vencem</strong>.
              CND Federal, FGTS e CNDT costumam ter validade de 180 dias. A CADBRASIL monitora vencimentos 24/7 com IA e renova
              proativamente pelo{" "}
              <Link to="/assistente" className="text-brand underline underline-offset-4">Assistente CADBRASIL</Link>.
            </p>
          </section>

          <section id="erros-comuns" className="scroll-mt-28 mb-16">
            <h2 className="text-3xl font-bold mb-4">Erros comuns no cadastro</h2>
            <ul className="space-y-3">
              {errosComuns.map((err) => (
                <li key={err} className="flex gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  {err}
                </li>
              ))}
            </ul>
          </section>

          <section id="cadbrasil" className="scroll-mt-28 mb-16">
            <div className="rounded-3xl bg-gradient-brand p-8 sm:p-10 text-brand-foreground shadow-glow">
              <span className="inline-flex items-center gap-2 text-xs font-semibold bg-white/15 px-3 py-1.5 rounded-full">
                <Sparkles className="h-3.5 w-3.5" /> Tecnologia + especialistas
              </span>
              <h2 className="mt-4 text-3xl font-bold">Cadastro SICAF com a CADBRASIL</h2>
              <p className="mt-4 text-white/85 max-w-2xl leading-relaxed">
                Em vez de navegar sozinho por dezenas de telas e exigências, você envia os documentos e nossa IA valida cada
                item antes da submissão. Especialistas concluem o credenciamento, emitem o CRC e mantêm seu cadastro regular.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Checklist personalizada por CNPJ",
                  "Validação documental com IA",
                  "Entrega em até 24 horas",
                  "Monitoramento e renovação automática",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Bot className="h-4 w-4" /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CADASTRO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand font-semibold"
                >
                  Começar cadastro <ArrowRight className="h-4 w-4" />
                </a>
                <Link to="/como-funciona" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/30 font-semibold">
                  Ver processo CADBRASIL
                </Link>
              </div>
            </div>
          </section>

          <section id="faq" className="scroll-mt-28 mb-16">
            <h2 className="text-3xl font-bold mb-8">Perguntas frequentes sobre cadastro SICAF</h2>
            <div className="space-y-4">
              {guiaFaqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-card overflow-hidden">
                  <summary className="cursor-pointer p-5 font-semibold list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-brand text-xl group-open:rotate-45 transition">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-brand" /> Conteúdo relacionado
              </h2>
              <ul className="space-y-2">
                {relatedGuides.map((g) => (
                  <li key={g.to}>
                    <Link to={g.to} className="text-brand hover:underline underline-offset-4 text-sm font-medium">
                      {g.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-brand" /> Links úteis
              </h2>
              <ul className="space-y-2">
                {usefulLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand hover:underline underline-offset-4 text-sm font-medium"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </div>

      <InlineCta
        title="Comece a vender para o governo hoje"
        subtitle="Cadastre sua empresa no SICAF com assessoria CADBRASIL — tecnologia, IA e equipe especializada."
      />
    </PageShell>
  );
}
