import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

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
    <Flex
      w={225}
      h={20}
      backgroundColor="red"
      m={4}
      p={2}
      flexDirection={"column"}
      alignItems={"center"}
    >
      This is an activity
      <Button size={"md"} onClick={handleClick}>
        Start
      </Button>
      {count}
    </Flex>
  );
};
