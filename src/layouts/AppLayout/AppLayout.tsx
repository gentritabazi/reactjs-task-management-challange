import React, { ReactNode } from "react";
import ButtonAppBar from "../../components/ButtonAppBar";
import { Container } from "@mui/material";

interface ChildComponentProps {
  children: ReactNode;
}

const AppLayout: React.FC<ChildComponentProps> = ({ children }) => {
  return (
    <div>
      <ButtonAppBar />

      <Container>{children}</Container>
    </div>
  );
};

export default AppLayout;
