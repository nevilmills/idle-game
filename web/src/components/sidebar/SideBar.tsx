import { Box, Flex } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { ROSE } from "../../utils/constants";
import { ActivityArea } from "../areas/ActivityArea";
import { SideBarButton } from "./SideBarButton";

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <Box w={300} h="100vh" backgroundColor={ROSE}>
      <Flex mt={12} alignItems="center" flexDirection="column">
        <SideBarButton skill="Woodcutting" />
        <SideBarButton skill="Fishing" />
        <SideBarButton skill="Mining" />
      </Flex>
    </Box>
  );
};
