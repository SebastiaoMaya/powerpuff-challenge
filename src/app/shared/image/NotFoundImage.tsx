import { BoxProps, Flex, Text } from "@chakra-ui/layout";
import React from "react";

export const NotFoundImage: React.FC<BoxProps> = ({
  width,
  height,
  fontSize,
  ...rest
}) => (
  <Flex
    w={width ?? "218px"}
    h={height ?? "122px"}
    justifyContent="center"
    alignItems="center"
    bg="gray.400"
    {...(rest as any)}>
    <Text color="black">No image yet</Text>
  </Flex>
);
