import React from "react";

import { Grid } from "@mui/material";

import { KanbanItemProps, KanbanItemStatus } from "./kanban-item";
import { KanbanList } from "./kanban-list";

interface KanbanBoardProps {
  items: Record<KanbanItemStatus, KanbanItemProps[]>;
}

const KanbanBoard = ({ items }: KanbanBoardProps) => {
  return (
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
  );
};

export { KanbanBoard };
export type { KanbanBoardProps };
