import { FormEvent, useEffect, useState } from "react";
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
  const [cities, setCities] = useState<[] | string[]>([]);
  const initialFormState = {
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    cuisine: "",
    email0: "",
  };
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    (async () => {
      const countries = await getCountries();
      const cities = await getCitiesByCountry(form.country);
      setCountries(countries);
      setCities(cities);
    })();
  }, [form]);

  const navigation = [
    {
      title: "My details",
      icon: <MyDetailsSvg />,
      introHeading: "Welcome to this form",
      introPara: "Please answer all the questions below before submitting.",
    },
    {
      title: "Profile",
      icon: <ProfileSvg />,
      introHeading: "Welcome to Profile",
      introPara: "Please answer all the questions below before submitting.",
    },
    {
      title: "Password",
      icon: <PasswordSvg />,
      introHeading: "Welcome to Password",
      introPara: "Please answer all the questions below before submitting.",
    },
    {
      title: "Plan",
      icon: <PlanSvg />,
      introHeading: "Welcome to Plan",
      introPara: "Please answer all the questions below before submitting.",
    },
    {
      title: "Billing",
      icon: <BillingSvg />,
      introHeading: "Welcome to Billing",
      introPara: "Please answer all the questions below before submitting.",
    },
  ];

  const onFormChange = (
    event: FormEvent | null,
    formObj?: { name: string; value: string }
  ) => {
    let name = null;
    let value = null;

    if (event !== null) {
      name = (event.target as HTMLInputElement).name;
      value = (event.target as HTMLInputElement).value;
    }
    if (formObj) {
      name = Object.entries(formObj)[0][0];
      value = Object.entries(formObj)[0][1];
    }

    if (name !== null && value !== null) {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <S.App />
      <Section>
        <Section.Item verticalSpacing="xl">
          <Grid columns={12}>
            <Grid.Col span={10} offset={1}>
              <Type size="xl" weight="bold" as="h1">
                {navigation[activeNavItem].introHeading}
              </Type>
              <Type>{navigation[activeNavItem].introPara}</Type>
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
                                  <Textfield
                                    name="firstName"
                                    onChange={onFormChange}
                                    {...props}
                                  />
                                )}
                              />
                              <Form.Item
                                label="Last name"
                                render={(props) => (
                                  <Textfield
                                    name="lastName"
                                    onChange={onFormChange}
                                    {...props}
                                  />
                                )}
                              />
                              <Form.Item
                                label="Country of residence"
                                render={(props) => (
                                  <Dropdown
                                    name="country"
                                    onChange={onFormChange}
                                    options={countries}
                                    {...props}
                                  />
                                )}
                              />
                              <Form.Item
                                label="City of residence"
                                render={(props) => (
                                  <Dropdown
                                    disabled={form.country === ""}
                                    name="city"
                                    onChange={onFormChange}
                                    options={cities}
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
                                    <Radio
                                      label="French"
                                      name="cuisine"
                                      onChange={onFormChange}
                                      value="French"
                                    />
                                    <Radio
                                      label="Italian"
                                      name="cuisine"
                                      onChange={onFormChange}
                                      value="Italian"
                                    />
                                    <Radio
                                      label="Chinese"
                                      name="cuisine"
                                      onChange={onFormChange}
                                      value="Chinese"
                                    />
                                    <Radio
                                      label="Japanese"
                                      name="cuisine"
                                      onChange={onFormChange}
                                      value="Japanese"
                                    />
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
                                    <Textfield
                                      onChange={onFormChange}
                                      name={`email${i}`}
                                      {...props}
                                    />
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
                                  <Button
                                    type="button"
                                    onClick={(event) => {
                                      setForm(initialFormState);
                                      event.preventDefault();
                                    }}
                                  >
                                    Cancel
                                  </Button>
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
