import { ContentAreaMainLayout } from "app/shared";
import { TvShowInfo } from "app/tvShow";
import React from "react";

const Homepage: React.FC = () => (
  <ContentAreaMainLayout>
    <TvShowInfo />
  </ContentAreaMainLayout>
);

export default Homepage;
