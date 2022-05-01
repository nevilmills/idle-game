import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  useGetSkillIdQuery,
  useGetCharSkillQuery,
} from "../../generated/graphql";
import { fish, GAINSBORO, ore } from "../../utils/constants";
import { SkillContext } from "../../utils/contexts/SkillContext";
import { Trainer } from "../Trainer";
import { TrainingInfo } from "../TrainingInfo";
import { v4 as uuidv4 } from "uuid";

interface MiningMenuProps {}

export const MiningMenu: React.FC<MiningMenuProps> = ({}) => {
  const [{ data }] = useGetSkillIdQuery({
    variables: { name: "mining" },
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
            currentMenu="mining"
          />
          <Flex>
            {ore
              .filter(
                (_ore) => _ore.levelReq <= charSkillData?.getCharSkill.level
              )
              .map((_ore) => (
                <Trainer
                  key={uuidv4()}
                  skillId={data?.getSkillId.id}
                  skillObj={_ore}
                  progressBarId={""}
                  currentMenu="mining"
                />
              ))}
          </Flex>
        </SkillContext.Provider>
      </Box>
    </Box>
  );
};
