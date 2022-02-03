import { Box } from "@chakra-ui/react";
import React from "react";
import { V_GREEN } from "../../utils/constants";
import { Activity } from "../Activity";

interface FishingMenuProps {}

export const FishingMenu: React.FC<FishingMenuProps> = ({}) => {
  return (
    <Box w="100%" h="100vh" backgroundColor={V_GREEN}>
      fishing area
      <Activity />
    </Box>
  );
};
