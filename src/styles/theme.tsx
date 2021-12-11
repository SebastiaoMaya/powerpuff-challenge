//import { customIcons } from "./icons";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export const layoutSizes = {
  maxWidth: "1440px",
  navbarHeight: { sm: "70px", lg: "90px" },
  footerHeight: { sm: "110px", lg: "220px" },
  sideMenu: "300px",
};

const breakpoints = createBreakpoints({
  sm: "544px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
});

export const customColors = {
  greyBlue: "#2c2a41",
};

const overrides = {
  breakpoints,
  fontSizes: {
    xxs: "12px",
    xs: "14px",
    "2xs": "15px",
    sm: "16px",
    md: "18px",
    lg: "20px",
    xl: "24px",
    "2xl": "26px",
    "3xl": "28px",
    "4xl": "32px",
    "5xl": "36px",
    "6xl": "45px",
    "7xl": "48px",
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  colors: {
    ...customColors,
  },
  sizes: {
    ...layoutSizes,
  },
  space: {
    "7": "1.75rem",
    "9": "2.25rem",
    "13": "3.25rem",
    "18": "4.5rem",
  },
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints.sm})`,
    md: `@media screen and (min-width: ${breakpoints.md})`,
    lg: `@media screen and (min-width: ${breakpoints.lg})`,
    xl: `@media screen and (min-width: ${breakpoints.xl})`,
  },
  components: {
    Button: {
      variants: {
        primary: {
          backgroundColor: "black",
          _hover: { backgroundColor: "blackAlpha.700" },
          _focus: { backgroundColor: "blackAlpha.700" },
          color: "white",
        },
      },
    },
    Text: {
      variants: {
        "logo-text": {
          color: "white",
          fontWeight: "bold",
          fontSize: "xl",
          textTransform: "uppercase",
          py: 4,
        },
        "side-menu-nav": {
          color: "white",
          fontWeight: "bold",
          fontSize: "lg",
          textTransform: "uppercase",
          px: 2,
        },
        "side-menu-subnav": {
          color: "white",
          fontWeight: "bold",
          fontSize: "sm",
          textTransform: "uppercase",
        },
        "side-menu-user": {
          fontSize: "md",
          color: "white",
        },
        "side-menu-logout": {
          fontWeight: "bold",
          fontSize: "lg",
        },
      },
    },
  },
};

export const theme = extendTheme(overrides);
