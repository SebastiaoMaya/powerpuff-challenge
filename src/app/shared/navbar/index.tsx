import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { SiteLogo } from "../siteLogo";

export const Navbar: React.FC = () => (
  <Flex
    width={"100%"}
    maxWidth={["maxWidth"]}
    mx="auto"
    justifyContent="space-between">
    <Stack alignItems="center" direction="row">
      <SiteLogo />
      <Text fontSize={["lg", "xl"]}>Powerpuff Girls Challenge!</Text>
    </Stack>
  </Flex>
);
