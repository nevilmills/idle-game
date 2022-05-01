import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useMeQuery } from "../../generated/graphql";
import { GAINSBORO } from "../../utils/constants";
import { Trainer } from "../Trainer";
import ProgressBar from "progressbar.js";

interface CharacterMenuProps {}

export const CharacterMenu: React.FC<CharacterMenuProps> = ({}) => {
  const [{ data }] = useMeQuery();
  const message = `Hi ${data?.me.username}, welcome to my game!`;

  return (
    <Box w="100%" h="100vh" backgroundColor={GAINSBORO} textAlign="center">
      <Box mt={4}>{message}</Box>
      <Box id="progressBar" w="400px" h="8px" />
    </Box>
  );
};
