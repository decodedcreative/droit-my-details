import { ThemeProvider } from "styled-components";
import lightTheme, { ThemeProps } from "../../themes/light";
import { createGlobalStyle } from "styled-components";
import { Type } from "../Type";

const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
  body {
    background-color: ${(props) => props.theme.colors.page};
    font-family: ${(props) => props.theme.typography.fontFamily};
    margin: 0;
  }
`;

export const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Type size="xl" weight="bold" as="h1">
      Welcome to this form
    </Type>
  </ThemeProvider>
);

export default App;
