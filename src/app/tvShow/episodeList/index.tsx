import { Stack } from "@chakra-ui/layout";
import { observer } from "mobx-react";
import React from "react";
import { useRootStoreContext } from "rootStore";
import { Episode } from "../models";
import { EpisodeCard } from "./EpisodeCard";

export const EpisodeListBase = () => {
  const { tvShowStore } = useRootStoreContext();

  return tvShowStore.episodesList ? (
    <Stack flexDir="row" flexWrap="wrap" spacing={[2, 4]}>
      {tvShowStore.episodesList.map((episode: Episode) => (
        <EpisodeCard key={`episode_${episode.id}`} episode={episode} />
      ))}
    </Stack>
  ) : (
    <></>
  );
};

export const EpisodeList = observer(EpisodeListBase);
