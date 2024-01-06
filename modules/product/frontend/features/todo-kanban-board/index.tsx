import React, { useCallback } from "react";

import {
  KanbanBoard,
  KanbanItemProps,
  KanbanItemStatus,
} from "@monorepo-frontend/kanban-board-component";

const TodoKanbanBoard = () => {
  const loadItems = useCallback(async () => {
    return {
      [KanbanItemStatus.TODO]: [],
      [KanbanItemStatus.IN_PROGRESS]: [],
      [KanbanItemStatus.DONE]: [],
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
    <KanbanBoard loadItems={loadItems} updateItemStatus={updateItemStatus} />
  );
};

export { TodoKanbanBoard };
