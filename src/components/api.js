import axios from 'axios';

// Fetch historical COVID-19 data for a given country
export const fetchCountryData = async (countryCode) => {
  try {
    const url = `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=1500`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// Fetch list of countries for the dropdown
export const fetchCountries = async () => {
  try {
    const url = 'https://restcountries.com/v3.1/all';
    const response = await axios.get(url);
    return (response.data.length > 0 && response.data.map(country => ({
      name: country.name.common,
      code: country.cca2.toLowerCase()  // Ensuring the code is in lowercase as expected by the historical data API
    })));
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
