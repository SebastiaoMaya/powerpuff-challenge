import { Stack, Text } from "@chakra-ui/layout";
import i18next from "i18next";
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
    <Stack alignItems="center">
      <Text
        dangerouslySetInnerHTML={{
          __html:
            tvShowStore.tvShow?.summary ??
            i18next.t("tvshow:tvShowInfo.noSummary"),
        }}
        py={[2, 4, 6]}
      />
      <EpisodeList />
    </Stack>
  );
};

export const TvShowInfo = observer(TvShowInfoBase);
