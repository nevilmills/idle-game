import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { MenuContext } from "../../utils/contexts/MenuContext";
import { SHAMROCK } from "../../utils/constants";
import { ctxParam } from "../../utils/types";
import { menus } from "../../utils/menus";

interface SideBarButtonProps {
  linkedMenu: string;
}

export const SideBarButton: React.FC<SideBarButtonProps> = ({ linkedMenu }) => {
  const { _, setArea } = useContext<any>(MenuContext);
  const nextMenu = menus[linkedMenu]; // nextArea = <WoodcuttingArea />

  return (
    <Box
      onClick={() => setArea(nextMenu)}
      w="100%"
      textAlign={"center"}
      mb={2}
      _hover={{ border: `1px solid ${SHAMROCK}` }}
    >
      <Text casing="capitalize" color={"white"}>
        {linkedMenu}
      </Text>
    </Box>
  );
};
