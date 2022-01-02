import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <Box>
      <NavBar />
      <SideBar />
    </Box>
  );
};

export default Home;
