import { createFileRoute, redirect } from "@tanstack/react-router";

/** URL de preview — redireciona para a home após migração do layout gov. */
export const Route = createFileRoute("/versao2")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
