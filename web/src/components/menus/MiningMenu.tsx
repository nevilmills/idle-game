import { Box } from "@chakra-ui/react";
import React from "react";
import { GAINSBORO } from "../../utils/constants";
import { Trainer } from "../Trainer";

interface MiningMenuProps {}

export const MiningMenu: React.FC<MiningMenuProps> = ({}) => {
  return (
    <Box w="100%" h="100vh" backgroundColor={GAINSBORO}>
      mining area
      {/* <Trainer /> */}
    </Box>
  );
};
