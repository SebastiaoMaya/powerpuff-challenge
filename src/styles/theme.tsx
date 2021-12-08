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
  brandRed: {
    50: "#ffe5e5",
    100: "#fbb9ba",
    200: "#F17878",
    300: "#EB5757", //base
    400: "#e63333",
    500: "#cc1a19",
    600: "#a01313",
    700: "#730c0d",
    800: "#460506",
    900: "#1e0000",
  },
  darkRed: "#DA1818",

  brandGrey: "#455A64",
  lightestGrey: "#F2F2F2",
  lightGrey: "#F4F3F3",
  grey: "#E0E0E0",
  mdGrey: "#C4C4C4",
  darkGrey: "#455A64",
  darkestGrey: "#828282",

  lightestBlack: "#BDBDBD",
  lightBlack: "#3D3C3C",
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
    Text: {
      variants: {
        "logo-text": {
          color: "grey.600",
          fontWeight: "bold",
          fontSize: "xl",
          textTransform: "uppercase",
          py: 4,
        },
        "side-menu-nav": {
          color: "gray.600",
          fontWeight: "bold",
          fontSize: "lg",
          textTransform: "uppercase",
          px: 2,
        },
        "side-menu-subnav": {
          color: "gray.600",
          fontWeight: "bold",
          fontSize: "sm",
          textTransform: "uppercase",
        },
        "side-menu-user": {
          fontSize: "md",
          color: "gray.600",
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
