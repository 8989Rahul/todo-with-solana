import { Box } from "@chakra-ui/layout";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Completed } from "./Completed";
import { InProgress } from "./InProgress";
import { TimeManagement } from "./TimeManagement";
import { Todos } from "./Todos";

export const DashboardComponent = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={3} pr="1rem">
          <Todos />
        </GridItem>

        <GridItem colSpan={2} pl="1rem">
          <TimeManagement />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="1.5rem">
        <GridItem colSpan={3} pr="1rem">
          <InProgress />
        </GridItem>

        <GridItem colSpan={2} pl="1rem">
          <Completed />
        </GridItem>
      </Grid>
    </Box>
  );
};
