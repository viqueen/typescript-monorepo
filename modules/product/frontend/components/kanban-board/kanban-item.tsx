import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

enum KanbanItemStatus {
  TODO = "Todo",
  IN_PROGRESS = "In Progress",
  DONE = "Done",
}

interface KanbanItemProps {
  id: string;
  description: string;
}

const KanbanItem = ({ item }: { item: KanbanItemProps }) => {
  return (
    <Card elevation={4}>
      <CardContent>
        <Typography>{item.description}</Typography>
      </CardContent>
    </Card>
  );
};

export type { KanbanItemProps };
export { KanbanItemStatus, KanbanItem };
