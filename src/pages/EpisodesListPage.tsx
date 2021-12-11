import { ContentAreaMainLayout } from "app/shared";
import { EpisodeList } from "app/tvShow";
import React from "react";

const EpisodesListPage: React.FC = () => (
  <ContentAreaMainLayout>
    <EpisodeList />
  </ContentAreaMainLayout>
);

export default EpisodesListPage;
