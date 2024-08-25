import {
  extendTheme,
  StyleFunctionProps,
  ThemeConfig,
  useColorModeValue,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import "@openfonts/dynalight_latin";
import "@openfonts/dynalight_latin-ext";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#fff", "#121212")(props),
      },
    }),
  },
  semanticTokens: {
    colors: {
      // primaryColor: "#79A141",
      // secondryColor: "#FEFEFE",
      // cartsColor: "#F5F3F4",
      // textColor: "#464646",
      white: { _light: "#fff", _dark: "#121212" },
      primaryColor: { _light: "#79A141", _dark: "#556938" },
      cartsColor: { _light: "#F5F3F4", _dark: "#262425" },
      textColor: { _light: "#464646", _dark: "#d7d7d7" },
    },
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
