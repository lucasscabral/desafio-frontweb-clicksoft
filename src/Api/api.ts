import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.API_URL_BASE,
});

export default api;
