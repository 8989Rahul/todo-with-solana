import { Box } from "@chakra-ui/layout";
import React from "react";

export const ContainerComponent = ({ children }: any) => {
  return (
    <Box bg="linear-gradient(to right, #d3aaed, #809bfc)" p="1rem">
      {children}
    </Box>
  );
};
