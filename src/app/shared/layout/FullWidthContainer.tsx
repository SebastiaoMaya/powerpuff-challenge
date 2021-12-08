import { Box, BoxProps, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import themeGet from "@styled-system/theme-get";
import React, { ReactNode } from "react";

interface Props extends BoxProps {
  children?: ReactNode;
}

const FullWidthContent = styled(Box)<BoxProps>`
  ${themeGet("mediaQueries.lg")} {
    width: 1440px;
  }
`;

FullWidthContent.defaultProps = {
  px: [0, 0, 0, 0, "105px"],
};

export const FullWidthContainer: React.FC<Props> = ({ children, ...rest }) => (
  <Box
    width="100vw"
    position="relative"
    left="50%"
    right="50%"
    marginLeft="-50vw"
    marginRight="-50vw"
    {...rest}>
    <Flex justifyContent="center">
      <FullWidthContent>{children}</FullWidthContent>
    </Flex>
  </Box>
);
