import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AreaContext } from "../../utils/AreaContext";
import { GSA } from "../../utils/constants";
import { ctxParam } from "../../utils/types";
import { ActivityArea } from "../areas/ActivityArea";

interface SideBarButtonProps {
  skill: string;
}

export const SideBarButton: React.FC<SideBarButtonProps> = ({ skill }) => {
  const { area, setArea } = useContext<any>(AreaContext);

  return (
    <Box
      onClick={() => setArea(<ActivityArea />)}
      w="100%"
      textAlign={"center"}
      mb={2}
      _hover={{ border: `1px solid ${GSA}` }}
    >
      <Text color={"white"}>{skill}</Text>
    </Box>
  );
};
