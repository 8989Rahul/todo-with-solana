import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Dashboard } from "./dashboard";

const Home: NextPage = () => {
  return (
    <Box>
      <Dashboard />
    </Box>
  );
};

export default Home;
