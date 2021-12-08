import { UserStore } from "app/users/store";
import React from "react";
import { RootStoreContext } from "./context";

interface Props {
  children: React.ReactNode;
}

export const RootStoreProvider: React.FC<Props> = ({ children }) => {
  const userStore = new UserStore();

  return (
    <RootStoreContext.Provider value={{ userStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};
