import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { LAVENDER } from "../utils/constants";

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
        bgColor={LAVENDER}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Box p="2">
          <Heading size="md">Random idle game</Heading>
        </Box>
        <Spacer />
        <Box
          display="flex"
          justifyContent="space-evenly"
          mr={8}
          alignItems="center"
        >
          <Link href="/login">Login</Link>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        height={50}
        bgColor={LAVENDER}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Box p="2">
          <Heading size="md">Random idle game</Heading>
        </Box>
        <Spacer />
        <Box
          display="flex"
          justifyContent="space-evenly"
          mr={8}
          alignItems="center"
        >
          <Flex>{data?.me.username}</Flex>
          <Box h="15px" w="2px" bgColor="black" ml={2} />
          <Button
            size="sm"
            ml={2}
            onClick={handleClick}
            variant="link"
            color="black"
          >
            Logout
          </Button>
        </Box>
      </Box>
    );
  }
};
