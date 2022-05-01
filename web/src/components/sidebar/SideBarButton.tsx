import { Box, Button, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { MenuContext } from "../../utils/contexts/MenuContext";
import { SHAMROCK } from "../../utils/constants";
import { ctxParam } from "../../utils/types";
import { menus } from "../../utils/menus";

interface SideBarButtonProps {
  linkedMenu: string;
}

export const SideBarButton: React.FC<SideBarButtonProps> = ({ linkedMenu }) => {
  const { _, setMenu } = useContext<any>(MenuContext);
  const nextMenu = menus[linkedMenu]; // nextArea = <WoodcuttingArea />

  return (
    <Box
      onClick={() => setMenu(nextMenu)}
      w="100%"
      textAlign={"center"}
      mb={2}
      _hover={{ backgroundColor: "#3f484f" }}
    >
      <Box as={"button"}>
        <Text casing="capitalize" color={"white"}>
          {linkedMenu}
        </Text>
      </Box>
    </Box>
  );
};
