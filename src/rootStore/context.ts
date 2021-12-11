import { TvShowStore } from "app/tvShow/store/TvShowStore";
import React, { useContext } from "react";

interface StoreContextProps {
  tvShowStore: TvShowStore;
}

export const RootStoreContext = React.createContext<StoreContextProps>(
  {} as StoreContextProps
);

export const useRootStoreContext = () => useContext(RootStoreContext);
