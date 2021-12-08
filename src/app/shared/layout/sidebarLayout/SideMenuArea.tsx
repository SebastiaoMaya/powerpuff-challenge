import { Grid, GridProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import themeGet from "@styled-system/theme-get";

const SideMenuArea = styled(Grid)<GridProps>`
  width: ${themeGet("sizes.sidemenu")};
  height: calc(100vh);
`;

SideMenuArea.defaultProps = {
  gridArea: "sidemenu",
  px: 5,
  py: 5,
  boxShadow: "0 4px 20px -4px rgba(0,0,0,0.5)",
};

export default SideMenuArea;
