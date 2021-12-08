import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { Divider } from "../divider";
import { TextLink } from "../textLink";

export const Footer: React.FC = () => (
  <Flex width={"100%"} maxWidth={["maxWidth"]} mx="auto" flexDirection="column">
    <Stack py={6} direction="row" flexWrap="wrap" px={[6, 6, 0]}>
      <TextLink to="#" fontSize="lg">
        Privacy Policy
      </TextLink>
      <Divider color="white" />
      <TextLink to="#" fontSize="lg">
        Copyright
      </TextLink>
      <Divider color="white" />
      <TextLink to="#" fontSize="lg">
        FAQ
      </TextLink>
    </Stack>
  </Flex>
);
