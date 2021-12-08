import { computed, flow, makeObservable, observable } from "mobx";
import { User } from "../models";
import { doLogin } from "../services";

export class UserStore {
  @observable private _user: User | undefined = undefined;

  login = flow(function* (this: UserStore) {
    this._user = yield doLogin();
  }).bind(this);

  logout = flow(function* (this: UserStore) {
    this._user = yield undefined;
  }).bind(this);

  @computed get user(): User | undefined {
    return this._user;
  }

  constructor() {
    makeObservable(this);
  }
}
