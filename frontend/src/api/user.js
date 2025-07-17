import axios from "axios";
import { API_BASE_URL } from "../config";

const API = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  withCredentials:true, 
})

// login API
export const login = (email , password) => {API.post('/login' , {email , password})};

// Register API (admin only)
export const register = (userData , token) => API.post('/register' , userData , {
  headers:{ Authorization:`Bearer ${token}`},
})
export const getMe = (token) => 
  API.get("/me", { headers: { Authorization: `Bearer ${token}` } });