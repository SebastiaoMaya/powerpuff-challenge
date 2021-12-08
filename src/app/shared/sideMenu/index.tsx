import { Flex, Text } from "@chakra-ui/react";
import { UserLogout } from "app/users";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SIDEMENU_NAVIGATION } from "./constants";
import SideMenuNav from "./SideMenuNav";

export const SideMenu: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Flex width={"100%"} maxWidth={["sideMenu"]} flexDir="column">
      {/* LOGO */}
      <Text variant="logo-text">PowerPuff Girls</Text>
      {/* SUBMENU */}
      <Flex flexDir="column" justifyContent="space-between" height="100%">
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
