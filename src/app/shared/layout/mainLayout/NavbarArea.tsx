import { Grid, GridProps, PositionProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import themeGet from "@styled-system/theme-get";

const NavbarArea = styled(Grid)<GridProps & PositionProps>`
  position: sticky;
  height: ${themeGet("sizes.navbarHeight.sm")};
  ${themeGet("mediaQueries.md")} {
    height: ${themeGet("sizes.navbarHeight.lg")};
  }
  z-index: 2;
`;

NavbarArea.defaultProps = {
  gridArea: "navbar",
  background: "white",
  top: 0,
  boxShadow: "0px 1px 21px 0px rgba(0,0,0,0.3)",
};

export default NavbarArea;
