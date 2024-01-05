import React, { ComponentType } from "react";

import type { SxProps } from "@mui/material";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

interface TopNavigationProps {
  Logo: ComponentType<{ sx?: SxProps }>;
  productName: string;
}

const TopNavigation = ({ Logo, productName }: TopNavigationProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Logo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {productName}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { TopNavigation };
export type { TopNavigationProps };
