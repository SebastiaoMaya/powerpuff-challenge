import { Link, LinkProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import * as React from "react";
import {
  Link as ReactRouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

type TextLinkProps = LinkProps & RouterLinkProps;

const UnstyledLink = styled(Link)``;
UnstyledLink.defaultProps = {
  _hover: { textDecoration: "none" },
  _focus: { outline: "none" },
  display: "inline-block",
};

/**
 * This is to work around the `as` prop needing generics.
 * @see https://github.com/chakra-ui/chakra-ui/issues/148#issuecomment-540457308
 */
export const TextLink: React.FC<TextLinkProps> = (props: TextLinkProps) => {
  return <UnstyledLink {...({ as: ReactRouterLink } as any)} {...props} />;
};
