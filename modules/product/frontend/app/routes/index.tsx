import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "./home-page";

const ProductRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
};

export { ProductRoutes };
