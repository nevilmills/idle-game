import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AreaContext } from "../../utils/AreaContext";
import { GSA } from "../../utils/constants";
import { ctxParam } from "../../utils/types";
import { ActivityArea } from "../areas/ActivityArea";

interface SideBarButtonProps {
  linkedArea: string;
}

export const SideBarButton: React.FC<SideBarButtonProps> = ({ linkedArea }) => {
  const { _, setArea } = useContext<any>(AreaContext);

  return (
    <Box
      onClick={() => setArea(<ActivityArea />)}
      w="100%"
      textAlign={"center"}
      mb={2}
      _hover={{ border: `1px solid ${GSA}` }}
    >
      <Text color={"white"}>{linkedArea}</Text>
    </Box>
  );
};
