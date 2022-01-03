import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Generator } from "../components/Generator";
import { GeneratorArea } from "../components/GeneratorArea";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <Box>
      <NavBar />
      <Flex>
        <SideBar />
        <GeneratorArea>
          <Generator />
        </GeneratorArea>
      </Flex>
    </Box>
  );
};

export default Home;
