import React, { ReactNode } from "react";

import { ProductLayout } from "@monorepo-frontend/product-layout-component";
import ChecklistIcon from "@mui/icons-material/Checklist";

interface TodoLayoutProps {
  children: ReactNode;
}

const TodoLayout = ({ children }: TodoLayoutProps) => {
  return (
    <ProductLayout
      topNav={{
        Logo: ChecklistIcon,
        productName: "TODO",
      }}
    >
      {children}
    </ProductLayout>
  );
};

export type { TodoLayoutProps };
export { TodoLayout };
