import React from "react";

import { TodoKanbanBoard } from "@monorepo-frontend/todo-kanban-board-feature";
import { TodoLayout } from "@monorepo-frontend/todo-layout-feature";

const HomePage = () => {
  return (
    <TodoLayout>
      <TodoKanbanBoard />
    </TodoLayout>
  );
};

export { HomePage };
