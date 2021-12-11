import axios from "network";
import { Episode, TvShow } from "../models";

export const fetchTvShowService = async (): Promise<TvShow> => {
  const { id, summary, image } = await axios
    .get("/singlesearch/shows?q=powerpuff")
    .then((res) => res.data);

  return { id, summary, image };
};

export const fetchEpisodesListService = async (
  tvShowId: string
): Promise<Episode[]> =>
  await axios.get(`/shows/${tvShowId}/episodes`).then((res) => res.data);
