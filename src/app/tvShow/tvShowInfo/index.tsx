import { Text } from "@chakra-ui/layout";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useRootStoreContext } from "rootStore";
import { EpisodeList } from "../episodeList";

export const TvShowInfoBase = () => {
  const { tvShowStore } = useRootStoreContext();

  useEffect(() => {
    tvShowStore.fetchTvShow();
  }, [tvShowStore]);

  //trusting that the api sanitizes the value of summary first
  return (
    <>
      <Text
        dangerouslySetInnerHTML={{
          __html: tvShowStore.tvShow?.summary ?? "",
        }}
      />
      <EpisodeList />
    </>
  );
};

export const TvShowInfo = observer(TvShowInfoBase);
