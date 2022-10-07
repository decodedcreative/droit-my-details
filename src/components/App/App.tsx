import { ThemeProvider } from "styled-components";
import lightTheme, { ThemeProps } from "../../themes/light";
import { createGlobalStyle } from "styled-components";
import { Type } from "../Type";
import { Box } from "../Box";
import { Nav } from "../Nav";
import { ReactComponent as MyDetailsSvg } from "../../images/details.svg";
import { ReactComponent as ProfileSvg } from "../../images/profile.svg";
import { ReactComponent as PasswordSvg } from "../../images/password.svg";
import { ReactComponent as PlanSvg } from "../../images/plan.svg";
import { ReactComponent as BillingSvg } from "../../images/billing.svg";

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
    <Box rounded>
      <Nav>
        <Nav.Item active icon={<MyDetailsSvg />}>
          My details
        </Nav.Item>
        <Nav.Item icon={<ProfileSvg />}>Profile</Nav.Item>
        <Nav.Item icon={<PasswordSvg />}>Password</Nav.Item>
        <Nav.Item icon={<PlanSvg />}>Plan</Nav.Item>
        <Nav.Item icon={<BillingSvg />}>Billing</Nav.Item>
      </Nav>
    </Box>
  </ThemeProvider>
);

export default App;
