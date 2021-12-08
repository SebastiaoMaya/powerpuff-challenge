import { Divider, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { SiteLogo } from "../siteLogo";
import { TextLink } from "../textLink";

export const Navbar: React.FC = () => (
  <Flex
    width={"100%"}
    maxWidth={["maxWidth"]}
    mx="auto"
    justifyContent="space-between">
    <Stack alignItems="center" direction="row">
      <SiteLogo />
    </Stack>
    <Stack alignItems="center" direction="row">
      <TextLink to="/login" fontSize="sm">
        LOGIN
      </TextLink>
      <Divider orientation="vertical" h="50%" />
      <TextLink to="/signup" fontSize="sm">
        SIGNUP
      </TextLink>
    </Stack>
  </Flex>
);
