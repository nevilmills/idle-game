import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { UseQueryArgs } from "urql";
import {
  Exact,
  useGetCharSkillQuery,
  useGetSkillIdQuery,
} from "../../generated/graphql";
import { trees, GAINSBORO, B_CORAL } from "../../utils/constants";
import { SkillContext } from "../../utils/contexts/SkillContext";
import { TrainingStatus } from "../../utils/types";
import { Trainer } from "../Trainer";
import { v4 as uuidv4 } from "uuid";
import { TrainingInfo } from "../TrainingInfo";

interface WoodcuttingMenuProps {}

export const WoodcuttingMenu: React.FC<WoodcuttingMenuProps> = ({}) => {
  const [trainingStatus, setTrainingStatus] = useState<TrainingStatus>({
    isTraining: false,
    trainerName: undefined,
    intervalId: undefined,
  });

  const [{ data }] = useGetSkillIdQuery({
    variables: { name: "woodcutting" },
  });

  const [{ data: charSkillData }] = useGetCharSkillQuery({
    variables: { skillId: data?.getSkillId.id! },
  });

  if (!data?.getSkillId.id || !charSkillData) {
    return <Box>Error fetching data</Box>;
  }

  return (
    <Box w="100%" h="100vh" backgroundColor={GAINSBORO}>
      <Box m={4}>
        <SkillContext.Provider
          value={{
            trainingStatus,
            setTrainingStatus,
          }}
        >
          <TrainingInfo
            skillData={charSkillData.getCharSkill}
            currentMenu="woodcutting"
          />
          <Flex>
            {trees
              .filter(
                (tree) => tree.levelReq <= charSkillData?.getCharSkill.level
              )
              .map((tree) => (
                <Trainer
                  key={uuidv4()}
                  skillId={data?.getSkillId.id}
                  skillObj={tree}
                  progressBarId={""}
                  currentMenu="woodcutting"
                />
              ))}
          </Flex>
        </SkillContext.Provider>
      </Box>
    </Box>
  );
};
