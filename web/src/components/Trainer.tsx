import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useGiveExpMutation } from "../generated/graphql";
import { C_GREEN, NYANZA, ROSE } from "../utils/constants";
import { SkillContext } from "../utils/SkillContext";

interface TrainerProps {
  skillId: number;
  skillObj: {
    name: string;
    exp: number;
    time: number;
  };
}

export const Trainer: React.FC<TrainerProps> = ({ skillId, skillObj }) => {
  const [, giveExp] = useGiveExpMutation();
  const { isTraining, setIsTraining, id, setId } = useContext(SkillContext);

  const handleClick = () => {
    if (!isTraining) {
      setIsTraining((isTraining) => !isTraining);

      setId(
        setInterval(async () => {
          const response = await giveExp({ skillId, value: skillObj.exp });
          if (response.data?.giveExp.leveled) {
            console.log("leveled");
          } else {
            console.log("exp given!");
          }
        }, skillObj.time)
      );
    } else {
      setIsTraining((isTraining) => !isTraining);
      setId(undefined);
      clearInterval(id!);
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
        <Text casing="capitalize" color={"white"}>
          {skillObj.name}
        </Text>
        <Button size={"sm"} onClick={handleClick}>
          Start
        </Button>
      </Flex>
    </Box>
  );
};
