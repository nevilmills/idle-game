import { Box } from "@chakra-ui/react";
import React from "react";
import { ROSE } from "../utils/constants";

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = ({}) => {
  return <Box w={300} h="100vh" backgroundColor={ROSE}></Box>;
};
