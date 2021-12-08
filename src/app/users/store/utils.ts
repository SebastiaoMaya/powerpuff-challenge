import { useRootStoreContext } from "rootStore";

export const useIsUserLoggedIn = () => {
  const { userStore } = useRootStoreContext();

  return !!userStore.user;
};
