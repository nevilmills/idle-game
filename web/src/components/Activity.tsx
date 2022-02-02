import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { C_GREEN, NYANZA, ROSE } from "../utils/constants";

interface ActivityProps {}

export const Activity: React.FC<{}> = ({}) => {
  let [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | undefined>(
    undefined
  );

  // Increment count each second
  const handleClick = () => {
    if (!isOn) {
      setIsOn(!isOn);

      setIntervalId(
        setInterval(() => {
          setCount(count++);
        }, 1000)
      );
    } else {
      setIsOn(!isOn);
      setIntervalId(undefined);
      clearInterval(intervalId!);
    }
  };

  return (
    <Box w="250px" h="100px" m={4} borderRadius="15px" overflow="hidden">
      <Box backgroundColor={NYANZA} height={2} width="100%" />
      <Flex
        w="100%"
        h="100%"
        backgroundColor={ROSE}
        flexDirection={"column"}
        alignItems={"center"}
      >
        This is an activity
        <Button size={"md"} onClick={handleClick}>
          Start
        </Button>
        {count}
      </Flex>
    </Box>
  );
};
