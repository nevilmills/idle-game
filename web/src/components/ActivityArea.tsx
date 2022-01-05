import { Box } from "@chakra-ui/react";
import React from "react";
import { Activity } from "./Activity";

export const ActivityArea: React.FC<{}> = ({}) => {
  return (
    <Box w="100%" h="100vh" backgroundColor="darkgray">
      <Activity />
    </Box>
  );
};
