import { Divider, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { TextLink } from "../textLink";

export const Navbar: React.FC = () => {
  return (
    <Flex
      width={"100%"}
      maxWidth={["maxWidth"]}
      mx="auto"
      justifyContent="space-between">
      <Stack alignItems="center" direction="row">
        <TextLink to="/" color="black" fontSize="lg">
          LOGO
        </TextLink>
      </Stack>
      <Stack alignItems="center" direction="row">
        <TextLink to="/login" color="black" fontSize="sm">
          LOGIN
        </TextLink>
        <Divider orientation="vertical" h="50%" />
        <TextLink to="/signup" color="black" fontSize="sm">
          SIGNUP
        </TextLink>
      </Stack>
    </Flex>
  );
};
