import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { UseQueryArgs } from "urql";
import {
  Exact,
  useGetCharSkillQuery,
  useGetSkillIdQuery,
} from "../../generated/graphql";
import { trees, GAINSBORO } from "../../utils/constants";
import { SkillContext } from "../../utils/contexts/SkillContext";
import { queryArgs } from "../../utils/types";
import { Trainer } from "../Trainer";
import ProgressBar from "progressbar.js";

interface WoodcuttingMenuProps {}

export const WoodcuttingMenu: React.FC<WoodcuttingMenuProps> = ({}) => {
  const [{ data }] = useGetSkillIdQuery({
    variables: { name: "woodcutting" },
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
      woodcutting area
      <Flex>
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
          {trees
            .filter(
              (tree) => tree.levelReq <= charSkillData?.getCharSkill.level
            )
            .map((tree) => (
              <Trainer skillId={data?.getSkillId.id} skillObj={tree} />
            ))}
        </SkillContext.Provider>
      </Flex>
      <Box w="100%" mt={12} textAlign="center">
        {charSkillData?.getCharSkill.xp ? (
          <Text>Curent xp: {charSkillData.getCharSkill.xp}</Text>
        ) : null}
      </Box>
      {/* <Button onClick={myFunc}>Click!</Button> */}
      <Box id="progressbar" />
    </Box>
  );
};
