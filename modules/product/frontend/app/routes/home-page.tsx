import React, { useCallback } from "react";

import {
  KanbanBoard,
  KanbanItemStatus,
} from "@monorepo-frontend/kanban-board-component";
import { TodoLayout } from "@monorepo-frontend/todo-layout-feature";

import { doneItems, inProgressItems, todoItems } from "./data";

const HomePage = () => {
  const loadItems = useCallback(async () => {
    return {
      [KanbanItemStatus.TODO]: todoItems,
      [KanbanItemStatus.IN_PROGRESS]: inProgressItems,
      [KanbanItemStatus.DONE]: doneItems,
    };
  }, []);

  return (
    <TodoLayout>
      <KanbanBoard loadItems={loadItems} />
    </TodoLayout>
  );
};

export { HomePage };
