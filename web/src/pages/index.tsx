import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { ActivityArea } from "../components/areas/ActivityArea";
import { CharacterArea } from "../components/areas/CharacterArea";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/sidebar/SideBar";
import { AreaContext } from "../utils/AreaContext";

const Home: NextPage = () => {
  const [area, setArea] = useState(<CharacterArea />);

  return (
    <Box>
      <NavBar />
      <Flex>
        <AreaContext.Provider value={{ area, setArea }}>
          <SideBar />
          {area}
        </AreaContext.Provider>
      </Flex>
    </Box>
  );
};

export default Home;
