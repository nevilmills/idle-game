import { Box } from "@chakra-ui/react";
import React from "react";

interface GeneratorAreaProps {}

export const GeneratorArea: React.FC<GeneratorAreaProps> = ({ children }) => {
  return (
    <Box w="100%" h="100vh" backgroundColor="darkgray">
      {children}
    </Box>
  );
};
