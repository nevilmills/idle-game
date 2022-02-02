import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AreaContext } from "../../utils/AreaContext";
import { ctxParam } from "../../utils/types";
import { ActivityArea } from "../areas/ActivityArea";

interface SideBarButtonProps {
  skill: string;
}

export const SideBarButton: React.FC<SideBarButtonProps> = ({ skill }) => {
  const { area, setArea } = useContext<any>(AreaContext);

  return <Box onClick={() => setArea(<ActivityArea />)}>{skill}</Box>;
};
