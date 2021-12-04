import { extendTheme } from "@chakra-ui/react";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const styles = {
  global: {
    body: {
      bg: "#FFFFFF",
      color: "#041A4B",
    },
  },
};

const colors = {
  primary: "#FF701F",
  secondary: "#041A4B",
  bg: "#FFF7F1",
  bgTransparent: "rgba(255, 112, 31, 0.7);",
  whiteTransparent: "rgba(255, 255, 255, 0.65);",
};

const theme = extendTheme({
  config,
  styles,
  colors,
  shadows: {
    main: "0 0 8px 4px rgba(255, 112, 31, 0.4)",
  },
});

export default theme;
