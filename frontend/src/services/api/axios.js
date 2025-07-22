
import axios from 'axios';

const token = sessionStorage.getItem('token');

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }, // Your Express server
  withCredentials: true // For cookies
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  try {
    const userData = localStorage.getItem('user');
    // Check for problematic strings before parsing
    if (userData && userData !== "undefined" && userData !== "null") {
      const user = JSON.parse(userData);
      if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }
  } catch (error) {
    console.error("Error parsing user data:", error);
    // Clear invalid data
    localStorage.removeItem('user');
  }
  return config;
});



export default api;