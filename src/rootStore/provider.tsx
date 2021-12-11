import { TvShowStore } from "app/tvShow/store";
import React from "react";
import { RootStoreContext } from "./context";

interface Props {
  children: React.ReactNode;
}

export const RootStoreProvider: React.FC<Props> = ({ children }) => {
  const tvShowStore = new TvShowStore();

  return (
    <RootStoreContext.Provider value={{ tvShowStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};
