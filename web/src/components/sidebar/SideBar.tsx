import { Box, Flex } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { B_CORAL } from "../../utils/constants";
import { SideBarButton } from "./SideBarButton";

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <Box w={300} h="100vh" backgroundColor={B_CORAL}>
      <Box mt={12}>
        <SideBarButton linkedMenu="home" />
      </Box>
      <Flex mt={12} alignItems="center" flexDirection="column">
        <SideBarButton linkedMenu="woodcutting" />
        <SideBarButton linkedMenu="fishing" />
        <SideBarButton linkedMenu="mining" />
      </Flex>
    </Box>
  );
};
