import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";

const theme = extendTheme({
  fonts: {
    heading: `'roboto','open-sans'`,
    body: `'roboto','open-sans'`,
  },
});

export default theme;