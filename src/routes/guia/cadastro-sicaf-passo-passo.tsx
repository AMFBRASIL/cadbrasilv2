import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/guia/cadastro-sicaf-passo-passo")({
  beforeLoad: () => {
    throw redirect({
      to: "/cadastro-sicaf-passo-a-passo",
      replace: true,
    });
  },
  component: GuiaRedirectPage,
});

function GuiaRedirectPage() {
  return <Navigate to="/cadastro-sicaf-passo-a-passo" replace />;
}
