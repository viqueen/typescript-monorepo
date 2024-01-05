import React from "react";

import { TodoLayout } from "@monorepo-frontend/todo-layout-feature";
import { HealthStatus } from "@product-fe/health-status-feature";

const HomePage = () => {
  return (
    <TodoLayout>
      <h1>home page</h1>
      <HealthStatus />
    </TodoLayout>
  );
};

export { HomePage };
