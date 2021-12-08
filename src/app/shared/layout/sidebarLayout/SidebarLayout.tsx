import { Grid, GridProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import themeGet from "@styled-system/theme-get";
import React from "react";

const SidebarLayoutBase = styled(Grid)<GridProps>`
  grid-template-columns: ${themeGet("sizes.sideMenu")} auto;
  grid-template-rows: auto auto 1fr;
  grid-template-areas: "sidemenu content";
`;

const SidebarLayout: React.FC<GridProps> = (props) => (
  <SidebarLayoutBase {...props} />
);

SidebarLayout.defaultProps = {
  height: "100%",
};

export default SidebarLayout;
