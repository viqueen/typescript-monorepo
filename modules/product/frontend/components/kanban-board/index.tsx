import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import type { DropResult } from "react-beautiful-dnd";

import { Grid } from "@mui/material";

import { KanbanItemProps, KanbanItemStatus } from "./kanban-item";
import { KanbanList } from "./kanban-list";

interface KanbanBoardProps {
  loadItems: () => Promise<Record<KanbanItemStatus, KanbanItemProps[]>>;
}

const KanbanBoard = ({ loadItems }: KanbanBoardProps) => {
  const [items, setItems] = useState<
    Record<KanbanItemStatus, KanbanItemProps[]>
  >({
    [KanbanItemStatus.TODO]: [],
    [KanbanItemStatus.IN_PROGRESS]: [],
    [KanbanItemStatus.DONE]: [],
  });

  useEffect(() => {
    loadItems().then((items) => {
      setItems(items);
    });
  }, []);

  const asStatus = (kind: string) => {
    return kind as KanbanItemStatus;
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const source = items[asStatus(result.source.droppableId)];
    const destination = items[asStatus(result.destination.droppableId)];
    const [removedFromSource] = source.splice(result.source.index, 1);
    destination.splice(result.destination.index, 0, removedFromSource);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <KanbanList
            status={KanbanItemStatus.TODO}
            items={items[KanbanItemStatus.TODO]}
          />
        </Grid>
        <Grid item xs={3}>
          <KanbanList
            status={KanbanItemStatus.IN_PROGRESS}
            items={items[KanbanItemStatus.IN_PROGRESS]}
          />
        </Grid>
        <Grid item xs={3}>
          <KanbanList
            status={KanbanItemStatus.DONE}
            items={items[KanbanItemStatus.DONE]}
          />
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

export { KanbanBoard, KanbanItemStatus };
export type { KanbanBoardProps };
