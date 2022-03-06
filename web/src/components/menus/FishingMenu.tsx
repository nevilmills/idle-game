import { Box } from "@chakra-ui/react";
import React from "react";
import { useGetSkillIdQuery } from "../../generated/graphql";
import { GAINSBORO } from "../../utils/constants";
import { Trainer } from "../Trainer";

interface FishingMenuProps {}

export const FishingMenu: React.FC<FishingMenuProps> = ({}) => {
  const [{ data }] = useGetSkillIdQuery({
    variables: { name: "fishing" },
  });

  if (!data?.getSkillId.id) {
    return <Box>Error fetching data</Box>;
  }

  return (
    <Box w="100%" h="100vh" backgroundColor={GAINSBORO}>
      fishing area
      {/* <Trainer skillId={data?.getSkillId.id} /> */}
    </Box>
  );
};
