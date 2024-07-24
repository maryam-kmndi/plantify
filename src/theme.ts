import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";

const theme = extendTheme({
  fonts: {
    heading: `'roboto','open-sans'`,
    body: `'roboto','open-sans'`,
  },
  colors: {
    primaryColor: "#79A141",
    secondryColor: "#FEFEFE",
    cartsColor: "#F5F3F4",
    textColor: "#464646",
  },
});

export default theme;
