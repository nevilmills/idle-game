import { Box, Flex } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { ROSE } from "../../utils/constants";
import { ActivityArea } from "../menus/ActivityArea";
import { SideBarButton } from "./SideBarButton";

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <Box w={300} h="100vh" backgroundColor={ROSE}>
      <Box mt={12}>
        <SideBarButton linkedMenu="home" />
      </Box>
      <Flex mt={12} alignItems="center" flexDirection="column">
        <SideBarButton linkedMenu="Woodcutting" />
        <SideBarButton linkedMenu="Fishing" />
        <SideBarButton linkedMenu="Mining" />
      </Flex>
    </Box>
  );
};
