import { UserStore } from "app/users/store/UserStore";
import React, { useContext } from "react";

interface StoreContextProps {
  userStore: UserStore;
}

export const RootStoreContext = React.createContext<StoreContextProps>(
  {} as StoreContextProps
);

export const useRootStoreContext = () => useContext(RootStoreContext);
