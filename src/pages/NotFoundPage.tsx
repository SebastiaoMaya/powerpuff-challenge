import { Text } from "@chakra-ui/react";
import {
  AlphaBackground,
  ContentAreaMainLayout,
  TopBackgroundWrapper,
} from "app/shared";
import i18next from "i18next";
import React from "react";

const NotFoundPage: React.FC = () => (
  <TopBackgroundWrapper>
    <ContentAreaMainLayout>
      <AlphaBackground>
        <Text fontSize="7xl">{i18next.t("shared:notFound.title")}</Text>
      </AlphaBackground>
    </ContentAreaMainLayout>
  </TopBackgroundWrapper>
);

export default NotFoundPage;
