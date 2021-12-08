import { Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";

const ContentArea = styled(Grid)`
  height: calc(100vh);
  overflow-y: auto;
`;

ContentArea.defaultProps = {
  gridArea: "content",
  gridAutoRows: "min-content", // to disable rows height dynamic sizing
  py: 6,
  px: 6,
};

export default ContentArea;
