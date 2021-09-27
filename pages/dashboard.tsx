import { Text } from "@chakra-ui/layout";
import React from "react";
import { DashboardComponent } from "../moduls/Dashboaord";
import { ContainerComponent } from "./components/ContainerComponent";
import { Header } from "./components/Header";
import { SidebarComponent } from "./components/SidebarComponent";

export const Dashboard = () => {
  return (
    <ContainerComponent>
      <SidebarComponent>
        <Header BrandText="Dashboard" />
        <DashboardComponent />
      </SidebarComponent>
    </ContainerComponent>
  );
};
