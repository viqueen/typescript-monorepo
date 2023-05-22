import React from "react";

import { createRoot, hydrateRoot } from "react-dom/client";

import { ProductRoutes } from "../routes";

const ProductApp = () => {
  return (
    <>
      <ProductRoutes />
    </>
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
