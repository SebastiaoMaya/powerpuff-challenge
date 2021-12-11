import { Text } from "@chakra-ui/react";
import { ContentAreaMainLayout } from "app/shared";
import i18next from "i18next";
import React from "react";

const NotFoundPage: React.FC = () => (
  <ContentAreaMainLayout>
    <Text fontSize={["lg", "7xl"]}>{i18next.t("shared:notFound.title")}</Text>
  </ContentAreaMainLayout>
);

export default NotFoundPage;
