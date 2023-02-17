import axios from "axios";

const baseUrl = "https://api.adviceslip.com/";

export const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: { Accept: "/" },
});
