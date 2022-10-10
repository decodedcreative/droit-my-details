import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "../../themes/light";

export const App = createGlobalStyle<{ theme: ThemeProps }>`
  body {
    background-color: ${(props) => props.theme.colors.page};
    font-family: ${(props) => props.theme.typography.fontFamily};
    margin: 0;
  }

  h1, h2, legend {
    color: ${(props) => props.theme.colors.headings};
  }

  p {
    color: ${(props) => props.theme.colors.text};
  }
`;
