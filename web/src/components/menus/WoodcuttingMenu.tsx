import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { UseQueryArgs } from "urql";
import { Exact, useGetSkillIdQuery } from "../../generated/graphql";
import { trees, V_GREEN } from "../../utils/constants";
import { queryArgs } from "../../utils/types";
import { Trainer } from "../Trainer";

interface WoodcuttingMenuProps {}

export const WoodcuttingMenu: React.FC<WoodcuttingMenuProps> = ({}) => {
  //   const [, giveExp] = useGiveExpMutation(); //give this function the skill id and amount of experience.
  // need to get and store the skillId for woodcutting.
  const [{ data }] = useGetSkillIdQuery({
    variables: { name: "woodcutting" },
  });

  if (!data?.getSkillId.id) {
    return <Box>Error fetching data</Box>;
  }

  return (
    <Box w="100%" h="100vh" backgroundColor={V_GREEN}>
      woodcutting area
      <Flex>
        <Trainer skillId={data?.getSkillId.id} skillObj={trees["normal"]} />
        <Trainer skillId={data?.getSkillId.id} skillObj={trees["oak"]} />
        <Trainer skillId={data?.getSkillId.id} skillObj={trees["willow"]} />
        <Trainer skillId={data?.getSkillId.id} skillObj={trees["maple"]} />
        <Trainer skillId={data?.getSkillId.id} skillObj={trees["yew"]} />
      </Flex>
    </Box>
  );
};
