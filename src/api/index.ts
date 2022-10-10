import axios from "axios";

export const getCountries = async () => {
  try {
    const url = "api/countries";
    const response = await axios.get<{ countries: string[] }>(url);
    return response.data.countries;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getCitiesByCountry = async (country: string) => {
  try {
    const url = `http://localhost:8090/api/cities?country-name=${country}`;
    const response = await axios.get<{ cities: string[] }>(url);
    return response.data.cities;
  } catch (err) {
    console.log(err);
    return [];
  }
};
