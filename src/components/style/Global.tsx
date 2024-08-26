import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color:  ${({ theme }) => theme.colors.background} !important;
  // color: ${({ theme }) => theme.colors.text} !important;
  font-family: monospace !important;
  overflow-x: hidden !important;
}


// theme buttons color

// theme buttons color
.light {
  background-color: ${theme.light.colors.sidebar};
}
.dark {
  background-color: ${theme.dark.colors.sidebar};
}
.blue {
  background-color: ${theme.blue.colors.sidebar};
}
.purple {
  background-color: ${theme.purple.colors.sidebar};
}



// active theme
.active{ff
  background:${({ theme }) => theme.colors.header};
  border-radius:10px;
    }

`;
