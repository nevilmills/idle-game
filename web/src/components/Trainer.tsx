import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ProgressBar from "progressbar.js";
import React, { useContext, useRef, useState } from "react";
import { useGiveExpMutation } from "../generated/graphql";
import {
  C_GREEN,
  LAVENDER,
  B_CORAL,
  SHAMROCK,
  GAINSBORO,
} from "../utils/constants";
import { SkillContext } from "../utils/contexts/SkillContext";

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
  const progressBarId = `progressbar-${skillObj.name}`;
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
    <Box
      w="250px"
      h="100px"
      m={4}
      borderRadius="15px"
      borderWidth={2}
      borderColor={B_CORAL}
      boxShadow={"1px 2px"}
      overflow="hidden"
    >
      <Box backgroundColor={SHAMROCK} height={2} width="100%" />
      <Flex
        w="100%"
        h="100%"
        backgroundColor={GAINSBORO}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text casing="capitalize">{skillObj.name}</Text>
        <Button
          size={"sm"}
          textColor={"white"}
          bgColor={B_CORAL}
          onClick={handleClick}
        >
          Cut
        </Button>
      </Flex>
      {/* <Box id={progressBarId} ref={progressBarRef}></Box> */}
    </Box>
  );
};
