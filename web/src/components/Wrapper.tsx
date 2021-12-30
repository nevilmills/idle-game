import { Box } from "@chakra-ui/react";
import React from "react";

interface WrapperProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box pt={8} maxW={400} w="100%" margin="auto">
      {children}
    </Box>
  );
};
