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
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [countries, setCountries] = useState<[] | string[]>([]);
  const [cities, setCities] = useState<[] | string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const initialFormState = {
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    cuisine: "",
    email0: "",
    email1: "",
    email2: "",
    email3: "",
    email4: "",
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
              <Type size="xl" weight="bold" as="h1" lineHeight="xl">
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
                          onClick={(event) => {
                            setActiveNavItem(i);
                            event.preventDefault();
                          }}
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
                                render={(props) =>
                                  !formSubmitted ? (
                                    <Textfield
                                      name="firstName"
                                      onChange={onFormChange}
                                      {...props}
                                    />
                                  ) : (
                                    form.firstName
                                  )
                                }
                              />
                              <Form.Item
                                label="Last name"
                                render={(props) =>
                                  !formSubmitted ? (
                                    <Textfield
                                      name="lastName"
                                      onChange={onFormChange}
                                      {...props}
                                    />
                                  ) : (
                                    form.lastName
                                  )
                                }
                              />
                              <Form.Item
                                label="Country of residence"
                                render={(props) =>
                                  !formSubmitted ? (
                                    <Dropdown
                                      name="country"
                                      onChange={onFormChange}
                                      options={countries}
                                      {...props}
                                    />
                                  ) : (
                                    form.country
                                  )
                                }
                              />
                              <Form.Item
                                label="City of residence"
                                render={(props) =>
                                  !formSubmitted ? (
                                    <Dropdown
                                      disabled={form.country === ""}
                                      name="city"
                                      onChange={onFormChange}
                                      options={cities}
                                      {...props}
                                    />
                                  ) : (
                                    form.city
                                  )
                                }
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
                                render={(props) =>
                                  !formSubmitted ? (
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
                                  ) : (
                                    form.cuisine
                                  )
                                }
                              />
                            </Section.Item>
                            <Section.Item bottomSpacing="xl">
                              {Array.from(
                                new Array(numberOfEmailAddresses)
                              ).map((_, i) => (
                                <Form.Item
                                  label={`Email address ${i + 1}`}
                                  key={i}
                                  render={(props) =>
                                    !formSubmitted ? (
                                      <Textfield
                                        onChange={onFormChange}
                                        name={`email${i}`}
                                        {...props}
                                      />
                                    ) : (
                                      form[`email${i}` as keyof typeof form]
                                    )
                                  }
                                  suffix={
                                    i !== 0 && !formSubmitted ? (
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
                              {numberOfEmailAddresses < 5 && !formSubmitted && (
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
                                {!formSubmitted && (
                                  <Grid.Col>
                                    <Button
                                      type="submit"
                                      variant="primary"
                                      onClick={(event) => {
                                        setFormSubmitted(true);
                                        event.preventDefault();
                                      }}
                                    >
                                      Submit
                                    </Button>
                                  </Grid.Col>
                                )}
                                <Grid.Col>
                                  <Button
                                    type="button"
                                    onClick={(event) => {
                                      setForm(initialFormState);
                                      setFormSubmitted(false);
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
