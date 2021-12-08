import { Icon } from "@chakra-ui/react";
import i18next from "i18next";
import React from "react";
import { ImFileVideo } from "react-icons/im";
import { HiHome } from "react-icons/hi";
import { Permission } from "../accessControl/constants";

export type NavItemProps = {
  title: string;
  itemId: string;
  disable?: boolean;
  elemBefore?: React.FC<unknown>;
  subNav?: NavItemProps[];
  requiredPermission?: Permission;
};

export type SideNavProps = {
  items: NavItemProps[];
  activeItemId: string;
  onSelect?: ({ itemId }: { itemId: string }) => void;
};

export const SIDEMENU_NAVIGATION: NavItemProps[] = [
  {
    title: i18next.t("shared:sidemenu.home"),
    itemId: "/powerpuff-challenge",
    elemBefore: () => <Icon as={HiHome} color="gray.600" />,
  },
  {
    title: i18next.t("shared:sidemenu.episodes.mainSection"),
    itemId: "episodesSection",
    elemBefore: () => <Icon as={ImFileVideo} color="gray.600" />,
    subNav: [
      {
        title: i18next.t("shared:sidemenu.episodes.list"),
        itemId: "/powerpuff-challenge/episodes-list",
      },
    ],
    requiredPermission: "episodes:read",
  },
];
