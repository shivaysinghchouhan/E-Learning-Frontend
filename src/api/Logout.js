// api/Logout.js
import api from "./axiosConfig";

const logout = async () => {
  try {
    await api.post("/auth/logout");  // backend logout API endpoint
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Logout API error:", error);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};

export default logout;
