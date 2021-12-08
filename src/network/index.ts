import { default as Axios } from "axios";
import environment from "configurations";

// Create axios instances
const configuration = {
  baseURL: `${environment.api}`,
  headers: {
    "Content-Type": "application/json",
  },
};

export const axios = Axios.create(configuration);

export default axios;
