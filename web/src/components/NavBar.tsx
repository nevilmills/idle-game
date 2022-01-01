import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data }] = useMeQuery();
  const [, logout] = useLogoutMutation();
  const router = useRouter();

  const handleClick = () => {
    logout();
    router.reload();
  };

  if (!data?.me) {
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
          <Button size="sm" ml={2} background="transparent">
            login
          </Button>
        </Box>
      </Box>
    );
  } else {
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
          <Button
            size="sm"
            ml={2}
            background="transparent"
            onClick={handleClick}
          >
            logout
          </Button>
        </Box>
      </Box>
    );
  }
};
