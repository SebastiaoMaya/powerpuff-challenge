/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AccessControl } from "../accessControl";
import { NavItemProps, SideNavProps } from "./constants";

const SideMenuNav: React.FC<SideNavProps> = ({
  activeItemId,
  onSelect,
  items,
}) => {
  const [activeSubNav, setActiveSubNav] = useState({
    expanded: true,
    selectedId: activeItemId,
  });

  function handleClick(itemId: string): void {
    if (onSelect) {
      onSelect({ itemId });
    }
  }

  function handleSubNavExpand(item: NavItemProps): void {
    if (activeSubNav.expanded) {
      const currentItemOrSubNavItemIsOpen: boolean =
        // either the parent item is expanded already
        item.itemId === activeSubNav.selectedId ||
        (item.subNav &&
          // or a subitem is active
          item.subNav.some(
            (_subNavItem) => _subNavItem.itemId === activeSubNav.selectedId
          )) ||
        false;

      setActiveSubNav({
        expanded: !currentItemOrSubNavItemIsOpen,
        selectedId: item.itemId,
      });
    } else {
      setActiveSubNav({
        expanded: true,
        selectedId: item.itemId,
      });
    }
  }

  return (
    <>
      {items.length > 0 && (
        <nav role="navigation" aria-label="side-navigation">
          {items.map((item) => {
            const ElemBefore = item.elemBefore;
            const isActiveTab: boolean =
              // item is expanded and
              activeSubNav.expanded &&
              // either the current expandable section is selected
              (item.itemId === activeSubNav.selectedId ||
                // or some item in the expandable section of the current item is selected or active
                (item.subNav &&
                  item.subNav.some(
                    (_subNavItem) =>
                      _subNavItem.itemId === activeSubNav.selectedId
                  )) ||
                false);

            return (
              <Flex
                key={item.itemId}
                flexDir="column"
                justifyContent="space-between">
                <AccessControl requiredPermission={item.requiredPermission}>
                  <Flex
                    flexDir="row"
                    alignItems="center"
                    onClick={(): void =>
                      item.subNav
                        ? handleSubNavExpand(item)
                        : handleClick(item.itemId)
                    }
                    _hover={{ cursor: "pointer" }}>
                    <Flex flexDir="row" alignItems="center">
                      {ElemBefore && <ElemBefore />}
                      <Text as="span" variant="side-menu-nav">
                        {item.title}
                      </Text>
                    </Flex>

                    {item.subNav &&
                      item.subNav.length > 0 &&
                      (isActiveTab ? (
                        <ChevronUpIcon boxSize="24px" color="white" />
                      ) : (
                        <ChevronDownIcon boxSize="24px" color="white" />
                      ))}
                  </Flex>

                  {item.subNav && isActiveTab && (
                    <Flex
                      key={item.itemId}
                      flexDir="column"
                      pl="10"
                      _hover={{ cursor: "pointer" }}>
                      {item.subNav.map((subNavItem) => {
                        return (
                          <Box
                            key={subNavItem.itemId}
                            onClick={(): void =>
                              handleClick(subNavItem.itemId)
                            }>
                            <Text variant="side-menu-subnav">
                              {subNavItem.title}
                            </Text>
                          </Box>
                        );
                      })}
                    </Flex>
                  )}
                </AccessControl>
              </Flex>
            );
          })}
        </nav>
      )}
    </>
  );
};

export default SideMenuNav;
