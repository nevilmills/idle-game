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
  menuColors,
} from "../utils/constants";
import { SkillContext } from "../utils/contexts/SkillContext";
import { MenuOption } from "../utils/types";

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
  currentMenu: MenuOption;
}

export const Trainer: React.FC<TrainerProps> = ({
  skillId,
  skillObj,
  currentMenu,
}) => {
  const [, giveExp] = useGiveExpMutation();
  const { trainingStatus, setTrainingStatus } = useContext(SkillContext);
  const menuColor = menuColors[currentMenu];
  const imgName =
    currentMenu === "woodcutting"
      ? "tree.png"
      : currentMenu === "fishing"
      ? "fish.png"
      : "pickaxe.png";
  const imgSrc = `/images/${imgName}`;

  const handleClick = () => {
    if (!trainingStatus.isTraining) {
      setTrainingStatus({
        isTraining: !trainingStatus.isTraining,
        trainerName: skillObj.name,
        intervalId: setInterval(trainingUpdate, skillObj.time),
      });
    } else {
      if (trainingStatus.trainerName == skillObj.name) {
        // if the active trainer is this one, turn it off
        clearInterval(trainingStatus.intervalId!);

        setTrainingStatus({
          isTraining: !trainingStatus.isTraining,
          intervalId: undefined,
          trainerName: undefined,
        });
      } else {
        // otherwise turn other trainer off, and turn this trainer on
        clearInterval(trainingStatus.intervalId!);
        animateProgress();
        setTrainingStatus({
          ...trainingStatus,
          trainerName: skillObj.name,
          intervalId: setInterval(trainingUpdate, skillObj.time),
        });
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
      <Box backgroundColor={menuColor} height={2} width="100%" />
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
        <Image src={imgSrc} boxSize="50px" p={1} />
        <Button
          size={"sm"}
          textColor={"white"}
          bgColor={
            trainingStatus.trainerName === skillObj.name ? "green" : B_CORAL
          }
          onClick={handleClick}
          mt={2}
        >
          Cut
        </Button>
      </Flex>
    </Box>
  );
};
