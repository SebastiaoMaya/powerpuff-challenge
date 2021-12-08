import { Flex, Text } from "@chakra-ui/react";
import { UserLogout } from "app/users";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SiteLogo } from "../siteLogo";
import { SIDEMENU_NAVIGATION } from "./constants";
import SideMenuNav from "./SideMenuNav";

export const SideMenu: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Flex width={"100%"} maxWidth={["sideMenu"]} flexDir="column">
      {/* LOGO */}
      <SiteLogo />
      {/* SUBMENU */}
      <Flex
        flexDir="column"
        justifyContent="space-between"
        height="100%"
        pt={4}>
        <SideMenuNav
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={SIDEMENU_NAVIGATION}
        />
        <UserLogout />
      </Flex>
    </Flex>
  );
};
