import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./App.styles";
import lightTheme from "../../themes/light";
import { getCountries, getCitiesByCountry } from "../../api";
import {
  Box,
  Button,
  Dropdown,
  Form,
  Grid,
  Nav,
  Radio,
  Section,
  Textfield,
  Type,
} from "../";
import {
  MyDetailsSvg,
  ProfileSvg,
  PasswordSvg,
  PlanSvg,
  BillingSvg,
  PlusSvg,
  DeleteSvg,
} from "../../images";

export const App = () => {
  const [numberOfEmailAddresses, setNumberOfEmailAddresses] = useState(1);
  const [activeNavItem] = useState(0);
  const [countries, setCountries] = useState<[] | string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [cities, setCities] = useState<[] | string[]>([]);
  const cityDropdownRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    (async () => {
      const countries = await getCountries();
      const cities = await getCitiesByCountry(selectedCountry);
      setCountries(countries);
      setCities(cities);
    })();
  }, [selectedCountry]);

  const navigation = [
    {
      title: "My details",
      icon: <MyDetailsSvg />,
    },
    {
      title: "Profile",
      icon: <ProfileSvg />,
    },
    {
      title: "Password",
      icon: <PasswordSvg />,
    },
    {
      title: "Plan",
      icon: <PlanSvg />,
    },
    {
      title: "Billing",
      icon: <BillingSvg />,
    },
  ];

  return (
    <ThemeProvider theme={lightTheme}>
      <S.App />
      <Section>
        <Section.Item verticalSpacing="xl">
          <Grid columns={12}>
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
                      {navigation.map((navObj, i) => (
                        <Nav.Item
                          icon={navObj.icon}
                          active={i === activeNavItem}
                          key={i}
                        >
                          {navObj.title}
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Box>
                </Grid.Col>
                <Grid.Col span={7}>
                  <Box rounded verticalSpacing="xxl">
                    <Grid columns={7}>
                      <Grid.Col span={5} offset={1}>
                        <Form>
                          <Section as="fieldset" border="bottom">
                            <Section.Item bottomSpacing="xl">
                              <Type size="lg" weight="bold" as="legend">
                                My Details
                              </Type>
                            </Section.Item>
                            <Section.Item columns={2}>
                              <Form.Item
                                label="First name"
                                render={(props) => (
                                  <Textfield name="firstName" {...props} />
                                )}
                              />
                              <Form.Item
                                label="Last name"
                                render={(props) => (
                                  <Textfield name="lastName" {...props} />
                                )}
                              />
                              <Form.Item
                                label="Country of residence"
                                render={(props) => (
                                  <Dropdown
                                    onChangeMethod={setSelectedCountry}
                                    onChangeNext={setCities}
                                    options={countries}
                                    {...props}
                                  />
                                )}
                              />
                              <Form.Item
                                label="City of residence"
                                render={(props) => (
                                  <Dropdown
                                    disabled={selectedCountry === ""}
                                    onChangeMethod={setCities}
                                    options={cities}
                                    ref={cityDropdownRef}
                                    {...props}
                                  />
                                )}
                              />
                            </Section.Item>
                          </Section>
                          <Section as="fieldset" border="bottom">
                            <Section.Item verticalSpacing="xl">
                              <Type size="lg" weight="bold" as="legend">
                                Profile
                              </Type>
                            </Section.Item>
                            <Section.Item>
                              <Form.Item
                                label="Favourite cuisine"
                                role="radiogroup"
                                render={(props) => (
                                  <>
                                    <Radio label="French" name="cuisine" />
                                    <Radio label="Italian" name="cuisine" />
                                    <Radio label="Chinese" name="cuisine" />
                                    <Radio label="Japanese" name="cuisine" />
                                  </>
                                )}
                              />
                            </Section.Item>
                            <Section.Item bottomSpacing="xl">
                              {Array.from(
                                new Array(numberOfEmailAddresses)
                              ).map((_, i) => (
                                <Form.Item
                                  label="Email address"
                                  key={i}
                                  render={(props) => (
                                    <Textfield name={`email${i}`} {...props} />
                                  )}
                                  suffix={
                                    i !== 0 ? (
                                      <Button
                                        size="small"
                                        variant="link"
                                        media={<DeleteSvg />}
                                        onClick={(event) => {
                                          setNumberOfEmailAddresses(
                                            numberOfEmailAddresses - 1
                                          );
                                          event.preventDefault();
                                        }}
                                      >
                                        Remove email
                                      </Button>
                                    ) : (
                                      true
                                    )
                                  }
                                />
                              ))}
                              {numberOfEmailAddresses < 5 && (
                                <Button
                                  size="small"
                                  media={<PlusSvg />}
                                  onClick={(event) => {
                                    setNumberOfEmailAddresses(
                                      numberOfEmailAddresses + 1
                                    );
                                    event.preventDefault();
                                  }}
                                >
                                  Add another
                                </Button>
                              )}
                            </Section.Item>
                          </Section>
                          <Section>
                            <Section.Item topSpacing="xl">
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
};
