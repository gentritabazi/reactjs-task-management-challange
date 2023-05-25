import React, { ReactNode } from "react";
import ButtonAppBar from "../../components/ButtonAppBar/ButtonAppBar";
import { Container, Box } from "@mui/material";

interface ChildComponentProps {
  children: ReactNode;
}

const AppLayout: React.FC<ChildComponentProps> = ({ children }) => {
  return (
    <div>
      <ButtonAppBar />

      <Container>
        <Box sx={{ mb: "20px" }} />

        {children}
      </Container>
    </div>
  );
};

export default AppLayout;
