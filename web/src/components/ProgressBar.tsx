import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { B_CORAL, SHAMROCK } from "../utils/constants";

interface ProgressBarProps {}

export const ProgressBar: React.FC<ProgressBarProps> = ({}) => {
  return (
    <Box
      mb={8}
      w="100%"
      h="150px"
      borderRadius="15px"
      borderWidth={2}
      borderColor={B_CORAL}
      boxShadow={"1px 2px"}
      overflow="hidden"
    >
      <Box backgroundColor={SHAMROCK} height={2} width="100%" />
      <Flex mt={2} justifyContent={"space-around"}>
        <Text>SKILL LEVEL:</Text>
        <Text>SKILL XP:</Text>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"center"}></Flex>
    </Box>
  );
};