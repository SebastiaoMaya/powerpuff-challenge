import { computed, configure, flow, makeObservable, observable } from "mobx";
import { TvShow, Episode } from "../models";
import {
  fetchTvShowService,
  fetchEpisodesListService,
  fetchEpisodeService,
} from "../services";
configure({
  enforceActions: "observed",
});

export class TvShowStore {
  @observable private _tvShow: TvShow | undefined = undefined;
  @observable private _episodesList: Episode[] = [];

  fetchTvShow = flow(function* (this: TvShowStore) {
    const res = yield fetchTvShowService().then((r) => (this._tvShow = r));
    this.fetchEpisodesList(res.id);
  }).bind(this);

  fetchEpisodesList = flow(function* (this: TvShowStore, tvShowId: string) {
    this._episodesList = yield fetchEpisodesListService(tvShowId);
  }).bind(this);

  @computed get tvShow(): TvShow | undefined {
    return this._tvShow;
  }

  @computed get episodesList(): Episode[] {
    return this._episodesList;
  }

  constructor() {
    makeObservable(this);
  }
}
