import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

// const breakpoints = createBreakpoints({
//   sm: '40em',
//   md: '52em',
//   lg: '64em',
//   xl: '80em',
// })

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  styles: {
    global: (props) => ({
      body: {
        background: mode("white", "black")(props),
      },
      html: {
        scrollBehavior: "smooth",
      },
    }),
  },
});

export default theme;
