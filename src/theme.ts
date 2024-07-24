import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";

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
});

export default theme;
