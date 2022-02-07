import { Box, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { UseQueryArgs } from "urql";
import { Exact, useGetSkillIdQuery } from "../../generated/graphql";
import { V_GREEN } from "../../utils/constants";
import { queryArgs } from "../../utils/types";
import { Trainer } from "../Trainer";

interface WoodcuttingMenuProps {}

export const WoodcuttingMenu: React.FC<WoodcuttingMenuProps> = ({}) => {
  //   const [, giveExp] = useGiveExpMutation(); //give this function the skill id and amount of experience.
  // need to get and store the skillId for woodcutting.
  const [{ data }] = useGetSkillIdQuery({
    variables: { name: "woodcutting" },
  });

  return (
    <Box w="100%" h="100vh" backgroundColor={V_GREEN}>
      woodcutting area
      <Button onClick={() => console.log(data)}>click here</Button>
      <Trainer skillId={data?.getSkillId.id} />
    </Box>
  );
};
