import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data }] = useMeQuery();

  return (
    <Box
      height={50}
      bgColor="teal"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent="space-evenly"
        mr={8}
        alignItems="center"
      >
        <Flex>{data?.me.username}</Flex>
        <Button size="sm" ml={2} background="transparent">
          logout
        </Button>
      </Box>
    </Box>
  );
};
