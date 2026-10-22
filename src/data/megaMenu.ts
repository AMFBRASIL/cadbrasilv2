import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Bell,
  BookOpen,
  Building2,
  Calculator,
  FileCheck2,
  FileSearch,
  FolderOpen,
  Gavel,
  Layers,
  Radar,
  RefreshCw,
  Scale,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

export type MegaMenuItem = {
  to: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type MegaMenuColumn = {
  id: string;
  label: string;
  items: MegaMenuItem[];
};

export type MegaMenuTopLink = {
  to?: string;
  href?: string;
  label: string;
};

/** Colunas do mega menu "Recursos" — jornada do fornecedor. */
export const megaMenuColumns: MegaMenuColumn[] = [
  {
    id: "cadastrar",
    label: "Cadastrar",
    items: [
      {
        to: "/o-que-e-sicaf-e-como-se-cadastrar",
        title: "O que é SICAF",
        description: "Guia completo para se cadastrar e vender ao governo",
        icon: BookOpen,
      },
      {
        to: "/cadastro-sicaf-passo-a-passo",
        title: "Passo a passo SICAF",
        description: "Credenciamento e níveis I a VI, na ordem certa",
        icon: Layers,
      },
      {
        to: "/quanto-custa-sicaf",
        title: "Quanto custa o SICAF",
        description: "Cadastro oficial gratuito e o que realmente pesa no bolso",
        icon: Calculator,
      },
      {
        to: "/caufesp",
        title: "Assessoria CAUFESP",
        description: "Orientação para vender ao Governo de São Paulo",
        icon: Building2,
      },
    ],
  },
  {
    id: "regularizar",
    label: "Regularizar",
    items: [
      {
        to: "/sicaf-irregular",
        title: "SICAF irregular",
        description: "Pendências, bloqueios e como voltar a participar",
        icon: AlertTriangle,
      },
      {
        to: "/renovar-sicaf",
        title: "Renovar SICAF",
        description: "Certidões e níveis em dia, sem surpresa na disputa",
        icon: RefreshCw,
      },
      {
        to: "/servicos-documentacao",
        title: "Gestão documental",
        description: "Documentos e certidões organizados para licitações",
        icon: FolderOpen,
      },
      {
        to: "/documentacao-licitacao",
        title: "Documentação para licitar",
        description: "O que preparar antes de enviar a proposta",
        icon: FileCheck2,
      },
    ],
  },
  {
    id: "licitar",
    label: "Licitar",
    items: [
      {
        to: "/licitacoes",
        title: "Plataforma de licitações",
        description: "Inicie sua jornada e acompanhe oportunidades",
        icon: Radar,
      },
      {
        to: "/pregao-eletronico",
        title: "Pregão eletrônico",
        description: "Como funciona a modalidade mais usada no Brasil",
        icon: Gavel,
      },
      {
        to: "/bll-compras-guia-para-licitantes",
        title: "Guia BLL Compras",
        description: "Custos, cadastro e calculadora de taxas",
        icon: Search,
      },
      {
        to: "/compras-gov-br",
        title: "Compras.gov.br",
        description: "Portal federal e o papel do SICAF na disputa",
        icon: Scale,
      },
    ],
  },
  {
    id: "ferramentas",
    label: "Ferramentas",
    items: [
      {
        to: "/assistente",
        title: "Assistente CADBrasil",
        description: "Software e IA para acompanhar o processo",
        icon: Sparkles,
      },
      {
        to: "/acesso-remoto",
        title: "Acesso remoto",
        description: "Suporte com o especialista na sua tela",
        icon: Target,
      },
      {
        to: "/proposta",
        title: "Montar proposta",
        description: "Organize sua proposta com orientação prática",
        icon: FileSearch,
      },
      {
        to: "/planos",
        title: "Planos",
        description: "Compare Start, Licitações, Pro e Enterprise",
        icon: Bell,
      },
    ],
  },
];

export const megaMenuTopLinks: MegaMenuTopLink[] = [
  { to: "/cadbrasil", label: "Sobre" },
  { to: "/faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const megaMenuFooter = {
  text: "Empresa privada de tecnologia e assessoria para fornecedores em licitações.",
  cta: { to: "/cadbrasil", label: "Conhecer a CADBrasil" },
} as const;
