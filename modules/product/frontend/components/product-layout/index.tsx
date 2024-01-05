import React, { ReactNode } from "react";

import { Box, Container, Toolbar } from "@mui/material";

import { TopNavigation, TopNavigationProps } from "./top-navigation";

interface ProductLayoutProps {
  children: ReactNode;
  topNav: TopNavigationProps;
}

const ProductLayout = ({ children, topNav }: ProductLayoutProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <TopNavigation Logo={topNav.Logo} productName={topNav.productName} />
      <Box component="main" sx={{ flexGrow: 2, p: 3 }}>
        <Toolbar />
        <Container maxWidth="xl">{children}</Container>
      </Box>
    </Box>
  );
};

export type { ProductLayoutProps };
export { ProductLayout };
