import { ContentAreaMainLayout } from "app/shared";
import { EpisodeDetails } from "app/tvShow/episodeDetails";
import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const EpisodeDetailsPage: React.FC = () => {
  const { id } = useParams<Params>();

  return (
    <ContentAreaMainLayout>
      <EpisodeDetails id={id} />
    </ContentAreaMainLayout>
  );
};

export default EpisodeDetailsPage;
