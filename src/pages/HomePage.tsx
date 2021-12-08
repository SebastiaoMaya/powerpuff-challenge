import {
  AlphaBackground,
  ContentAreaMainLayout,
  TopBackgroundWrapper,
} from "app/shared";
import { Box, UnorderedList, ListItem, Text, Divider } from "@chakra-ui/react";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <TopBackgroundWrapper>
      <ContentAreaMainLayout>
        <AlphaBackground>
          <Text fontSize="lg">
            This is the power puff girls challenge. I'm using the following
            technologies:
            <UnorderedList>
              <ListItem>React</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>MobX</ListItem>
              <ListItem>Chakra UI</ListItem>
              <ListItem>Axios</ListItem>
            </UnorderedList>
            <Divider orientation="horizontal" my={2} />
            We have the following breakpoints:
            <UnorderedList>
              <ListItem>sm: 544px</ListItem>
              <ListItem>md: 768px</ListItem>
              <ListItem>lg: 1024px</ListItem>
              <ListItem>xl: 1280px</ListItem>
            </UnorderedList>
          </Text>
        </AlphaBackground>
      </ContentAreaMainLayout>
    </TopBackgroundWrapper>
  );
};

export default HomePage;
