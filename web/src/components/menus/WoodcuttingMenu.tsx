import { Box } from "@chakra-ui/react";
import React from "react";
import { V_GREEN } from "../../utils/constants";
import { Trainer } from "../Trainer";

interface WoodcuttingMenuProps {}

export const WoodcuttingMenu: React.FC<WoodcuttingMenuProps> = ({}) => {
  return (
    <Box w="100%" h="100vh" backgroundColor={V_GREEN}>
      woodcutting area
      <Trainer />
    </Box>
  );
};
