import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("tokenLogin")) {
      config.headers = {
        Authorization: `Bearer ` + localStorage.getItem("tokenLogin"),
      };
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
