import { ImageProps, Image } from "@chakra-ui/react";
import React from "react";
import { ButtonLink } from "../buttonLink";
import logo from "./static/logo.svg";

export const SiteLogo: React.FC<ImageProps> = ({ width, ...rest }) => (
  <ButtonLink
    to="/"
    variant="unstyled"
    width={width ?? ["150px"]}
    _focus={{ textDecoration: "none" }}>
    <Image
      height="100%"
      width="100%"
      src={logo}
      alt="site-logo"
      {...(rest as any)}
    />
  </ButtonLink>
);
