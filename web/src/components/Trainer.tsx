import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { C_GREEN, NYANZA, ROSE } from "../utils/constants";

interface TrainerProps {
  skillId: number | undefined;
}

export const Trainer: React.FC<TrainerProps> = ({ skillId }) => {
  let [count, setCount] = useState(0);
  const [isTraining, setIsTraining] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | undefined>(
    undefined
  );

  // Increment count each second
  const handleClick = () => {
    if (!isTraining) {
      setIsTraining((isTraining) => !isTraining);

      setIntervalId(
        setInterval(() => {
          setCount((count) => count + 1);
        }, 1000)
      );
    } else {
      setIsTraining(!isTraining);
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
        This is a trainer
        <Button size={"md"} onClick={handleClick}>
          Start
        </Button>
        {count}
      </Flex>
    </Box>
  );
};
