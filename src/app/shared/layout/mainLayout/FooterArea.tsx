import { Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import themeGet from "@styled-system/theme-get";

const FooterArea = styled(Grid)`
  height: ${themeGet("sizes.footerHeight.sm")};
  ${themeGet("mediaQueries.lg")} {
    height: ${themeGet("sizes.footerHeight.lg")};
  }
`;

FooterArea.defaultProps = {
  gridArea: "footer",
  background: "black",
  boxShadow: "0px -1px 21px 0px rgba(0,0,0,0.3)",
  zIndex: 10,
};

export default FooterArea;
