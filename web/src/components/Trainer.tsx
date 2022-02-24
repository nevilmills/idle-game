import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ProgressBar from "progressbar.js";
import React, { useContext, useRef, useState } from "react";
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
  const { trainerKey, setTrainerKey } = useContext(SkillContext);
  const progressBarId = `progressbar-${skillObj.exp}`;
  const progressBarRef = useRef();

  const handleClick = () => {
    if (!isTraining) {
      setIsTraining((isTraining) => !isTraining);
      setId(setInterval(trainingUpdate, skillObj.time));
      setTrainerKey(skillObj.name);
    } else {
      if (trainerKey == skillObj.name) {
        // if the active trainer is this one, turn it off
        setIsTraining((isTraining) => !isTraining);
        clearInterval(id!);
        setId(undefined);
        setTrainerKey(undefined);
      } else {
        // otherwise turn other trainer off, and turn this trainer on
        clearInterval(id!);
        setId(setInterval(trainingUpdate, skillObj.time));
        setTrainerKey(skillObj.name);
      }
    }
  };

  const trainingUpdate = async () => {
    const response = await giveExp({ skillId, value: skillObj.exp });
    if (response.data?.giveExp.leveled) {
      console.log("leveled");
    } else {
      console.log("exp given!");
    }

    animateProgress();
  };

  const animateProgress = () => {
    const line = new ProgressBar.Line(progressBarId, {
      color: "#93FF96",
      duration: skillObj.time,
      easing: "easeOut",
    });

    line.animate(1, {}, () => {
      line.destroy();
      return;
    });
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
      {/* <Box id={progressBarId} ref={progressBarRef}></Box> */}
    </Box>
  );
};
