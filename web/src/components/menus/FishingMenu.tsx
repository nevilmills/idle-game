import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  useGetCharSkillQuery,
  useGetSkillIdQuery,
} from "../../generated/graphql";
import { fish, GAINSBORO, trees } from "../../utils/constants";
import { SkillContext } from "../../utils/contexts/SkillContext";
import { Trainer } from "../Trainer";
import { TrainingInfo } from "../TrainingInfo";
import { v4 as uuidv4 } from "uuid";

interface FishingMenuProps {}

export const FishingMenu: React.FC<FishingMenuProps> = ({}) => {
  const [{ data }] = useGetSkillIdQuery({
    variables: { name: "fishing" },
  });

  const [{ data: charSkillData }] = useGetCharSkillQuery({
    variables: { skillId: data?.getSkillId.id! },
  });

  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [id, setId] = useState<NodeJS.Timer | undefined>(undefined);
  const [trainerKey, setTrainerKey] = useState<string | undefined>(undefined);

  if (!data?.getSkillId.id || !charSkillData) {
    return <Box>Error fetching data</Box>;
  }

  return (
    <Box w="100%" h="100vh" backgroundColor={GAINSBORO}>
      <Box m={4}>
        <SkillContext.Provider
          value={{
            isTraining,
            setIsTraining,
            id,
            setId,
            trainerKey,
            setTrainerKey,
          }}
        >
          <TrainingInfo
            skillData={charSkillData.getCharSkill}
            currentMenu="fishing"
          />
          <Flex>
            {fish
              .filter(
                (_fish) => _fish.levelReq <= charSkillData?.getCharSkill.level
              )
              .map((_fish) => (
                <Trainer
                  key={uuidv4()}
                  skillId={data?.getSkillId.id}
                  skillObj={_fish}
                  progressBarId={""}
                  currentMenu="fishing"
                />
              ))}
          </Flex>
        </SkillContext.Provider>
      </Box>
    </Box>
  );
};
