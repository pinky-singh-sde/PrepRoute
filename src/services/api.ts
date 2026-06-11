import axios from "axios";
import { getToken } from "../utils/token";

export const api = axios.create({
  // baseURL:
  //   "https://admin-moderator-backend-staging.up.railway.app/api",
  baseURL: "/api",

  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (
      error.response?.status === 401
    ) {
      localStorage.removeItem(
        "preproute_token"
      );

      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);