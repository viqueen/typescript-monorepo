import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

const ProductApp = () => {
  return <h1>product</h1>;
};

const rootContainer = document.querySelector("#root");
if (rootContainer) {
  if (rootContainer.hasChildNodes()) {
    hydrateRoot(rootContainer, <ProductApp />);
  } else {
    createRoot(rootContainer).render(<ProductApp />);
  }
}
