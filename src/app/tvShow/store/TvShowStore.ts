import { action, computed, flow, makeObservable, observable } from "mobx";
import { TvShow, Episode } from "../models";
import { fetchTvShowService, fetchEpisodesListService } from "../services";

export class TvShowStore {
  @observable private _tvShow: TvShow | undefined = undefined;
  @observable private _episodesList: Episode[] = [];

  @action.bound setTvShow(tvShow: TvShow) {
    this._tvShow = tvShow;
  }

  fetchTvShow = flow(function* (this: TvShowStore) {
    yield fetchTvShowService().then((r) => {
      this.setTvShow(r);
      this.fetchEpisodesList(r.id);
    });
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
