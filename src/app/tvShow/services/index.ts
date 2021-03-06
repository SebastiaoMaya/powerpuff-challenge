import network from "network";
import { Episode, TvShow } from "../models";

export const fetchTvShowService = async (): Promise<TvShow> => {
  const { id, summary, image } = await network
    .get("/singlesearch/shows?q=powerpuff")
    .then((res) => res.data);

  return { id, summary, image };
};

export const fetchEpisodesListService = async (
  tvShowId: string
): Promise<Episode[]> =>
  await network.get(`/shows/${tvShowId}/episodes`).then((res) => res.data);
