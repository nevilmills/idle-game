import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box height={50} bgColor="teal" display="flex" flexDirection="column">
      <Flex></Flex>
    </Box>
  );
};
