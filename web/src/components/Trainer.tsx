import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import ProgressBar from "progressbar.js";
import React, { useContext, useEffect, useRef, useState } from "react";
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
    id: number;
    levelReq: number;
    name: string;
    exp: number;
    time: number;
  };
  progressBarId: string;
}

export const Trainer: React.FC<TrainerProps> = ({
  skillId,
  skillObj,
  progressBarId,
}) => {
  const [, giveExp] = useGiveExpMutation();
  const { isTraining, setIsTraining, id, setId } = useContext(SkillContext);
  const { trainerKey, setTrainerKey } = useContext(SkillContext);

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
        animateProgress();
        setId(setInterval(trainingUpdate, skillObj.time));
        setTrainerKey(skillObj.name);
      }
    }
  };

  const trainingUpdate = () => {
    animateProgress();
  };

  const giveUserExp = async () => {
    const response = await giveExp({ skillId, value: skillObj.exp });
    if (response.data?.giveExp.leveled) {
      console.log("leveled");
    } else {
      console.log("exp given!");
    }
  };

  const animateProgress = () => {
    const line = new ProgressBar.Line("#pb", {
      color: "#93FF96",
      duration: skillObj.time,
      easing: "easeOut",
      strokeWidth: 2,
    });
    line.animate(1, {}, async () => {
      await giveUserExp();
      line.destroy();
      // console.log("done");
      return;
    });
  };

  return (
    <Box
      w="375px"
      h="150px"
      mr={4}
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
        <Text casing="capitalize" mt={2}>
          {skillObj.name}
        </Text>
        <Image src={"/images/tree.png"} boxSize="50px" />
        <Button
          size={"sm"}
          textColor={"white"}
          bgColor={trainerKey === skillObj.name ? "green" : B_CORAL}
          onClick={handleClick}
          mt={2}
        >
          Cut
        </Button>
      </Flex>
    </Box>
  );
};
