import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/layout";
import i18next from "i18next";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useRootStoreContext } from "rootStore";
import { Episode } from "../models";
import { EpisodeInfo } from "./EpisodeInfo";

interface Props {
  id: string;
}

const EpisodeDetailsBase: React.FC<Props> = ({ id }) => {
  const { tvShowStore } = useRootStoreContext();
  const [episode, setEpisode] = useState<Episode | undefined>();

  const getEpisodeById = useCallback(
    (id: string) => {
      setEpisode(
        tvShowStore.episodesList.find((e) => toJS(e).id.toString() === id)
      );
    },
    [tvShowStore.episodesList]
  );

  useEffect(() => {
    !tvShowStore.tvShow && tvShowStore.fetchTvShow();
    getEpisodeById(id);
  }, [tvShowStore, id, getEpisodeById]);

  return (
    <>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            {episode?.name ??
              i18next.t("tvshow:episodeDetails:episodeNotFound")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {episode ? (
        <EpisodeInfo {...episode} />
      ) : (
        <Text fontSize={["lg", "7xl"]}>
          {i18next.t("tvshow:episodeDetails:episodeNotFound")}
        </Text>
      )}
    </>
  );
};

export const EpisodeDetails = observer(EpisodeDetailsBase);
