import React from "react";
import { Layout } from "antd";
import { SideMenu } from "../molecules/sideMenu";
import { StyledContent, StyledHeader, StyledLayout } from "./styles";

export const MainLayout = ({ children, header }) => {
  return (
    <StyledLayout>
      <SideMenu />
      <Layout className="site-layout">
        {header && <StyledHeader>{header}</StyledHeader>}
        <StyledContent>{children}</StyledContent>
      </Layout>
    </StyledLayout>
  );
};
