import { Box } from "@chakra-ui/react";
import React from "react";
import { useMeQuery } from "../../generated/graphql";
import { V_GREEN } from "../../utils/constants";
import { Activity } from "../Activity";

interface CharacterAreaProps {}

export const CharacterArea: React.FC<CharacterAreaProps> = ({}) => {
  const [{ data }] = useMeQuery();
  const message = `Hi ${data?.me.username}, welcome to my game!`;

  return (
    <Box w="100%" h="100vh" backgroundColor={V_GREEN} textAlign="center">
      <Box mt={4}>{message}</Box>
    </Box>
  );
};
