import { ThemeProvider } from "styled-components";
import lightTheme, { ThemeProps } from "../../themes/light";
import { createGlobalStyle } from "styled-components";
import { Box } from "../Box";
import { Nav } from "../Nav";
import { Radio } from "../Radio";
import { Section } from "../Section";
import { Type } from "../Type";
import { ReactComponent as MyDetailsSvg } from "../../images/details.svg";
import { ReactComponent as ProfileSvg } from "../../images/profile.svg";
import { ReactComponent as PasswordSvg } from "../../images/password.svg";
import { ReactComponent as PlanSvg } from "../../images/plan.svg";
import { ReactComponent as BillingSvg } from "../../images/billing.svg";
import { Grid } from "../Grid";
import { Form } from "../Form";
import { Textfield } from "../Textfield";
import { Button } from "../Button";

const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
  body {
    background-color: ${(props) => props.theme.colors.page};
    font-family: ${(props) => props.theme.typography.fontFamily};
    margin: 0;
  }

  h1, h2 {
    color: ${(props) => props.theme.colors.headings};
  }

  p {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Section>
      <Section.Item verticalSpacing="xl">
        <Grid>
          <Grid.Col span={10} offset={1}>
            <Type size="xl" weight="bold" as="h1">
              Welcome to this form
            </Type>
            <Type>
              Please answer all the questions below before submitting.
            </Type>
          </Grid.Col>
        </Grid>
      </Section.Item>
      <Section.Item>
        <Grid columns={12}>
          <Grid.Col span={10} offset={1}>
            <Grid columns={10}>
              <Grid.Col span={3}>
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
              </Grid.Col>
              <Grid.Col span={7}>
                <Box rounded>
                  <Grid columns={7}>
                    <Grid.Col span={5} offset={1}>
                      <Form>
                        <Section>
                          <Section.Item verticalSpacing="xxl">
                            <Type size="lg" weight="bold" as="h2">
                              My Details
                            </Type>
                          </Section.Item>
                          <Section.Item>
                            <Form.Item
                              label="First name"
                              render={(props) => <Textfield {...props} />}
                            />
                            <Form.Item
                              label="Last name"
                              render={(props) => <Textfield {...props} />}
                            />
                            <Form.Item
                              label="Country of residence"
                              render={(props) => <Textfield {...props} />}
                            />
                            <Form.Item
                              label="City of residence"
                              render={(props) => <Textfield {...props} />}
                            />
                          </Section.Item>
                        </Section>
                        <Section>
                          <Section.Item verticalSpacing="xxl">
                            <Type size="lg" weight="bold" as="h2">
                              Profile
                            </Type>
                          </Section.Item>
                          <Section.Item bottomSpacing="xxl">
                            <Form.Item
                              label="Favourite cuisine"
                              render={(props) => (
                                <>
                                  <Radio
                                    label="French"
                                    id="french"
                                    name="cuisine"
                                  />
                                  <Radio
                                    label="Italian"
                                    id="italian"
                                    name="cuisine"
                                  />
                                  <Radio
                                    label="Chinese"
                                    id="chinese"
                                    name="cuisine"
                                  />
                                  <Radio
                                    label="Japanese"
                                    id="japanese"
                                    name="cuisine"
                                  />
                                </>
                              )}
                            />
                            <Form.Item
                              label="Email address"
                              render={(props) => <Textfield {...props} />}
                            />
                          </Section.Item>
                        </Section>
                        <Section>
                          <Section.Item bottomSpacing="xxl">
                            <Grid display="flex">
                              <Grid.Col>
                                <Button type="submit" variant="primary">
                                  Submit
                                </Button>
                              </Grid.Col>
                              <Grid.Col>
                                <Button type="submit">Cancel</Button>
                              </Grid.Col>
                            </Grid>
                          </Section.Item>
                        </Section>
                      </Form>
                    </Grid.Col>
                  </Grid>
                </Box>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Section.Item>
    </Section>
  </ThemeProvider>
);
