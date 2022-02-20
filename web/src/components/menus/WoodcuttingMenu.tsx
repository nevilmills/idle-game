import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { UseQueryArgs } from "urql";
import { Exact, useGetSkillIdQuery } from "../../generated/graphql";
import { trees, V_GREEN } from "../../utils/constants";
import { SkillContext } from "../../utils/SkillContext";
import { queryArgs } from "../../utils/types";
import { Trainer } from "../Trainer";

interface WoodcuttingMenuProps {}

export const WoodcuttingMenu: React.FC<WoodcuttingMenuProps> = ({}) => {
  /*
  add a useContext which can be passed to trainers in order to fetch 
  and display charSkill exp values and levels.
  */
  const [{ data }] = useGetSkillIdQuery({
    variables: { name: "woodcutting" },
  });

  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [id, setId] = useState<NodeJS.Timer | undefined>(undefined);
  const [trainerKey, setTrainerKey] = useState<string | undefined>(undefined);

  if (!data?.getSkillId.id) {
    return <Box>Error fetching data</Box>;
  }

  return (
    <Box w="100%" h="100vh" backgroundColor={V_GREEN}>
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
          <Trainer skillId={data?.getSkillId.id} skillObj={trees["normal"]} />
          <Trainer skillId={data?.getSkillId.id} skillObj={trees["oak"]} />
          <Trainer skillId={data?.getSkillId.id} skillObj={trees["willow"]} />
          <Trainer skillId={data?.getSkillId.id} skillObj={trees["maple"]} />
          <Trainer skillId={data?.getSkillId.id} skillObj={trees["yew"]} />
        </SkillContext.Provider>
      </Flex>
    </Box>
  );
};
