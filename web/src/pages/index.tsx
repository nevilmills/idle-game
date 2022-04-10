import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { CharacterMenu } from "../components/menus/CharacterMenu";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/sidebar/SideBar";
import { MenuContext } from "../utils/contexts/MenuContext";

const Home: NextPage = () => {
  const [menu, setMenu] = useState(<CharacterMenu />);

  return (
    <Box>
      <NavBar />
      <Flex>
        <MenuContext.Provider value={{ menu, setMenu }}>
          <SideBar />
          {menu}
        </MenuContext.Provider>
      </Flex>
    </Box>
  );
};

export default Home;
