import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useMeQuery } from "../../generated/graphql";
import { GAINSBORO } from "../../utils/constants";
import { Trainer } from "../Trainer";
import ProgressBar from "progressbar.js";

interface CharacterAreaProps {}

export const CharacterArea: React.FC<CharacterAreaProps> = ({}) => {
  const [{ data }] = useMeQuery();
  const message = `Hi ${data?.me.username}, welcome to my game!`;

  const myFunc = () => {
    let bar = new ProgressBar.Line("#progressBar", {
      strokeWidth: 4,
      easing: "easeInOut",
      duration: 1400,
      color: "#FFEA82",
      trailColor: "#eee",
      trailWidth: 1,
      svgStyle: { width: "100%", height: "100%" },
    });
    bar.animate(1);
  };

  return (
    <Box w="100%" h="100vh" backgroundColor={GAINSBORO} textAlign="center">
      <Box mt={4}>{message}</Box>
      <Box id="progressBar" w="400px" h="8px" />
      <Button onClick={myFunc}>Press</Button>
    </Box>
  );
};
