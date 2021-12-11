import { Flex } from "@chakra-ui/layout";
import { observer } from "mobx-react";
import React from "react";
import { useRootStoreContext } from "rootStore";
import { Episode } from "../models";
import { EpisodeCard } from "./EpisodeCard";

export const EpisodeListBase = () => {
  const { tvShowStore } = useRootStoreContext();

  return tvShowStore.episodesList ? (
    <Flex flexDir="row" flexWrap="wrap" justifyContent="center">
      {tvShowStore.episodesList.map((episode: Episode) => (
        <EpisodeCard key={`episode_${episode.id}`} {...episode} />
      ))}
    </Flex>
  ) : (
    <></>
  );
};

export const EpisodeList = observer(EpisodeListBase);
