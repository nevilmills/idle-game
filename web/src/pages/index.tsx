import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { ActivityArea } from "../components/ActivityArea";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <Box>
      <NavBar />
      <Flex>
        <SideBar />
        <ActivityArea />
      </Flex>
    </Box>
  );
};

export default Home;
