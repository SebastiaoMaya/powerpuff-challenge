import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

export const TempNotFound = () => (
  <Flex
    w="218px"
    h="122px"
    justifyContent="center"
    alignItems="center"
    bg="gray.400">
    <Text color="black">No image yet</Text>
  </Flex>
);
