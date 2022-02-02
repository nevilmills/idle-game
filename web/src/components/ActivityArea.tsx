import { Box } from "@chakra-ui/react";
import React from "react";
import { C_GREEN, V_GREEN } from "../utils/constants";
import { Activity } from "./Activity";

export const ActivityArea: React.FC<{}> = ({}) => {
  return (
    <Box w="100%" h="100vh" backgroundColor={V_GREEN}>
      <Activity />
    </Box>
  );
};
