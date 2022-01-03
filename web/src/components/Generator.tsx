import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

interface GeneratorProps {}

export const Generator: React.FC<GeneratorProps> = ({}) => {
  return (
    <Flex
      w={225}
      h={20}
      backgroundColor="red"
      m={4}
      p={2}
      flexDirection={"column"}
      alignItems={"center"}
    >
      This is a resource generator
      <Button size={"md"}>Start</Button>
    </Flex>
  );
};
