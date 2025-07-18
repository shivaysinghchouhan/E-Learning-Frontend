// src/api/axiosConfig.js
import axios from "axios";
import base_url from "./Bootapi"; // ✅ Base URL import करो

// ✅ Create Axios instance
const api = axios.create({
  baseURL: base_url,
});

// ✅ Add interceptor to attach JWT token in all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      //console.log("✅ JWT Token attached to request:", token);
      config.headers.Authorization = `Bearer ${token}`;
      console.log("✅ Authorization Header Set:", config.headers.Authorization);

    } else {
      console.warn("❌ No JWT Token found in localStorage!");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api; // ✅ Export global instance
