import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import "@openfonts/dynalight_latin";
import "@openfonts/dynalight_latin-ext";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    primaryColor: "#79A141",
    secondryColor: "#FEFEFE",
    cartsColor: "#F5F3F4",
    textColor: "#464646",
  },
  fonts: {
    heading: `'roboto','open-sans'`,
    body: `'roboto','open-sans'`,
  },
  breakpoints: {
    base: "0em",
    xs: "320px",
    sm: "425px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
  },
});

export default theme;
