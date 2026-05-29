import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/guia/cadastro-sicaf-passo-passo")({
  beforeLoad: () => {
    throw redirect({
      to: "/cadastro-sicaf-passo-a-passo",
      replace: true,
    });
  },
});
