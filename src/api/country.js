import axios from "axios";

const url = process.env.REACT_APP_API_URL + "/countries"

export const getCountries = () =>
  axios.get(url);
