import React, { useCallback } from "react";

import {
  KanbanBoard,
  KanbanItemStatus,
} from "@monorepo-frontend/kanban-board-component";
import type { KanbanItemProps } from "@monorepo-frontend/kanban-board-component";
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

  const updateItemStatus = useCallback(
    async (props: {
      item: KanbanItemProps;
      from: KanbanItemStatus;
      to: KanbanItemStatus;
    }) => {
      console.info("** update: ", props);
    },
    [],
  );

  return (
    <TodoLayout>
      <KanbanBoard loadItems={loadItems} updateItemStatus={updateItemStatus} />
    </TodoLayout>
  );
};

export { HomePage };
