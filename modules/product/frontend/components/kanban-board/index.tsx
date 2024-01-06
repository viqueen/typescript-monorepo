import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { Grid } from "@mui/material";

import { KanbanItemProps, KanbanItemStatus } from "./kanban-item";
import { KanbanList } from "./kanban-list";

interface KanbanBoardProps {
  items: Record<KanbanItemStatus, KanbanItemProps[]>;
}

const KanbanBoard = ({ items }: KanbanBoardProps) => {
  // Handle the drag end event
  const handleDragEnd = () => {
    // TODO: Update the state based on the result
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

export { KanbanBoard };
export type { KanbanBoardProps };
