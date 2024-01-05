import React, { useMemo, useState } from "react";

import { KanbanBoard } from "@monorepo-frontend/kanban-board-component";
import { TodoLayout } from "@monorepo-frontend/todo-layout-feature";

import {
  KanbanItemProps,
  KanbanItemStatus,
} from "./../../components/kanban-board/kanban-item";
import { doneItems, inProgressItems, todoItems } from "./data";

const HomePage = () => {
  const [todo] = useState<KanbanItemProps[]>(todoItems);
  const [inProgress] = useState<KanbanItemProps[]>(inProgressItems);
  const [done] = useState<KanbanItemProps[]>(doneItems);

  const items = useMemo(
    () => ({
      [KanbanItemStatus.TODO]: todo,
      [KanbanItemStatus.IN_PROGRESS]: inProgress,
      [KanbanItemStatus.DONE]: done,
    }),
    [todo, inProgress, done],
  );

  return (
    <TodoLayout>
      <KanbanBoard items={items} />
    </TodoLayout>
  );
};

export { HomePage };
