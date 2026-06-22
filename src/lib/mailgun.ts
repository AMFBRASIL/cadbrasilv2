import type { ContactPayload } from "@/lib/contact";
import {
  contactTypeLabel,
  formatClientConfirmationBody,
  formatClientConfirmationHtml,
  formatContactEmailBody,
} from "@/lib/contact";
import type { LicitacoesLeadPayload } from "@/lib/licitacoesLead";
import {
  formatLicitacoesLeadBody,
  formatLicitacoesLeadConfirmation,
} from "@/lib/licitacoesLead";

/** Caixa que recebe os formulários de contato do site */
export const CONTACT_INBOX_EMAIL = "documentos@fornecedordigital.com.br";

type MailgunConfig = {
  apiKey: string;
  domain: string;
  fromEmail: string;
  fromName: string;
  toEmail: string;
  apiUrl: string;
};

function getMailgunConfig(): MailgunConfig | null {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const fromEmail = process.env.MAILGUN_FROM_EMAIL;
  const fromName = process.env.MAILGUN_FROM_NAME;
  const toEmail = process.env.MAILGUN_TO_EMAIL?.trim() || CONTACT_INBOX_EMAIL;
  const apiUrl = process.env.MAILGUN_API_URL ?? "https://api.mailgun.net";

  if (!apiKey || !domain || !fromEmail || !fromName) {
    return null;
  }

  return { apiKey, domain, fromEmail, fromName, toEmail, apiUrl };
}

function formatRecipient(name: string, email: string) {
  const safeName = name.replace(/[<>"]/g, "").trim();
  const safeEmail = email.trim().toLowerCase();
  return safeName ? `${safeName} <${safeEmail}>` : safeEmail;
}

async function sendMailgunMessage(
  config: MailgunConfig,
  options: {
    to: string;
    subject: string;
    text: string;
    html?: string;
    replyTo?: string;
  },
) {
  const body = new URLSearchParams();
  body.set("from", `${config.fromName} <${config.fromEmail}>`);
  body.set("to", options.to);
  body.set("subject", options.subject);
  body.set("text", options.text);
  if (options.html) {
    body.set("html", options.html);
  }
  if (options.replyTo) {
    body.set("h:Reply-To", options.replyTo);
  }

  const endpoint = `${config.apiUrl.replace(/\/$/, "")}/v3/${config.domain}/messages`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${config.apiKey}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const payload = (await response.json().catch(() => ({}))) as {
    message?: string;
    id?: string;
  };

  if (!response.ok) {
    const detail = payload.message ?? `HTTP ${response.status}`;
    throw new Error(`MAILGUN_SEND_FAILED: ${detail}`);
  }

  return { id: payload.id, message: payload.message };
}

export async function sendContactEmail(data: ContactPayload) {
  const config = getMailgunConfig();
  if (!config) {
    throw new Error("MAILGUN_NOT_CONFIGURED");
  }

  const clientEmail = data.email.trim().toLowerCase();
  const tipo = contactTypeLabel(data.tipo);
  const teamSubject = `[Site CADBRASIL] Contato: ${tipo} — ${data.nome}`;
  const teamBody = formatContactEmailBody(data);
  const clientSubject = "Recebemos sua mensagem — CADBRASIL";
  const clientText = formatClientConfirmationBody(data);
  const clientHtml = formatClientConfirmationHtml(data);

  const [teamResult, clientResult] = await Promise.all([
    sendMailgunMessage(config, {
      to: config.toEmail,
      subject: teamSubject,
      text: teamBody,
      replyTo: formatRecipient(data.nome, clientEmail),
    }),
    sendMailgunMessage(config, {
      to: formatRecipient(data.nome, clientEmail),
      subject: clientSubject,
      text: clientText,
      html: clientHtml,
    }),
  ]);

  return {
    team: teamResult,
    client: clientResult,
    clientEmail,
  };
}

export async function sendLicitacoesLeadEmail(data: LicitacoesLeadPayload) {
  const config = getMailgunConfig();
  if (!config) {
    throw new Error("MAILGUN_NOT_CONFIGURED");
  }

  const clientEmail = data.email.trim().toLowerCase();
  const cnpjFmt = data.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  const teamSubject = `[CADBRASIL Licitações] Novo cadastro — ${data.nome} (${cnpjFmt})`;
  const teamBody = formatLicitacoesLeadBody(data);
  const clientSubject = "Cadastro recebido — Plataforma CADBRASIL Licitações";
  const clientText = formatLicitacoesLeadConfirmation(data);

  const [teamResult, clientResult] = await Promise.all([
    sendMailgunMessage(config, {
      to: config.toEmail,
      subject: teamSubject,
      text: teamBody,
      replyTo: formatRecipient(data.nome, clientEmail),
    }),
    sendMailgunMessage(config, {
      to: formatRecipient(data.nome, clientEmail),
      subject: clientSubject,
      text: clientText,
    }),
  ]);

  return {
    team: teamResult,
    client: clientResult,
    clientEmail,
  };
}
