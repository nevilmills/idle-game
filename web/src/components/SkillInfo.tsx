import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { B_CORAL, SHAMROCK } from "../utils/constants";
import { CharSkillData } from "../utils/types";
import ProgressBar from "progressbar.js";

export const SkillInfo: React.FC<{ skillData: CharSkillData }> = ({
  skillData,
}) => {
  // let bar = null;

  // useEffect(() => {
  //   bar = new ProgressBar.Line("#pb", {
  //     color: "#93FF96",
  //     duration: 1000,
  //     easing: "easeOut",
  //   });
  // }, []);

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
      <Box backgroundColor={SHAMROCK} height={2} width="100%" />
      <Flex mt={2} justifyContent={"space-around"}>
        <Text>SKILL LEVEL: {skillData.level}</Text>
        <Text>SKILL XP: {skillData.xp}</Text>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Box id={"pb"} maxW={"1000px"}></Box>
        <Button w={"100px"} onClick={animateProgress}>
          Test
        </Button>
      </Flex>
    </Box>
  );
};
