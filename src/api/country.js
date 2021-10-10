import axios from "axios";

export const getCountries = () =>
  axios.get("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries");
