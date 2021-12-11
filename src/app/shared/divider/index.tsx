import { BoxProps, Text } from "@chakra-ui/react";
import React from "react";

export const Divider: React.FC<BoxProps> = ({ color, ...rest }) => (
  <Text color={color ?? "white"} fontWeight="bold" fontSize="lg" {...rest}>
    |
  </Text>
);
