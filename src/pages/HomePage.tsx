import { ContentAreaMainLayout } from "app/shared";
import { Text } from "@chakra-ui/react";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <ContentAreaMainLayout>
        <Text fontSize="lg" color="darkGrey">
          Homepage
        </Text>
      </ContentAreaMainLayout>
    </>
  );
};

export default HomePage;
