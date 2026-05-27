import { z } from "zod";

export const CONTACT_TYPES = [
  { id: "cliente", label: "Cliente / SICAF" },
  { id: "parceria", label: "Parcerias" },
  { id: "projeto", label: "Projetos" },
  { id: "servico", label: "Serviços" },
  { id: "trabalho", label: "Trabalhe conosco" },
  { id: "outro", label: "Outros assuntos" },
] as const;

export type ContactTypeId = (typeof CONTACT_TYPES)[number]["id"];

export const contactPayloadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .transform((v) => v.toLowerCase()),
  telefone: z.string().trim().min(8, "Informe um telefone válido"),
  empresa: z.string().trim().optional(),
  tipo: z.enum(["cliente", "parceria", "projeto", "servico", "trabalho", "outro"]),
  mensagem: z.string().trim().min(10, "Mensagem muito curta"),
  website: z.string().max(0).optional(),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

export function contactTypeLabel(tipo: ContactTypeId) {
  return CONTACT_TYPES.find((t) => t.id === tipo)?.label ?? tipo;
}

export function formatContactEmailBody(data: ContactPayload) {
  const tipo = contactTypeLabel(data.tipo);
  return [
    "Novo contato recebido pelo site CADBRASIL",
    "",
    `Motivo: ${tipo}`,
    `Nome: ${data.nome}`,
    `E-mail: ${data.email}`,
    `Telefone/WhatsApp: ${data.telefone}`,
    data.empresa ? `Empresa: ${data.empresa}` : null,
    "",
    "Mensagem:",
    data.mensagem,
    "",
    "---",
    `Enviado em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function formatClientConfirmationBody(data: ContactPayload) {
  const tipo = contactTypeLabel(data.tipo);
  return [
    `Olá, ${data.nome}!`,
    "",
    "Recebemos sua mensagem pelo site da CADBRASIL com sucesso.",
    "Nossa equipe já foi notificada e retornará em breve no e-mail ou WhatsApp informado.",
    "",
    "Resumo do seu contato:",
    `Motivo: ${tipo}`,
    data.empresa ? `Empresa: ${data.empresa}` : null,
    `Telefone/WhatsApp: ${data.telefone}`,
    "",
    "Sua mensagem:",
    data.mensagem,
    "",
    "---",
    "CADBRASIL · Especialistas em SICAF",
    "https://cadbrasil.com.br",
    "documentos@fornecedordigital.com.br",
  ]
    .filter(Boolean)
    .join("\n");
}

export function formatClientConfirmationHtml(data: ContactPayload) {
  const tipo = contactTypeLabel(data.tipo);
  const empresa = data.empresa
    ? `<p><strong>Empresa:</strong> ${escapeHtml(data.empresa)}</p>`
    : "";

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1a2c66;max-width:560px">
      <p>Olá, <strong>${escapeHtml(data.nome)}</strong>!</p>
      <p>Recebemos sua mensagem pelo site da <strong>CADBRASIL</strong> com sucesso.</p>
      <p>Nossa equipe já foi notificada e retornará em breve no e-mail ou WhatsApp informado.</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0" />
      <p><strong>Resumo do seu contato</strong></p>
      <p><strong>Motivo:</strong> ${escapeHtml(tipo)}</p>
      ${empresa}
      <p><strong>Telefone/WhatsApp:</strong> ${escapeHtml(data.telefone)}</p>
      <p><strong>Sua mensagem:</strong></p>
      <p style="background:#f4f6fb;padding:12px;border-radius:8px">${escapeHtml(data.mensagem)}</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0" />
      <p style="font-size:12px;color:#6b7280">
        CADBRASIL · Especialistas em SICAF<br />
        <a href="https://cadbrasil.com.br">cadbrasil.com.br</a>
      </p>
    </div>
  `.trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
