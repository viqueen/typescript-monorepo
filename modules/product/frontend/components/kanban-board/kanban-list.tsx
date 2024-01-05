import React from "react";

import { Chip, Divider, Grid, Paper } from "@mui/material";

import { KanbanItem, KanbanItemProps, KanbanItemStatus } from "./kanban-item";

interface KanbanListProps {
  status: KanbanItemStatus;
  items: KanbanItemProps[];
}

const KanbanListStatus = ({ status }: Pick<KanbanListProps, "status">) => {
  switch (status) {
    case KanbanItemStatus.TODO:
      return <Chip color="error" label={status} size="small" />;
    case KanbanItemStatus.IN_PROGRESS:
      return <Chip color="warning" label={status} size="small" />;
    case KanbanItemStatus.DONE:
    default:
      return <Chip color="success" label={status} size="small" />;
  }
};

const KanbanList = ({ status, items }: KanbanListProps) => {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <KanbanListStatus status={status} />
      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
      {items.map((item) => (
        <Grid item key={item.id} sx={{ marginTop: 2 }}>
          <KanbanItem key={item.id} item={item} />
        </Grid>
      ))}
    </Paper>
  );
};

export { KanbanList };
