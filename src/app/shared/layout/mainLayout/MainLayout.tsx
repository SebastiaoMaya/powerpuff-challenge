import { Grid, GridProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import themeGet from "@styled-system/theme-get";
import React from "react";

const StyledMainLayout = styled(Grid)<GridProps>`
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "navbar"
    "header"
    "content"
    "footer";

  ${themeGet("mediaQueries.md")} {
    grid-template-columns:
      auto minmax(auto, ${themeGet("sizes.maxWidth")})
      auto;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      "navbar navbar navbar"
      "header header header"
      "...... content ......"
      "footer footer footer";
  }
`;

export const MainLayout: React.FC<GridProps> = (props) => (
  <StyledMainLayout background={"white"} color={"black"} {...props} />
);

MainLayout.defaultProps = {
  background: "greyBlue",
  color: "white",
  height: "100%",
};
