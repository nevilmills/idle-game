import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { B_CORAL, menuColors, SHAMROCK } from "../utils/constants";
import { CharSkillData, MenuOption } from "../utils/types";
import ProgressBar from "progressbar.js";
import { SkillContext } from "../utils/contexts/SkillContext";

interface TrainingInfoProps {
  skillData: CharSkillData;
  currentMenu: MenuOption;
}

export const TrainingInfo: React.FC<TrainingInfoProps> = ({
  skillData,
  currentMenu,
}) => {
  const progressBarId = "pb";
  const { trainerKey: currentlyCutting } = useContext(SkillContext);
  const menuColor = menuColors[currentMenu];

  const animateProgress = () => {
    const line = new ProgressBar.Line("#pb", {
      color: "#93FF96",
      duration: 1000,
      easing: "easeOut",
    });
    line.animate(1, {}, () => {
      line.destroy();
      console.log("done");
      return;
    });
  };

  return (
    <Box
      mb={8}
      w="100%"
      h="150px"
      borderRadius="15px"
      borderWidth={2}
      borderColor={B_CORAL}
      boxShadow={"1px 2px"}
      overflow="hidden"
    >
      <Box backgroundColor={menuColor} height={2} width="100%" />
      <Flex mt={2} justifyContent={"space-around"}>
        <Text>SKILL LEVEL: {skillData.level}</Text>
        <Text>SKILL XP: {skillData.xp}</Text>
      </Flex>
      <Box>
        <Box
          mt={8}
          mx={"auto"}
          id={progressBarId}
          w={"1000px"}
          h={"22px"}
          border={"1px solid black"}
          mb={4}
        ></Box>
      </Box>

      <Box mb={2} textAlign="center">
        <Text>Currently cutting: {currentlyCutting}</Text>
      </Box>
    </Box>
  );
};
