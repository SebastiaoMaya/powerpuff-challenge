import { BoxProps, Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import themeGet from "@styled-system/theme-get";

const ContentArea = styled(Grid)<BoxProps>`
  min-height: calc(
    100vh - ${themeGet("sizes.navbarHeight.sm")} -
      ${themeGet("sizes.footerHeight.sm")}
  );
  ${themeGet("mediaQueries.lg")} {
    min-height: calc(
      100vh - ${themeGet("sizes.navbarHeight.lg")} -
        ${themeGet("sizes.footerHeight.lg")}
    );
  }
`;

ContentArea.defaultProps = {
  gridArea: "content",
  gridAutoRows: "min-content", // to disable rows height dynamic sizing
  py: [2, 4, 4, 4, 10],
  px: ["33px", "60px", "60px", "105px"],
};

export default ContentArea;
