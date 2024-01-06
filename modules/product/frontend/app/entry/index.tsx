import React, { useMemo } from "react";

import { GraphqlApiProvider } from "@monorepo-frontend/graphql-api-context-provider";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot, hydrateRoot } from "react-dom/client";

import { ProductRoutes } from "../routes";

import { clientProvider } from "./client-provider";

const ProductApp = () => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    [],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GraphqlApiProvider clientProvider={clientProvider}>
        <ProductRoutes />
      </GraphqlApiProvider>
    </ThemeProvider>
  );
};

const rootContainer = document.querySelector("#root");
if (rootContainer) {
  if (rootContainer.hasChildNodes()) {
    hydrateRoot(rootContainer, <ProductApp />);
  } else {
    createRoot(rootContainer).render(<ProductApp />);
  }
}
