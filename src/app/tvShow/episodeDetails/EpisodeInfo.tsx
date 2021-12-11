import { IconButton } from "@chakra-ui/button";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Stack, Text } from "@chakra-ui/layout";
import { Image } from "app/shared";
import i18next from "i18next";
import React from "react";
import { Episode } from "../models";

export const EpisodeInfo: React.FC<Episode> = ({
  name,
  url,
  summary,
  image,
}) => (
  <Stack flexDir="column">
    <Stack flexDir="row" alignItems="center">
      <Text fontSize={["lg", "7xl"]} pr={2}>
        {name}
      </Text>
      {url && (
        <IconButton
          colorScheme="blue"
          aria-label="Open episode url"
          icon={<ExternalLinkIcon />}
          onClick={() => window.open(url, "_blank")}
        />
      )}
    </Stack>
    <Text
      dangerouslySetInnerHTML={{
        __html:
          summary && summary.length !== 0
            ? summary
            : i18next.t("tvshow:episodeInfo.noSummary"),
      }}
      fontSize={["md", "lg"]}
    />
    <Image src={image?.medium} w={"50%"} />
  </Stack>
);
