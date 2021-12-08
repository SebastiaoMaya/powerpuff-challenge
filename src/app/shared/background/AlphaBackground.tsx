import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";

interface Props extends BoxProps {
  children: JSX.Element;
}

export const AlphaBackground: React.FC<Props> = ({ children }) => (
  <Box
    backgroundColor="blackAlpha.800"
    p={4}
    borderRadius="md"
    color="white"
    zIndex={3}>
    {children}
  </Box>
);
