import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const axiosInstance = applyCaseMiddleware(
  axios.create({
    baseURL: "https://swapi.dev/api/",
  })
);

export default axiosInstance;
