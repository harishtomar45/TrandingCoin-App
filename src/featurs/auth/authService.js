import axios from "axios";

// const API_URL = "/api/user"

const register = async (userData) => {
  const response = await axios.post("https://authentication-2-qgze.onrender.com/api/user/register", userData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
}

const login = async (userData) => {
  const response = await axios.post("https://authentication-2-qgze.onrender.com/api/user/login", userData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
}

const authService = {
  register,
  login,
};

export default authService;

