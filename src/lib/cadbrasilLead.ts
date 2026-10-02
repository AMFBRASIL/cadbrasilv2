import { z } from "zod";
import {
  getLeadObjectives,
  LEAD_SOURCE_IDS,
  leadObjectiveLabel,
  leadSources,
} from "@/data/leadSources";

export const cadbrasilLeadSchema = z
  .object({
    origem: z.enum(LEAD_SOURCE_IDS).default("cadbrasil"),
    nome: z.string().trim().min(2, "Informe seu nome"),
    empresa: z.string().trim().min(2, "Informe o nome da empresa"),
    cnpj: z
      .string()
      .trim()
      .transform((v) => v.replace(/\D/g, ""))
      .refine((v) => v.length === 14, "CNPJ deve ter 14 dígitos"),
    whatsapp: z
      .string()
      .trim()
      .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe um WhatsApp válido"),
    email: z
      .string()
      .trim()
      .email("E-mail inválido")
      .transform((v) => v.toLowerCase()),
    objetivo: z.string().trim().min(1, "Selecione uma opção"),
    tracking: z.record(z.string(), z.string().max(500)).optional(),
    website: z.string().max(0).optional(),
  })
  .refine((d) => getLeadObjectives(d.origem).some((o) => o.id === d.objetivo), {
    message: "Opção inválida",
    path: ["objetivo"],
  });

export type CadbrasilLeadPayload = z.infer<typeof cadbrasilLeadSchema>;

export function formatCnpj(digits: string) {
  return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
}

export function leadSourceLabel(data: CadbrasilLeadPayload) {
  return leadSources[data.origem].label;
}

export function formatCadbrasilLeadBody(data: CadbrasilLeadPayload) {
  const tracking = Object.entries(data.tracking ?? {});
  return [
    `Novo lead — ${leadSourceLabel(data)}`,
    "",
    `Nome: ${data.nome}`,
    `Empresa: ${data.empresa}`,
    `CNPJ: ${formatCnpj(data.cnpj)}`,
    `WhatsApp: ${data.whatsapp}`,
    `E-mail: ${data.email}`,
    `Como podemos ajudar: ${leadObjectiveLabel(data.origem, data.objetivo)}`,
    "",
    tracking.length > 0 ? "Origem da campanha:" : "Origem da campanha: não informada (acesso direto ou orgânico)",
    ...tracking.map(([key, value]) => `- ${key}: ${value}`),
    "",
    "---",
    `Enviado em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`,
  ].join("\n");
}

export function formatCadbrasilLeadConfirmation(data: CadbrasilLeadPayload) {
  return [
    `Olá, ${data.nome}!`,
    "",
    "Recebemos sua solicitação de contato com um especialista CADBrasil.",
    "Nossa equipe vai retornar em breve pelo WhatsApp ou e-mail informado para entender o momento da sua empresa no mercado público.",
    "",
    `Assunto: ${leadObjectiveLabel(data.origem, data.objetivo)}`,
    `Empresa: ${data.empresa}`,
    "",
    "A CADBrasil é uma empresa privada de tecnologia e assessoria para fornecedores que participam de licitações públicas, sem vínculo com órgãos governamentais ou plataformas de licitação.",
    "",
    "---",
    "CADBrasil · Tecnologia e assessoria em licitações",
    "https://cadbrasil.com.br",
  ].join("\n");
}
