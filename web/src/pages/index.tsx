import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { CharacterArea } from "../components/menus/CharacterMenu";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/sidebar/SideBar";
import { MenuContext } from "../utils/contexts/MenuContext";

const Home: NextPage = () => {
  const [area, setArea] = useState(<CharacterArea />);

  return (
    <Box>
      <NavBar />
      <Flex>
        <MenuContext.Provider value={{ area, setArea }}>
          <SideBar />
          {area}
        </MenuContext.Provider>
      </Flex>
    </Box>
  );
};

export default Home;
